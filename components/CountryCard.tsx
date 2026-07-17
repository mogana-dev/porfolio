"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import type { Country } from "@/lib/countries";
import { getLocalizedCountryName, getLocalizedCountryBlurb } from "@/lib/countries";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

export default function CountryCard({ country, index = 0, locale = "en" }: { country: Country; index?: number; locale?: Locale }) {
  const t = dict[locale].countriesPage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
    >
      <Link
        href={withLocale(`/countries/${country.slug}`, locale)}
        className="group glass rounded-2xl p-6 flex flex-col hover:shadow-glow transition-shadow focus-ring h-full"
      >
        <Globe2 className="w-5 h-5 text-brand" />
        <h3 className="mt-3 font-display text-lg font-bold">{getLocalizedCountryName(country, locale)}</h3>
        <p className="mt-2 text-sm text-dim leading-relaxed flex-1">{getLocalizedCountryBlurb(country, locale)}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all">
          {t.learnMore}
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
}
