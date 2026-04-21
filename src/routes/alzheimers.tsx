import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import caringHands from "@/assets/caring-hands.jpg";
import brainImg from "@/assets/brain-illustration.jpg";
import safeHome from "@/assets/safe-home.jpg";
import musicImg from "@/assets/music-therapy.jpg";
import caregiverImg from "@/assets/caregiver-scene.jpg";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/alzheimers")({
  head: () => ({
    meta: [
      { title: "Alzheimer's Guide — Sehatnaama" },
      { name: "description", content: "Bilingual guide to Alzheimer's: stages, symptoms, sundowning, safe homes, and caregiver health." },
      { property: "og:title", content: "Alzheimer's Guide — Sehatnaama" },
      { property: "og:description", content: "Bilingual guide to Alzheimer's for Pakistani families." },
    ],
  }),
  component: Guide,
});

function Callout({ kind, children }: { kind: "warn" | "info" | "do"; children: React.ReactNode }) {
  const styles = {
    warn: "bg-urgent-soft border-accent/40 text-foreground",
    info: "bg-info-soft border-primary/30 text-foreground",
    do: "bg-success-soft border-success/40 text-foreground",
  }[kind];
  const Icon = kind === "warn" ? AlertTriangle : kind === "info" ? Info : CheckCircle2;
  const iconColor = kind === "warn" ? "text-accent" : kind === "info" ? "text-primary" : "text-success";
  return (
    <aside className={`my-6 flex gap-3 rounded-lg border-l-4 p-4 ${styles}`}>
      <Icon className={`mt-1 h-5 w-5 shrink-0 ${iconColor}`} />
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}

function Guide() {
  const { t } = useLang();

  return (
    <Layout>
      <article className="mx-auto max-w-4xl px-4 py-12">
        <header>
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">{t("Understanding Alzheimer's", "الزائمر کو سمجھنا")}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t("A complete bilingual guide for Pakistani families.", "پاکستانی خاندانوں کے لیے ایک مکمل دو لسانی گائیڈ۔")}</p>
        </header>

        <img src={caringHands} alt="Caring hands" width={1280} height={896} loading="lazy" className="mt-8 rounded-xl shadow-lg" />

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("What is Alzheimer's?", "الزائمر کیا ہے؟")}</h2>
          <p className="mt-3 text-foreground/85">{t(
            "Alzheimer's disease is the most common cause of dementia — a progressive brain condition that slowly affects memory, thinking, and behaviour. It is not a normal part of ageing. It is a disease.",
            "الزائمر کی بیماری ڈیمنشیا کی سب سے عام وجہ ہے — ایک ترقی پذیر دماغی حالت جو آہستہ آہستہ یادداشت، سوچ اور رویے پر اثر انداز ہوتی ہے۔ یہ بڑھاپے کا قدرتی حصہ نہیں ہے۔ یہ ایک بیماری ہے۔"
          )}</p>
          <Callout kind="info">{t(
            "Forgetting a name occasionally is normal. Forgetting that you have a daughter, or how to button a shirt, is not.",
            "کبھی کبھار نام بھول جانا عام بات ہے۔ یہ بھول جانا کہ آپ کی ایک بیٹی ہے، یا قمیض کے بٹن کیسے لگاتے ہیں — عام بات نہیں۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("What's happening in the brain", "دماغ میں کیا ہو رہا ہے")}</h2>
          <img src={brainImg} alt="Brain" width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <p className="mt-4 text-foreground/85">{t(
            "Two abnormal proteins — amyloid plaques and tau tangles — build up in the brain. They damage the connections between neurons. Over time, brain cells die. The hippocampus (the memory centre) is usually affected first, which is why short-term memory loss is one of the earliest signs.",
            "دو غیر معمولی پروٹین — امائلائیڈ پلاکس اور ٹاؤ ٹینگلز — دماغ میں جمع ہو جاتے ہیں۔ یہ نیورونز کے درمیان روابط کو نقصان پہنچاتے ہیں۔ وقت کے ساتھ دماغی خلیات مر جاتے ہیں۔ ہپوکیمپس (یادداشت کا مرکز) عام طور پر سب سے پہلے متاثر ہوتا ہے، اسی لیے قلیل المدتی یادداشت کا نقصان ابتدائی علامات میں سے ایک ہے۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Stages and symptoms", "مراحل اور علامات")}</h2>
          {[
            { en: "Early stage", ur: "ابتدائی مرحلہ", den: "Mild forgetfulness, repeating questions, misplacing items, trouble with new information, mood changes.", dur: "ہلکی فراموشی، سوالات دہرانا، چیزیں رکھ کر بھول جانا، نئی معلومات میں دشواری، موڈ میں تبدیلی۔" },
            { en: "Middle stage", ur: "درمیانی مرحلہ", den: "Difficulty with daily tasks (cooking, dressing), confusion about time and place, personality changes, sundowning, wandering.", dur: "روزمرہ کے کاموں میں دشواری (کھانا پکانا، کپڑے پہننا)، وقت اور جگہ کے بارے میں الجھن، شخصیت میں تبدیلی، سن ڈاؤننگ، بھٹکنا۔" },
            { en: "Late stage", ur: "آخری مرحلہ", den: "Severe memory loss, inability to recognise loved ones, loss of mobility, complete dependence for care.", dur: "شدید یادداشت کا نقصان، پیاروں کو پہچاننے میں ناکامی، حرکت کا نقصان، نگہداشت کے لیے مکمل انحصار۔" },
          ].map((s, i) => (
            <div key={i} className="mt-4 rounded-lg border border-border bg-card p-5">
              <h3 className="font-serif text-lg text-primary">{t(s.en, s.ur)}</h3>
              <p className="mt-2 text-sm text-foreground/85">{t(s.den, s.dur)}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Sundowning & wandering", "سن ڈاؤننگ اور بھٹکنا")}</h2>
          <p className="mt-3 text-foreground/85">{t(
            "Many people with Alzheimer's become more confused, restless, or agitated in the late afternoon and evening. This is called sundowning. Some may try to leave the house, sometimes looking for a place from their past.",
            "الزائمر کے بہت سے مریض دوپہر اور شام کے وقت زیادہ الجھن، بے چینی یا غصے کا شکار ہو جاتے ہیں۔ اسے سن ڈاؤننگ کہتے ہیں۔ کچھ گھر چھوڑنے کی کوشش کر سکتے ہیں، کبھی کبھار اپنے ماضی کی جگہ تلاش کرتے ہوئے۔"
          )}</p>
          <Callout kind="warn">{t(
            "Pakistan-specific: gates and doors should have a second lock out of easy reach. A simple ID bracelet with the family's phone number can save a life if your loved one wanders.",
            "پاکستان کے لیے خاص: دروازوں پر آسانی سے نہ پہنچنے والی دوسری کنڈی ضرور لگائیں۔ خاندان کے فون نمبر کے ساتھ ایک سادہ شناختی کڑا آپ کے پیارے کی جان بچا سکتا ہے۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Music therapy", "موسیقی کی تھراپی")}</h2>
          <img src={musicImg} alt="Music therapy" width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <p className="mt-4 text-foreground/85">{t(
            "The part of the brain that holds music is often spared. Old songs, qawwalis, naats, and Lollywood classics from your loved one's youth can calm agitation, lift mood, and bring back warm memories.",
            "دماغ کا وہ حصہ جو موسیقی کو محفوظ رکھتا ہے اکثر بچا رہتا ہے۔ آپ کے پیارے کی جوانی کے پرانے گانے، قوالیاں، نعتیں، اور لالی وڈ کی کلاسک — یہ غصے کو کم کر سکتی ہیں اور پرانی یادیں واپس لا سکتی ہیں۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("A safe home", "محفوظ گھر")}</h2>
          <img src={safeHome} alt="Safe home" width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <Callout kind="do">{t(
            "Remove loose rugs. Add night lights. Lock medicines and chemicals away. Mark hot taps. Remove or secure stove knobs. Keep walking paths clear.",
            "ڈھیلے قالین ہٹا دیں۔ نائٹ لائٹس لگائیں۔ ادویات اور کیمیکل بند الماری میں رکھیں۔ گرم پانی کے نل پر نشان لگائیں۔ چولہے کے ناب ہٹائیں۔ راستے صاف رکھیں۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Caregiver health", "نگہداشت کنندہ کی صحت")}</h2>
          <img src={caregiverImg} alt="Caregiver" width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <p className="mt-4 text-foreground/85">{t(
            "You cannot pour from an empty cup. Caregiver burnout is real, and in Pakistan it is often hidden by family duty. Take breaks. Ask siblings to share nights. Sleep matters.",
            "خالی پیالے سے کچھ نہیں نکل سکتا۔ نگہداشت کنندہ کا تھکاوٹ سے ٹوٹنا حقیقی ہے، اور پاکستان میں یہ اکثر خاندانی فرض کے پیچھے چھپ جاتا ہے۔ آرام کریں۔ بہن بھائیوں سے راتیں بانٹنے کو کہیں۔ نیند ضروری ہے۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Treatment & planning", "علاج اور منصوبہ بندی")}</h2>
          <p className="mt-3 text-foreground/85">{t(
            "There is no cure today. But medicines (donepezil, memantine) can slow symptoms for some. Early diagnosis lets the family plan finances, legal matters, and future care while the person can still take part.",
            "آج کوئی علاج نہیں۔ لیکن دوائیاں (ڈونیپیزل، میمنٹین) کچھ مریضوں میں علامات کو سست کر سکتی ہیں۔ جلد تشخیص خاندان کو مالی، قانونی، اور مستقبل کی نگہداشت کی منصوبہ بندی کا موقع دیتی ہے۔"
          )}</p>
        </section>

        <section className="mt-12 rounded-lg border border-border bg-muted/40 p-6">
          <h2 className="font-serif text-xl text-foreground">{t("References", "حوالہ جات")}</h2>
          <p className="mt-2 text-xs text-muted-foreground">
            Alzheimer's Association · WHO Dementia Fact Sheet · Lancet Commission on Dementia 2020 · NIH National Institute on Aging · Pakistan Alzheimer's Welfare Society · BMJ Best Practice — Dementia · NICE Guidelines NG97 · Mayo Clinic — Alzheimer's Disease · Cleveland Clinic — Sundowning · Karolinska Institutet Caregiver Studies. Full citations available on request.
          </p>
        </section>
      </article>
    </Layout>
  );
}
