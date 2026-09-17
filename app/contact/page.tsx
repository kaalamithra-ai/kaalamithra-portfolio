import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import NetworkBackground from "@/components/NetworkBackground";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_MAPS_URL,
  CONTACT_PHONES,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us — Start a Project | ${COMPANY_NAME}`,
  description:
    "Have an idea? Let's build it. Talk to KAALAMITHRA about startups, automation, AI, cloud, e-commerce and business growth systems.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-24">
        <NetworkBackground tone="dark" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Have an idea? <span className="text-gradient">Let's build it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Whether you're launching a startup, automating your business or
              scaling your digital presence, KAALAMITHRA can help turn your idea
              into an actionable technology solution.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="#contact-form" variant="onDark" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="outlineOnDark" size="lg">
                Talk to Our Team
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 py-20 sm:py-24" aria-label="Contact form">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-ink">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fields marked * are required. We reply within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-brand-ink">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold hover:text-brand-blue">
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <span className="flex flex-col gap-1">
                      {CONTACT_PHONES.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="font-semibold hover:text-brand-blue"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <a
                      href={CONTACT_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-blue"
                    >
                      {CONTACT_LOCATION}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <span>Mon – Sat, 9:00 – 19:00 IST</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-surface p-7">
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-brand-ink">
                  What happens next
                </h3>
                <ol className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-brand-blue">
                      1
                    </span>
                    We review your enquiry and schedule a discovery call.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-brand-blue">
                      2
                    </span>
                    We map your goals, constraints and the fastest path to value.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-brand-blue">
                      3
                    </span>
                    You receive a clear proposal with scope, timeline and investment.
                  </li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
