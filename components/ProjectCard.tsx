"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  LockKeyhole,
} from "lucide-react";

import type { Locale } from "@/lib/dictionary";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  status?: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image: string;
  websiteUrl: string;

  // Optional because ProjectCard is also used by CaseStudiesBody.
  repoStatus?: "public" | "private";
  repoUrl?: string;
  role?: string;
  approach?: string[];
};

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  locale?: Locale;
}

export default function ProjectCard({
  project,
  index,
  locale = "en",
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const imageFirst = index % 2 === 0;

  const copy =
    locale === "fr"
      ? {
          built: "Comment je l’ai construit",
          technology: "Technologies",
          website: "Voir le site",
          repository: "Voir le dépôt",
          privateRepository: "Dépôt privé",
          projectImage: `Aperçu du projet ${project.name}`,
        }
      : {
          built: "How I built it",
          technology: "Technologies",
          website: "View live website",
          repository: "View repository",
          privateRepository: "Private repository",
          projectImage: `${project.name} project preview`,
        };

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: {
          duration: 0.68,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <motion.article
      {...reveal}
      className="relative border-t border-white/10 py-10 first:border-t-0 sm:py-14 lg:py-16"
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <motion.a
  href={project.websiteUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`${copy.website}: ${project.name}`}
  whileHover={reduceMotion ? undefined : { y: -4 }}
  transition={{ duration: 0.25 }}
  className={`group relative flex min-h-[220px] items-center justify-center overflow-hidden bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] sm:min-h-[300px] lg:min-h-[390px] ${
    imageFirst ? "lg:col-span-7" : "lg:order-2 lg:col-span-7"
  }`}
>
          <Image
  src={project.image}
  alt={copy.projectImage}
  width={1600}
  height={900}
  quality={82}
  loading={index < 2 ? "eager" : "lazy"}
  priority={index < 2}
  sizes="(max-width: 1023px) 100vw, 58vw"
  className="block h-auto max-h-[460px] w-full object-contain object-center"
 />


          <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center border border-white/20 bg-[#061224]/85 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </motion.a>

        <div
          className={`min-w-0 ${
            imageFirst ? "lg:col-span-5" : "lg:order-1 lg:col-span-5"
          }`}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b35]">
    {project.category}
  </p>

  {project.status && (
    <>
      <span
        aria-hidden="true"
        className="h-1 w-1 rounded-full bg-white/30"
      />

      <p className="text-xs font-medium text-white/45">
        {project.status}
      </p>
    </>
  )}
</div>

          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
            {project.name}
          </h3>

          {project.role && (
  <p className="mt-2 text-sm font-semibold text-white/55">
    {project.role}
  </p>
)}

          <p className="mt-5 text-sm leading-7 text-white/72 sm:text-[15px]">
            {project.overview}
          </p>

          {project.highlights.length > 0 && (
            <ul className="mt-5 grid gap-2.5">
              {project.highlights.slice(0, 2).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-sm leading-6 text-white/78"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {project.approach && project.approach.length > 0 && (
  <div className="mt-6">
    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#ff6b35]">
      {copy.built}
    </p>

    <ol className="mt-3 space-y-2.5">
      {project.approach.slice(0, 3).map((step, stepIndex) => (
        <li
          key={step}
          className="grid grid-cols-[26px_1fr] gap-3 text-sm leading-6 text-white/66"
        >
          <span className="font-display text-sm font-black text-white">
            {String(stepIndex + 1).padStart(2, "0")}
          </span>

          <span>{step}</span>
        </li>
      ))}
    </ol>
  </div>
)}

          <div className="mt-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#ff6b35]">
              {copy.technology}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-medium text-white/65"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white underline decoration-[#ff6b35] decoration-2 underline-offset-4 transition hover:text-[#ff6b35]"
            >
              {copy.website}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

           {project.repoStatus === "public" && project.repoUrl && (
  <a
    href={project.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/68 transition hover:text-white"
  >
    <Github
      className="h-4 w-4 text-[#ff6b35]"
      aria-hidden="true"
    />

    {copy.repository}
  </a>
)}

{project.repoStatus === "private" && (
  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/38">
    <LockKeyhole
      className="h-3.5 w-3.5"
      aria-hidden="true"
    />

    {copy.privateRepository}
  </span>
)}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
