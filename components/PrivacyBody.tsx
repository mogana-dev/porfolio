import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/lib/contact";
import { dict, type Locale } from "@/lib/dictionary";

export default function PrivacyBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].privacy;

  return (
    <main id="main-content">
      <Navbar locale={locale} />
      <PageHero eyebrow={t.eyebrow} title={t.title} />
      <section className="relative py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-6 text-sm text-mist/85 leading-relaxed">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>
            {t.p4}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet hover:underline">{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
