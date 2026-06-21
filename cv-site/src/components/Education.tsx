import { GraduationCap, Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Translation } from "@/content";

export function Education({ t }: { t: Translation }) {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-white/5 bg-white/[0.015] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.education.kicker} heading={t.education.heading} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                <GraduationCap className="h-4 w-4" />
                {t.education.educationLabel}
              </h3>
            </Reveal>
            <div className="space-y-3">
              {t.education.education.map((e, i) => (
                <Reveal key={e.title} delay={i * 70}>
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-400/30">
                    <div>
                      <p className="font-display font-semibold text-slate-100">{e.title}</p>
                      <p className="mt-0.5 text-sm text-slate-400">{e.institution}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-cyan-400/10 px-2.5 py-1 font-mono text-xs font-medium text-cyan-300">
                      {e.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                <Award className="h-4 w-4" />
                {t.education.certsLabel}
              </h3>
            </Reveal>
            <div className="space-y-3">
              {t.education.certs.map((c, i) => (
                <Reveal key={c.title} delay={i * 70}>
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-amber-400/30">
                    <div>
                      <p className="font-display font-semibold text-slate-100">{c.title}</p>
                      <p className="mt-0.5 text-sm text-slate-400">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-amber-400/10 px-2.5 py-1 font-mono text-xs font-medium text-amber-300">
                      {c.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
