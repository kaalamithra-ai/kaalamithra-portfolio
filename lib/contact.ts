/**
 * Shared contact-enquiry helpers.
 *
 * Used by BOTH the client form (`components/ContactForm.tsx`) and the API
 * route (`app/api/contact/route.ts`), so validation never drifts apart.
 * Keep this file dependency-free and browser-safe (no `node:` imports).
 */

/** Raw fields sent by the contact form. */
export interface ContactEnquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
  /**
   * Honeypot field — hidden from real visitors, so it must stay empty.
   * Anything here means the submission came from a bot.
   */
  website: string;
}

/** Per-field maximum lengths, enforced on the server. */
export const ENQUIRY_FIELD_LIMITS: Record<keyof ContactEnquiry, number> = {
  name: 120,
  company: 160,
  email: 200,
  phone: 40,
  service: 80,
  budget: 80,
  description: 5000,
  website: 200,
};

export type EnquiryFieldErrors = Partial<Record<keyof ContactEnquiry, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Reads one field from unknown input and trims it to a plain string. */
function readField(input: Record<string, unknown>, key: keyof ContactEnquiry): string {
  const value = input[key];
  return typeof value === "string" ? value.trim() : "";
}

/** Normalises untrusted input (request body) into a well-typed enquiry. */
export function normalizeEnquiry(input: unknown): ContactEnquiry {
  const record =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  return {
    name: readField(record, "name"),
    company: readField(record, "company"),
    email: readField(record, "email"),
    phone: readField(record, "phone"),
    service: readField(record, "service"),
    budget: readField(record, "budget"),
    description: readField(record, "description"),
    website: readField(record, "website"),
  };
}

/** Validates a normalised enquiry. Returns an empty object when valid. */
export function validateEnquiry(enquiry: ContactEnquiry): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  if (!enquiry.name) {
    errors.name = "Please enter your name.";
  }

  if (!enquiry.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(enquiry.email)) {
    errors.email = "Please enter a valid email address.";
  } else if (enquiry.email.length > ENQUIRY_FIELD_LIMITS.email) {
    errors.email = "That email address is too long.";
  }

  if (!enquiry.description) {
    errors.description = "Please tell us briefly about your project.";
  } else if (enquiry.description.length > ENQUIRY_FIELD_LIMITS.description) {
    errors.description = `Please keep this under ${ENQUIRY_FIELD_LIMITS.description} characters.`;
  }

  if (enquiry.name.length > ENQUIRY_FIELD_LIMITS.name) {
    errors.name = "That name is too long.";
  }
  if (enquiry.company.length > ENQUIRY_FIELD_LIMITS.company) {
    errors.company = "That company name is too long.";
  }
  if (enquiry.phone.length > ENQUIRY_FIELD_LIMITS.phone) {
    errors.phone = "That phone number is too long.";
  }

  return errors;
}

/** True when the honeypot was filled in (i.e. an automated submission). */
export function isSpam(enquiry: ContactEnquiry): boolean {
  return enquiry.website.length > 0;
}

const NOT_PROVIDED = "—";

/** Email subject line for a new enquiry. */
export function enquirySubject(enquiry: ContactEnquiry): string {
  const who = enquiry.company ? `${enquiry.name} (${enquiry.company})` : enquiry.name;
  return `New project enquiry — ${who}`;
}

/** Plain-text email body. */
export function enquiryText(enquiry: ContactEnquiry): string {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Company", enquiry.company || NOT_PROVIDED],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || NOT_PROVIDED],
    ["Service", enquiry.service || NOT_PROVIDED],
    ["Budget", enquiry.budget || NOT_PROVIDED],
  ];

  const lines = rows.map(([label, value]) => `${label}: ${value}`);
  lines.push("", "Project description:", enquiry.description);

  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** HTML email body (inline styles only — email clients ignore <style> often). */
export function enquiryHtml(enquiry: ContactEnquiry): string {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Company", enquiry.company || NOT_PROVIDED],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || NOT_PROVIDED],
    ["Service", enquiry.service || NOT_PROVIDED],
    ["Budget", enquiry.budget || NOT_PROVIDED],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:600;color:#334155;vertical-align:top">${escapeHtml(
          label
        )}</td><td style="padding:6px 0;color:#0f172a">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:14px;color:#0f172a">
  <h2 style="margin:0 0 16px;font-size:18px">New project enquiry</h2>
  <table style="border-collapse:collapse">${tableRows}</table>
  <h3 style="margin:24px 0 8px;font-size:14px">Project description</h3>
  <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(
    enquiry.description
  )}</p>
</div>`;
}
