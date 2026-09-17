import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, XCircle } from "lucide-react";
import ButtonLink from "@/components/Button";
import SideRail, { type SideRailItem } from "@/components/SideRail";
import NetworkBackground from "@/components/NetworkBackground";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceArt from "@/components/ServiceArt";
import SubServiceGrid from "@/components/SubServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectGrid from "@/components/ProjectGrid";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { SERVICES, getService } from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { PROCESS_STEPS } from "@/data/company";
import { SITE_URL } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: "/logo.png", width: 666, height: 375 }],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedProjects = getProjectsByService(service.slug);

  const railItems: SideRailItem[] = SERVICES.map((s) => ({
    id: `svc-${s.slug}`,
    label: s.name,
    icon: s.icon,
    href: `/services/${s.slug}`,
  }));

  return (
    <>
      <SideRail items={railItems} activeId={`svc-${service.slug}`} />
      <div className="[padding-left:var(--km-rail-w)]">
      {/* 1 — Service hero */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <NetworkBackground tone="light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Services
            </Link>
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-card">
                <ServiceArt service={service} size="lg" />
              </div>
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
                  Service {service.number}
                </p>
                <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                  {service.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>
              </div>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              {service.liveUrl && (
                <a
                  href={service.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-brand-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {service.liveUrlLabel ?? "Visit Live Website"}
                </a>
              )}
              <ButtonLink href="#related-projects" variant="secondary">
                View Related Projects
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — Overview */}
      <section className="py-16 sm:py-20" aria-label="Service overview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Overview" title={`About ${service.name}`} />
          <Reveal className="mt-6 max-w-3xl space-y-5">
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3 — Business problems */}
      <section className="bg-surface py-16 sm:py-20" aria-label="Business problems">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The problem"
            title="Business Problems We Solve"
            description="If any of these feel familiar, this service was built for you."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.problems.map((problem, i) => (
              <Reveal key={problem} delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-magenta" aria-hidden="true" />
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {problem}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Our solution */}
      <section className="py-16 sm:py-20" aria-label="Our solution">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
                Our solution
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-ink">
                How We Deliver {service.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {service.solutionIntro}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {service.solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4b — Brand identities we created (branding service only) */}
      {service.slug === "content-personal-branding" && (
        <section className="py-16 sm:py-20" aria-label="Brand identities we created">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Proof"
              title="Brand Identities We've Created"
              description="A selection of real logos and identities designed by KAALAMITHRA for growing businesses."
            />
            <Reveal className="mt-12">
              <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { src: "/projects/annadaata-logo.jpg", alt: "Annadaata Traders logo" },
                  { src: "/projects/zorova-logo.jpg", alt: "Zorova logo" },
                  { src: "/projects/varsha-logo.jpg", alt: "Varsha Pravasa logo" },
                  { src: "/projects/tene-logo.jpg", alt: "TENE Food Products logo" },
                  { src: "/projects/grandeur-logo.jpg", alt: "The Grandeur salon logo" },
                  { src: "/projects/nive-logo.jpg", alt: "Nive Nivasaa logo" },
                ].map((logo) => (
                  <li
                    key={logo.src}
                    className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* 5 — Sub-services */}
      <section className="bg-surface py-16 sm:py-20" aria-label="Sub-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Included capabilities"
            title="Sub-Services"
            description="Every engagement is tailored — combine exactly the capabilities you need."
          />
          <Reveal className="mt-12">
            <SubServiceGrid items={service.subServices} />
          </Reveal>
        </div>
      </section>

      {/* 6 — Technologies / tools */}
      <section className="py-16 sm:py-20" aria-label="Technologies and tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Stack" title="Technologies & Tools" />
          <Reveal className="mt-8">
            <ul className="flex flex-wrap gap-2.5">
              {service.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-slate-200 bg-surface px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 7 — Our process */}
      <section className="bg-surface py-16 sm:py-20" aria-label="Our process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our process"
            title="How We Work"
            description="The same proven five-step process, applied to every engagement."
          />
          <Reveal className="mt-16">
            <ProcessTimeline steps={PROCESS_STEPS} />
          </Reveal>
        </div>
      </section>

      {/* 8 — Related projects */}
      <section id="related-projects" className="scroll-mt-24 py-16 sm:py-20" aria-label="Related projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Related Projects"
            description="Case studies that used this service."
          />
          <div className="mt-12">
            <ProjectGrid projects={relatedProjects} />
          </div>
        </div>
      </section>

      {/* 9 — Why choose KAALAMITHRA */}
      <WhySection />

      {/* 10 — CTA */}
      <div className="pt-20">
        <CTASection
          heading={`Ready to grow with ${service.name}?`}
          text="Tell us about your goals and we'll map the fastest, smartest way to get there."
        />
      </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          serviceType: service.name,
          provider: {
            "@type": "Organization",
            name: "KAALAMITHRA AI TECH SOLUTIONS",
            url: SITE_URL,
          },
          url: `${SITE_URL}/services/${service.slug}`,
        }}
      />
    </>
  );
}
