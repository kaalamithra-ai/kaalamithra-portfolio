import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-brand-cyan" : "text-brand-purple"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
