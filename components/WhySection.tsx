import {
  Briefcase,
  Layers,
  LifeBuoy,
  PieChart,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { WHY_CARDS } from "@/data/company";
import type { WhyCard } from "@/types";
import NetworkBackground from "./NetworkBackground";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<WhyCard["icon"], LucideIcon> = {
  partner: Briefcase,
  ai: Sparkles,
  business: Target,
  scale: Layers,
  data: PieChart,
  support: LifeBuoy,
};

export default function WhySection() {
  return (
    <section className="relative bg-brand-navy py-20 sm:py-24" aria-label="Why businesses choose KAALAMITHRA">
      <NetworkBackground tone="dark" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why KAALAMITHRA"
          title="Why Businesses Choose KAALAMITHRA"
          description="One partner that combines technology, AI and growth — built around your business outcomes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={(i % 3) * 90} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-brand-cyan/40 hover:bg-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
