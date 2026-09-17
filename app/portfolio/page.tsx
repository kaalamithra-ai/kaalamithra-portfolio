import type { Metadata } from "next";
import SideRail, { type SideRailItem } from "@/components/SideRail";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import ProjectGrid from "@/components/ProjectGrid";
import CTASection from "@/components/CTASection";
import NetworkBackground from "@/components/NetworkBackground";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { COMPANY_NAME } from "@/lib/site";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: `Portfolio | ${COMPANY_NAME}`,
  description:
    "Explore the KAALAMITHRA portfolio across lead generation, AI & automation, CRM, cloud, e-commerce, branding, analytics and security — jump straight to a service with the side rail.",
};

/**
 * Group projects under their primary service so every case study appears
 * once. Every service gets a section (and a rail tab) — empty categories
 * show a friendly "coming soon" state.
 */
const GROUPS = SERVICES.map((service) => ({
  service,
  projects: PROJECTS.filter(
    (project: Project) => project.services[0] === service.slug
  ),
}));

const RAIL_ITEMS: SideRailItem[] = GROUPS.map((group) => ({
  id: `work-${group.service.slug}`,
  label: group.service.name,
  icon: group.service.icon,
}));

export default function ProjectsPage() {
  return (
    <>
      <SideRail items={RAIL_ITEMS} />

      <div className="[padding-left:var(--km-rail-w)]">
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
          <NetworkBackground tone="light" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <SectionHeading
              eyebrow="Portfolio"
              title="Our Portfolio"
              description="Every project below is connected to the services and sub-services that powered it. Use the side rail to jump to a service category, or scroll to explore."
            />
          </div>
        </section>

        <div aria-label="Portfolio grouped by service">
          {GROUPS.map((group, index) => (
            <section
              key={group.service.slug}
              id={`work-${group.service.slug}`}
              aria-label={`${group.service.name} projects`}
              className={`scroll-mt-28 py-16 sm:py-20 ${
                index > 0 ? "border-t border-slate-200/70 dark:border-white/5" : ""
              }`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-card">
                      <ServiceIcon icon={group.service.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-brand-ink dark:text-white sm:text-2xl">
                        {group.service.name}
                      </h2>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {group.projects.length}{" "}
                        {group.projects.length === 1 ? "project" : "projects"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <ProjectGrid projects={group.projects} />
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
