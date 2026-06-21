import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  kicker,
  heading,
  subheading,
}: {
  kicker: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
          {kicker}
        </span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 text-base leading-relaxed text-slate-400">{subheading}</p>
      )}
    </Reveal>
  );
}
