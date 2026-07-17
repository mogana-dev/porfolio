import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEOJsonLd, { breadcrumbSchema } from "@/components/SEOJsonLd";
import { getCountryBySlug, getLocalizedCountryName } from "@/lib/countries";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

export default function CountryDetailBody({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const country = getCountryBySlug(slug);
  if (!country) notFound();
  const t = dict[locale].countryDetail;
  const nav = dict[locale].nav;
  const name = getLocalizedCountryName(country, locale);

  return (
    <main id="main-content">
      <SEOJsonLd
        graph={[
          breadcrumbSchema([
            { name: "Home", path: withLocale("/", locale) },
            { name: nav.countries, path: withLocale("/countries", locale) },
            { name, path: withLocale(`/countries/${country.slug}`, locale) },
          ]),
        ]}
      />
      <Navbar locale={locale} />
      <PageHero
        eyebrow={`${t.availableIn} ${name}`}
        title={`${t.titlePrefix} ${name}`}
        description={t.descriptionTemplate(name)}
      />

      <section className="relative py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="glass rounded-2xl p-7 md:p-9">
            <h2 className="font-display text-lg font-bold">{t.whatThisMeans(name)}</h2>
            <ul className="mt-5 space-y-3">
              {t.roleTargets(name).map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-mist/85">
                  <CheckCircle2 className="w-4 h-4 text-violet mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-sm text-dim leading-relaxed space-y-4">
            <p>{t.p1} {t.p1b(name)}</p>
            <p>{t.p2}</p>
          </div>
        </div>
      </section>

      <CTASection title={t.ctaTitle(name)} primaryLabel={dict[locale].contactForm.requestInterview} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
