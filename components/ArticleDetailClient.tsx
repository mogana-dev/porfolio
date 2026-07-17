"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Info,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOJsonLd, { articleSchema, breadcrumbSchema } from "@/components/SEOJsonLd";
import { getArticles, type Block } from "@/lib/articles";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

type ArticleData = ReturnType<typeof getArticles>[number];

const calloutStyles = {
  info: {
    icon: Info,
    border: "border-sky-400/25",
    bg: "bg-sky-400/[0.045]",
    iconColor: "text-sky-300",
  },
  tip: {
    icon: Lightbulb,
    border: "border-[#ff6b35]/30",
    bg: "bg-[#ff6b35]/[0.055]",
    iconColor: "text-[#ff6b35]",
  },
  warning: {
    icon: TriangleAlert,
    border: "border-amber-400/25",
    bg: "bg-amber-400/[0.045]",
    iconColor: "text-amber-300",
  },
} as const;

export default function ArticleDetailClient({
  article,
  locale,
}: {
  article: ArticleData;
  locale: Locale;
}) {
  const reduceMotion = useReducedMotion();
  const all = getArticles(locale);
  const currentIndex = all.findIndex((item) => item.slug === article.slug);
  const next = all[(currentIndex + 1) % all.length];

  const readMin = locale === "fr" ? "min de lecture" : "min read";
  const backLabel = locale === "fr" ? "Tous les articles" : "All articles";
  const nextLabel = locale === "fr" ? "Article suivant" : "Next article";
  const ctaTitle =
    locale === "fr"
      ? "Ce sujet rejoint un produit ou un défi dans votre équipe ?"
      : "Does this topic connect with a product or challenge in your team?";
  const ctaText =
    locale === "fr"
      ? "Échangeons sur vos besoins produit, votre architecture ou vos workflows."
      : "Let’s discuss your product needs, architecture or workflows.";

  return (
    <main id="main-content" className="overflow-hidden bg-[#061224] text-white">
      <SEOJsonLd
        graph={[
          breadcrumbSchema([
            { name: "Home", path: withLocale("/", locale) },
            { name: dict[locale].nav.articles, path: withLocale("/articles", locale) },
            { name: article.title, path: withLocale(`/articles/${article.slug}`, locale) },
          ]),
          articleSchema(article, locale),
        ]}
      />

      <Navbar locale={locale} />

      <article>
        <motion.header
          initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-white/10 pb-9 pt-[130px] sm:pb-12 sm:pt-[140px] lg:pt-[150px]"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Link href={withLocale("/articles", locale)} className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white">
              <ArrowLeft className="h-4 w-4 text-[#ff6b35]" />
              {backLabel}
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b35]">{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-1.5 text-xs text-white/45">
                <Clock3 className="h-3.5 w-3.5" />
                {article.readingTime} {readMin}
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              {article.summary}
            </p>
          </div>
        </motion.header>

        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10 lg:px-10">
          <Image
            src={article.poster}
            alt={article.title}
            width={1600}
            height={900}
            priority
            quality={82}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:px-10">
          <div className="max-w-3xl space-y-7">
            {article.blocks.map((block, index) => (
              <motion.div
                key={index}
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlockRenderer block={block} />
              </motion.div>
            ))}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-white/10 pl-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b35]">{article.category}</p>
              <p className="mt-3 text-sm leading-6 text-white/55">{article.readingTime} {readMin}</p>
              <Link href={withLocale(`/articles/${next.slug}`, locale)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-[#ff6b35] decoration-2 underline-offset-4">
                {nextLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        <section className="relative overflow-hidden bg-[#ff6b35]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{ctaTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/86">{ctaText}</p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link href={withLocale("/contact", locale)} className="inline-flex items-center gap-2 text-sm font-extrabold underline decoration-white/60 decoration-2 underline-offset-4">
                {locale === "fr" ? "Me Contacter" : "Contact Me"}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href={withLocale(`/articles/${next.slug}`, locale)} className="inline-flex items-center gap-2 text-sm font-extrabold underline decoration-white/60 decoration-2 underline-offset-4">
                {next.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer locale={locale} />
    </main>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return <p className="border-l-2 border-[#ff6b35] pl-5 text-lg font-semibold leading-8 text-white/92 sm:text-xl">{block.text}</p>;
    case "h2":
      return <h2 className="pt-3 font-display text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">{block.text}</h2>;
    case "h3":
      return <h3 className="pt-2 font-display text-lg font-extrabold sm:text-xl">{block.text}</h3>;
    case "p":
      return <p className="text-[15px] leading-8 text-white/72">{block.text}</p>;
    case "list":
      return block.ordered ? (
        <ol className="space-y-3 pl-5 text-[15px] leading-7 text-white/72 marker:font-bold marker:text-[#ff6b35]">
          {block.items.map((item) => <li key={item} className="pl-1">{item}</li>)}
        </ol>
      ) : (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-white/72">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const style = calloutStyles[block.variant];
      const Icon = style.icon;
      return (
        <div className={`border ${style.border} ${style.bg} p-5 sm:p-6`}>
          <div className="flex gap-4">
            <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconColor}`} />
            <div>
              {block.title && <p className="font-display text-sm font-extrabold">{block.title}</p>}
              <p className="mt-1 text-sm leading-7 text-white/72">{block.text}</p>
            </div>
          </div>
        </div>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto border border-white/10">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white/[0.035]">
                {block.headers.map((header) => (
                  <th key={header} className="border-b border-white/10 px-4 py-3 text-left font-display font-extrabold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 ? "bg-white/[0.02]" : ""}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border-b border-white/[0.07] px-4 py-3 align-top text-white/68">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}
