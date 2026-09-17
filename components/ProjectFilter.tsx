"use client";

import { SERVICE_FILTERS } from "@/data/services";

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="group"
      aria-label="Filter projects by service"
    >
      {SERVICE_FILTERS.map((f) => {
        const isActive = active === f.slug;
        return (
          <button
            key={f.slug}
            type="button"
            onClick={() => onChange(f.slug)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
              isActive
                ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-card"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand-blue/50 hover:text-brand-blue"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
