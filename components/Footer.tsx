import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { SERVICES } from "@/data/services";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_MAPS_URL,
  CONTACT_PHONES,
  TAGLINE,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-16 w-auto rounded-xl" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A complete AI, technology and business growth partner. We help
              businesses innovate, automate, grow and scale.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              {TAGLINE}
            </p>
          </div>

          <nav aria-label="Explore">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  {CONTACT_PHONES.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-white">
                      {phone.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <a
                  href={CONTACT_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {CONTACT_LOCATION}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="font-semibold tracking-widest">{TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
