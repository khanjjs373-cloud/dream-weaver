import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Layout } from "@/components/Layout";
import heroFamily from "@/assets/hero-family.jpg";
import { ArrowRight, Brain, ClipboardList, BookHeart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sehatnaama — Pakistan's Health Testimony" },
      { name: "description", content: "Bilingual Alzheimer's awareness, symptom checker, and caregiver tools for Pakistani families." },
      { property: "og:title", content: "Sehatnaama — Pakistan's Health Testimony" },
      { property: "og:description", content: "Bilingual Alzheimer's awareness for Pakistani families." },
    ],
  }),
  component: Index,
});

const LANGS = [
  { code: "en", label: "English", native: "English", available: true, font: "var(--font-sans)" },
  { code: "ur", label: "Urdu", native: "اردو", available: true, font: "var(--font-urdu)" },
  { code: "pa", label: "Punjabi", native: "پنجابی", available: false, font: "var(--font-urdu)" },
  { code: "sd", label: "Sindhi", native: "سنڌي", available: false, font: "var(--font-urdu)" },
  { code: "skr", label: "Saraiki", native: "سرائیکی", available: false, font: "var(--font-urdu)" },
  { code: "ps", label: "Pashto", native: "پښتو", available: false, font: "var(--font-urdu)" },
];

function Index() {
  const { t, setLang, lang } = useLang();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-urgent-soft/40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              {t("Pakistan · Bilingual · Free", "پاکستان · دو زبانیں · مفت")}
            </div>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-6xl">
              Sehatnaama
              <span className="block text-2xl text-primary md:text-3xl" style={{ fontFamily: "var(--font-urdu)" }}>صحت نامہ</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/80">
              {t(
                "Pakistan's health testimony — clear, dignified Alzheimer's information and tools for the families who carry it.",
                "پاکستان کی صحت کی گواہی — الزائمر کے بارے میں واضح، باوقار معلومات اور ان خاندانوں کے لیے اوزار جو اسے سہتے ہیں۔"
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/symptom-checker" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90">
                {t("Start Symptom Checker", "علامات کا جائزہ شروع کریں")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link to="/alzheimers" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">
                {t("Read the Guide", "گائیڈ پڑھیں")}
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={heroFamily} alt={t("A Pakistani family caring for an elder", "ایک پاکستانی خاندان بزرگ کی دیکھ بھال کرتے ہوئے")} width={1536} height={1024} className="rounded-2xl shadow-xl ring-1 ring-border" />
          </div>
        </div>
      </section>

      {/* LANGUAGE PICKER */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center font-serif text-2xl text-foreground md:text-3xl">
            {t("Choose your language", "اپنی زبان چنیں")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            {t("English and Urdu are fully translated. More languages coming soon.", "انگریزی اور اردو مکمل ترجمہ شدہ ہیں۔ مزید زبانیں جلد آرہی ہیں۔")}
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {LANGS.map(L => (
              <button
                key={L.code}
                onClick={() => L.available && setLang(L.code as "en" | "ur")}
                disabled={!L.available}
                className={`group flex flex-col items-center justify-center rounded-xl border px-3 py-5 transition-all ${
                  L.available
                    ? lang === L.code
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-background hover:border-primary hover:shadow-sm"
                    : "border-dashed border-border bg-muted/40 text-muted-foreground"
                }`}
              >
                <span className="text-xl font-medium" style={{ fontFamily: L.font }}>{L.native}</span>
                <span className="mt-1 text-[10px] uppercase tracking-wider opacity-70">{L.label}</span>
                {!L.available && <span className="mt-1 text-[10px] italic">coming soon</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { to: "/symptom-checker", icon: ClipboardList, en: "Symptom Checker", ur: "علامات کا جائزہ", den: "10 questions, three clear next steps.", dur: "10 سوالات، تین واضح اگلے قدم۔" },
            { to: "/alzheimers", icon: Brain, en: "Alzheimer's Guide", ur: "الزائمر گائیڈ", den: "What it is, stages, and how to help.", dur: "یہ کیا ہے، مراحل، اور مدد کیسے کریں۔" },
            { to: "/caregiver-diary", icon: BookHeart, en: "Caregiver Diary", ur: "نگہداشت ڈائری", den: "A private place. Stays in your browser.", dur: "ایک نجی جگہ۔ آپ کے براؤزر میں محفوظ۔" },
          ].map(c => (
            <Link key={c.to} to={c.to} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <c.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{t(c.en, c.ur)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(c.den, c.dur)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t("Open", "کھولیں")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">{t("Why Sehatnaama exists", "صحت نامہ کیوں موجود ہے")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            {t(
              "Most health information about dementia in Pakistan is in English, technical, and built for Western families. Sehatnaama is written for our parents, our grandparents, and the people who love them — in their language, with their context.",
              "پاکستان میں ڈیمنشیا کے بارے میں زیادہ تر صحت کی معلومات انگریزی میں، تکنیکی، اور مغربی خاندانوں کے لیے بنائی گئی ہیں۔ صحت نامہ ہمارے والدین، دادا دادی، اور ان لوگوں کے لیے لکھا گیا ہے جو ان سے محبت کرتے ہیں — ان کی زبان میں، ان کے ماحول کے ساتھ۔"
            )}
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90">
            {t("Read our mission", "ہمارا مشن پڑھیں")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
