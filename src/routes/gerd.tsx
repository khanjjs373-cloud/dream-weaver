import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import gerdHero from "@/assets/gerd-hero.jpg";
import gerdAnatomy from "@/assets/gerd-anatomy.jpg";
import gerdDiet from "@/assets/gerd-diet.jpg";
import gerdSleep from "@/assets/gerd-sleep.jpg";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/gerd")({
  head: () => ({
    meta: [
      { title: "GERD Guide — Sehatnaama" },
      { name: "description", content: "Bilingual guide to GERD (acid reflux): symptoms, triggers, diet, sleep position, and when to see a doctor — for Pakistani families." },
      { property: "og:title", content: "GERD Guide — Sehatnaama" },
      { property: "og:description", content: "Bilingual guide to acid reflux for Pakistani families." },
      { property: "og:image", content: gerdHero },
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
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">{t("Understanding GERD", "جی ای آر ڈی کو سمجھنا")}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t("Acid reflux — what it is, why it happens, and how to live with it. A bilingual guide for Pakistani families.", "تیزابیت کا ابھار — یہ کیا ہے، کیوں ہوتا ہے، اور اس کے ساتھ کیسے جینا ہے۔ پاکستانی خاندانوں کے لیے ایک دو لسانی گائیڈ۔")}</p>
        </header>

        <img src={gerdHero} alt={t("A man feeling chest discomfort", "ایک شخص سینے میں تکلیف محسوس کر رہا ہے")} width={1280} height={896} loading="lazy" className="mt-8 rounded-xl shadow-lg" />

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("What is GERD?", "جی ای آر ڈی کیا ہے؟")}</h2>
          <p className="mt-3 text-foreground/85">{t(
            "GERD stands for Gastro-Esophageal Reflux Disease. It is the long-term form of acid reflux. Stomach acid keeps escaping upward into the food pipe (esophagus), burning its lining. Almost everyone has heartburn sometimes — but if it happens more than twice a week, it is GERD, and it needs care.",
            "جی ای آر ڈی کا مطلب ہے معدے اور غذا کی نالی کا تیزابی مرض۔ یہ تیزابیت کا دائمی روپ ہے۔ معدے کا تیزاب باربار اوپر غذا کی نالی میں آتا ہے اور اس کی اندرونی تہہ کو جلاتا ہے۔ تقریباً ہر کسی کو کبھی کبھار سینے کی جلن ہوتی ہے — لیکن اگر ہفتے میں دو بار سے زیادہ ہو، تو یہ جی ای آر ڈی ہے، اور اس کا علاج ضروری ہے۔"
          )}</p>
          <Callout kind="info">{t(
            "Occasional heartburn after a heavy biryani is normal. Heartburn after almost every meal — for weeks — is not.",
            "بھاری بریانی کے بعد کبھی کبھار جلن عام بات ہے۔ لیکن ہفتوں تک تقریباً ہر کھانے کے بعد جلن — یہ عام نہیں ہے۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("What's happening inside", "اندر کیا ہو رہا ہے")}</h2>
          <img src={gerdAnatomy} alt={t("Diagram of stomach and esophagus", "معدے اور غذا کی نالی کا خاکہ")} width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <p className="mt-4 text-foreground/85">{t(
            "There is a small valve at the bottom of the food pipe called the lower esophageal sphincter (LES). It opens to let food in and closes to keep acid out. In GERD, this valve becomes weak or relaxes at the wrong time. Acid splashes upward — causing burning, sour taste, cough, and over time, damage.",
            "غذا کی نالی کے نیچے ایک چھوٹا والو ہوتا ہے جسے زیریں غذائی نالی کا سفنکٹر کہتے ہیں۔ یہ کھانے کے لیے کھلتا ہے اور تیزاب کو روکنے کے لیے بند ہو جاتا ہے۔ جی ای آر ڈی میں یہ والو کمزور ہو جاتا ہے یا غلط وقت پر کھل جاتا ہے۔ تیزاب اوپر آتا ہے — جلن، کھٹا ذائقہ، کھانسی، اور وقت کے ساتھ نقصان کا سبب بنتا ہے۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Common symptoms", "عام علامات")}</h2>
          {[
            { en: "Heartburn", ur: "سینے کی جلن", den: "Burning feeling in the chest, usually after meals or when lying down. The most common sign.", dur: "سینے میں جلن، خاص طور پر کھانے کے بعد یا لیٹنے پر۔ سب سے عام علامت۔" },
            { en: "Sour or bitter taste", ur: "کھٹا یا کڑوا ذائقہ", den: "Acid or food coming back up into the mouth, especially at night.", dur: "تیزاب یا کھانا منہ میں واپس آنا، خاص طور پر رات کو۔" },
            { en: "Chronic cough or sore throat", ur: "مستقل کھانسی یا گلے کی خراش", den: "Acid irritating the throat can mimic asthma, allergies, or a cold that never goes away.", dur: "تیزاب گلے کو خراب کر کے دمہ، الرجی یا مستقل زکام جیسی علامات پیدا کر سکتا ہے۔" },
            { en: "Difficulty swallowing", ur: "نگلنے میں دشواری", den: "Food feeling stuck in the chest. This is a warning sign — see a doctor.", dur: "کھانا سینے میں اٹکنے کا احساس۔ یہ خطرے کی علامت ہے — ڈاکٹر سے ملیں۔" },
          ].map((s, i) => (
            <div key={i} className="mt-4 rounded-lg border border-border bg-card p-5">
              <h3 className="font-serif text-lg text-primary">{t(s.en, s.ur)}</h3>
              <p className="mt-2 text-sm text-foreground/85">{t(s.den, s.dur)}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Diet — what helps and what hurts", "غذا — کیا فائدہ مند اور کیا نقصان دہ")}</h2>
          <img src={gerdDiet} alt={t("Healthy Pakistani meal", "صحت بخش پاکستانی کھانا")} width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <Callout kind="warn">{t(
            "Pakistan-specific triggers: very spicy salan, deep-fried pakoray and samosay, heavy biryani late at night, strong chai with milk, paan, and fizzy drinks. Ramadan can be especially hard — large iftar meals followed by sleep are a perfect storm.",
            "پاکستان کے لیے خاص محرکات: بہت تیز سالن، تلی ہوئی پکوڑے اور سموسے، رات کو بھاری بریانی، تیز دودھ والی چائے، پان، اور فِزی مشروبات۔ رمضان خاص طور پر مشکل ہو سکتا ہے — بڑے افطار کے بعد فوراً سونا تکلیف دہ ہے۔"
          )}</Callout>
          <Callout kind="do">{t(
            "Eat smaller portions. Avoid lying down for 3 hours after eating. Cut back on tea and fried foods. Try yogurt, banana, oats, boiled vegetables, lassi (without sugar), and plenty of plain water.",
            "چھوٹی مقدار میں کھائیں۔ کھانے کے بعد 3 گھنٹے تک نہ لیٹیں۔ چائے اور تلے ہوئے کھانے کم کریں۔ دہی، کیلا، جئی، ابلی ہوئی سبزیاں، لسی (بغیر چینی)، اور پانی زیادہ پئیں۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Sleep position matters", "سونے کی پوزیشن اہم ہے")}</h2>
          <img src={gerdSleep} alt={t("Sleeping with head elevated", "سر اونچا کر کے سونا")} width={1280} height={896} loading="lazy" className="mt-4 rounded-xl shadow-md" />
          <p className="mt-4 text-foreground/85">{t(
            "When you lie flat, gravity stops helping you. Acid travels up easily. Raise the head of your bed by 6 inches (use bricks under the bed legs, not just extra pillows under your head — pillows bend the neck and make it worse). Sleep on your left side: the stomach sits below the food pipe, so acid stays down.",
            "جب آپ سیدھے لیٹتے ہیں تو کشش ثقل آپ کی مدد نہیں کرتی۔ تیزاب آسانی سے اوپر آتا ہے۔ بستر کے سرہانے کو 6 انچ اونچا کریں (پلنگ کی ٹانگوں کے نیچے اینٹیں رکھیں، صرف سر کے نیچے زیادہ تکیے نہیں — تکیے گردن کو موڑ دیتے ہیں اور تکلیف بڑھاتے ہیں)۔ بائیں کروٹ پر سوئیں: معدہ غذا کی نالی سے نیچے رہتا ہے، تیزاب نیچے رہتا ہے۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Lifestyle changes that work", "طرزِ زندگی کی تبدیلیاں جو کام کرتی ہیں")}</h2>
          <Callout kind="do">{t(
            "Lose extra weight around the belly — even a few kilos help. Stop smoking and avoid second-hand smoke. Loosen tight shalwar drawstrings and belts after meals. Walk for 10 minutes after dinner instead of lying down.",
            "پیٹ کے گرد اضافی وزن کم کریں — چند کلو بھی مدد کرتے ہیں۔ سگریٹ چھوڑیں اور دوسروں کے دھوئیں سے بچیں۔ کھانے کے بعد شلوار کا ازاربند اور بیلٹ ڈھیلا کریں۔ کھانے کے بعد لیٹنے کی بجائے 10 منٹ چہل قدمی کریں۔"
          )}</Callout>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("Treatment", "علاج")}</h2>
          <p className="mt-3 text-foreground/85">{t(
            "Most people improve with diet, sleep changes, and over-the-counter antacids (like Gaviscon). For ongoing GERD, doctors prescribe acid-reducing medicines: H2 blockers (ranitidine, famotidine) or proton pump inhibitors (omeprazole, esomeprazole). Do not take these for months on end without a doctor's advice.",
            "زیادہ تر لوگ غذا، نیند کی تبدیلیوں، اور بازار سے ملنے والی اینٹاسڈ (جیسے گیویسکون) سے بہتر ہو جاتے ہیں۔ مسلسل جی ای آر ڈی کے لیے، ڈاکٹر تیزاب کم کرنے والی دوائیں دیتے ہیں: ایچ 2 بلاکر (رینیٹیڈین، فاموٹیڈین) یا پروٹون پمپ انہیبیٹر (اومیپرازول، ایسومیپرازول)۔ ڈاکٹر کے مشورے کے بغیر مہینوں تک یہ دوائیں نہ لیں۔"
          )}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-foreground">{t("When to see a doctor — urgent", "ڈاکٹر سے کب ملیں — فوری")}</h2>
          <Callout kind="warn">{t(
            "See a doctor today if you have: difficulty swallowing, vomiting blood, black or tarry stools, unexplained weight loss, chest pain that spreads to your arm or jaw, or symptoms not improving after 2 weeks of treatment. Chest pain can be a heart attack — do not assume it is just heartburn.",
            "ڈاکٹر سے فوراً ملیں اگر: نگلنے میں دشواری، خون کی الٹی، کالا یا تار جیسا فضلہ، بغیر وجہ وزن کم ہونا، سینے کا درد جو بازو یا جبڑے تک جائے، یا 2 ہفتے کے علاج کے بعد بھی بہتری نہ ہو۔ سینے کا درد دل کا دورہ بھی ہو سکتا ہے — اسے صرف جلن نہ سمجھیں۔"
          )}</Callout>
        </section>

      </article>
    </Layout>
  );
}
