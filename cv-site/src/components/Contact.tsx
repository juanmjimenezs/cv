import { Mail, Phone, MessageCircle, Download, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE, type Translation } from "@/content";

export function Contact({ t }: { t: Translation }) {
  const cards = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      accent: "text-cyan-300",
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: PROFILE.phoneDisplay,
      href: `https://wa.me/${PROFILE.whatsapp}`,
      accent: "text-emerald-300",
    },
    {
      icon: Github,
      label: "GitHub",
      value: PROFILE.githubHandle,
      href: PROFILE.github,
      accent: "text-slate-200",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: PROFILE.linkedinHandle,
      href: PROFILE.linkedin,
      accent: "text-sky-300",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-amber-500/10 blur-[90px]" />

          <div className="relative">
            <SectionHeading
              kicker={t.contact.kicker}
              heading={t.contact.heading}
              subheading={t.contact.subheading}
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {cards.map((c, i) => {
                const external = c.href.startsWith("http");
                return (
                  <Reveal key={c.label} delay={i * 70}>
                    <a
                      href={c.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30"
                    >
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ${c.accent}`}>
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs uppercase tracking-wide text-slate-500">
                          {c.label}
                        </span>
                        <span className="block truncate font-medium text-slate-200">{c.value}</span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-cyan-300" />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Phone className="h-4 w-4" />
                  {PROFILE.phoneDisplay}
                </a>
                <a
                  href={PROFILE.cvFile}
                  download
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCv}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Juan Manuel Jiménez Sánchez. {t.contact.rights}
          </p>
          <p className="max-w-md text-xs text-slate-600">{t.contact.builtWith}</p>
        </footer>
      </div>
    </section>
  );
}
