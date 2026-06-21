import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { PROFILE, type Translation } from "@/content";

export function Hero({ t }: { t: Translation }) {
  const stats = [
    { label: t.hero.yearsLabel, value: t.hero.yearsValue },
    { label: t.hero.rolesLabel, value: t.hero.rolesValue },
    { label: t.hero.focusLabel, value: t.hero.focusValue },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="aurora absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/25 blur-[110px]" />
        <div className="aurora-slow absolute right-0 top-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="aurora absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 font-mono text-xs font-medium text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.focusValue} · {t.hero.location}
          </span>
        </div>

        <p className="mt-7 font-mono text-sm text-teal-300/90">{t.hero.greeting}</p>
        <h1 className="mt-2 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
          Juan Manuel <span className="text-gradient">Jiménez Sánchez</span>
        </h1>
        <h2 className="mt-4 font-display text-lg font-medium text-slate-300 sm:text-2xl">
          {t.hero.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.cvFile}
            download
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            {t.hero.downloadCv}
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
          >
            {t.hero.viewWork}
            <ArrowDown className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-2">
            <IconLink href={PROFILE.github} label="GitHub">
              <Github className="h-5 w-5" />
            </IconLink>
            <IconLink href={PROFILE.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </IconLink>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-cyan-400/30"
            >
              <div className="font-display text-2xl font-bold text-gradient-cool sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-2 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5" />
          {t.hero.location}
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition-all hover:scale-105 hover:border-cyan-400/40 hover:text-cyan-200"
    >
      {children}
    </a>
  );
}
