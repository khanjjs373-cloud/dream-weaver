import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Lock, Trash2, Plus } from "lucide-react";

export const Route = createFileRoute("/caregiver-diary")({
  head: () => ({
    meta: [
      { title: "Caregiver Diary — Sehatnaama" },
      { name: "description", content: "A private journal for caregivers. Stays in your browser, never sent anywhere." },
      { property: "og:title", content: "Caregiver Diary" },
      { property: "og:description", content: "A private journal for caregivers." },
    ],
  }),
  component: Diary,
});

const PROMPTS = [
  { en: "What was the hardest moment today?", ur: "آج کا سب سے مشکل لمحہ کیا تھا؟" },
  { en: "What was one good moment, however small?", ur: "ایک اچھا لمحہ کیا تھا، چاہے چھوٹا سا؟" },
  { en: "What do you wish someone understood?", ur: "آپ چاہتے ہیں کوئی کیا سمجھے؟" },
  { en: "What did your loved one enjoy today?", ur: "آج آپ کے پیارے کو کیا پسند آیا؟" },
  { en: "What kindness did you show yourself?", ur: "آپ نے اپنے ساتھ کیا مہربانی کی؟" },
];

type Entry = { id: string; date: string; prompt: string; text: string };

function Diary() {
  const { t, lang } = useLang();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [text, setText] = useState("");
  const [promptIdx] = useState(() => Math.floor(Math.random() * PROMPTS.length));

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sehatnaama-diary");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  const save = (next: Entry[]) => {
    setEntries(next);
    localStorage.setItem("sehatnaama-diary", JSON.stringify(next));
  };

  const add = () => {
    if (!text.trim()) return;
    const prompt = PROMPTS[promptIdx];
    save([{ id: crypto.randomUUID(), date: new Date().toISOString(), prompt: t(prompt.en, prompt.ur), text }, ...entries]);
    setText("");
  };

  const remove = (id: string) => save(entries.filter(e => e.id !== id));

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("Caregiver Diary", "نگہداشت ڈائری")}</h1>
        <p className="mt-2 text-muted-foreground">{t("A private place. Just for you.", "ایک نجی جگہ۔ صرف آپ کے لیے۔")}</p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-success/40 bg-success-soft px-3 py-1.5 text-xs font-medium text-success">
          <Lock className="h-3.5 w-3.5" /> {t("Stored only in this browser. Never sent anywhere.", "صرف اس براؤزر میں محفوظ۔ کہیں نہیں بھیجا جاتا۔")}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-primary">{t("Today's prompt", "آج کا سوال")}</p>
          <p className="mt-1 font-serif text-xl text-foreground">{t(PROMPTS[promptIdx].en, PROMPTS[promptIdx].ur)}</p>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={t("Write freely…", "کھل کر لکھیں…")}
            rows={5}
            className="mt-4 w-full rounded-md border border-input bg-background p-3 text-sm focus:border-primary focus:outline-none"
          />
          <button onClick={add} disabled={!text.trim()} className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
            <Plus className="h-4 w-4" /> {t("Save entry", "محفوظ کریں")}
          </button>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-foreground">{t("Your entries", "آپ کی تحریریں")}</h2>
        {entries.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">{t("No entries yet. The first one is the hardest.", "ابھی کوئی تحریر نہیں۔ پہلی سب سے مشکل ہوتی ہے۔")}</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {entries.map(e => (
              <li key={e.id} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{new Date(e.date).toLocaleString(lang === "ur" ? "ur-PK" : "en-GB")}</p>
                    <p className="mt-1 text-xs font-medium text-primary">{e.prompt}</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm text-foreground/90">{e.text}</p>
                  </div>
                  <button onClick={() => remove(e.id)} className="text-muted-foreground hover:text-destructive" aria-label="delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
