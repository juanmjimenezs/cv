import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Timeline } from "@/components/Timeline";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { content, type Lang } from "@/content";

const STORAGE_KEY = "cv-lang";

function getInitialLang(): Lang {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    if (navigator.language?.toLowerCase().startsWith("es")) return "es";
  }
  return "en";
}

function App() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const t = content[lang];

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "es"
        ? "Juan Manuel Jiménez Sánchez — Senior Developer"
        : "Juan Manuel Jiménez Sánchez — Senior Developer";
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <TechStack t={t} />
        <Timeline t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;
