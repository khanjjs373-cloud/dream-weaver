import * as React from "react";

export type Lang = "en" | "ur";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, ur: string) => string;
  dir: "ltr" | "rtl";
  hasChosen: boolean;
  confirmLang: (l: Lang) => void;
};

const LangContext = React.createContext<Ctx | null>(null);
const STORAGE_KEY = "sehatnaama-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");
  const [hasChosen, setHasChosen] = React.useState(true); // default true for SSR; corrected on mount

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "ur") {
      setLangState(stored);
      setHasChosen(true);
    } else {
      setHasChosen(false);
    }
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ur" ? "ur" : "en";
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const confirmLang = React.useCallback((l: Lang) => {
    setLang(l);
    setHasChosen(true);
  }, [setLang]);

  const t = React.useCallback((en: string, ur: string) => (lang === "ur" ? ur : en), [lang]);

  const value = React.useMemo(
    () => ({
      lang,
      setLang,
      t,
      dir: (lang === "ur" ? "rtl" : "ltr") as "ltr" | "rtl",
      hasChosen,
      confirmLang,
    }),
    [lang, setLang, t, hasChosen, confirmLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
