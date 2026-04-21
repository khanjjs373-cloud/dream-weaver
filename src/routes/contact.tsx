import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sehatnaama" },
      { name: "description", content: "Get in touch with the Sehatnaama team." },
      { property: "og:title", content: "Contact Sehatnaama" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Contact us", "ہم سے رابطہ")}</h1>
        <p className="mt-2 text-muted-foreground">{t("Questions, partnerships, or to share your family's story.", "سوالات، شراکت، یا اپنے خاندان کی کہانی شیئر کرنے کے لیے۔")}</p>

        <a href="mailto:hello@sehatnaama.pk" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <Mail className="h-4 w-4" /> hello@sehatnaama.pk
        </a>

        {sent ? (
          <div className="mt-8 rounded-lg border border-success/40 bg-success-soft p-6 text-foreground">
            <CheckCircle2 className="h-6 w-6 text-success" />
            <p className="mt-2 font-medium">{t("Message sent. We'll reply soon.", "پیغام بھیج دیا گیا۔ ہم جلد جواب دیں گے۔")}</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium">{t("Name", "نام")}</label>
              <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium">{t("Email", "ای میل")}</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium">{t("Message", "پیغام")}</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">{t("Send", "بھیجیں")}</button>
          </form>
        )}
      </div>
    </Layout>
  );
}
