"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { SERVICES } from "@/data/services";
import { CONTACT_EMAIL } from "@/lib/site";
import type { EnquiryFieldErrors } from "@/lib/contact";

const BUDGET_RANGES = [
  "Under ₹1 Lakh",
  "₹1 – 5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 50 Lakh",
  "₹50 Lakh+",
  "Not sure yet",
];

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

/** Highlight applied to a field the server rejected. */
const inputErrorCls = "border-red-400 focus:border-red-500 focus:ring-red-200";

/** Inline validation message shown under a field. */
function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-1.5 text-xs font-semibold text-red-600">
      {message}
    </p>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Project enquiry form.
 *
 * Submits to the API route `app/api/contact/route.ts`, which delivers the
 * enquiry to the team (Resend email, webhook or local backup — see README).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<EnquiryFieldErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const payload = {
      name: text("name"),
      company: text("company"),
      email: text("email"),
      phone: text("phone"),
      service: text("service"),
      budget: text("budget"),
      description: text("description"),
      website: text("website"), // honeypot — hidden from real visitors
    };

    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        errors?: EnquiryFieldErrors;
      } | null;

      if (!response.ok || !result || result.ok !== true) {
        setFieldErrors(result?.errors ?? {});
        setErrorMessage(
          result?.error ??
            `Something went wrong. Please email us at ${CONTACT_EMAIL}.`
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(
        `We couldn't reach the server. Please check your connection or email us at ${CONTACT_EMAIL}.`
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">
          Thank you — we've received your enquiry.
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      noValidate={false}
    >
      {status === "error" && errorMessage ? (
        <div
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 sm:col-span-2"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
          <p className="text-sm text-red-700">
            {errorMessage}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold underline decoration-red-400 underline-offset-2"
            >
              Email us directly
            </a>
          </p>
        </div>
      ) : null}

      {/* Honeypot — hidden from visitors; bots fill it in and are dropped. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className={`${inputCls} ${fieldErrors.name ? inputErrorCls : ""}`}
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
        <FieldError id="name-error" message={fieldErrors.name} />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Company
        </label>
        <input
          id="company"
          name="company"
          placeholder="Company name"
          className={`${inputCls} ${fieldErrors.company ? inputErrorCls : ""}`}
          aria-invalid={fieldErrors.company ? true : undefined}
          aria-describedby={fieldErrors.company ? "company-error" : undefined}
        />
        <FieldError id="company-error" message={fieldErrors.company} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={`${inputCls} ${fieldErrors.email ? inputErrorCls : ""}`}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
        />
        <FieldError id="email-error" message={fieldErrors.email} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 …"
          className={`${inputCls} ${fieldErrors.phone ? inputErrorCls : ""}`}
          aria-invalid={fieldErrors.phone ? true : undefined}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
        />
        <FieldError id="phone-error" message={fieldErrors.phone} />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Service Interested In
        </label>
        <select id="service" name="service" className={inputCls} defaultValue="">
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.number}. {s.name}
            </option>
          ))}
          <option value="multiple">Multiple / Not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Budget Range
        </label>
        <select id="budget" name="budget" className={inputCls} defaultValue="">
          <option value="">Select a range</option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="description" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Tell us about your idea, problem or goals…"
          className={`${inputCls} ${fieldErrors.description ? inputErrorCls : ""}`}
          aria-invalid={fieldErrors.description ? true : undefined}
          aria-describedby={fieldErrors.description ? "description-error" : undefined}
        />
        <FieldError id="description-error" message={fieldErrors.description} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-card sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Enquiry
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Your enquiry goes straight to our team at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold hover:text-brand-blue">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
