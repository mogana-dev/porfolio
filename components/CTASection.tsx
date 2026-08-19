"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Github,
  Globe2,
  Mail,
  Plane,
  Sparkles,
} from "lucide-react";

import MagneticButton from "./MagneticButton";
import {
  dict,
  withLocale,
  type Locale,
} from "@/lib/dictionary";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showGithub?: boolean;
  locale?: Locale;
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  showGithub = true,
  locale = "en",
}: CTASectionProps) {
  const t = dict[locale];
  const reduceMotion = useReducedMotion();

  const finalPrimaryLabel =
    primaryLabel ?? t.homeFinalCta.primary;

  const finalPrimaryHref =
    primaryHref ?? withLocale("/contact", locale);

  const defaultDescription =
    locale === "fr"
      ? "Ouvert aux postes internationaux à temps plein, à la mobilité, aux collaborations produit et aux projets SaaS, ERP ou IA à forte valeur métier."
      : "Open to international full-time roles, relocation, product collaborations and meaningful SaaS, ERP or AI-powered business opportunities.";

  const availabilityLabel =
    locale === "fr"
      ? "Disponible pour de nouvelles opportunités"
      : "Available for new opportunities";

  const supportingLabel =
    locale === "fr"
      ? "Construisons un produit utile"
      : "Let’s build something useful";

  const githubLabel =
    locale === "fr"
      ? "Voir GitHub"
      : "View GitHub";

  const badges =
    locale === "fr"
      ? [
          {
            label: "Opportunités internationales",
            icon: Globe2,
          },
          {
            label: "Mobilité et sponsoring",
            icon: Plane,
          },
          {
            label: "Remote · Hybride · Sur site",
            icon: BriefcaseBusiness,
          },
        ]
      : [
          {
            label: "International opportunities",
            icon: Globe2,
          },
          {
            label: "Relocation and sponsorship",
            icon: Plane,
          },
          {
            label: "Remote · Hybrid · On-site",
            icon: BriefcaseBusiness,
          },
        ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.08,
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 24,
        },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.62,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#061224]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#07172a] via-[#061224] to-[#091b30]" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/[0.055] blur-[150px]" />

        <div className="absolute -left-36 top-10 h-72 w-72 rounded-full bg-[#ff6b35]/[0.04] blur-[125px]" />

        <div className="absolute -right-36 bottom-0 h-72 w-72 rounded-full bg-[#ff8a50]/[0.035] blur-[125px]" />
      </div>

      {/* Decorative lines */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                scaleX: 0,
              }
        }
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#ff6b35]/65 to-transparent"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-70px",
        }}
        variants={containerVariants}
        className="relative mx-auto grid max-w-7xl gap-9 px-5 py-11 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:px-10 lg:py-16"
      >
        {/* Main content */}
        <div className="max-w-4xl">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/25 bg-[#ff6b35]/[0.07] px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b35] opacity-45 motion-reduce:animate-none" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6b35]" />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#ff8a57] sm:text-[11px]">
                {availabilityLabel}
              </span>
            </div>

            <span className="hidden h-px w-10 bg-white/15 sm:block" />

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/45">
              <Sparkles
                className="h-3.5 w-3.5 text-[#ff6b35]"
                aria-hidden="true"
              />

              {supportingLabel}
            </span>
          </motion.div>

          <motion.h2
            id="final-cta-heading"
            variants={itemVariants}
            className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.15rem]"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-sm leading-7 text-white/64 sm:text-base sm:leading-8"
          >
            {description ?? defaultDescription}
          </motion.p>

          {/* Opportunity signals */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;

              return (
                <span
                  key={badge.label}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 text-xs font-semibold text-white/58 backdrop-blur-lg transition duration-300 hover:border-[#ff6b35]/30 hover:text-white/80"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#ff6b35]"
                  />

                  {badge.label}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* Action area */}
        <motion.div
          variants={itemVariants}
          className="relative lg:min-w-[300px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-[#ff6b35]/[0.035] blur-2xl"
          />

          <div className="relative border-l border-[#ff6b35]/35 pl-0 lg:pl-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <MagneticButton>
                <Link
                  href={finalPrimaryHref}
                  className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ff5f2f] via-[#ff6b35] to-[#ff8654] px-6 text-sm font-extrabold text-white shadow-[0_14px_36px_rgba(255,107,53,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(255,107,53,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061224]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]"
                  />

                  <Mail
                    className="relative h-4 w-4"
                    aria-hidden="true"
                  />

                  <span className="relative">
                    {finalPrimaryLabel}
                  </span>

                  <ArrowRight
                    aria-hidden="true"
                    className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>

              {showGithub && (
                <MagneticButton>
                  <a
                    href="https://github.com/moganadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      locale === "fr"
                        ? "Consulter le profil GitHub de Mogana.dev"
                        : "View Mogana.dev on GitHub"
                    }
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 text-sm font-bold text-white/76 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6b35]/55 hover:bg-[#ff6b35]/[0.075] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
                  >
                    <Github
                      aria-hidden="true"
                      className="h-4 w-4 text-white transition group-hover:text-[#ff6b35]"
                    />

                    <span>{githubLabel}</span>
                  </a>
                </MagneticButton>
              )}
            </div>

            <p className="mt-4 text-center text-[11px] leading-5 text-white/34 lg:text-left">
              {locale === "fr"
                ? "Réponse professionnelle en anglais ou en français."
                : "Professional response available in English or French."}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}