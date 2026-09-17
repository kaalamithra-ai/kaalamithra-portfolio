import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import ServiceArt from "./ServiceArt";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
    >
      <div className="flex items-start justify-between">
        <ServiceArt service={service} />
        <span className="font-display text-sm font-extrabold tracking-widest text-slate-300">
          {service.number}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
        Explore Service
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
