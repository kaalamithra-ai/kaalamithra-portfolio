import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark" | "outlineOnDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-card hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "border border-slate-300 bg-white text-brand-ink hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5",
  onDark:
    "bg-white text-brand-navy shadow-card hover:shadow-lift hover:-translate-y-0.5",
  outlineOnDark:
    "border border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}
