import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { CONTACT_EMAIL } from "@/lib/site";
import {
  enquiryHtml,
  enquirySubject,
  enquiryText,
  isSpam,
  normalizeEnquiry,
  validateEnquiry,
  type ContactEnquiry,
} from "@/lib/contact";

/**
 * Contact form endpoint.
 *
 * The browser posts JSON here (`components/ContactForm.tsx`) and this route
 * delivers the enquiry to the team. Delivery is configured with environment
 * variables (see `.env.example` / README) and runs in this order:
 *
 *   1. `RESEND_API_KEY`      → email via Resend (recommended)
 *   2. `CONTACT_WEBHOOK_URL` → POST the enquiry to any webhook
 *                              (Formspree, Zapier, Make, Google Apps Script…)
 *   3. Neither set           → the enquiry is written to
 *                              `.data/contact-enquiries.jsonl` and logged, so
 *                              nothing is ever silently lost in development.
 *
 * A local JSONL backup is kept for every submission unless
 * `CONTACT_FILE_BACKUP=false`. On serverless hosts (e.g. Vercel) the
 * filesystem is ephemeral, so configure option 1 or 2 before going live.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
const SENDER =
  process.env.CONTACT_FROM_EMAIL ||
  "KAALAMITHRA Website <onboarding@resend.dev>";
const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;
const FILE_BACKUP = process.env.CONTACT_FILE_BACKUP !== "false";

/** Simple in-memory throttle: max 5 submissions per IP per 10 minutes. */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (hits.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(ip, hits);
    return true;
  }

  hits.push(now);
  recentSubmissions.set(ip, hits);
  return false;
}

/** Appends the enquiry to a JSONL file so it survives in local/hosted runs. */
async function saveToFile(enquiry: ContactEnquiry): Promise<void> {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "contact-enquiries.jsonl"),
    `${JSON.stringify({ receivedAt: new Date().toISOString(), ...enquiry })}\n`,
    "utf8"
  );
}

/** Sends the enquiry as an email through the Resend REST API. */
async function sendViaResend(enquiry: ContactEnquiry): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: SENDER,
      to: [RECIPIENT],
      reply_to: enquiry.email,
      subject: enquirySubject(enquiry),
      text: enquiryText(enquiry),
      html: enquiryHtml(enquiry),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Resend responded ${response.status}${detail ? `: ${detail}` : ""}`
    );
  }
}

/** Forwards the enquiry to a generic webhook endpoint. */
async function sendViaWebhook(enquiry: ContactEnquiry): Promise<void> {
  const response = await fetch(WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      source: "kaalamithra-website",
      subject: enquirySubject(enquiry),
      submittedAt: new Date().toISOString(),
      ...enquiry,
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }
}

/** Delivers the enquiry to whichever channel is configured. */
async function deliver(enquiry: ContactEnquiry): Promise<void> {
  if (process.env.RESEND_API_KEY) {
    await sendViaResend(enquiry);
    return;
  }

  if (WEBHOOK_URL) {
    await sendViaWebhook(enquiry);
    return;
  }

  // No provider configured yet — keep the enquiry so it is never lost.
  console.warn(
    "[contact] No RESEND_API_KEY or CONTACT_WEBHOOK_URL configured. " +
      "Enquiry stored in .data/contact-enquiries.jsonl only. " +
      "See README → Connecting the contact form."
  );
  console.info("[contact] New enquiry:\n" + enquiryText(enquiry));
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many enquiries from this connection. Please try again shortly or email us directly.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const enquiry = normalizeEnquiry(body);

  // Bots fill the hidden honeypot field. Pretend success, deliver nothing.
  if (isSpam(enquiry)) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", errors },
      { status: 400 }
    );
  }

  if (FILE_BACKUP && !process.env.VERCEL) {
    try {
      await saveToFile(enquiry);
    } catch (error) {
      console.error("[contact] Could not write local backup:", error);
    }
  }

  try {
    await deliver(enquiry);
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn't send your enquiry right now. Please email us at ${RECIPIENT}.`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed. Submit the contact form instead." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

