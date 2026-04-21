import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { Printer } from "lucide-react";

export const Route = createFileRoute("/doctor-letter")({
  head: () => ({
    meta: [
      { title: "Doctor Letter Generator — Sehatnaama" },
      { name: "description", content: "Generate a print-ready letter requesting neurological assessment." },
      { property: "og:title", content: "Doctor Letter Generator" },
      { property: "og:description", content: "Generate a print-ready letter for your doctor." },
    ],
  }),
  component: DoctorLetter,
});

function DoctorLetter() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    relation: "",
    yourName: "",
    phone: "",
    symptoms: "",
    duration: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const today = new Date().toLocaleDateString(lang === "ur" ? "ur-PK" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Layout>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
        <div className="no-print">
          <h1 className="font-serif text-3xl text-foreground">{t("Doctor Letter Generator", "ڈاکٹر کا خط بنانے والا")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("Fill the form. A formatted letter appears on the right. Print it and bring it to the appointment.", "فارم بھریں۔ دائیں طرف ایک خط ظاہر ہوگا۔ اسے پرنٹ کریں اور اپوائنٹمنٹ پر لے جائیں۔")}</p>

          <div className="mt-6 space-y-4">
            {[
              { k: "patientName", en: "Patient's full name", ur: "مریض کا پورا نام" },
              { k: "age", en: "Age", ur: "عمر" },
              { k: "relation", en: "Your relationship to patient", ur: "آپ کا مریض سے رشتہ" },
              { k: "yourName", en: "Your full name", ur: "آپ کا پورا نام" },
              { k: "phone", en: "Phone number", ur: "فون نمبر" },
              { k: "duration", en: "How long have symptoms been present?", ur: "علامات کب سے ہیں؟" },
            ].map(f => (
              <div key={f.k}>
                <label className="block text-sm font-medium text-foreground">{t(f.en, f.ur)}</label>
                <input value={form[f.k as keyof typeof form]} onChange={set(f.k as keyof typeof form)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground">{t("Main symptoms observed", "اہم مشاہدہ شدہ علامات")}</label>
              <textarea value={form.symptoms} onChange={set("symptoms")} rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            </div>
          </div>

          <button onClick={() => window.print()} className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Printer className="h-4 w-4" /> {t("Print Letter", "خط پرنٹ کریں")}
          </button>
        </div>

        {/* LETTER PREVIEW */}
        <div className="rounded-lg border border-border bg-card p-8 shadow-sm print:border-0 print:shadow-none" style={{ minHeight: 600 }}>
          <p className="text-right text-sm text-foreground/70">{today}</p>
          <p className="mt-6 text-foreground">{t("Dear Doctor,", "محترم ڈاکٹر صاحب،")}</p>
          <p className="mt-4 leading-relaxed text-foreground/90">
            {t(
              `I am writing to request a neurological assessment for ${form.patientName || "[patient name]"}, age ${form.age || "[age]"}, who is my ${form.relation || "[relation]"}.`,
              `میں ${form.patientName || "[مریض کا نام]"} کے لیے نیورولوجیکل جائزے کی درخواست کر رہا/رہی ہوں، عمر ${form.age || "[عمر]"} سال، جو میرا/میری ${form.relation || "[رشتہ]"} ہے۔`
            )}
          </p>
          <p className="mt-4 leading-relaxed text-foreground/90">
            {t("Over the past", "گزشتہ")} <strong>{form.duration || t("[duration]", "[مدت]")}</strong>, {t("our family has observed the following changes:", "ہمارے خاندان نے درج ذیل تبدیلیاں دیکھی ہیں:")}
          </p>
          <p className="mt-2 whitespace-pre-wrap rounded-md bg-muted/40 p-3 text-sm text-foreground/85">
            {form.symptoms || t("[Describe symptoms in detail]", "[علامات کی تفصیل]")}
          </p>
          <p className="mt-4 leading-relaxed text-foreground/90">
            {t(
              "We are concerned these may indicate Alzheimer's disease or another form of dementia, and would be grateful for a comprehensive cognitive assessment, including referral to a neurologist or memory clinic if appropriate.",
              "ہمیں تشویش ہے کہ یہ الزائمر یا کسی اور قسم کے ڈیمنشیا کی نشاندہی کر سکتی ہیں، اور ہم ایک جامع علمی جائزے کے لیے، بشمول نیورولوجسٹ یا میموری کلینک کے حوالے، شکر گزار ہوں گے۔"
            )}
          </p>
          <p className="mt-6 text-foreground">{t("Thank you for your time and care.", "آپ کے وقت اور توجہ کا شکریہ۔")}</p>
          <p className="mt-8 text-foreground">{t("Sincerely,", "مخلص،")}</p>
          <p className="mt-4 font-medium text-foreground">{form.yourName || t("[Your name]", "[آپ کا نام]")}</p>
          <p className="text-sm text-foreground/70">{form.phone || t("[Phone]", "[فون]")}</p>
        </div>
      </div>
    </Layout>
  );
}
