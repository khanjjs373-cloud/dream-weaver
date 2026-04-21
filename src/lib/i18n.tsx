import * as React from "react";

export type Lang = "en" | "ur";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, ur: string) => string;
  dir: "ltr" | "rtl";
};

const LangContext = React.createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("sehatnaama-lang")) as Lang | null;
    if (stored === "en" || stored === "ur") setLangState(stored);
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ur" ? "ur" : "en";
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("sehatnaama-lang", l);
  }, []);

  const t = React.useCallback((en: string, ur: string) => (lang === "ur" ? ur : en), [lang]);

  const value = React.useMemo(
    () => ({ lang, setLang, t, dir: (lang === "ur" ? "rtl" : "ltr") as "ltr" | "rtl" }),
    [lang, setLang, t]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
