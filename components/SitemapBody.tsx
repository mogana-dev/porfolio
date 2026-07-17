"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpenText,
  Briefcase,
  Globe2,
  LayoutGrid,
  ScrollText,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";
import { countries, getLocalizedCountryName } from "@/lib/countries";
import { dict, withLocale, type Locale } from "@/lib/dictionary";

type LinkItem = { href: string; label: string };

function SitemapColumn({
  icon: Icon,
  title,
  links,
}: {
  icon: typeof LayoutGrid;
  title: string;
  links: LinkItem[];
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/72 transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].sitemapPage;
  const nav = dict[locale].nav;
  const footer = dict[locale].footer;
  const reduceMotion = useReducedMotion();

  const mainPages: LinkItem[] = [
    { href: withLocale("/", locale), label: nav.home },
    { href: withLocale("/about-me", locale), label: nav.aboutMe },
    { href: withLocale("/my-profile", locale), label: nav.myProfile },
    { href: withLocale("/projects", locale), label: nav.projects },
    { href: withLocale("/skills", locale), label: nav.skills },
    { href: withLocale("/case-studies", locale), label: nav.caseStudies },
    { href: withLocale("/articles", locale), label: nav.articles },
    { href: withLocale("/countries", locale), label: nav.countries },
    { href: withLocale("/contact", locale), label: nav.contact },
  ];

  const recruiterLinks: LinkItem[] = [
    { href: withLocale("/hire-me", locale), label: footer.hireMe },
    { href: withLocale("/availability", locale), label: footer.availability },
    { href: withLocale("/recruiter-faq", locale), label: footer.recruiterFaq },
  ];

  const legalLinks: LinkItem[] = [
    { href: withLocale("/privacy", locale), label: footer.privacy },
    { href: "/sitemap.xml", label: locale === "fr" ? "Sitemap XML" : "XML Sitemap" },
  ];

  const caseStudyLinks: LinkItem[] = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ href: withLocale(`/case-studies/${p.slug}`, locale), label: p.name }));

  const articleLinks: LinkItem[] = getArticles(locale).map((a) => ({
    href: withLocale(`/articles/${a.slug}`, locale),
    label: a.title,
  }));

  const countryLinks: LinkItem[] = countries.map((c) => ({
    href: withLocale(`/countries/${c.slug}`, locale),
    label: getLocalizedCountryName(c, locale),
  }));

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
        </div>
      </motion.section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <SitemapColumn icon={LayoutGrid} title={t.mainPages} links={mainPages} />
            <SitemapColumn icon={Briefcase} title={t.recruiterResources} links={recruiterLinks} />
            <SitemapColumn icon={ScrollText} title={t.legal} links={legalLinks} />
            <SitemapColumn icon={Globe2} title={t.countriesSection} links={countryLinks} />
          </div>

          <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
            <SitemapColumn icon={Briefcase} title={t.caseStudiesSection} links={caseStudyLinks} />
            <SitemapColumn icon={BookOpenText} title={t.articlesSection} links={articleLinks} />
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
