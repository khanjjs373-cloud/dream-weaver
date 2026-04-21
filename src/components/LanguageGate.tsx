import { useLang, type Lang } from "@/lib/i18n";

const LANGS: Array<{ code: Lang | string; native: string; label: string; available: boolean }> = [
  { code: "en", native: "English", label: "English", available: true },
  { code: "ur", native: "اردو", label: "Urdu", available: true },
  { code: "pa", native: "پنجابی", label: "Punjabi", available: false },
  { code: "sd", native: "سنڌي", label: "Sindhi", available: false },
  { code: "skr", native: "سرائیکی", label: "Saraiki", available: false },
  { code: "ps", native: "پښتو", label: "Pashto", available: false },
];

export function LanguageGate() {
  const { hasChosen, confirmLang } = useLang();

  if (hasChosen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-gate-title"
    >
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-2xl md:p-10">
        <div className="text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-serif text-2xl">
            س
          </div>
          <h2 id="lang-gate-title" className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
            Welcome to Sehatnaama
          </h2>
          <p className="mt-1 text-xl text-primary" style={{ fontFamily: "var(--font-urdu)" }}>
            صحت نامہ میں خوش آمدید
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Please choose your language to continue · جاری رکھنے کے لیے اپنی زبان منتخب کریں
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {LANGS.map((L) => {
            const isUrduScript = L.code !== "en";
            return (
              <button
                key={L.code}
                onClick={() => L.available && confirmLang(L.code as Lang)}
                disabled={!L.available}
                className={`group flex flex-col items-center justify-center rounded-xl border-2 px-3 py-5 transition-all ${
                  L.available
                    ? "border-border bg-background hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-md"
                    : "cursor-not-allowed border-dashed border-border bg-muted/40 text-muted-foreground"
                }`}
              >
                <span
                  className="text-2xl font-medium"
                  style={isUrduScript ? { fontFamily: "var(--font-urdu)" } : undefined}
                >
                  {L.native}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wider opacity-70">
                  {L.label}
                </span>
                {!L.available && (
                  <span className="mt-1 text-[10px] italic">coming soon</span>
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          You can change this anytime from the header.
        </p>
      </div>
    </div>
  );
}
