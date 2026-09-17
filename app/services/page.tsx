import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SideRail, { type SideRailItem } from "@/components/SideRail";
import SectionHeading from "@/components/SectionHeading";
import ServiceArt from "@/components/ServiceArt";
import CTASection from "@/components/CTASection";
import NetworkBackground from "@/components/NetworkBackground";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import { COMPANY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our 11 Services | ${COMPANY_NAME}`,
  description:
    "Lead generation, performance marketing, AI & automation, MVP development, CRM, cloud & DevOps, e-commerce, branding, sales funnels, analytics and cyber security.",
};

const RAIL_ITEMS: SideRailItem[] = SERVICES.map((service) => ({
  id: `svc-${service.slug}`,
  label: service.name,
  icon: service.icon,
}));

export default function ServicesPage() {
  return (
    <>
      <SideRail items={RAIL_ITEMS} />

      <div className="[padding-left:var(--km-rail-w)]">
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
          <NetworkBackground tone="light" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <SectionHeading
              eyebrow="Our Services"
              title="11 Powerful Services. One Complete Growth Partner."
              description="Smart solutions, real results. Use the side rail or scroll to explore each service — its sub-services, technologies, process and related projects."
            />
          </div>
        </section>

        <div aria-label="All services">
          {SERVICES.map((service, index) => (
            <section
              key={service.slug}
              id={`svc-${service.slug}`}
              aria-label={service.name}
              className={`scroll-mt-28 py-16 sm:py-20 ${
                index > 0 ? "border-t border-slate-200/70 dark:border-white/5" : ""
              }`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left: identity + summary */}
                    <div>
                      <div className="flex items-center gap-5">
                        <ServiceArt service={service} size="lg" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue dark:text-brand-cyan">
                            Service {service.number}
                          </p>
                          <h2 className="mt-1 font-display text-2xl font-bold text-brand-ink dark:text-white sm:text-3xl">
                            {service.name}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
                        {service.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.subServices.slice(0, 6).map((sub) => (
                          <span
                            key={sub}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                          >
                            {sub}
                          </span>
                        ))}
                        {service.subServices.length > 6 && (
                          <span className="rounded-full border border-brand-blue/30 bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-deep dark:border-brand-cyan/30 dark:bg-brand-cyan/10 dark:text-brand-cyan">
                            +{service.subServices.length - 6} more
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-3 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                      >
                        Explore full service
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>

                    {/* Right: full sub-service checklist */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card dark:border-white/10 dark:bg-white/5 sm:p-8">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        What's included
                      </h3>
                      <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {service.subServices.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-start gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-deep dark:bg-brand-cyan/15 dark:text-brand-cyan">
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}
        </div>

        <CTASection />
      </div>
    </>
  );
}
