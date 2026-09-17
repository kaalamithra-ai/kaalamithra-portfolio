import ButtonLink from "./Button";
import NetworkBackground from "./NetworkBackground";
import Reveal from "./Reveal";

export default function CTASection({
  heading = "Have an idea? Let's build it.",
  text = "Whether you're launching a startup, automating your business or scaling your digital presence, KAALAMITHRA can help turn your idea into an actionable technology solution.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-label="Call to action">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-16 text-center sm:px-16 sm:py-20">
          <NetworkBackground tone="dark" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              {text}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="onDark" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineOnDark" size="lg">
                Talk to Our Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
