import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Layers,
  Target,
  type LucideIcon,
} from "lucide-react";
import ButtonLink from "@/components/Button";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectGrid from "@/components/ProjectGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { MISSION, PROCESS_STEPS, VALUE_PROPS, VISION } from "@/data/company";
import type { ValueProp } from "@/types";
import {
  COMPANY_NAME,
  HERO_HEADLINE,
  HERO_SUPPORT,
  SITE_URL,
  TAGLINE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `AI-Powered Solutions for Smarter Business Growth | ${COMPANY_NAME}`,
  description: HERO_SUPPORT,
  alternates: { canonical: `${SITE_URL}/home` },
};

const VALUE_ICONS: Record<ValueProp["icon"], LucideIcon> = {
  target: Target,
  badge: BadgeCheck,
  layers: Layers,
  support: Headphones,
};

export default function Home() {
  return (
    <>
      {/* ============ HERO (3D animated video banner) ============ */}
      <section className="relative overflow-hidden bg-brand-navy">
        <HeroVideo />
        {/* readability overlays */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan backdrop-blur">
              {TAGLINE}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {HERO_HEADLINE.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {HERO_HEADLINE.split(" ").slice(3).join(" ")}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {HERO_SUPPORT}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/services" variant="outlineOnDark" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm font-semibold tracking-wide text-slate-400">
              11 powerful services · one complete growth partner
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ VALUE PROPS ============ */}
      <section className="py-20 sm:py-24" aria-label="Our values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon];
              return (
                <Reveal key={v.title} delay={i * 90} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-brand-ink">
                      {v.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ABOUT STRIP ============ */}
      <section className="bg-surface py-20 sm:py-24" aria-label="About KAALAMITHRA">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 flex items-center justify-center lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-3d.png"
              alt="3D illustration of a human head with a glowing circuit network — the KAALAMITHRA AI mark"
              loading="lazy"
              className="w-full max-w-sm drop-shadow-xl"
            />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
              About KAALAMITHRA
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Building Smarter Businesses Through Technology
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We are a technology and business growth partner combining AI,
              automation, software, marketing, cloud, data and security under
              one roof — one team that owns your outcomes, not just your tasks.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-blue">
                  Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{MISSION}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-purple">
                  Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{VISION}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="bg-surface py-20 sm:py-24" aria-label="Services preview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="11 Powerful Services. One Growth Partner."
            description="From lead generation to AI automation, cloud and security — everything a modern business needs to grow, under one roof."
          />
          <div className="mt-14">
            <ServiceGrid services={SERVICES.slice(0, 6)} />
          </div>
          <Reveal className="mt-12 text-center">
            <ButtonLink href="/services" variant="secondary" size="lg">
              View All 11 Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY KAALAMITHRA ============ */}
      <WhySection />

      {/* ============ PROCESS ============ */}
      <section className="py-20 sm:py-24" aria-label="Our process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A Proven Process, From Idea to Impact"
            description="Five clear steps that take you from first conversation to scalable growth."
          />
          <Reveal className="mt-16">
            <ProcessTimeline steps={PROCESS_STEPS} />
          </Reveal>
        </div>
      </section>

      {/* ============ PORTFOLIO PREVIEW ============ */}
      <section className="bg-surface py-20 sm:py-24" aria-label="Portfolio preview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Portfolio"
            description="A selection of systems we've designed and built — each connected to the services that powered it."
          />
          <div className="mt-14">
            <ProjectGrid projects={PROJECTS.slice(0, 3)} />
          </div>
          <Reveal className="mt-12 text-center">
            <ButtonLink href="/portfolio" variant="secondary" size="lg">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <div className="pt-20 sm:pt-24">
        <CTASection />
      </div>
    </>
  );
}
