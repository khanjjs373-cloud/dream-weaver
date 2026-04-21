import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { Download, FileText, ExternalLink, CheckCircle2, Clock, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Dashboard — Sehatnaama" },
      { name: "description", content: "Live progress on the Sehatnaama community research project — survey data, interviews, paper status, and downloadable summary statistics." },
      { property: "og:title", content: "Sehatnaama Research Dashboard" },
      { property: "og:description", content: "Transparent, live progress on Pakistan's first community Alzheimer's dataset." },
    ],
  }),
  component: Research,
});

// ===== Manually-updated milestones (edit these weekly) =====
const MILESTONES = [
  {
    en: "Survey responses",
    ur: "سروے جوابات",
    value: 147,
    target: 200,
    note_en: "Collected across 14 cities via WhatsApp & in-person.",
    note_ur: "14 شہروں سے واٹس ایپ اور بالمشافہ جمع کیے گئے۔",
  },
  {
    en: "Caregiver interviews",
    ur: "نگہداشت کنندہ انٹرویوز",
    value: 8,
    target: 10,
    note_en: "Semi-structured, 45–60 min, audio recorded with consent.",
    note_ur: "نیم منظم، 45-60 منٹ، رضامندی سے آڈیو ریکارڈ شدہ۔",
  },
  {
    en: "Languages live on site",
    ur: "ویب سائٹ پر فعال زبانیں",
    value: 2,
    target: 6,
    note_en: "English & Urdu live. Punjabi, Sindhi, Saraiki, Pashto in translation.",
    note_ur: "انگریزی اور اردو فعال۔ پنجابی، سندھی، سرائیکی، پشتو ترجمے میں۔",
  },
  {
    en: "Cities reached",
    ur: "پہنچے ہوئے شہر",
    value: 14,
    target: 30,
    note_en: "Including Karachi, Lahore, Islamabad, Peshawar, Quetta, Multan.",
    note_ur: "بشمول کراچی، لاہور، اسلام آباد، پشاور، کوئٹہ، ملتان۔",
  },
];

// ===== Paper status =====
const PAPER = {
  status_en: "Under Review at Cureus",
  status_ur: "Cureus میں زیر جائزہ",
  title_en: "Community Awareness and Caregiver Burden of Alzheimer's Disease in Urban and Peri-Urban Pakistan: A Cross-Sectional Mixed-Methods Study",
  title_ur: "پاکستان کے شہری اور نیم شہری علاقوں میں الزائمر کی بیماری کے بارے میں عوامی آگاہی اور نگہداشت کنندگان کا بوجھ: ایک کراس سیکشنل مخلوط طریقہ کار کا مطالعہ",
  doi: null as string | null, // set when published, e.g. "10.7759/cureus.xxxxx"
  submittedAt: "2026-02-14",
  authors: "Sehatnaama Research Team",
};

// ===== Downloadable datasets (anonymised summary stats only) =====
const DOWNLOADS = [
  {
    en: "Awareness survey — summary statistics (v1.2)",
    ur: "آگاہی سروے — خلاصہ اعداد و شمار (v1.2)",
    file: "/data/sehatnaama-awareness-summary-v1.2.csv",
    size: "12 KB",
    type: "CSV",
  },
  {
    en: "Caregiver burden — Likert distributions",
    ur: "نگہداشت کنندہ بوجھ — لیکرٹ تقسیم",
    file: "/data/sehatnaama-caregiver-burden.csv",
    size: "8 KB",
    type: "CSV",
  },
  {
    en: "Methodology & survey instrument (PDF)",
    ur: "طریقہ کار اور سروے کا آلہ (PDF)",
    file: "/data/sehatnaama-methodology-v1.pdf",
    size: "340 KB",
    type: "PDF",
  },
];

// ===== Timeline =====
const TIMELINE = [
  { date: "2025-09", en: "Project launched, ethics review prepared", ur: "منصوبہ شروع، اخلاقی جائزے کی تیاری", done: true },
  { date: "2025-11", en: "Survey instrument piloted (n=20)", ur: "سروے کا آلہ آزمایا گیا (n=20)", done: true },
  { date: "2026-01", en: "Full survey rollout", ur: "مکمل سروے کا آغاز", done: true },
  { date: "2026-02", en: "Manuscript submitted", ur: "مسودہ جمع کرایا گیا", done: true },
  { date: "2026-Q2", en: "Peer review & revisions", ur: "پیر ریویو اور نظرثانی", done: false, current: true },
  { date: "2026-Q4", en: "Open dataset release", ur: "کھلے ڈیٹا سیٹ کا اجراء", done: false },
];

function Research() {
  const { t, lang } = useLang();

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="border-b border-border pb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {t("Public research log", "عوامی تحقیقی ریکارڈ")}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">
            {t("Research Dashboard", "تحقیقی ڈیش بورڈ")}
          </h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            {t(
              "Everything we are building, in the open. Numbers are updated manually each week. Anyone may reuse our anonymised summary statistics with attribution.",
              "ہم جو کچھ بنا رہے ہیں، سب کے سامنے۔ اعداد و شمار ہر ہفتے دستی طور پر اپ ڈیٹ کیے جاتے ہیں۔ کوئی بھی ہمارے گمنام خلاصہ اعداد و شمار کو حوالہ کے ساتھ دوبارہ استعمال کر سکتا ہے۔"
            )}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t("Last updated:", "آخری اپ ڈیٹ:")} 2026-04-14
          </p>
        </div>

        {/* Milestones */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">
            {t("Live milestones", "زندہ سنگ میل")}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {MILESTONES.map((m, i) => {
              const pct = Math.min(100, Math.round((m.value / m.target) * 100));
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-muted-foreground">{t(m.en, m.ur)}</p>
                    <p className="text-xs font-semibold text-primary">{pct}%</p>
                  </div>
                  <p className="mt-2 font-serif text-3xl text-foreground">
                    {m.value} <span className="text-base text-muted-foreground">/ {m.target}</span>
                  </p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="mt-3 text-xs text-foreground/70">{t(m.note_en, m.note_ur)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Paper status */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-foreground">
            {t("Paper status", "مقالے کی حالت")}
          </h2>
          <div className="mt-5 rounded-2xl border border-primary/30 bg-secondary/40 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
                <FlaskConical className="h-4 w-4" />
                {t(PAPER.status_en, PAPER.status_ur)}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("Submitted:", "جمع کرایا گیا:")} {PAPER.submittedAt}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-lg leading-snug text-foreground">
              {lang === "ur" ? PAPER.title_ur : PAPER.title_en}
            </h3>
            <p className="mt-2 text-sm text-foreground/75">{PAPER.authors}</p>

            {PAPER.doi ? (
              <div className="mt-4 rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("Citation", "حوالہ")}
                </p>
                <p className="mt-1 font-mono text-sm text-foreground">
                  {PAPER.authors}. ({new Date(PAPER.submittedAt).getFullYear()}). {PAPER.title_en}. <em>Cureus</em>. https://doi.org/{PAPER.doi}
                </p>
                <a
                  href={`https://doi.org/${PAPER.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t("Open DOI", "DOI کھولیں")} <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="mt-4 border-t border-border pt-3 text-sm text-foreground/80">
                  <span className="font-semibold">{t("Plain-language summary: ", "آسان زبان میں خلاصہ: ")}</span>
                  {t(
                    "We surveyed Pakistani families to learn what they know about Alzheimer's and how caregivers cope. Awareness was low; caregiver burden was high. The paper recommends community-level education in local languages.",
                    "ہم نے پاکستانی خاندانوں کا سروے کیا تاکہ معلوم کر سکیں کہ وہ الزائمر کے بارے میں کیا جانتے ہیں اور نگہداشت کنندگان کیسے مقابلہ کرتے ہیں۔ آگاہی کم تھی؛ نگہداشت کنندہ کا بوجھ زیادہ تھا۔ مقالہ مقامی زبانوں میں کمیونٹی سطح پر تعلیم کی تجویز کرتا ہے۔"
                  )}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-sm text-foreground/75">
                {t(
                  "DOI and full citation will appear here on publication. A plain-language summary will be added alongside.",
                  "اشاعت پر DOI اور مکمل حوالہ یہاں ظاہر ہوگا۔ ساتھ ہی آسان زبان میں خلاصہ بھی شامل کیا جائے گا۔"
                )}
              </p>
            )}
          </div>
        </section>

        {/* Downloads */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-foreground">
            {t("Open data downloads", "کھلا ڈیٹا ڈاؤن لوڈز")}
          </h2>
          <p className="mt-2 text-sm text-foreground/75">
            {t(
              "Anonymised summary statistics only — no raw or identifiable data. Free to reuse with attribution: \"Sehatnaama Research, 2026\".",
              "صرف گمنام خلاصہ اعداد و شمار — کوئی خام یا شناختی ڈیٹا نہیں۔ حوالہ کے ساتھ آزادانہ استعمال کریں: \"Sehatnaama Research، 2026\"۔"
            )}
          </p>
          <ul className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {DOWNLOADS.map((d, i) => (
              <li key={i} className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{t(d.en, d.ur)}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{d.type} · {d.size}</p>
                  </div>
                </div>
                <a
                  href={d.file}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  {t("Download", "ڈاؤن لوڈ")}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-foreground">
            {t("Project timeline", "منصوبے کی ٹائم لائن")}
          </h2>
          <ol className="mt-5 space-y-4 border-s-2 border-border ps-6">
            {TIMELINE.map((step, i) => (
              <li key={i} className="relative">
                <span
                  className={`absolute -start-[34px] flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    step.done
                      ? "border-primary bg-primary text-primary-foreground"
                      : step.current
                        ? "border-accent bg-accent/20 text-accent"
                        : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {step.done ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{step.date}</p>
                <p className="mt-0.5 text-foreground">{t(step.en, step.ur)}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Reuse note */}
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-foreground/80">
          <p className="font-semibold text-foreground">{t("How to cite this dashboard", "اس ڈیش بورڈ کا حوالہ کیسے دیں")}</p>
          <p className="mt-2 font-mono text-xs">
            Sehatnaama Research Team. (2026). <em>Sehatnaama Research Dashboard</em>. Retrieved from https://sehatnaama.org/research
          </p>
        </div>
      </div>
    </Layout>
  );
}
