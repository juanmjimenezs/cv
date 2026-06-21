import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Translation } from "@/content";

export function Timeline({ t }: { t: Translation }) {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.experience.kicker} heading={t.experience.heading} />

        <div className="relative mt-12">
          {/* Vertical line */}
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-teal-400/30 to-transparent sm:left-[9px]"
            aria-hidden
          />

          <ol className="space-y-8">
            {t.experience.items.map((item, i) => (
              <Reveal as="li" key={item.company} delay={i * 70} className="relative pl-8 sm:pl-10">
                {/* Node */}
                <span
                  className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                    item.current
                      ? "border-cyan-300 bg-cyan-400 shadow-[0_0_14px_3px_rgba(34,211,238,0.5)]"
                      : "border-slate-500 bg-slate-800"
                  }`}
                  aria-hidden
                >
                  {item.current && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-100" />
                  )}
                </span>

                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-400/30 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-lg font-semibold text-slate-50 sm:text-xl">
                      {item.company}
                    </h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {t.experience.currentBadge}
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-medium text-teal-300">{item.role}</span>
                    <span className="text-slate-600">·</span>
                    <span className="font-mono text-xs text-slate-400">{item.period}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-500">{item.location}</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {item.aiNote && (
                    <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-4 py-3">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      <p className="text-sm font-medium text-amber-100/90">{item.aiNote}</p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-slate-900/50 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
