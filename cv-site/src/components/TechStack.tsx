import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Translation } from "@/content";

/** Brand-ish accent color per technology for the badge dot. */
const TECH_COLORS: Record<string, string> = {
  PHP: "#8b9dc3",
  JavaScript: "#f7df1e",
  Python: "#4ca3e0",
  "HTML5 / CSS": "#e34f26",
  Dart: "#02569b",
  MySQL: "#00758f",
  PostgreSQL: "#4169e1",
  "Yii Framework": "#3f9b2b",
  Flutter: "#54c5f8",
  Docker: "#2496ed",
  Supabase: "#3ecf8e",
  WordPress: "#21759b",
  Bootstrap: "#7952b3",
  Git: "#f05032",
  Postman: "#ff6c37",
  Jira: "#2684ff",
  Scrum: "#22d3ee",
  Cursor: "#22d3ee",
  Antigravity: "#a78bfa",
  "Spec-Driven Development": "#f59e0b",
};

function colorFor(name: string) {
  return TECH_COLORS[name] ?? "#22d3ee";
}

export function TechStack({ t }: { t: Translation }) {
  const allTechs = t.stack.groups.flatMap((g) => g.items);

  return (
    <section
      id="stack"
      className="relative scroll-mt-20 border-y border-white/5 bg-white/[0.015] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker={t.stack.kicker}
          heading={t.stack.heading}
          subheading={t.stack.subheading}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.stack.groups.map((group, gi) => {
            const isAi = gi === t.stack.groups.length - 1;
            return (
              <Reveal key={group.label} delay={gi * 80}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-colors ${
                    isAi
                      ? "border-amber-400/25 bg-amber-400/[0.04] hover:border-amber-400/40"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
                  }`}
                >
                  <h3
                    className={`mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
                      isAi ? "text-amber-300" : "text-cyan-300"
                    }`}
                  >
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {group.items.map((tech, ti) => (
                      <Reveal as="li" key={tech} delay={gi * 80 + ti * 45}>
                        <span className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-slate-800/80">
                          <span
                            className="h-2 w-2 rounded-full transition-transform group-hover:scale-125"
                            style={{
                              backgroundColor: colorFor(tech),
                              boxShadow: `0 0 10px ${colorFor(tech)}66`,
                            }}
                          />
                          {tech}
                        </span>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Infinite marquee ticker */}
      <div className="relative mt-14 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-8 pr-8">
          {[...allTechs, ...allTechs].map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-slate-500"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: colorFor(tech) }}
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
