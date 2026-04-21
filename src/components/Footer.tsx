import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40 no-print">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl text-foreground">Sehatnaama</span>
              <span className="text-muted-foreground" style={{ fontFamily: "var(--font-urdu)" }}>— صحت نامہ</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(
                "Pakistan's Health Testimony. A bilingual resource for Alzheimer's awareness, caregivers, and families.",
                "پاکستان کی صحت کی گواہی۔ الزائمر کی آگاہی، نگہداشت کرنے والوں اور خاندانوں کے لیے دو زبانوں میں ایک وسیلہ۔"
              )}
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-serif text-base text-foreground">{t("Explore", "تلاش کریں")}</h4>
            <ul className="mt-3 space-y-1.5 text-foreground/70">
              <li><Link to="/alzheimers" className="hover:text-primary">{t("Alzheimer's Guide", "الزائمر گائیڈ")}</Link></li>
              <li><Link to="/symptom-checker" className="hover:text-primary">{t("Symptom Checker", "علامات کا جائزہ")}</Link></li>
              <li><Link to="/doctor-letter" className="hover:text-primary">{t("Doctor Letter", "ڈاکٹر کا خط")}</Link></li>
              <li><Link to="/caregiver-diary" className="hover:text-primary">{t("Caregiver Diary", "نگہداشت کنندہ ڈائری")}</Link></li>
              <li><Link to="/awareness-quiz" className="hover:text-primary">{t("Awareness Quiz", "آگاہی کوئز")}</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-serif text-base text-foreground">{t("About", "بارے میں")}</h4>
            <ul className="mt-3 space-y-1.5 text-foreground/70">
              <li><Link to="/about" className="hover:text-primary">{t("Our Mission", "ہمارا مشن")}</Link></li>
              <li><Link to="/research" className="hover:text-primary">{t("Research", "تحقیق")}</Link></li>
              <li><Link to="/community" className="hover:text-primary">{t("Community", "کمیونٹی")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary">{t("Contact", "رابطہ")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
          {t(
            "Sehatnaama is an educational resource, not medical advice. Always consult a qualified physician.",
            "صحت نامہ ایک تعلیمی وسیلہ ہے، طبی مشورہ نہیں۔ ہمیشہ مستند ڈاکٹر سے رجوع کریں۔"
          )}
        </div>
      </div>
    </footer>
  );
}
