import { BrainCircuit, FileCode2, Users, GitBranch } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Translation } from "@/content";

const chipIcons = [BrainCircuit, FileCode2, GitBranch, Users];

export function About({ t }: { t: Translation }) {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.about.kicker} heading={t.about.heading} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p
                  className={`text-base leading-relaxed sm:text-lg ${
                    i === t.about.paragraphs.length - 1
                      ? "rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5 text-slate-300"
                      : "text-slate-400"
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:pt-2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {t.about.chips.map((chip, i) => {
                const Icon = chipIcons[i % chipIcons.length];
                return (
                  <div
                    key={chip}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-cyan-400/30"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-teal-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-slate-200">{chip}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
