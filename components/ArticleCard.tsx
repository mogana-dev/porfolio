"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { getArticles } from "@/lib/articles";
import { withLocale, type Locale } from "@/lib/dictionary";

type ArticleItem = ReturnType<typeof getArticles>[number];

export default function ArticleCard({
  article,
  index,
  locale = "en",
}: {
  article: ArticleItem;
  index: number;
  locale?: Locale;
}) {
  const reduceMotion = useReducedMotion();
  const readLabel = locale === "fr" ? "Lire l’article" : "Read article";
  const readMin = locale === "fr" ? "min de lecture" : "min read";

  return (
    <motion.article
      initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : (index % 3) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-white/10 pt-6"
    >
      <Link
        href={withLocale(`/articles/${article.slug}`, locale)}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
      >
        <div className="relative overflow-hidden bg-transparent">
          <Image
            src={article.poster}
            alt={article.title}
            width={1600}
            height={900}
            quality={82}
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.015]"
          />
        </div>

        <div className="pt-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b35]">
              {article.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="inline-flex items-center gap-1.5 text-xs text-white/45">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readingTime} {readMin}
            </span>
          </div>

          <h2 className="mt-3 font-display text-xl font-extrabold leading-tight tracking-[-0.03em] text-white transition group-hover:text-[#ff7b47] sm:text-2xl">
            {article.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/64">
            {article.summary}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white underline decoration-[#ff6b35] decoration-2 underline-offset-4">
            {readLabel}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
