import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { PROFILE, type Lang, type Translation } from "@/content";

interface NavProps {
  t: Translation;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Nav({ t, lang, setLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "stack", label: t.nav.stack },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 shadow-lg shadow-black/20" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 font-display text-sm font-bold text-gradient transition-transform group-hover:scale-105">
            {PROFILE.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-slate-200 sm:block">
            Juan M. Jiménez
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href={PROFILE.cvFile}
            download
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 px-3.5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
          >
            <Download className="h-4 w-4" />
            {t.hero.downloadCv}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-white/5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-slate-200 hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PROFILE.cvFile}
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              <Download className="h-4 w-4" />
              {t.hero.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative flex items-center rounded-lg border border-white/10 bg-slate-900/60 p-0.5 font-mono text-xs">
      <span
        className="absolute inset-y-0.5 w-[calc(50%-2px)] rounded-md bg-gradient-to-r from-cyan-400/90 to-teal-400/90 transition-transform duration-300"
        style={{ transform: lang === "en" ? "translateX(100%)" : "translateX(0%)" }}
        aria-hidden
      />
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`relative z-10 w-9 rounded-md py-1.5 font-semibold uppercase transition-colors ${
            lang === code ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
