"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpenText, Github, Layers3, Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard, { type PortfolioProject } from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { getLocalizedProject, projects } from "@/lib/projects";
import { dict, type Locale } from "@/lib/dictionary";

export default function CaseStudiesBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].caseStudiesPage;
  const common = dict[locale].common;
  const reduceMotion = useReducedMotion();

  const caseStudies: PortfolioProject[] = projects
    .filter((project) => project.hasCaseStudy)
    .map((project) => getLocalizedProject(project, locale))
    .map((project) => ({
      slug: project.slug,
      name: project.name,
      category: common.categoryLabels[project.category],
      status: common.statusLabels[project.status],
      overview: project.overview,
      highlights: project.highlights,
      tech: project.tech,
      image: project.image,
      websiteUrl: project.websiteUrl,
      repoStatus: project.repoStatus,
      repoUrl: project.repoUrl,
      role: project.role,
      approach: project.approach,
    }));

  const categoryCount = new Set(caseStudies.map((p) => p.category)).size;

  const copy =
    locale === "fr"
      ? {
          stats: [
            { value: String(caseStudies.length), label: "études de cas", icon: BookOpenText },
            { value: String(categoryCount), label: "catégories couvertes", icon: Layers3 },
            { value: "Full stack", label: "du problème à la production", icon: Sparkles },
          ],
          github: "github.com/moganadev",
        }
      : {
          stats: [
            { value: String(caseStudies.length), label: "case studies", icon: BookOpenText },
            { value: String(categoryCount), label: "categories covered", icon: Layers3 },
            { value: "Full stack", label: "problem to production", icon: Sparkles },
          ],
          github: "github.com/moganadev",
        };

  const pageReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      <motion.section
        {...pageReveal}
        className="border-b border-white/10 pb-9 pt-[126px] sm:pb-12 sm:pt-[138px] lg:pb-12 lg:pt-[150px]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-4xl">
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

            <a
              href="https://github.com/moganadev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/66 transition hover:text-white"
            >
              <Github className="h-4 w-4 text-brand" aria-hidden="true" />
              {copy.github}
            </a>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {copy.stats.map(({ value, label, icon: Icon }) => (
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

      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {caseStudies.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} locale={locale} />
          ))}
        </div>
      </section>

      <CTASection title={t.ctaTitle} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
