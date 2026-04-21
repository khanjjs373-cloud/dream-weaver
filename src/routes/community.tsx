import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import community from "@/assets/community.jpg";
import { useState } from "react";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Sehatnaama" },
      { name: "description", content: "Join the Sehatnaama caregiver community on WhatsApp and via newsletter." },
      { property: "og:title", content: "Sehatnaama Community" },
      { property: "og:description", content: "Join the Sehatnaama caregiver community." },
    ],
  }),
  component: Community,
});

function Community() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("You are not alone", "آپ اکیلے نہیں ہیں")}</h1>
        <p className="mt-2 text-muted-foreground">{t("Join Pakistani families walking the same path.", "اسی راہ پر چلنے والے پاکستانی خاندانوں سے جڑیں۔")}</p>

        <img src={community} alt="Community" width={1280} height={896} loading="lazy" className="mt-6 rounded-xl shadow-md" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a href="#" className="rounded-2xl border border-success/40 bg-success-soft p-6 transition-all hover:shadow-lg">
            <MessageCircle className="h-8 w-8 text-success" />
            <h2 className="mt-3 font-serif text-2xl text-foreground">{t("WhatsApp Community", "واٹس ایپ کمیونٹی")}</h2>
            <p className="mt-2 text-sm text-foreground/80">{t("Three groups: caregivers, early-diagnosed, and family members. Moderated, kind, and Urdu-friendly.", "تین گروپ: نگہداشت کنندہ، ابتدائی تشخیص شدہ، اور خاندان کے افراد۔ نگرانی شدہ، مہربان، اور اردو دوست۔")}</p>
            <span className="mt-4 inline-flex rounded-md bg-success px-4 py-2 text-sm font-medium text-success-foreground">{t("Join WhatsApp", "واٹس ایپ جوائن کریں")}</span>
          </a>

          <div className="rounded-2xl border border-primary/30 bg-secondary/40 p-6">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="mt-3 font-serif text-2xl text-foreground">{t("Monthly newsletter", "ماہانہ خبر نامہ")}</h2>
            <p className="mt-2 text-sm text-foreground/80">{t("One thoughtful email a month. New guides, family stories, no spam.", "مہینے میں ایک سوچا سمجھا ای میل۔ نئی گائیڈز، خاندانی کہانیاں، کوئی اسپام نہیں۔")}</p>
            {subscribed ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-success px-4 py-2 text-sm text-success-foreground"><CheckCircle2 className="h-4 w-4" /> {t("You're in. Check your inbox.", "آپ شامل ہو گئے۔ اپنا ان باکس چیک کریں۔")}</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="mt-4 flex gap-2">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={t("you@example.com", "آپ@مثال.com")} className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm" />
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">{t("Subscribe", "سبسکرائب")}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
