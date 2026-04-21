import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import aboutImg from "@/assets/about-researcher.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sehatnaama" },
      { name: "description", content: "Why Sehatnaama exists and the gap it fills in Pakistani health information." },
      { property: "og:title", content: "About Sehatnaama" },
      { property: "og:description", content: "Why Sehatnaama exists and the gap it fills in Pakistani health information." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <Layout>
      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("About Sehatnaama", "صحت نامہ کے بارے میں")}</h1>
        <p className="mt-2 text-lg text-muted-foreground" style={{ fontFamily: "var(--font-urdu)" }}>صحت نامہ — Pakistan's health testimony</p>

        <img src={aboutImg} alt="Researcher" width={1280} height={896} loading="lazy" className="mt-8 rounded-xl shadow-lg" />

        <section className="prose prose-lg mt-8 max-w-none text-foreground/85">
          <h2 className="font-serif text-2xl text-foreground">{t("The name", "نام")}</h2>
          <p>{t(
            "Sehat means health. Naama means a written record, a testimony, a chronicle. Sehatnaama is a written record of health — for a country that needed one in its own languages.",
            "صحت کا مطلب تندرستی ہے۔ نامہ کا مطلب ایک تحریری دستاویز، ایک گواہی، ایک تاریخ۔ صحت نامہ صحت کی ایک تحریری دستاویز ہے — ایک ایسے ملک کے لیے جسے اپنی زبانوں میں اس کی ضرورت تھی۔"
          )}</p>

          <h2 className="mt-8 font-serif text-2xl text-foreground">{t("The gap", "خلا")}</h2>
          <p>{t(
            "Pakistan has over 240 million people. We speak Urdu, Punjabi, Sindhi, Saraiki, Pashto, Balochi and more. Yet almost every dementia resource is in English, written by and for Western families — assuming nursing homes, separate bedrooms, and a level of clinical access most Pakistani families do not have.",
            "پاکستان کی آبادی 24 کروڑ سے زیادہ ہے۔ ہم اردو، پنجابی، سندھی، سرائیکی، پشتو، بلوچی اور بہت سی زبانیں بولتے ہیں۔ پھر بھی ڈیمنشیا کا تقریباً ہر وسیلہ انگریزی میں ہے، مغربی خاندانوں کی طرف سے اور ان کے لیے لکھا گیا ہے۔"
          )}</p>

          <h2 className="mt-8 font-serif text-2xl text-foreground">{t("What we do", "ہم کیا کرتے ہیں")}</h2>
          <ul>
            <li>{t("Translate complex medical knowledge into clear, dignified Urdu and English.", "پیچیدہ طبی علم کا واضح، باوقار اردو اور انگریزی میں ترجمہ کرنا۔")}</li>
            <li>{t("Build practical tools — symptom checker, doctor letter, caregiver diary.", "عملی اوزار بنانا — علامات کا جائزہ، ڈاکٹر کا خط، نگہداشت ڈائری۔")}</li>
            <li>{t("Centre Pakistani realities: joint families, household caregiving, limited specialist access.", "پاکستانی حقیقتوں کو مرکز میں رکھنا: مشترکہ خاندان، گھریلو نگہداشت، محدود ماہر تک رسائی۔")}</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}
