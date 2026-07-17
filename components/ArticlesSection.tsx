"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

import ArticleCarousel from "./ArticleCarousel";
import { getArticles } from "@/lib/articles";
import {
  dict,
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface ArticlesSectionProps {
  locale?: Locale;
}

export default function ArticlesSection({
  locale = "en",
}: ArticlesSectionProps) {
  const t = dict[locale].homeArticles;
  const articles = getArticles(locale);
  const shouldReduceMotion = useReducedMotion();

  const intro =
    locale === "fr"
      ? "Analyses pratiques sur le SaaS, l’architecture logicielle, l’ingénierie produit, la performance et la création de solutions numériques fiables."
      : "Practical insights on SaaS, software architecture, product engineering, performance and building reliable digital solutions.";

  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="relative overflow-hidden bg-ink py-10 sm:py-12 lg:py-14"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-80 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/[0.025] blur-[140px]" />

        <div className="absolute -right-32 top-12 h-64 w-64 rounded-full bg-[#ff6b35]/[0.03] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <BookOpen
                aria-hidden="true"
                className="h-4 w-4 text-[#ff6b35]"
              />

              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff6b35]">
                {t.eyebrow}
              </p>
            </div>

            <h2
              id="articles-heading"
              className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              {intro}
            </p>
          </div>

          <Link
            href={withLocale(
              "/articles",
              locale,
            )}
            className="group inline-flex h-11 w-fit items-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/[0.055] px-5 text-sm font-bold text-[#ff8a57] transition-all duration-300 hover:border-[#ff6b35]/55 hover:bg-[#ff6b35] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
          >
            <span>{t.viewAll}</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="mt-8 sm:mt-10">
          <ArticleCarousel
            articles={articles}
            locale={locale}
          />
        </div>
      </div>
    </section>
  );
}