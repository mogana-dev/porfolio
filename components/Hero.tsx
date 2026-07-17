"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Layers3,
} from "lucide-react";

import MagneticButton from "./MagneticButton";
import {
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface HeroProps {
  locale?: Locale;
}

const heroContent = {
  en: {
    headingStart: "I build reliable digital products",
    headingHighlight: "from idea to production.",
    description:
      "Full Stack Product Engineer delivering production-ready SaaS platforms, ERP systems, marketplaces, e-commerce solutions and AI-powered business applications for organisations across multiple industries.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    location: "Currently in India · Mauritius Citizen",
    capability: "End-to-end product delivery",
    availability: "Available for international opportunities",
    imageAlt:
      "Professional portrait of the Mogana.dev Full Stack Product Engineer",
  },

  fr: {
    headingStart: "Je conçois des produits numériques fiables",
    headingHighlight: "de l’idée à la production.",
    description:
      "Ingénieur produit Full Stack créant des plateformes SaaS, systèmes ERP, marketplaces, solutions e-commerce et applications métier propulsées par l’IA pour des organisations de plusieurs secteurs.",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
    location: "Basé à Maurice · Disponible à l’international",
    capability: "Livraison produit de bout en bout",
    availability: "Disponible pour des opportunités internationales",
    imageAlt:
      "Portrait professionnel de l’ingénieur produit Full Stack de Mogana.dev",
  },
} satisfies Record<
  Locale,
  {
    headingStart: string;
    headingHighlight: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    location: string;
    capability: string;
    availability: string;
    imageAlt: string;
  }
>;

export default function Hero({
  locale = "en",
}: HeroProps) {
  const content = heroContent[locale];
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion
      ? false
      : {
          opacity: 0,
          y: 20,
        },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="top"
      aria-labelledby="home-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-[76px]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-node-grid opacity-[0.12]" />

        <div className="absolute -left-52 top-24 h-[500px] w-[500px] rounded-full bg-[#ff6b35]/[0.09] blur-[150px]" />

        <div className="absolute -right-52 top-16 h-[580px] w-[580px] rounded-full bg-[#ff8a50]/[0.08] blur-[170px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-[75%] -translate-x-1/2 rounded-full bg-[#ff6b35]/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:py-10">
        {/* Recruiter-focused content */}
        <div className="relative z-10 max-w-[720px]">
          <motion.h1
            id="home-hero-heading"
            {...reveal(0)}
            className="font-display text-[2.65rem] font-extrabold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl md:text-[3.7rem] lg:text-[4rem] xl:text-[4.35rem]"
          >
            <span className="block">
              {content.headingStart}
            </span>

            <span className="mt-2 block bg-gradient-to-r from-[#ff6131] via-[#ff7540] to-[#ffad73] bg-clip-text text-transparent">
              {content.headingHighlight}
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.1)}
            className="mt-5 max-w-2xl text-base leading-7 text-white/66 sm:mt-6 sm:text-lg sm:leading-8"
          >
            {content.description}
          </motion.p>

          {/* Compact buttons */}
          <motion.div
            {...reveal(0.18)}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <MagneticButton>
              <Link
                href={withLocale("/projects", locale)}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6131] via-[#ff6b35] to-[#ff824d] px-6 text-sm font-bold text-white shadow-[0_12px_32px_rgba(255,107,53,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(255,107,53,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b45] focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-[174px]"
              >
                <span>{content.viewProjects}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href={withLocale("/contact", locale)}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-6 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6b35]/55 hover:bg-[#ff6b35]/10 hover:text-[#ffad7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b45] focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-[174px]"
              >
                {content.contactMe}
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Professional signals */}
          <motion.div
            {...reveal(0.26)}
            className="mt-7 grid gap-2.5 text-sm text-white/60 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3"
          >
            <span className="flex items-center gap-2">
              <Globe2
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#ff6b35]"
              />

              {content.location}
            </span>

            <span className="flex items-center gap-2">
              <Layers3
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#ff6b35]"
              />

              {content.capability}
            </span>
          </motion.div>

          {/* Availability line */}
          <motion.div
            {...reveal(0.32)}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/18 bg-[#ff6b35]/[0.055] px-3.5 py-2 text-xs font-semibold text-white/72"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b35] opacity-50 motion-reduce:animate-none" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6b35]" />
            </span>

            <BriefcaseBusiness
              aria-hidden="true"
              className="h-3.5 w-3.5 text-[#ff7842]"
            />

            <span>{content.availability}</span>
          </motion.div>
        </div>

        {/* Portrait only */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 28,
                  scale: 0.97,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto flex w-full max-w-[520px] items-end justify-center self-stretch lg:mx-0 lg:max-w-none"
        >
          <div className="relative flex h-[430px] w-full items-end justify-center sm:h-[520px] lg:h-[620px] xl:h-[660px]">
            {/* Soft animated orange glow */}
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.3, 0.56, 0.3],
                      scale: [0.96, 1.04, 0.96],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="absolute bottom-[7%] left-1/2 h-[68%] w-[70%] -translate-x-1/2 rounded-full bg-[#ff6b35]/18 blur-[95px]"
            />

            {/* Soft shadow beneath portrait */}
            <div
              aria-hidden="true"
              className="absolute bottom-[1%] left-1/2 h-[13%] w-[70%] -translate-x-1/2 rounded-[50%] bg-black/35 blur-3xl"
            />

            {/* Gentle portrait movement */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 5.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="relative h-full w-full"
            >
              <Image
                src="/images/banners/herobanner-image.webp"
                alt={content.imageAlt}
                fill
                priority
                quality={88}
                sizes="
                  (max-width: 639px) 92vw,
                  (max-width: 1023px) 520px,
                  46vw
                "
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}