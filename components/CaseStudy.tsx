import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Flag,
  Image as ImageIcon,
  Lightbulb,
  Wrench,
} from "lucide-react";
import type { Project } from "@/types";
import { getService } from "@/data/services";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-ink">
      {children}
    </h2>
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-slate-200" />
      </div>
      <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-50 to-blue-50 p-6 text-center">
        <ImageIcon className="h-8 w-8 text-slate-300" aria-hidden="true" />
        <figcaption className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          {label}
        </figcaption>
      </div>
    </figure>
  );
}

/**
 * Reusable case-study body for every project page.
 * Bracketed values are editable placeholders defined in data/projects.ts.
 */
export default function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="space-y-16">
      {/* Meta: client / industry */}
      <section aria-label="Client and industry" className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <Building2 className="h-6 w-6 text-brand-blue" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Client</p>
            <p className="text-sm font-semibold text-brand-ink">{project.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <Flag className="h-6 w-6 text-brand-purple" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Industry</p>
            <p className="text-sm font-semibold text-brand-ink">{project.industry}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section aria-label="Project overview">
        <SectionTitle>Project Overview</SectionTitle>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {project.overview}
        </p>
      </section>

      {/* Challenge */}
      <section aria-label="Challenge">
        <SectionTitle>The Challenge</SectionTitle>
        <p className="mt-4 max-w-3xl rounded-2xl border-l-4 border-brand-magenta bg-rose-50/60 p-6 text-base leading-relaxed text-slate-700">
          {project.challenge}
        </p>
      </section>

      {/* Solution */}
      <section aria-label="Our solution">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-6 w-6 text-brand-blue" aria-hidden="true" />
          <SectionTitle>Our Solution</SectionTitle>
        </div>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {project.solution}
        </p>
      </section>

      {/* Services + sub-services used */}
      <section aria-label="Services used">
        <SectionTitle>Services Used</SectionTitle>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {project.subServicesUsed.map((group) => {
            const service = getService(group.service);
            if (!service) return null;
            return (
              <div
                key={group.service}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="font-display text-base font-bold text-brand-blue hover:underline"
                >
                  {service.name}
                </Link>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies */}
      <section aria-label="Technologies">
        <SectionTitle>Technologies</SectionTitle>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-200 bg-surface px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Implementation */}
      <section aria-label="Implementation">
        <div className="flex items-center gap-3">
          <Wrench className="h-6 w-6 text-brand-purple" aria-hidden="true" />
          <SectionTitle>Implementation</SectionTitle>
        </div>
        <ol className="mt-6 space-y-4">
          {project.implementation.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-brand-blue">
                {i + 1}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-slate-600">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Screenshots */}
      <section aria-label="Project screenshots">
        <SectionTitle>Project Screenshots</SectionTitle>
        {project.screenshots && project.screenshots.length > 0 ? (
          <div
            className={`mt-6 grid gap-6 ${
              project.screenshots.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {project.screenshots.map((s) => (
              <figure
                key={s.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-64 w-full bg-white object-contain p-3"
                />
                <figcaption className="px-4 py-3 text-xs font-medium leading-relaxed text-slate-500">
                  {s.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ScreenshotPlaceholder label="[Project screenshot 1]" />
            <ScreenshotPlaceholder label="[Project screenshot 2]" />
          </div>
        )}
      </section>

      {/* Results */}
      <section aria-label="Results and impact">
        <SectionTitle>Results & Impact</SectionTitle>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {project.results.map((r) => (
            <li
              key={r}
              className="rounded-2xl border border-dashed border-brand-blue/40 bg-blue-50/50 p-5 text-sm font-medium leading-relaxed text-slate-600"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
