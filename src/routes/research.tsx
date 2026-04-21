import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Dashboard — Sehatnaama" },
      { name: "description", content: "Live progress on the Sehatnaama community research project." },
      { property: "og:title", content: "Sehatnaama Research Dashboard" },
      { property: "og:description", content: "Live progress on our community research project." },
    ],
  }),
  component: Research,
});

const STATS = [
  { en: "Survey responses", ur: "سروے جوابات", value: 412, target: 1000 },
  { en: "Caregiver interviews", ur: "نگہداشت کنندہ انٹرویوز", value: 18, target: 50 },
  { en: "Languages live", ur: "فعال زبانیں", value: 2, target: 6 },
  { en: "Cities reached", ur: "پہنچے ہوئے شہر", value: 14, target: 30 },
];

function Research() {
  const { t } = useLang();
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Research Dashboard", "تحقیقی ڈیش بورڈ")}</h1>
        <p className="mt-2 text-muted-foreground">{t("Where we are in building Pakistan's first community Alzheimer's dataset.", "پاکستان کا پہلا کمیونٹی الزائمر ڈیٹا سیٹ بنانے میں ہم کہاں ہیں۔")}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {STATS.map((s, i) => {
            const pct = Math.min(100, Math.round((s.value / s.target) * 100));
            return (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium text-muted-foreground">{t(s.en, s.ur)}</p>
                <p className="mt-2 font-serif text-3xl text-foreground">
                  {s.value} <span className="text-base text-muted-foreground">/ {s.target}</span>
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{pct}%</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-secondary/40 p-6">
          <h2 className="font-serif text-xl text-foreground">{t("Paper status", "مقالے کی حالت")}</h2>
          <p className="mt-2 text-foreground/85">{t("Manuscript in preparation. Target: late 2026 — submitted to a regional public health journal.", "مسودہ تیاری میں۔ ہدف: 2026 کے آخر — ایک علاقائی پبلک ہیلتھ جرنل میں جمع کرایا جائے گا۔")}</p>
        </div>
      </div>
    </Layout>
  );
}
