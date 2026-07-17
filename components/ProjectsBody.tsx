"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Layers3,
  Rocket,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard, { type PortfolioProject } from "@/components/ProjectCard";
import {
  getLocalizedProject,
  projects,
  type ProjectCategory,
} from "@/lib/projects";
import { dict, type Locale } from "@/lib/dictionary";

const CATEGORY_ORDER: ProjectCategory[] = [
  "Enterprise SaaS",
  "Marketplace",
  "E-Commerce",
  "Corporate Website",
  "Personal Brand",
];

export default function ProjectsBody({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const reduceMotion = useReducedMotion();
  const common = dict[locale].common;

  const featured = projects.slice(0, 16);

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: featured
      .filter((project) => project.category === category)
      .map((project) => getLocalizedProject(project, locale))
      .map(
        (project): PortfolioProject => ({
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
        }),
      ),
  })).filter((group) => group.items.length > 0);

  const copy =
    locale === "fr"
      ? {
          heroAlt: "Sélection de projets numériques réalisés par Mogana.dev",
          eyebrow: "Portfolio de produits",
          title: "Des produits numériques construits autour de vrais besoins métier.",
          description:
            "Seize projets couvrant le SaaS, les logiciels d’entreprise, les marketplaces, l’e-commerce, l’IA et les plateformes professionnelles. Chaque réalisation montre le problème compris, la méthode utilisée et la technologie choisie.",
          github: "github.com/moganadev",
          stats: [
            { value: "16", label: "projets présentés", icon: Layers3 },
            { value: "5", label: "catégories de produits", icon: BriefcaseBusiness },
            { value: "Full stack", label: "conception à la production", icon: Code2 },
          ],
          categoryPrefix: "Catégorie",
          projectsLabel: "projets",
          recruiterEyebrow: "Pour les recruteurs",
          recruiterTitle:
            "Ce portfolio montre comment je transforme un besoin métier en produit utilisable.",
          recruiterDescription:
            "Mon rôle couvre l’analyse, l’architecture, l’interface, la base de données, les accès sécurisés, les intégrations, les tests et le déploiement. Les dépôts clients restent privés, mais les produits en ligne et les décisions de construction sont présentés clairement.",
          ctaTitle: "Vous avez un poste ou un produit ambitieux en tête ?",
          ctaText:
            "Je suis ouvert aux opportunités internationales à temps plein, à la mobilité et aux collaborations produit.",
          contact: "Contacter Mogana.dev",
        }
      : {
          heroAlt: "Selected digital products built by Mogana.dev",
          eyebrow: "Product portfolio",
          title: "Digital products built around real business requirements.",
          description:
            "Sixteen projects across SaaS, enterprise software, marketplaces, e-commerce, AI and professional platforms. Each project explains what I built, how I approached it and which technologies supported the result.",
          github: "github.com/moganadev",
          stats: [
            { value: "16", label: "featured projects", icon: Layers3 },
            { value: "5", label: "product categories", icon: BriefcaseBusiness },
            { value: "Full stack", label: "concept to production", icon: Code2 },
          ],
          categoryPrefix: "Category",
          projectsLabel: "projects",
          recruiterEyebrow: "For recruiters",
          recruiterTitle:
            "This portfolio shows how I turn an operational need into a usable product.",
          recruiterDescription:
            "My role covers analysis, architecture, interface development, database design, secure access, integrations, testing and deployment. Client repositories remain private, but the live products and the decisions behind them are presented clearly.",
          ctaTitle: "Have an ambitious role or product in mind?",
          ctaText:
            "I am open to international full-time opportunities, relocation and meaningful product collaborations.",
          contact: "Contact Mogana.dev",
        };

  const pageReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.72,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  const contactPath = locale === "fr" ? "/fr/contact" : "/contact";

  return (
    <main id="main-content" className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      <motion.section
  {...pageReveal}
  className="border-b border-white/10 pb-9 pt-[126px] sm:pb-12 sm:pt-[138px] lg:pb-12 lg:pt-[150px]"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-9 bg-[#ff6b35]" />

          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
            {copy.eyebrow}
          </p>
        </div>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
          {copy.title}
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
          {copy.description}
        </p>
      </div>

      <a
        href="https://github.com/moganadev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white/66 transition hover:text-white"
      >
        <Github
          className="h-4 w-4 text-[#ff6b35]"
          aria-hidden="true"
        />

        {copy.github}
      </a>
    </div>

    <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
      {copy.stats.map(({ value, label, icon: Icon }) => (
        <div key={label} className="flex items-center gap-3">
          <Icon
            className="h-5 w-5 text-[#ff6b35]"
            aria-hidden="true"
          />

          <div>
            <p className="font-display text-lg font-extrabold text-white">
              {value}
            </p>

            <p className="text-xs text-white/48">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.section>

      {grouped.map((group) => (
        <section key={group.category} className="relative">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <motion.header
              initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-9 sm:pt-12"
            >
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ff6b35]">
                  {copy.categoryPrefix}
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {common.categoryLabels[group.category]}
                </h2>
              </div>
              <p className="text-xs font-semibold text-white/40">
                {group.items.length} {copy.projectsLabel}
              </p>
            </motion.header>

            <div>
              {group.items.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-y border-white/10 py-10 sm:py-14"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff6b35]/35 text-[#ff6b35]">
              <Rocket className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="max-w-4xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.recruiterEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                {copy.recruiterTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/68 sm:text-[15px]">
                {copy.recruiterDescription}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-[#ff6b35]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/86">
              {copy.ctaText}
            </p>
          </div>

          <Link
            href={contactPath}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
          >
            {copy.contact}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
