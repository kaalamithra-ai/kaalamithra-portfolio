import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import CaseStudy from "@/components/CaseStudy";
import SideRail, { type SideRailItem } from "@/components/SideRail";
import NetworkBackground from "@/components/NetworkBackground";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { PROJECTS, getProject, getRelatedProjects } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: `${SITE_URL}/portfolio/${project.slug}` },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      images: [{ url: "/logo.png", width: 666, height: 375 }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const railItems: SideRailItem[] = SERVICES.map((s) => ({
    id: `work-${s.slug}`,
    label: s.name,
    icon: s.icon,
    href: `/portfolio#work-${s.slug}`,
  }));

  return (
    <>
      <SideRail
        items={railItems}
        activeId={`work-${project.services[0]}`}
      />
      <div className="[padding-left:var(--km-rail-w)]">
      {/* Project hero */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <NetworkBackground tone="light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Full Portfolio
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
              Case Study
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {project.tagline}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Visit Live Website
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* Case study body */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <CaseStudy project={project} />
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      <section className="bg-surface py-16 sm:py-20" aria-label="Related projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Keep exploring"
            title="Related Projects"
            description="Other projects that share the same services."
          />
          <div className="mt-12">
            <ProjectGrid projects={getRelatedProjects(project)} />
          </div>
        </div>
      </section>

      <CTASection />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Project",
          name: project.name,
          description: project.tagline,
          url: `${SITE_URL}/portfolio/${project.slug}`,
        }}
      />
    </>
  );
}
