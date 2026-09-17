import {
  Code2,
  Compass,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { ProcessStep } from "@/types";

const STEP_ICONS: Record<string, LucideIcon> = {
  "01": Search,
  "02": Compass,
  "03": PenTool,
  "04": Code2,
  "05": Rocket,
};

/**
 * 5-step process.
 * Desktop: horizontal timeline. Mobile: vertical timeline.
 */
export default function ProcessTimeline({
  steps,
  tone = "light",
}: {
  steps: ProcessStep[];
  tone?: "light" | "dark";
}) {
  const numCls =
    tone === "dark"
      ? "bg-white/10 text-brand-cyan border-white/20"
      : "bg-blue-50 text-brand-blue border-brand-blue/20";
  const titleCls = tone === "dark" ? "text-white" : "text-brand-ink";
  const descCls = tone === "dark" ? "text-slate-400" : "text-slate-600";
  const lineCls = tone === "dark" ? "bg-white/15" : "bg-slate-200";
  const iconCls = tone === "dark" ? "text-brand-cyan" : "text-brand-purple";

  return (
    <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
      {/* horizontal connector (desktop) */}
      <div
        aria-hidden="true"
        className={`absolute left-[10%] right-[10%] top-6 hidden h-px md:block ${lineCls}`}
      />
      {steps.map((step) => {
        const StepIcon = STEP_ICONS[step.number];
        return (
          <li key={step.number} className="relative flex gap-5 md:block md:text-center">
            {/* vertical connector (mobile) */}
            <div className="flex flex-col items-center md:static md:block">
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-display text-sm font-extrabold md:mx-auto ${numCls}`}
              >
                {step.number}
              </span>
              <span
                aria-hidden="true"
                className={`mt-2 w-px flex-1 md:hidden ${lineCls}`}
              />
            </div>
            <div className="pb-2 md:pb-0">
              <h3
                className={`font-display text-base font-bold uppercase tracking-wider ${titleCls}`}
              >
                <span className="inline-flex items-center gap-2">
                  {StepIcon && (
                    <StepIcon className={`h-4 w-4 ${iconCls}`} aria-hidden="true" />
                  )}
                  {step.title}
                </span>
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${descCls}`}>
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
