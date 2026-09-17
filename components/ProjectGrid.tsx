import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
        No projects in this category yet — case studies are being added.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 90} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
