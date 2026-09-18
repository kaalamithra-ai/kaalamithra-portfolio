import type { Metadata } from "next";
import ButtonLink from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found | KAALAMITHRA AI Tech Solutions",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-brand-ink">
        This page doesn't exist.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        The link may be outdated. Head back home or explore our services instead.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/home">Back to Home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Explore Services
        </ButtonLink>
      </div>
    </section>
  );
}
