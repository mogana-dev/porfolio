"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Boxes,
  Building2,
  CheckCircle2,
  Code2,
  Hotel,
  Languages,
  Lightbulb,
  Network,
  PackageCheck,
  Rocket,
  Users,
} from "lucide-react";

import type { Locale } from "@/lib/dictionary";

interface MilestonesProps {
  locale?: Locale;
}

type MilestoneIcon = typeof Hotel;

interface ExperienceItem {
  label: string;
  icon: MilestoneIcon;
}

interface Milestone {
  period: string;
  startYear: string;
  endYear: string;
  title: string;
  organisation: string;
  description: string;
  acquiredTitle: string;
  acquired: ExperienceItem[];
  icon: MilestoneIcon;
}

interface MilestoneContent {
  eyebrow: string;
  title: string;
  description: string;
  totalLabel: string;
  totalValue: string;
  totalDescription: string;
  milestoneLabel: string;
  milestones: Milestone[];
}

const content: Record<Locale, MilestoneContent> = {
  en: {
    eyebrow: "Professional Milestones",
    title: "From operations to digital product engineering.",
    description:
      "A career shaped by customer service, logistics, leadership and software delivery—giving me the practical business understanding to build products that work beyond the demo.",
    totalLabel: "Total professional experience",
    totalValue: "16 Years",
    totalDescription:
      "Cross-industry experience spanning hospitality, logistics, warehousing, operations, leadership and software product development.",
    milestoneLabel: "Professional milestone",
    milestones: [
      {
        period: "2010 — 2015",
        startYear: "2010",
        endYear: "2015",
        title: "Hospitality Industry",
        organisation:
          "Beachcomber Resorts & Hotels · Mauritius",
        description:
          "Built a strong foundation in customer service, front-office operations, night auditing, communication and handling time-sensitive operational responsibilities.",
        acquiredTitle: "Experience acquired",
        acquired: [
          {
            label: "Customer-focused communication",
            icon: Users,
          },
          {
            label: "Operational discipline",
            icon: CheckCircle2,
          },
          {
            label: "Problem solving under pressure",
            icon: Lightbulb,
          },
          {
            label: "English and French communication",
            icon: Languages,
          },
        ],
        icon: Hotel,
      },
      {
        period: "2011 — 2019",
        startYear: "2011",
        endYear: "2019",
        title: "Logistics & Warehousing",
        organisation:
          "White Sand Tours · Grays Inc · Mauritius",
        description:
          "Progressed through fleet coordination, distribution, warehouse operations and supply-chain leadership, managing teams, stock movements and business-critical workflows.",
        acquiredTitle: "Experience acquired",
        acquired: [
          {
            label: "Logistics and supply-chain operations",
            icon: Boxes,
          },
          {
            label: "Warehouse and inventory management",
            icon: PackageCheck,
          },
          {
            label: "Team leadership and coordination",
            icon: Users,
          },
          {
            label: "Business process optimisation",
            icon: Network,
          },
        ],
        icon: Building2,
      },
      {
        period: "2020 — 2026",
        startYear: "2020",
        endYear: "2026",
        title: "Software & Web Product Engineering",
        organisation:
          "Mobiz Ltd · BlueWave Technologies Ltd",
        description:
          "Moved from operational leadership into full-stack product engineering, delivering SaaS platforms, ERP systems, marketplaces, e-commerce applications and AI-powered business solutions.",
        acquiredTitle: "Experience acquired",
        acquired: [
          {
            label: "End-to-end software delivery",
            icon: Code2,
          },
          {
            label: "SaaS, ERP and marketplace architecture",
            icon: Network,
          },
          {
            label: "Product and business analysis",
            icon: Lightbulb,
          },
          {
            label: "Production deployment and improvement",
            icon: Rocket,
          },
        ],
        icon: Code2,
      },
    ],
  },

  fr: {
    eyebrow: "Parcours professionnel",
    title:
      "Des opérations à l’ingénierie de produits numériques.",
    description:
      "Un parcours construit autour du service client, de la logistique, du leadership et de la livraison logicielle, apportant une compréhension concrète des besoins métier.",
    totalLabel: "Expérience professionnelle totale",
    totalValue: "16 ans",
    totalDescription:
      "Une expérience multisectorielle couvrant l’hôtellerie, la logistique, les entrepôts, les opérations, le management et le développement logiciel.",
    milestoneLabel: "Étape professionnelle",
    milestones: [
      {
        period: "2010 — 2015",
        startYear: "2010",
        endYear: "2015",
        title: "Secteur hôtelier",
        organisation:
          "Beachcomber Resorts & Hotels · Maurice",
        description:
          "Développement de solides compétences en service client, opérations de réception, audit de nuit, communication et gestion de responsabilités opérationnelles sensibles.",
        acquiredTitle: "Expérience acquise",
        acquired: [
          {
            label: "Communication orientée client",
            icon: Users,
          },
          {
            label: "Discipline opérationnelle",
            icon: CheckCircle2,
          },
          {
            label: "Résolution de problèmes sous pression",
            icon: Lightbulb,
          },
          {
            label: "Communication en anglais et français",
            icon: Languages,
          },
        ],
        icon: Hotel,
      },
      {
        period: "2011 — 2019",
        startYear: "2011",
        endYear: "2019",
        title: "Logistique et entreposage",
        organisation:
          "White Sand Tours · Grays Inc · Maurice",
        description:
          "Évolution dans la gestion de flotte, la distribution, les opérations d’entrepôt et le leadership supply chain, avec gestion des équipes et des flux critiques.",
        acquiredTitle: "Expérience acquise",
        acquired: [
          {
            label: "Logistique et chaîne d’approvisionnement",
            icon: Boxes,
          },
          {
            label: "Gestion des stocks et entrepôts",
            icon: PackageCheck,
          },
          {
            label: "Leadership et coordination d’équipes",
            icon: Users,
          },
          {
            label: "Optimisation des processus métier",
            icon: Network,
          },
        ],
        icon: Building2,
      },
      {
        period: "2020 — 2026",
        startYear: "2020",
        endYear: "2026",
        title: "Ingénierie logicielle et web",
        organisation:
          "Mobiz Ltd · BlueWave Technologies Ltd",
        description:
          "Transition du leadership opérationnel vers l’ingénierie produit Full Stack, avec livraison de SaaS, ERP, marketplaces, e-commerce et solutions métier propulsées par l’IA.",
        acquiredTitle: "Expérience acquise",
        acquired: [
          {
            label: "Livraison logicielle de bout en bout",
            icon: Code2,
          },
          {
            label: "Architecture SaaS, ERP et marketplace",
            icon: Network,
          },
          {
            label: "Analyse produit et métier",
            icon: Lightbulb,
          },
          {
            label: "Déploiement et amélioration continue",
            icon: Rocket,
          },
        ],
        icon: Code2,
      },
    ],
  },
};

export default function Milestones({
  locale = "en",
}: MilestonesProps) {
  const sectionContent = content[locale];
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 24,
          scale: 0.985,
        },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      aria-labelledby="milestones-heading"
      className="relative overflow-x-clip bg-ink py-10 sm:py-12 lg:py-14"
    >
      {/* Subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-80 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/[0.025] blur-[145px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
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
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6b35]">
            {sectionContent.eyebrow}
          </p>

          <h2
            id="milestones-heading"
            className="mx-auto mt-3 max-w-4xl font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            {sectionContent.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {sectionContent.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
          variants={containerVariants}
          className="relative mx-auto mt-8 w-full max-w-5xl sm:mt-11"
        >
          <div className="space-y-4 sm:space-y-5">
            {sectionContent.milestones.map(
              (milestone, milestoneIndex) => {
                const MilestoneIcon = milestone.icon;
                const isLast =
                  milestoneIndex ===
                  sectionContent.milestones.length - 1;

                return (
                  <motion.article
                    key={milestone.title}
                    variants={itemVariants}
                    className="
                      group
                      relative
                      grid
                      min-w-0
                      grid-cols-1
                      sm:grid-cols-[104px_58px_minmax(0,1fr)]
                      sm:gap-5
                      md:grid-cols-[112px_64px_minmax(0,1fr)]
                    "
                  >
                    {/* Desktop years */}
                    <div className="relative hidden pt-5 text-right sm:block">
                      <p className="font-display text-base font-extrabold leading-none text-white">
                        {milestone.startYear}
                      </p>

                      <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff6b35]">
                        {locale === "fr" ? "à" : "to"}
                      </p>

                      <p className="mt-2 font-display text-base font-extrabold leading-none text-white">
                        {milestone.endYear}
                      </p>
                    </div>

                    {/* Desktop timeline */}
                    <div className="relative hidden min-h-full sm:block">
                      <motion.div
                        aria-hidden="true"
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                scaleY: 0,
                              }
                        }
                        whileInView={{
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                          margin: "-60px",
                        }}
                        transition={{
                          duration: shouldReduceMotion
                            ? 0
                            : 0.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`absolute left-1/2 top-0 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#ff6b35] via-[#ff6b35]/45 to-[#ff6b35]/10 ${
                          isLast
                            ? "bottom-1/2"
                            : "bottom-[-20px]"
                        }`}
                      />

                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 1.08,
                              }
                        }
                        className="absolute left-1/2 top-4 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-xl border border-[#ff6b35]/30 bg-[#0a192d] text-[#ff7842] shadow-[0_8px_28px_rgba(0,0,0,0.32),0_0_18px_rgba(255,107,53,0.08)]"
                      >
                        <MilestoneIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </motion.div>
                    </div>

                    {/* Milestone card */}
                    <div
                      className="
                        relative
                        w-full
                        min-w-0
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        p-4
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_18px_48px_rgba(0,0,0,0.16)]
                        backdrop-blur-xl
                        transition-[border-color,background-color,box-shadow]
                        duration-300
                        group-hover:border-[#ff6b35]/30
                        group-hover:bg-[#ff6b35]/[0.035]
                        sm:p-5
                        md:p-6
                      "
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-5 left-0 w-px bg-gradient-to-b from-transparent via-[#ff6b35]/60 to-transparent"
                      />

                      {/* Mobile milestone header */}
                      <div className="mb-4 flex min-w-0 items-center gap-3 sm:hidden">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/25 bg-[#ff6b35]/[0.08] text-[#ff7842] shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                          <MilestoneIcon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff6b35]">
                            {milestone.period}
                          </p>

                          <p className="mt-1 text-[11px] text-white/38">
                            {sectionContent.milestoneLabel}
                          </p>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="break-words font-display text-lg font-extrabold leading-snug tracking-[-0.025em] text-white sm:text-xl">
                            {milestone.title}
                          </h3>

                          <p className="mt-1 break-words text-xs font-semibold leading-5 text-[#ff8a57]">
                            {milestone.organisation}
                          </p>
                        </div>

                        <span className="hidden shrink-0 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] font-semibold text-white/45 md:inline-flex">
                          {milestone.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 break-words text-sm leading-6 text-white/60">
                        {milestone.description}
                      </p>

                      {/* Experience acquired */}
                      <div className="mt-5">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/38">
                          {milestone.acquiredTitle}
                        </p>

                        <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 md:grid-cols-2">
                          {milestone.acquired.map(
                            (experience) => {
                              const ExperienceIcon =
                                experience.icon;

                              return (
                                <div
                                  key={experience.label}
                                  className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 text-xs font-medium leading-5 text-white/60 transition-colors duration-300 group-hover:border-[#ff6b35]/15"
                                >
                                  <ExperienceIcon
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 shrink-0 text-[#ff6b35]"
                                  />

                                  <span className="min-w-0 break-words">
                                    {experience.label}
                                  </span>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>
        </motion.div>

        {/* Total experience */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-7 w-full max-w-5xl"
        >
          <div className="flex min-w-0 flex-col items-center justify-between gap-4 px-1 py-4 text-center sm:flex-row sm:px-0 sm:text-left">
            <div className="min-w-0">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff7842]">
                {sectionContent.totalLabel}
              </p>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-white/48 sm:text-sm">
                {sectionContent.totalDescription}
              </p>
            </div>

            <div className="shrink-0">
              <p className="font-display text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">
                {sectionContent.totalValue}
              </p>

              <div className="mx-auto mt-1 h-px w-16 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent sm:ml-auto sm:mr-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}