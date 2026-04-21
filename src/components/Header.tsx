import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links: Array<{ to: string; en: string; ur: string }> = [
    { to: "/", en: "Home", ur: "ہوم" },
    { to: "/alzheimers", en: "Guide", ur: "گائیڈ" },
    { to: "/symptom-checker", en: "Symptom Checker", ur: "علامات کا جائزہ" },
    { to: "/caregiver-diary", en: "Diary", ur: "ڈائری" },
    { to: "/community", en: "Community", ur: "کمیونٹی" },
    { to: "/about", en: "About", ur: "ہمارے بارے میں" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg">س</span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-foreground">Sehatnaama</span>
            <span className="font-[var(--font-urdu)] text-xs text-muted-foreground" style={{ fontFamily: "var(--font-urdu)" }}>صحت نامہ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.en, l.ur)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border border-border text-xs">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"}`}
            >EN</button>
            <button
              onClick={() => setLang("ur")}
              className={`px-3 py-1.5 transition-colors ${lang === "ur" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"}`}
              style={{ fontFamily: "var(--font-urdu)" }}
            >اردو</button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {t(l.en, l.ur)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
