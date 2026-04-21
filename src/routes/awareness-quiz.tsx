import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/awareness-quiz")({
  head: () => ({
    meta: [
      { title: "Awareness Quiz — Sehatnaama" },
      { name: "description", content: "Test what you know about Alzheimer's in 10 questions." },
      { property: "og:title", content: "Alzheimer's Awareness Quiz" },
      { property: "og:description", content: "Test what you know in 10 questions." },
    ],
  }),
  component: Quiz,
});

type Q = { en: string; ur: string; opts: { en: string; ur: string }[]; correct: number; ex_en: string; ex_ur: string };

const QS: Q[] = [
  { en: "Alzheimer's is a normal part of ageing.", ur: "الزائمر بڑھاپے کا معمول کا حصہ ہے۔", opts: [{ en: "True", ur: "صحیح" }, { en: "False", ur: "غلط" }], correct: 1, ex_en: "It is a brain disease, not normal ageing.", ex_ur: "یہ ایک دماغی بیماری ہے، عام بڑھاپا نہیں۔" },
  { en: "Which is usually the earliest symptom?", ur: "عام طور پر سب سے پہلی علامت کیا ہے؟", opts: [{ en: "Trouble walking", ur: "چلنے میں مشکل" }, { en: "Short-term memory loss", ur: "حالیہ یادداشت کا نقصان" }, { en: "Loss of vision", ur: "بینائی کا نقصان" }], correct: 1, ex_en: "The hippocampus is affected first.", ex_ur: "ہپوکیمپس سب سے پہلے متاثر ہوتا ہے۔" },
  { en: "Sundowning means…", ur: "سن ڈاؤننگ کا مطلب…", opts: [{ en: "Sleeping too much", ur: "زیادہ سونا" }, { en: "Confusion in the evening", ur: "شام کو الجھن" }, { en: "Sun sensitivity", ur: "سورج کی حساسیت" }], correct: 1, ex_en: "Restlessness or confusion that worsens in the late afternoon.", ex_ur: "بے چینی یا الجھن جو دوپہر کے بعد بڑھ جاتی ہے۔" },
  { en: "Music can help calm a person with Alzheimer's.", ur: "موسیقی الزائمر کے مریض کو پرسکون کر سکتی ہے۔", opts: [{ en: "True", ur: "صحیح" }, { en: "False", ur: "غلط" }], correct: 0, ex_en: "Familiar songs from youth often help.", ex_ur: "جوانی کے گانے اکثر مدد کرتے ہیں۔" },
  { en: "Is there a cure for Alzheimer's today?", ur: "کیا آج الزائمر کا علاج ممکن ہے؟", opts: [{ en: "Yes", ur: "ہاں" }, { en: "No, but symptoms can be managed", ur: "نہیں، لیکن علامات قابو میں رہ سکتی ہیں" }], correct: 1, ex_en: "Medicines can slow symptoms but not cure.", ex_ur: "دوائیاں علامات سست کرتی ہیں، علاج نہیں۔" },
  { en: "What should you do if your loved one wanders?", ur: "اگر آپ کا پیارا بھٹک جائے تو کیا کریں؟", opts: [{ en: "Lock the door from inside", ur: "اندر سے دروازہ بند کریں" }, { en: "Add a high lock + ID bracelet", ur: "اونچی کنڈی + شناختی کڑا" }, { en: "Argue with them", ur: "ان سے بحث کریں" }], correct: 1, ex_en: "Practical safety, not confrontation.", ex_ur: "عملی حفاظت، بحث نہیں۔" },
  { en: "B12 deficiency can cause memory problems.", ur: "B12 کی کمی یادداشت کے مسائل پیدا کر سکتی ہے۔", opts: [{ en: "True", ur: "صحیح" }, { en: "False", ur: "غلط" }], correct: 0, ex_en: "And it's reversible — always test for it.", ex_ur: "اور یہ قابل علاج ہے — ہمیشہ ٹیسٹ کرائیں۔" },
  { en: "Caregiver burnout is rare in joint families.", ur: "مشترکہ خاندان میں نگہداشت کنندہ کی تھکن کم ہوتی ہے۔", opts: [{ en: "True", ur: "صحیح" }, { en: "False — it is common and often hidden", ur: "غلط — یہ عام ہے اور اکثر چھپ جاتی ہے" }], correct: 1, ex_en: "Family duty often masks exhaustion.", ex_ur: "خاندانی فرض اکثر تھکاوٹ چھپا دیتا ہے۔" },
  { en: "Which professional should diagnose dementia?", ur: "ڈیمنشیا کی تشخیص کون کرتا ہے؟", opts: [{ en: "Pharmacist", ur: "فارماسسٹ" }, { en: "Neurologist or qualified physician", ur: "نیورولوجسٹ یا مستند ڈاکٹر" }, { en: "Hakim", ur: "حکیم" }], correct: 1, ex_en: "A proper cognitive assessment is needed.", ex_ur: "ایک مناسب علمی جائزہ ضروری ہے۔" },
  { en: "Reading and social activity may lower dementia risk.", ur: "پڑھنا اور سماجی سرگرمی ڈیمنشیا کا خطرہ کم کر سکتی ہے۔", opts: [{ en: "True", ur: "صحیح" }, { en: "False", ur: "غلط" }], correct: 0, ex_en: "Cognitive reserve is real.", ex_ur: "ذہنی ذخیرہ حقیقی ہے۔" },
];

function Quiz() {
  const { t } = useLang();
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QS.length).fill(null));
  const [done, setDone] = useState(false);

  const score = answers.reduce((s, a, i) => s + (a === QS[i].correct ? 1 : 0), 0);
  const all = answers.every(a => a !== null);

  if (done) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-4 py-12">
          <div className="rounded-2xl border-2 border-primary bg-secondary/40 p-8 text-center">
            <h1 className="font-serif text-3xl text-foreground">{t("Your score", "آپ کا اسکور")}</h1>
            <p className="mt-2 text-5xl font-bold text-primary">{score} / {QS.length}</p>
          </div>
          <ol className="mt-8 space-y-4">
            {QS.map((q, i) => {
              const correct = answers[i] === q.correct;
              return (
                <li key={i} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-start gap-2">
                    {correct ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />}
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{t(q.en, q.ur)}</p>
                      <p className="mt-1 text-sm text-success">{t("Correct: ", "درست: ")}{t(q.opts[q.correct].en, q.opts[q.correct].ur)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t(q.ex_en, q.ex_ur)}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="mt-6 flex gap-3">
            <button onClick={() => { setAnswers(Array(QS.length).fill(null)); setDone(false); }} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              <RotateCcw className="h-4 w-4" /> {t("Retake", "دوبارہ")}
            </button>
            <Link to="/alzheimers" className="rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">{t("Read the guide", "گائیڈ پڑھیں")}</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Awareness Quiz", "آگاہی کوئز")}</h1>
        <p className="mt-2 text-muted-foreground">{t("10 questions. See what you know.", "10 سوالات۔ دیکھیں آپ کیا جانتے ہیں۔")}</p>

        <ol className="mt-8 space-y-4">
          {QS.map((q, i) => (
            <li key={i} className="rounded-lg border border-border bg-card p-5">
              <p className="font-medium text-foreground"><span className="text-primary">{i + 1}.</span> {t(q.en, q.ur)}</p>
              <div className="mt-3 grid gap-2">
                {q.opts.map((o, oi) => (
                  <button
                    key={oi}
                    onClick={() => setAnswers(a => a.map((v, idx) => idx === i ? oi : v))}
                    className={`rounded-md border px-4 py-2 text-left text-sm transition-colors ${answers[i] === oi ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-muted"}`}
                  >
                    {t(o.en, o.ur)}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <button onClick={() => setDone(true)} disabled={!all} className="mt-8 w-full rounded-md bg-primary px-5 py-3.5 text-base font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
          {all ? t("See score", "اسکور دیکھیں") : t("Answer all questions", "تمام سوالات کے جواب دیں")}
        </button>
      </div>
    </Layout>
  );
}
