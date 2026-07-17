"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe2,
  Languages,
  Sparkles,
  Target,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEOJsonLd, { breadcrumbSchema } from "@/components/SEOJsonLd";
import { getCountryBySlug, getLocalizedCountry } from "@/lib/countries";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

export default function CountryDetailBody({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const country = getCountryBySlug(slug);
  if (!country) notFound();
  const t = dict[locale].countryDetail;
  const nav = dict[locale].nav;
  const c = getLocalizedCountry(country, locale);
  const reduceMotion = useReducedMotion();

  return (
    <main id="main-content" className="overflow-hidden bg-[#061224] text-white">
      <SEOJsonLd
        graph={[
          breadcrumbSchema([
            { name: "Home", path: withLocale("/", locale) },
            { name: nav.countries, path: withLocale("/countries", locale) },
            { name: c.name, path: withLocale(`/countries/${c.slug}`, locale) },
          ]),
        ]}
      />
      <Navbar locale={locale} />

      {/* Banner only: no text, no buttons, no cropping */}
      <div className="pt-[102px] lg:pt-0">
        <motion.section
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative m-0 w-full overflow-hidden bg-[#061224]"
        >
          <Image
            src={c.banner}
            alt={
              locale === "fr"
                ? `Bannière ${c.name} — Mogana.dev`
                : `${c.name} banner — Mogana.dev`
            }
            width={1920}
            height={1080}
            priority
            quality={82}
            sizes="100vw"
            className="block h-auto w-full"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/55" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/80 via-[#061224]/20 to-black/15"
          />
        </motion.section>
      </div>

      <motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-white/10 py-9 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                {t.availableIn} {c.name}
              </p>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.titlePrefix} {c.name}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {c.intro}
            </p>
          </div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                <Target className="h-4 w-4" aria-hidden="true" />
                {t.marketFitLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78">{c.marketFit}</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                <Languages className="h-4 w-4" aria-hidden="true" />
                {t.languagesLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78">{c.languages}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#09172a] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                {t.industriesLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex h-9 items-center rounded-full border border-brand/30 bg-brand/[0.07] px-3.5 text-xs font-semibold text-white/80"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                {t.companyFitLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.companyTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex h-9 items-center rounded-full border border-white/12 bg-white/[0.03] px-3.5 text-xs font-semibold text-white/70"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand/35 text-brand">
              <Globe2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                {t.visaLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78 sm:text-[15px]">{c.visa}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand/35 text-brand">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                {t.whyHireMeLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78 sm:text-[15px]">{c.whyHireMe}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t.ctaTitle(c.name)}
        primaryLabel={dict[locale].contactForm.requestInterview}
        locale={locale}
      />
      <Footer locale={locale} />
    </main>
  );
}
