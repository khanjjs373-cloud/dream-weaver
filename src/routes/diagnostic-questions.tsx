import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/diagnostic-questions")({
  head: () => ({
    meta: [
      { title: "30 Diagnostic Questions — Sehatnaama" },
      { name: "description", content: "Reference guide of 30 questions doctors use to assess dementia." },
      { property: "og:title", content: "30 Diagnostic Questions" },
      { property: "og:description", content: "Reference questions doctors use to assess dementia." },
    ],
  }),
  component: Page,
});

const QS = [
  { en: "What is today's date?", ur: "آج کی تاریخ کیا ہے؟", why_en: "Tests orientation to time — often impaired early.", why_ur: "وقت کی پہچان جانچتا ہے — اکثر جلد متاثر ہوتی ہے۔" },
  { en: "Where are we right now?", ur: "ہم اس وقت کہاں ہیں؟", why_en: "Orientation to place.", why_ur: "جگہ کی پہچان۔" },
  { en: "Can you name three objects I just said?", ur: "کیا آپ تین چیزوں کا نام بتا سکتے ہیں جو میں نے ابھی کہیں؟", why_en: "Immediate recall.", why_ur: "فوری یادداشت۔" },
  { en: "Count backwards from 100 by 7.", ur: "100 سے 7-7 کم کرتے ہوئے گنیں۔", why_en: "Attention and working memory.", why_ur: "توجہ اور کام کرنے والی یادداشت۔" },
  { en: "What did you eat for breakfast?", ur: "آپ نے ناشتے میں کیا کھایا؟", why_en: "Recent episodic memory.", why_ur: "حالیہ یادداشت۔" },
  { en: "Who is the prime minister?", ur: "وزیر اعظم کون ہیں؟", why_en: "General knowledge / current affairs.", why_ur: "عمومی علم / حالات حاضرہ۔" },
  { en: "Draw a clock showing 10 past 11.", ur: "11 بج کر 10 منٹ والی گھڑی بنائیں۔", why_en: "Visuospatial planning.", why_ur: "بصری منصوبہ بندی۔" },
  { en: "What is this object? (showing a watch)", ur: "یہ کیا ہے؟ (گھڑی دکھا کر)", why_en: "Naming / language.", why_ur: "نام بتانا / زبان۔" },
  { en: "Repeat: 'No ifs, ands, or buts.'", ur: "دہرائیں: 'کوئی اگر، اور یا لیکن نہیں۔'", why_en: "Speech repetition.", why_ur: "تقریر کی تکرار۔" },
  { en: "Take this paper, fold it, place it on the floor.", ur: "یہ کاغذ لیں، موڑیں، اور فرش پر رکھیں۔", why_en: "Multi-step command.", why_ur: "کئی مرحلوں کا حکم۔" },
  { en: "Read and do what this says.", ur: "اسے پڑھیں اور جو لکھا ہے کریں۔", why_en: "Reading comprehension.", why_ur: "پڑھنے کی فہم۔" },
  { en: "Write a complete sentence.", ur: "ایک مکمل جملہ لکھیں۔", why_en: "Written language.", why_ur: "تحریری زبان۔" },
  { en: "Copy this design (overlapping pentagons).", ur: "یہ نقشہ کاپی کریں (ایک دوسرے میں ملے پنج کوہنیے)۔", why_en: "Visuospatial copying.", why_ur: "بصری نقل۔" },
  { en: "Recall the three objects from earlier.", ur: "پہلے بتائی گئی تین چیزیں یاد کریں۔", why_en: "Delayed recall — most sensitive Alzheimer's marker.", why_ur: "تاخیری یادداشت — الزائمر کی سب سے حساس علامت۔" },
  { en: "What year is it?", ur: "یہ کون سا سال ہے؟", why_en: "Time orientation.", why_ur: "وقت کی پہچان۔" },
  { en: "What season are we in?", ur: "ہم کس موسم میں ہیں؟", why_en: "Time orientation.", why_ur: "وقت کی پہچان۔" },
  { en: "Name as many animals as you can in 60 seconds.", ur: "60 سیکنڈ میں زیادہ سے زیادہ جانوروں کے نام بتائیں۔", why_en: "Verbal fluency.", why_ur: "زبانی روانی۔" },
  { en: "Spell 'WORLD' backwards.", ur: "'WORLD' کے حروف الٹے بتائیں۔", why_en: "Working memory.", why_ur: "کام کرنے والی یادداشت۔" },
  { en: "What is the similarity between an apple and an orange?", ur: "سیب اور سنترے میں کیا مماثلت ہے؟", why_en: "Abstract reasoning.", why_ur: "تجریدی استدلال۔" },
  { en: "If I give you Rs 1000 and a thing costs Rs 350, how much change?", ur: "اگر میں آپ کو 1000 روپے دوں اور چیز 350 کی ہو، کتنا واپس؟", why_en: "Practical calculation.", why_ur: "عملی حساب۔" },
  { en: "Have you been forgetting recent conversations?", ur: "کیا آپ حالیہ گفتگو بھول رہے ہیں؟", why_en: "Self-report of memory.", why_ur: "اپنی یادداشت کا جائزہ۔" },
  { en: "Have family members mentioned changes in you?", ur: "کیا گھر والوں نے آپ میں تبدیلی کا ذکر کیا؟", why_en: "Insight check.", why_ur: "خود فہمی کی جانچ۔" },
  { en: "Are you able to manage your medications?", ur: "کیا آپ اپنی ادویات سنبھال سکتے ہیں؟", why_en: "Functional ability.", why_ur: "عملی صلاحیت۔" },
  { en: "Can you handle household bills and shopping?", ur: "کیا آپ گھریلو بل اور خریداری سنبھال سکتے ہیں؟", why_en: "Instrumental daily living.", why_ur: "روزمرہ کے کام۔" },
  { en: "Do you feel sad or hopeless often?", ur: "کیا آپ اکثر اداس یا نا امید محسوس کرتے ہیں؟", why_en: "Depression screening — depression mimics dementia.", why_ur: "ڈپریشن کی جانچ — ڈپریشن ڈیمنشیا جیسا لگ سکتا ہے۔" },
  { en: "How is your sleep at night?", ur: "رات کو آپ کی نیند کیسی ہے؟", why_en: "Sleep disorders affect cognition.", why_ur: "نیند کے مسائل ذہن پر اثر ڈالتے ہیں۔" },
  { en: "Do you take any sleeping pills or sedatives?", ur: "کیا آپ نیند کی گولیاں یا سکون آور لیتے ہیں؟", why_en: "Many drugs cause memory issues.", why_ur: "کئی دوائیاں یادداشت متاثر کرتی ہیں۔" },
  { en: "Any history of head injury, stroke, or seizures?", ur: "کیا کبھی سر پر چوٹ، فالج، یا دورے ہوئے؟", why_en: "Medical history.", why_ur: "طبی تاریخ۔" },
  { en: "Family history of Alzheimer's or dementia?", ur: "خاندان میں الزائمر یا ڈیمنشیا کی تاریخ؟", why_en: "Genetic risk.", why_ur: "موروثی خطرہ۔" },
  { en: "Have you been checked for B12 deficiency or thyroid?", ur: "کیا آپ کا B12 یا تھائیرائڈ چیک ہوا؟", why_en: "Both can cause reversible memory problems.", why_ur: "دونوں قابل علاج یادداشت کے مسائل پیدا کر سکتے ہیں۔" },
];

function Page() {
  const { t } = useLang();
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-serif text-4xl text-foreground">{t("30 Diagnostic Questions", "30 تشخیصی سوالات")}</h1>
        <p className="mt-2 text-muted-foreground">{t("The questions doctors use — and why each one matters.", "وہ سوالات جو ڈاکٹر استعمال کرتے ہیں — اور ہر ایک کیوں اہم ہے۔")}</p>

        <ol className="mt-8 space-y-4">
          {QS.map((q, i) => (
            <li key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{t(q.en, q.ur)}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong className="text-primary">{t("Why it matters: ", "کیوں اہم: ")}</strong>
                    {t(q.why_en, q.why_ur)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}
