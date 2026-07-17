"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Layers3,
  Lightbulb,
} from "lucide-react";

import type { Locale } from "@/lib/dictionary";

interface WhyMoganaProps {
  locale?: Locale;
}

interface WhyMoganaCard {
  title: string;
  text: string;
  icon: typeof Lightbulb;
}

interface WhyMoganaContent {
  eyebrow: string;
  title: string;
  description: string;
  cards: WhyMoganaCard[];
}

const content: Record<Locale, WhyMoganaContent> = {
  en: {
    eyebrow: "Why recruiters should choose me",
    title: "From business challenge to production-ready product.",
    description:
      "I bring together product thinking, full-stack execution and real operational experience to build reliable digital solutions that create measurable value for organisations.",
    cards: [
      {
        title: "Product-focused problem solving",
        text:
          "I begin with the business challenge, user needs and expected outcome before selecting technologies or designing the solution.",
        icon: Lightbulb,
      },
      {
        title: "Complete product delivery",
        text:
          "I contribute across architecture, databases, frontend, backend, testing, deployment, optimisation and ongoing product improvement.",
        icon: Layers3,
      },
      {
        title: "Strong business understanding",
        text:
          "My experience in logistics, operations and management helps me understand complex workflows and turn them into practical software.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Proven across industries",
        text:
          "I have delivered SaaS platforms, ERP systems, marketplaces, e-commerce solutions and corporate websites for real organisations.",
        icon: Building2,
      },
    ],
  },

  fr: {
    eyebrow: "Pourquoi les recruteurs me choisissent",
    title: "Du besoin métier au produit prêt pour la production.",
    description:
      "Je réunis réflexion produit, développement full stack et expérience opérationnelle pour créer des solutions numériques fiables apportant une réelle valeur aux organisations.",
    cards: [
      {
        title: "Résolution orientée produit",
        text:
          "Je commence par le besoin métier, les utilisateurs et les résultats attendus avant de sélectionner les technologies ou concevoir la solution.",
        icon: Lightbulb,
      },
      {
        title: "Livraison produit complète",
        text:
          "J’interviens sur l’architecture, les bases de données, le frontend, le backend, les tests, le déploiement et l’optimisation.",
        icon: Layers3,
      },
      {
        title: "Bonne compréhension du métier",
        text:
          "Mon expérience en logistique, opérations et management me permet de transformer des workflows complexes en logiciels pratiques.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Expérience multisectorielle",
        text:
          "J’ai réalisé des plateformes SaaS, ERP, marketplaces, solutions e-commerce et sites corporate pour de véritables organisations.",
        icon: Building2,
      },
    ],
  },
};

export default function WhyMogana({
  locale = "en",
}: WhyMoganaProps) {
  const sectionContent = content[locale];
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.11,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 26,
          scale: 0.985,
        },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      aria-labelledby="why-mogana-heading"
      className="relative overflow-hidden bg-ink py-10 sm:py-12 lg:py-14"
    >
      {/* Subtle atmosphere matching the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/[0.025] blur-[135px]" />

        <div className="absolute -left-36 top-10 h-64 w-64 rounded-full bg-[#ff6b35]/[0.035] blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-64 w-64 rounded-full bg-[#ff8a50]/[0.025] blur-[115px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Heading */}
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
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#ff6b35]">
            {sectionContent.eyebrow}
          </p>

          <h2
            id="why-mogana-heading"
            className="mx-auto mt-3 max-w-4xl font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            {sectionContent.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {sectionContent.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
          variants={containerVariants}
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {sectionContent.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.01,
                      }
                }
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#ff6b35]/30 hover:bg-[#ff6b35]/[0.04] hover:shadow-[0_24px_65px_rgba(0,0,0,0.24)] sm:min-h-[260px] sm:p-6"
              >
                {/* Top orange accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/0 to-transparent transition-all duration-300 group-hover:via-[#ff6b35]/70"
                />

                {/* Card number */}
                <span className="absolute right-5 top-5 font-mono text-[11px] font-bold tracking-[0.12em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/20 bg-[#ff6b35]/10 text-[#ff7842] shadow-[0_8px_24px_rgba(255,107,53,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#ff6b35]/40 group-hover:bg-[#ff6b35]/15">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </div>

                <h3 className="mt-5 min-h-[48px] font-display text-base font-extrabold leading-snug tracking-[-0.02em] text-white sm:text-lg">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/58">
                  {card.text}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-auto pt-5"
                >
                  <div className="h-px w-10 bg-[#ff6b35]/45 transition-all duration-300 group-hover:w-16 group-hover:bg-[#ff6b35]" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}