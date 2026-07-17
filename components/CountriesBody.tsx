"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Languages, Plane } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";
import { countries } from "@/lib/countries";
import { dict, type Locale } from "@/lib/dictionary";

export default function CountriesBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].countriesPage;
  const reduceMotion = useReducedMotion();

  const stats =
    locale === "fr"
      ? [
          { value: String(countries.length), label: "pays couverts", icon: Globe2 },
          { value: "EN · FR", label: "communication professionnelle", icon: Languages },
          { value: "Ouvert", label: "à la relocalisation et au sponsoring", icon: Plane },
        ]
      : [
          { value: String(countries.length), label: "countries covered", icon: Globe2 },
          { value: "EN · FR", label: "professional communication", icon: Languages },
          { value: "Open", label: "to relocation and sponsorship", icon: Plane },
        ];

  const pageReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <main id="main-content" className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      <motion.section
        {...pageReveal}
        className="border-b border-white/10 pb-9 pt-[126px] sm:pb-12 sm:pt-[138px] lg:pb-12 lg:pt-[150px]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {t.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-extrabold text-white">{value}</p>
                  <p className="text-xs text-white/48">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
