import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, Info, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/symptom-checker")({
  head: () => ({
    meta: [
      { title: "Symptom Checker — Sehatnaama" },
      { name: "description", content: "10 questions to help you understand what you're seeing. Not a diagnosis." },
      { property: "og:title", content: "Alzheimer's Symptom Checker" },
      { property: "og:description", content: "10 quick questions, three clear next steps." },
    ],
  }),
  component: Checker,
});

const QUESTIONS: Array<{ en: string; ur: string }> = [
  { en: "Does the person frequently repeat the same question within a short time?", ur: "کیا یہ شخص تھوڑی دیر میں ایک ہی سوال بار بار پوچھتا ہے؟" },
  { en: "Have they forgotten important recent events (a wedding, a death, a visit)?", ur: "کیا وہ حالیہ اہم واقعات بھول چکے ہیں (شادی، موت، ملاقات)؟" },
  { en: "Do they struggle to find common words mid-sentence?", ur: "کیا وہ جملے کے بیچ عام الفاظ ڈھونڈنے میں مشکل محسوس کرتے ہیں؟" },
  { en: "Have they got lost in a familiar place (own neighbourhood, mosque)?", ur: "کیا وہ جانی پہچانی جگہ پر کھو گئے ہیں (اپنا محلہ، مسجد)؟" },
  { en: "Are they unable to manage money, bills, or shopping as before?", ur: "کیا وہ پیسے، بل، یا خریداری پہلے کی طرح سنبھال نہیں پاتے؟" },
  { en: "Have they stopped enjoying activities they used to love?", ur: "کیا انہوں نے وہ سرگرمیاں چھوڑ دی ہیں جو پہلے پسند تھیں؟" },
  { en: "Are they more confused, restless or angry in the evening?", ur: "کیا وہ شام کے وقت زیادہ الجھن، بے چینی یا غصے کا شکار ہوتے ہیں؟" },
  { en: "Have they put items in unusual places (keys in fridge, slippers in cupboard)?", ur: "کیا انہوں نے چیزیں عجیب جگہوں پر رکھی ہیں (چابی فریج میں، چپل الماری میں)؟" },
  { en: "Has their personality clearly changed (suspicious, withdrawn, blunt)?", ur: "کیا ان کی شخصیت واضح طور پر بدل گئی ہے (شک، الگ تھلگ، سخت)؟" },
  { en: "Do they need help with dressing, bathing, or eating?", ur: "کیا انہیں کپڑے پہننے، نہانے، یا کھانے میں مدد چاہیے؟" },
];

function Checker() {
  const { t } = useLang();
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.filter(a => a === true).length;
  const allAnswered = answers.every(a => a !== null);

  const reset = () => { setAnswers(Array(QUESTIONS.length).fill(null)); setSubmitted(false); };

  if (submitted) {
    let tier: "low" | "mid" | "high" = "low";
    if (score >= 6) tier = "high";
    else if (score >= 3) tier = "mid";

    const result = {
      low: { en: "Likely normal", ur: "غالباً معمول", color: "success", desc_en: "Few warning signs. Keep an eye on changes and revisit in 6 months.", desc_ur: "بہت کم انتباہی علامات۔ تبدیلیوں پر نظر رکھیں اور 6 ماہ بعد دوبارہ جائزہ لیں۔", Icon: CheckCircle2 },
      mid: { en: "Talk to a doctor", ur: "ڈاکٹر سے بات کریں", color: "accent", desc_en: "Several signs are present. Schedule a visit with your family doctor for evaluation.", desc_ur: "کئی علامات موجود ہیں۔ جائزے کے لیے فیملی ڈاکٹر سے ملاقات کا وقت لیں۔", Icon: Info },
      high: { en: "See a neurologist soon", ur: "جلد نیورولوجسٹ سے ملیں", color: "urgent", desc_en: "Many warning signs are present. Please seek a neurologist or memory clinic assessment without delay.", desc_ur: "بہت سی انتباہی علامات موجود ہیں۔ بغیر تاخیر کے نیورولوجسٹ یا میموری کلینک سے ملیں۔", Icon: AlertTriangle },
    }[tier];

    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-4 py-12">
          <div className={`rounded-2xl border-2 p-8 ${tier === "high" ? "border-accent bg-urgent-soft" : tier === "mid" ? "border-accent/50 bg-urgent-soft/60" : "border-success bg-success-soft"}`}>
            <result.Icon className={`h-12 w-12 ${tier === "low" ? "text-success" : "text-accent"}`} />
            <h1 className="mt-4 font-serif text-3xl text-foreground">{t(result.en, result.ur)}</h1>
            <p className="mt-2 text-sm text-foreground/70">{t("You answered yes to", "آپ نے ہاں کہا")}: <strong>{score} / {QUESTIONS.length}</strong></p>
            <p className="mt-4 text-foreground/85">{t(result.desc_en, result.desc_ur)}</p>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">{t("Important:", "اہم:")}</strong> {t(
              "This is not a medical diagnosis. Only a qualified doctor can diagnose Alzheimer's after proper assessment.",
              "یہ طبی تشخیص نہیں ہے۔ صرف ایک مستند ڈاکٹر مناسب جائزے کے بعد الزائمر کی تشخیص کر سکتا ہے۔"
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/doctor-letter" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              {t("Generate doctor letter", "ڈاکٹر کا خط بنائیں")}
            </Link>
            <Link to="/alzheimers" className="rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">
              {t("Read the guide", "گائیڈ پڑھیں")}
            </Link>
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">
              <RotateCcw className="h-4 w-4" /> {t("Start over", "دوبارہ شروع کریں")}
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Symptom Checker", "علامات کا جائزہ")}</h1>
        <p className="mt-2 text-muted-foreground">{t("Answer 10 questions about a loved one. Takes about 2 minutes.", "اپنے پیارے کے بارے میں 10 سوالات کے جواب دیں۔ تقریباً 2 منٹ۔")}</p>

        <ol className="mt-8 space-y-4">
          {QUESTIONS.map((q, i) => (
            <li key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <p className="flex-1 text-foreground">{t(q.en, q.ur)}</p>
              </div>
              <div className="mt-3 flex gap-2 ltr:pl-9 rtl:pr-9">
                <button
                  onClick={() => setAnswers(a => a.map((v, idx) => idx === i ? true : v))}
                  className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${answers[i] === true ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background hover:bg-muted"}`}
                >{t("Yes", "ہاں")}</button>
                <button
                  onClick={() => setAnswers(a => a.map((v, idx) => idx === i ? false : v))}
                  className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${answers[i] === false ? "border-success bg-success text-success-foreground" : "border-border bg-background hover:bg-muted"}`}
                >{t("No", "نہیں")}</button>
              </div>
            </li>
          ))}
        </ol>

        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="mt-8 w-full rounded-md bg-primary px-5 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {allAnswered ? t("See my result", "میرا نتیجہ دیکھیں") : t(`Answer all ${QUESTIONS.length} questions`, `تمام ${QUESTIONS.length} سوالات کے جواب دیں`)}
        </button>
      </div>
    </Layout>
  );
}
