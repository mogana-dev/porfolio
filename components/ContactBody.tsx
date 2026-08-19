"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Github,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/contact";
import type { Locale } from "@/lib/dictionary";

type SocialItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
  short?: string;
};

const SOCIALS: SocialItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/moganadev",
    icon: Github,
  },
  {
    name: "X",
    href: "https://x.com/moganadev",
    short: "X",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/moganadev",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/moganadev",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@moganadev",
    icon: Youtube,
  },
  {
    name: "DEV Community",
    href: "https://dev.to/moganadev",
    short: "DEV",
  },
  {
    name: "Medium",
    href: "https://medium.com/@moganadev",
    short: "M",
  },
  {
    name: "Reddit",
    href: "https://reddit.com/user/moganadev",
    short: "R",
 },
  {
    name: "Discord",
    href: "https://discord.com",
    short: "D",
  },
];

export default function ContactBody({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const reduceMotion = useReducedMotion();

  const copy =
    locale === "fr"
      ? {
          heroAlt: "Contact professionnel Mogana.dev",
          eyebrow: "Contact et opportunités",
          title:
            "Parlons d’un poste, d’un produit ou d’une collaboration ambitieuse.",
          description:
            "Je suis ouvert aux opportunités internationales à temps plein, à la mobilité, aux projets SaaS et aux collaborations avec des équipes produit sérieuses.",
          email: "E-mail",
          availability: "Disponibilité",
          availabilityValue:
            "Ouvert aux opportunités internationales et à la mobilité",
          location: "Localisation",
          locationValue: "Maurice · Actuellement en Inde",
          formEyebrow: "Envoyer une demande",
          formTitle: "Présentez votre besoin clairement.",
          formDescription:
            "Indiquez le contexte, le poste ou le projet. Je répondrai avec les prochaines étapes les plus appropriées.",
          socialsEyebrow: "Réseaux et communautés",
          socialsDescription:
            "Retrouvez Mogana.dev sous le même identifiant : /moganadev",
          trustEyebrow: "Ce que vous pouvez attendre",
          trustTitle:
            "Une communication professionnelle, directe et orientée solution.",
          trustPoints: [
            "Réponse claire sur la disponibilité et la faisabilité.",
            "Compréhension rapide du besoin métier ou du poste.",
            "Communication en anglais ou en français.",
            "Respect de la confidentialité et des informations partagées.",
          ],
          ctaTitle: "Vous avez déjà un rôle ou un projet en tête ?",
          ctaText:
            "Envoyez les détails essentiels et démarrons une conversation utile.",
          emailLink: "Écrire à Mogana.dev",
        }
      : {
          heroAlt: "Mogana.dev professional contact",
          eyebrow: "Contact & opportunities",
          title:
            "Let’s discuss a role, a product or an ambitious collaboration.",
          description:
            "I am open to international full-time opportunities, relocation, SaaS products and meaningful collaborations with serious product teams.",
          email: "Email",
          availability: "Availability",
          availabilityValue:
            "Open to international opportunities and relocation",
          location: "Location",
          locationValue: "Mauritius · Currently in India",
          formEyebrow: "Send an enquiry",
          formTitle: "Share the context clearly.",
          formDescription:
            "Include the role, product or business need. I will respond with the most useful next step.",
          socialsEyebrow: "Socials and communities",
          socialsDescription:
            "Find Mogana.dev under the same handle: /moganadev",
          trustEyebrow: "What you can expect",
          trustTitle:
            "Professional, direct and solution-focused communication.",
          trustPoints: [
            "A clear response about availability and feasibility.",
            "Fast understanding of the role or business requirement.",
            "Professional communication in English or French.",
            "Respect for confidentiality and shared information.",
          ],
          ctaTitle: "Already have a role or project in mind?",
          ctaText:
            "Send the essential details and let’s begin a useful conversation.",
          emailLink: "Email Mogana.dev",
        };

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
      <Navbar locale={locale} />

      {/* Banner directly under the fixed header; no crop */}
      <div className="pt-[102px] lg:pt-0">
        <motion.section
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative m-0 w-full overflow-hidden bg-[#061224]"
        >
          <Image
            src="/images/banners/contact.webp"
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
            className="pointer-events-none absolute inset-0 bg-black/45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061224]/55 via-transparent to-black/10"
          />
        </motion.section>
      </div>

      <motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
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

            <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {copy.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
              {copy.description}
            </p>
          </div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-10">
          <motion.div {...reveal} className="space-y-8">
            <div className="space-y-0">
              <ContactLine
                icon={Mail}
                label={copy.email}
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
              />
              <ContactLine
                icon={MapPin}
                label={copy.location}
                value={copy.locationValue}
              />
              <ContactLine
                icon={Globe2}
                label={copy.availability}
                value={copy.availabilityValue}
              />
            </div>

            <div className="border-t border-white/10 pt-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.socialsEyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {copy.socialsDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b1b30] px-3 text-white/60 transition duration-300 hover:-translate-y-0.5 hover:border-[#ff6b35]/55 hover:text-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
                    >
                      {Icon ? (
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      ) : (
                        <span className="text-[10px] font-black tracking-tight">
                          {social.short}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 pt-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.trustEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white">
                {copy.trustTitle}
              </h2>

              <ul className="mt-5 space-y-4">
                {copy.trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/68"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...reveal}>
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">
                {copy.formEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                {copy.formTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {copy.formDescription}
              </p>
            </div>

            <ContactForm locale={locale} />
          </motion.div>
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
              {copy.ctaText}
            </p>
          </div>

          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-white underline decoration-white/60 decoration-2 underline-offset-4 transition hover:decoration-white"
          >
            {copy.emailLink}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-start gap-4 border-b border-white/10 py-5 first:pt-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/[0.07] text-[#ff6b35] transition group-hover:border-[#ff6b35]/65">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/42">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-semibold leading-6 text-white/82">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]"
    >
      {content}
    </a>
  );
}
