import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";
import { countries } from "@/lib/countries";
import { dict, type Locale } from "@/lib/dictionary";

export default function CountriesBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].countriesPage;

  return (
    <main id="main-content">
      <Navbar locale={locale} />
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <section className="relative py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c, idx) => (
            <CountryCard key={c.slug} country={c} index={idx} locale={locale} />
          ))}
        </div>
      </section>
      <CTASection title={t.ctaTitle} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
