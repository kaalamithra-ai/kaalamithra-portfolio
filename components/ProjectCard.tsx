import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import type { Project } from "@/types";
import { getService } from "@/data/services";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-magenta text-white">
        <FolderKanban className="h-6 w-6" aria-hidden="true" />
      </div>
      {project.cover && (
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={`${project.name} preview`}
            loading="lazy"
            className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {project.tagline}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.services.map((slug) => {
          const s = getService(slug);
          return s ? (
            <span
              key={slug}
              className="rounded-full border border-slate-200 bg-surface px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {s.name}
            </span>
          ) : null;
        })}
      </div>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
        View Case Study
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
