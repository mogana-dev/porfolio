"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Languages,
  Mail,
  Minus,
  Plane,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOJsonLd, { faqSchema } from "@/components/SEOJsonLd";
import { dict, type Locale } from "@/lib/dictionary";

type RecruiterFaqBodyProps = {
  locale?: Locale;
};

type RecruiterSummaryItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type RecruiterCategory = {
  id: string;
  label: string;
};

export default function RecruiterFaqBody({
  locale = "en",
}: RecruiterFaqBodyProps) {
  const t = dict[locale].recruiterFaq;
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const copy =
    locale === "fr"
      ? {
          heroAlt: "FAQ professionnelle pour recruteurs Mogana.dev",
          eyebrow: "FAQ recruteurs",
          title:
            "Les réponses essentielles avant de planifier un entretien.",
          description:
            "Cette page rassemble les questions les plus fréquentes sur mon profil, ma stack, ma disponibilité, la mobilité internationale et ma manière de travailler.",
          summary: [
            {
              value: "Full stack",
              label: "Produit, frontend, backend et base de données",
              icon: Code2,
            },
            {
              value: "International",
              label: "Ouvert à la mobilité et au sponsoring",
              icon: Globe2,
            },
            {
              value: "EN + FR",
              label: "Communication professionnelle bilingue",
              icon: Languages,
            },
          ] satisfies RecruiterSummaryItem[],
          faqEyebrow: "Questions fréquentes",
          faqTitle:
            "Des réponses claires pour accélérer votre décision.",
          faqDescription:
            "Ouvrez chaque question pour consulter une réponse concise, professionnelle et orientée recrutement.",
          categories: [
            { id: "profile", label: "Profil" },
            { id: "technical", label: "Technique" },
            { id: "working", label: "Méthode de travail" },
            { id: "recruitment", label: "Recrutement" },
          ] satisfies RecruiterCategory[],
          recruiterEyebrow: "Ce que vous devez retenir",
          recruiterTitle:
            "Un profil orienté produit, capable de comprendre le métier et de livrer de bout en bout.",
          recruiterDescription:
            "Mon expérience combine développement full stack, logiciels d’entreprise, SaaS, IA et compréhension pratique des opérations.",
          recruiterPoints: [
            "Expérience sur des produits réels en production",
            "Capacité à travailler sur tout le cycle produit",
            "Communication claire avec équipes techniques et métier",
            "Ouvert aux postes internationaux à temps plein",
            "Disponible pour entretiens techniques et produit",
            "Engagé dans une contribution stable à long terme",
          ],
          ctaTitle: "Votre question est maintenant clarifiée ?",
          ctaDescription:
            "Partagez le poste, le contexte de l’équipe et les prochaines étapes du processus.",
          contact: "Contacter Mogana.dev",
        }
      : {
          heroAlt: "Mogana.dev professional recruiter FAQ",
          eyebrow: "Recruiter FAQ",
          title:
            "The essential answers before scheduling an interview.",
          description:
            "This page brings together the most common questions about my profile, technology stack, availability, international relocation and working style.",
          summary: [
            {
              value: "Full stack",
              label: "Product, frontend, backend and database",
              icon: Code2,
            },
            {
              value: "International",
              label: "Open to relocation and sponsorship",
              icon: Globe2,
            },
            {
              value: "EN + FR",
              label: "Professional bilingual communication",
              icon: Languages,
            },
          ] satisfies RecruiterSummaryItem[],
          faqEyebrow: "Frequently asked questions",
          faqTitle:
            "Clear answers designed to support a faster hiring decision.",
          faqDescription:
            "Open each question for a concise, professional and recruitment-focused response.",
          categories: [
            { id: "profile", label: "Profile" },
            { id: "technical", label: "Technical" },
            { id: "working", label: "Working style" },
            { id: "recruitment", label: "Recruitment" },
          ] satisfies RecruiterCategory[],
          recruiterEyebrow: "What recruiters should remember",
          recruiterTitle:
            "A product-focused profile able to understand the business and deliver end to end.",
          recruiterDescription:
            "My experience combines full stack development, enterprise software, SaaS, AI and practical understanding of real business operations.",
          recruiterPoints: [
            "Experience with real production products",
            "Ability to contribute across the product lifecycle",
            "Clear communication with technical and business teams",
            "Open to international full-time opportunities",
            "Available for technical and product interviews",
            "Focused on stable, long-term contribution",
          ],
          ctaTitle: "Have the answers you needed?",
          ctaDescription:
            "Share the role, team context and next steps in your hiring process.",
          contact: "Contact Mogana.dev",
        };

  const contactPath = locale === "fr" ? "/fr/contact" : "/contact";

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.62,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden bg-[#061224] text-white">
      <SEOJsonLd graph={[faqSchema(t.faqs)]} />
      <Navbar locale={locale} />

      {/* Banner only: no text or buttons, no cropping */}
      <div className="pt-[102px] lg:pt-0">
        <motion.section
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative m-0 w-full overflow-hidden bg-[#061224]"
        >
          <Image
            src="/images/banners/recruiter-faq.webp"
            alt={copy.heroAlt}
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
                {copy.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 max-w-5xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {copy.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {copy.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
            {copy.summary.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#ff6b35]" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-extrabold text-white">
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/48">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.header {...reveal} className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.faqEyebrow}
              </p>
            </div>

            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
              {copy.faqTitle}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
              {copy.faqDescription}
            </p>
          </motion.header>

          <div className="mt-8 flex flex-wrap gap-2">
            {copy.categories.map((category) => (
              <span
                key={category.id}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-white/55"
              >
                {category.label}
              </span>
            ))}
          </div>

          <motion.div
            {...reveal}
            className="mt-8 border-t border-white/10"
          >
            {t.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.q}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`recruiter-faq-answer-${index}`}
                    className="group flex w-full items-start justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ff6b35] sm:py-6"
                  >
                    <span className="flex min-w-0 items-start gap-4">
                      <span className="mt-0.5 font-display text-sm font-black text-[#ff6b35]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-base font-extrabold leading-6 text-white transition group-hover:text-[#ff7b47] sm:text-lg">
                        {faq.q}
                      </span>
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ff6b35]/30 text-[#ff6b35] transition group-hover:border-[#ff6b35]/70">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`recruiter-faq-answer-${index}`}
                        initial={
                          reduceMotion
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={
                          reduceMotion
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: reduceMotion ? 0 : 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-0 sm:pl-10">
                          <p className="max-w-4xl text-sm leading-7 text-white/68 sm:text-[15px]">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-10">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.recruiterEyebrow}
              </p>
            </div>

            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
              {copy.recruiterTitle}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
              {copy.recruiterDescription}
            </p>
          </motion.div>

          <motion.ul {...reveal} className="space-y-4 lg:pt-7">
            {copy.recruiterPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/72"
              >
                <BadgeCheck
                  className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]"
                  aria-hidden="true"
                />
                {point}
              </li>
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
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/86">
              {copy.ctaDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link
              href={contactPath}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {copy.contact}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
