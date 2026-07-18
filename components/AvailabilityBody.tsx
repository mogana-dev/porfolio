"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Globe2,
  Languages,
  Mail,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { withLocale, type Locale } from "@/lib/dictionary";

type AvailabilityItem = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  status: "available" | "open" | "flexible";
};

type AvailabilityContent = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  summary: Array<{
    value: string;
    label: string;
    icon: LucideIcon;
  }>;
  current: {
    eyebrow: string;
    title: string;
    description: string;
    items: AvailabilityItem[];
  };
  roles: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  locations: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string[];
    other: string[];
    note: string;
    countriesLabel: string;
  };
  timing: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
  };
  reassurance: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  cta: {
    title: string;
    description: string;
    contact: string;
    countries: string;
  };
};

const CONTENT: Record<Locale, AvailabilityContent> = {
  en: {
    intro: {
      eyebrow: "Current availability",
      title:
        "Available for the right international product engineering opportunity.",
      description:
        "I am actively considering full-time roles, relocation opportunities and selected product collaborations where I can contribute across SaaS, enterprise software, AI and business automation.",
    },
    summary: [
      {
        value: "Full-time",
        label: "Primary employment preference",
        icon: BriefcaseBusiness,
      },
      {
        value: "International",
        label: "Open to relocation and sponsorship",
        icon: Globe2,
      },
      {
        value: "EN + FR",
        label: "Professional communication",
        icon: Languages,
      },
    ],
    current: {
      eyebrow: "Availability overview",
      title: "Clear availability for recruiters and hiring teams.",
      description:
        "This page summarises the working arrangements, role types and mobility options I am currently open to discussing.",
      items: [
        {
          title: "Full-time employment",
          value: "Available",
          description:
            "Open to permanent product engineering and full stack software roles.",
          icon: BriefcaseBusiness,
          status: "available",
        },
        {
          title: "International relocation",
          value: "Open",
          description:
            "Prepared to relocate for the right long-term opportunity.",
          icon: Plane,
          status: "open",
        },
        {
          title: "Remote work",
          value: "Flexible",
          description:
            "Open to remote, hybrid or relocation-based arrangements.",
          icon: Globe2,
          status: "flexible",
        },
        {
          title: "Interview scheduling",
          value: "Flexible",
          description:
            "Available for interviews across multiple international time zones.",
          icon: CalendarClock,
          status: "flexible",
        },
        {
          title: "Contract projects",
          value: "Selective",
          description:
            "Available for selected SaaS, AI and business software projects.",
          icon: Building2,
          status: "flexible",
        },
        {
          title: "Start date",
          value: "Discussable",
          description:
            "Can align the start date around notice, relocation and onboarding requirements.",
          icon: Clock3,
          status: "flexible",
        },
      ],
    },
    roles: {
      eyebrow: "Role preferences",
      title: "Roles that align with my experience and direction.",
      description:
        "I am most interested in positions where product thinking, full stack delivery and business understanding are all valued.",
      items: [
        "Full Stack Product Engineer",
        "Full Stack Developer",
        "SaaS Product Engineer",
        "Product-focused Software Engineer",
        "AI & Automation Engineer",
        "Technical Product Builder",
      ],
    },
    locations: {
      eyebrow: "Location preferences",
      title: "Open to relocation across selected international markets.",
      description:
        "My priority is a stable long-term role with a strong team, clear product ownership and genuine growth opportunities.",
      primary: [
        "Netherlands",
        "Germany",
        "Luxembourg",
        "Ireland",
        "Belgium",
      ],
      other: [
        "Switzerland",
        "France",
        "Sweden",
        "Denmark",
        "Norway",
      ],
      note:
        "I remain open to other countries when the role, team and relocation support are a strong fit.",
      countriesLabel: "View country-specific opportunities",
    },
    timing: {
      eyebrow: "Working flexibility",
      title: "Prepared for international hiring processes.",
      description:
        "I understand that relocation and cross-border recruitment require coordination, documentation and flexibility.",
      items: [
        {
          title: "Time-zone flexibility",
          description:
            "Available for calls and interviews across European and international time zones.",
          icon: Clock3,
        },
        {
          title: "Relocation planning",
          description:
            "Prepared to coordinate travel, documentation and onboarding requirements.",
          icon: Plane,
        },
        {
          title: "Bilingual communication",
          description:
            "Professional communication in English and French.",
          icon: Languages,
        },
        {
          title: "Long-term commitment",
          description:
            "Seeking a stable role where I can contribute and grow with the team.",
          icon: ShieldCheck,
        },
      ],
    },
    reassurance: {
      eyebrow: "For recruiters",
      title: "A straightforward and professional hiring conversation.",
      description:
        "I value clear expectations, honest communication and a structured recruitment process.",
      points: [
        "Clear communication about availability and relocation",
        "Professional responses in English or French",
        "Open discussion about visa sponsorship and onboarding",
        "Transparent conversation about role scope and expectations",
        "Availability for technical and product interviews",
        "Interest in stable, meaningful long-term contribution",
      ],
    },
    cta: {
      title: "Have a role that matches this availability?",
      description:
        "Share the position, location, team context and expected start date. I will respond clearly and professionally.",
      contact: "Request an interview",
      countries: "Explore target countries",
    },
  },
  fr: {
    intro: {
      eyebrow: "Disponibilité actuelle",
      title:
        "Disponible pour la bonne opportunité internationale en ingénierie produit.",
      description:
        "J’étudie activement les postes à temps plein, les opportunités de mobilité et certaines collaborations produit en SaaS, logiciels d’entreprise, IA et automatisation.",
    },
    summary: [
      {
        value: "Temps plein",
        label: "Préférence principale",
        icon: BriefcaseBusiness,
      },
      {
        value: "International",
        label: "Ouvert à la mobilité et au sponsoring",
        icon: Globe2,
      },
      {
        value: "EN + FR",
        label: "Communication professionnelle",
        icon: Languages,
      },
    ],
    current: {
      eyebrow: "Aperçu de la disponibilité",
      title: "Une disponibilité claire pour les recruteurs et les équipes.",
      description:
        "Cette page résume les modalités de travail, les types de postes et les options de mobilité que je suis actuellement prêt à discuter.",
      items: [
        {
          title: "Emploi à temps plein",
          value: "Disponible",
          description:
            "Ouvert aux postes permanents en ingénierie produit et développement full stack.",
          icon: BriefcaseBusiness,
          status: "available",
        },
        {
          title: "Mobilité internationale",
          value: "Ouvert",
          description:
            "Prêt à déménager pour la bonne opportunité à long terme.",
          icon: Plane,
          status: "open",
        },
        {
          title: "Travail à distance",
          value: "Flexible",
          description:
            "Ouvert au télétravail, à l’hybride ou à la relocalisation.",
          icon: Globe2,
          status: "flexible",
        },
        {
          title: "Planification des entretiens",
          value: "Flexible",
          description:
            "Disponible pour des entretiens sur plusieurs fuseaux horaires.",
          icon: CalendarClock,
          status: "flexible",
        },
        {
          title: "Projets en contrat",
          value: "Sélectif",
          description:
            "Disponible pour certains projets SaaS, IA et logiciels métier.",
          icon: Building2,
          status: "flexible",
        },
        {
          title: "Date de démarrage",
          value: "À discuter",
          description:
            "La date peut être alignée avec le préavis, la mobilité et l’intégration.",
          icon: Clock3,
          status: "flexible",
        },
      ],
    },
    roles: {
      eyebrow: "Préférences de postes",
      title: "Des rôles alignés avec mon expérience et ma direction.",
      description:
        "Je recherche principalement des postes où la réflexion produit, le full stack et la compréhension métier sont valorisés.",
      items: [
        "Ingénieur Produit Full Stack",
        "Développeur Full Stack",
        "Ingénieur Produit SaaS",
        "Ingénieur logiciel orienté produit",
        "Ingénieur IA et Automatisation",
        "Technical Product Builder",
      ],
    },
    locations: {
      eyebrow: "Préférences géographiques",
      title: "Ouvert à la mobilité vers plusieurs marchés internationaux.",
      description:
        "Ma priorité est un poste stable à long terme, avec une équipe solide, une responsabilité produit claire et de vraies possibilités d’évolution.",
      primary: [
        "Pays-Bas",
        "Allemagne",
        "Luxembourg",
        "Irlande",
        "Belgique",
      ],
      other: [
        "Suisse",
        "France",
        "Suède",
        "Danemark",
        "Norvège",
      ],
      note:
        "Je reste ouvert à d’autres pays lorsque le poste, l’équipe et l’accompagnement à la mobilité correspondent bien.",
      countriesLabel: "Voir les opportunités par pays",
    },
    timing: {
      eyebrow: "Flexibilité de travail",
      title: "Préparé aux processus de recrutement internationaux.",
      description:
        "Je comprends que la mobilité et le recrutement transfrontalier demandent coordination, documents et flexibilité.",
      items: [
        {
          title: "Flexibilité horaire",
          description:
            "Disponible pour les appels et entretiens sur les fuseaux européens et internationaux.",
          icon: Clock3,
        },
        {
          title: "Planification de la mobilité",
          description:
            "Prêt à coordonner le voyage, les documents et l’intégration.",
          icon: Plane,
        },
        {
          title: "Communication bilingue",
          description:
            "Communication professionnelle en anglais et en français.",
          icon: Languages,
        },
        {
          title: "Engagement à long terme",
          description:
            "Je recherche un poste stable pour contribuer et évoluer avec l’équipe.",
          icon: ShieldCheck,
        },
      ],
    },
    reassurance: {
      eyebrow: "Pour les recruteurs",
      title: "Une conversation de recrutement claire et professionnelle.",
      description:
        "Je valorise les attentes claires, la communication honnête et un processus de recrutement structuré.",
      points: [
        "Communication claire sur la disponibilité et la mobilité",
        "Réponses professionnelles en anglais ou en français",
        "Discussion ouverte sur le sponsoring de visa et l’intégration",
        "Échange transparent sur le périmètre du poste",
        "Disponibilité pour les entretiens techniques et produit",
        "Recherche d’une contribution stable et significative",
      ],
    },
    cta: {
      title: "Vous avez un poste correspondant à cette disponibilité ?",
      description:
        "Partagez le poste, la localisation, le contexte de l’équipe et la date prévue. Je répondrai clairement et professionnellement.",
      contact: "Demander un entretien",
      countries: "Découvrir les pays ciblés",
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AvailabilityBody({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const t = CONTENT[locale];
  const reduceMotion = useReducedMotion();

  const viewport = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: {
          once: true,
          amount: 0.12,
        },
      };

  const contactPath = withLocale("/contact", locale);
  const countriesPath = withLocale("/countries", locale);

  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      {/* Banner only: no text, no buttons, no cropping */}
      <div className="pt-[102px] lg:pt-0">
        <motion.section
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative m-0 w-full overflow-hidden bg-[#061224]"
        >
          <Image
            src="/images/banners/availability.webp"
            alt={
              locale === "fr"
                ? "Bannière de disponibilité professionnelle Mogana.dev"
                : "Mogana.dev professional availability banner"
            }
            width={1920}
            height={1080}
            priority
            quality={82}
            sizes="100vw"
            className="block h-auto w-full"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/55"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/80 via-[#061224]/20 to-black/15"
          />
        </motion.section>
      </div>

      <motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.72,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-b border-white/10 py-9 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {t.intro.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 max-w-5xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.intro.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {t.intro.description}
            </p>
          </div>

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {t.summary.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={reveal}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-extrabold text-white">
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/48">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.current.eyebrow}
            title={t.current.title}
            description={t.current.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mt-9 grid gap-x-8 gap-y-0 md:grid-cols-2"
          >
            {t.current.items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={reveal}
                  className="group flex items-start gap-4 border-b border-white/10 py-5 first:pt-0 md:first:pt-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/[0.07] text-[#ff6b35] transition group-hover:border-[#ff6b35]/65">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-extrabold text-white">
                        {item.title}
                      </h3>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {item.value}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-white/62">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.roles.eyebrow}
            title={t.roles.title}
            description={t.roles.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {t.roles.items.map((role) => (
              <motion.div
                key={role}
                variants={reveal}
                className="flex items-center gap-3 border-b border-white/10 py-4"
              >
                <BriefcaseBusiness
                  className="h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-white/78">
                  {role}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.locations.eyebrow}
            title={t.locations.title}
            description={t.locations.description}
          />

          <div className="mt-9 grid gap-10 lg:grid-cols-2">
            <motion.div {...viewport} variants={reveal}>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                <h3 className="font-display text-xl font-extrabold text-white">
                  {locale === "fr" ? "Marchés prioritaires" : "Priority markets"}
                </h3>
              </div>

              <ul className="mt-5 space-y-0">
                {t.locations.primary.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-semibold text-white/76"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#ff6b35]"
                      aria-hidden="true"
                    />
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...viewport} variants={reveal}>
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                <h3 className="font-display text-xl font-extrabold text-white">
                  {locale === "fr" ? "Autres marchés ciblés" : "Additional target markets"}
                </h3>
              </div>

              <ul className="mt-5 space-y-0">
                {t.locations.other.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-semibold text-white/76"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#ff6b35]"
                      aria-hidden="true"
                    />
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...viewport}
            variants={reveal}
            className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-3xl text-sm leading-7 text-white/60">
              {t.locations.note}
            </p>

            <Link
              href={countriesPath}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-white underline decoration-[#ff6b35] decoration-2 underline-offset-4"
            >
              {t.locations.countriesLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow={t.timing.eyebrow}
            title={t.timing.title}
            description={t.timing.description}
          />

          <motion.div
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.timing.items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={reveal}
                  className="border-t border-[#ff6b35]/45 pt-5"
                >
                  <Icon className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-10">
          <motion.div {...viewport} variants={reveal}>
            <SectionHeading
              eyebrow={t.reassurance.eyebrow}
              title={t.reassurance.title}
              description={t.reassurance.description}
            />
          </motion.div>

          <motion.ul
            {...viewport}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="space-y-4 lg:pt-7"
          >
            {t.reassurance.points.map((point) => (
              <motion.li
                key={point}
                variants={reveal}
                className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/72"
              >
                <BadgeCheck
                  className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff6b35]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {t.cta.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/86">
              {t.cta.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link
              href={contactPath}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.cta.contact}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href={countriesPath}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              {t.cta.countries}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.header
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="max-w-4xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-9 bg-[#ff6b35]" />
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
        {description}
      </p>
    </motion.header>
  );
}
