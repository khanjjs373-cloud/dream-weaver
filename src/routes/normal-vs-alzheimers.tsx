import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/normal-vs-alzheimers")({
  head: () => ({
    meta: [
      { title: "Normal Ageing vs Alzheimer's — Sehatnaama" },
      { name: "description", content: "Side-by-side comparison: what's part of normal ageing and what's a warning sign." },
      { property: "og:title", content: "Normal Ageing vs Alzheimer's" },
      { property: "og:description", content: "Side-by-side comparison: ageing vs warning signs." },
    ],
  }),
  component: Compare,
});

const ROWS = [
  { en: "Forgetting names", ur: "نام بھولنا", n_en: "Sometimes — recalls later", n_ur: "کبھی کبھی — بعد میں یاد آ جاتا ہے", a_en: "Frequently — never recalls", a_ur: "اکثر — بالکل یاد نہیں آتا" },
  { en: "Misplacing items", ur: "چیزیں کھونا", n_en: "Retraces steps and finds them", n_ur: "قدم واپس لیتا ہے اور پا لیتا ہے", a_en: "Puts items in odd places (keys in fridge)", a_ur: "عجیب جگہوں پر رکھ دیتا ہے (چابی فریج میں)" },
  { en: "Following a recipe", ur: "ترکیب پر عمل", n_en: "Occasionally needs reminders", n_ur: "کبھی یاد دہانی چاہیے", a_en: "Cannot follow familiar recipes", a_ur: "جانی پہچانی ترکیب پر بھی عمل نہیں کر سکتا" },
  { en: "Time and date", ur: "وقت اور تاریخ", n_en: "Forgets day, remembers later", n_ur: "دن بھول جاتا ہے، بعد میں یاد آتا ہے", a_en: "Loses track of season, year, where they are", a_ur: "موسم، سال، جگہ کا ہوش نہیں" },
  { en: "Conversations", ur: "گفتگو", n_en: "Pauses to find a word", n_ur: "لفظ ڈھونڈنے کے لیے رکتا ہے", a_en: "Stops mid-sentence, repeats stories", a_ur: "جملے کے بیچ رک جاتا ہے، کہانیاں دہراتا ہے" },
  { en: "Money", ur: "پیسے", n_en: "Occasional math errors", n_ur: "کبھی حساب میں غلطی", a_en: "Cannot manage bills, falls for scams", a_ur: "بل ادا نہیں کر سکتا، دھوکے میں آ جاتا ہے" },
  { en: "Driving / commuting", ur: "گاڑی / سفر", n_en: "Cautious, occasional wrong turn", n_ur: "محتاط، کبھی غلط موڑ", a_en: "Gets lost in familiar areas", a_ur: "جانی پہچانی جگہوں پر کھو جاتا ہے" },
  { en: "Mood", ur: "موڈ", n_en: "Has preferences, occasionally irritable", n_ur: "ترجیحات ہیں، کبھی چڑچڑا", a_en: "Sudden mood swings, suspicion, withdrawal", a_ur: "اچانک موڈ بدلنا، شک، الگ تھلگ ہو جانا" },
  { en: "Hygiene", ur: "صفائی", n_en: "Maintained as usual", n_ur: "معمول کے مطابق", a_en: "Neglects bathing, wears same clothes", a_ur: "غسل نہیں کرتا، وہی کپڑے پہنتا ہے" },
  { en: "Insight", ur: "بصیرت", n_en: "Aware of memory lapses", n_ur: "اپنی فراموشی کا علم ہے", a_en: "Denies any problem", a_ur: "کسی مسئلے سے انکار" },
];

function Compare() {
  const { t } = useLang();
  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Normal ageing vs Alzheimer's", "عام بڑھاپا بمقابلہ الزائمر")}</h1>
        <p className="mt-2 text-muted-foreground">{t("A side-by-side comparison.", "ایک ساتھ موازنہ۔")}</p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-medium">
            <div className="p-3">{t("Area", "شعبہ")}</div>
            <div className="p-3 bg-success">{t("Normal Ageing", "عام بڑھاپا")}</div>
            <div className="p-3 bg-accent">{t("Alzheimer's", "الزائمر")}</div>
          </div>
          {ROWS.map((r, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-muted/30" : ""}`}>
              <div className="border-t border-border p-3 font-medium text-foreground">{t(r.en, r.ur)}</div>
              <div className="border-t border-border bg-success-soft/40 p-3 text-foreground/85">{t(r.n_en, r.n_ur)}</div>
              <div className="border-t border-border bg-urgent-soft/60 p-3 text-foreground/85">{t(r.a_en, r.a_ur)}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
