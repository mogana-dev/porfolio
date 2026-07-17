"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/articles";
import type { Locale } from "@/lib/dictionary";

export default function ArticlesBody({ locale = "en" }: { locale?: Locale }) {
  const reduceMotion = useReducedMotion();
  const articles = getArticles(locale);
  const categories = Array.from(
  new Set(
    articles.map((article) => article.category),
  ),
);

  const copy =
    locale === "fr"
      ? {
          eyebrow: "Écrits et perspectives",
          title: "Des articles pratiques sur les produits, le SaaS, la sécurité et l’ingénierie moderne.",
          description: "J’écris pour expliquer les décisions derrière les produits numériques : structuration SaaS, sécurité, expérience utilisateur, IA et systèmes utiles aux entreprises.",
          articles: "articles publiés",
          categories: "domaines abordés",
          focus: "orientation pratique",
          sectionEyebrow: "Tous les articles",
          sectionTitle: "Des idées applicables aux produits, aux équipes et aux opérations.",
          sectionDescription: "Chaque article part d’un problème réel et présente des choix techniques, produit ou organisationnels de manière claire et concrète.",
          recruiterEyebrow: "Pourquoi j’écris",
          recruiterTitle: "L’écriture montre ma manière d’analyser, structurer et communiquer.",
          recruiterDescription: "Ces articles montrent comment je relie besoins métier, expérience utilisateur, sécurité, architecture et maintenabilité.",
          recruiterPoints: [
            "Expliquer des sujets techniques de manière accessible.",
            "Relier une décision d’ingénierie à un résultat métier.",
            "Documenter les risques, compromis et priorités.",
            "Communiquer en anglais et en français.",
          ],
          ctaTitle: "Vous souhaitez discuter d’un produit ou d’un sujet technique ?",
          ctaDescription: "Mogana.dev est ouvert aux opportunités internationales, aux collaborations produit et aux échanges avec des équipes ambitieuses.",
          contact: "Contacter Mogana.dev",
        }
      : {
          eyebrow: "Writing & insights",
          title: "Practical articles on products, SaaS, security and modern engineering.",
          description: "I write to explain the decisions behind digital products: SaaS structure, secure access, user experience, AI integration and systems that remain useful to the business.",
          articles: "published articles",
          categories: "topics covered",
          focus: "practical focus",
          sectionEyebrow: "All articles",
          sectionTitle: "Ideas that can be applied to products, teams and operations.",
          sectionDescription: "Each article begins with a real problem and explains technical, product or operational decisions in a clear and practical way.",
          recruiterEyebrow: "Why I write",
          recruiterTitle: "Writing shows how I analyse, structure and communicate.",
          recruiterDescription: "These articles show how I connect business needs, user experience, security, architecture and maintainability.",
          recruiterPoints: [
            "Explain technical subjects in accessible language.",
            "Connect an engineering decision to a business outcome.",
            "Document risks, trade-offs and priorities.",
            "Communicate professionally in English and French.",
          ],
          ctaTitle: "Would you like to discuss a product or technical topic?",
          ctaDescription: "Mogana.dev is open to international opportunities, product collaborations and conversations with ambitious teams.",
          contact: "Contact Mogana.dev",
        };

  const contactPath = locale === "fr" ? "/fr/contact" : "/contact";

  return (
    <main id="main-content" className="overflow-hidden bg-[#061224] text-white">
      <Navbar locale={locale} />

      <motion.section
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-white/10 pb-9 pt-[130px] sm:pb-12 sm:pt-[140px] lg:pt-[150px]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">{copy.eyebrow}</p>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{copy.title}</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">{copy.description}</p>
          </div>

          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-[#ff6b35]" />
              <div><p className="font-display text-lg font-extrabold">{articles.length}</p><p className="text-xs text-white/48">{copy.articles}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#ff6b35]" />
              <div><p className="font-display text-lg font-extrabold">{categories.length}</p><p className="text-xs text-white/48">{copy.categories}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-[#ff6b35]" />
              <div><p className="font-display text-lg font-extrabold">Product + Engineering</p><p className="text-xs text-white/48">{copy.focus}</p></div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">{copy.sectionEyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{copy.sectionTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">{copy.sectionDescription}</p>
          </div>

          <div className="mt-9 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff6b35]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ff6b35]">{copy.recruiterEyebrow}</p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{copy.recruiterTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/66">{copy.recruiterDescription}</p>
          </div>

          <ul className="space-y-4 lg:pt-7">
            {copy.recruiterPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-white/72">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#ff6b35]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff6b35]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e95420] via-[#ff6b35] to-[#ff8657]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">{copy.ctaTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/86">{copy.ctaDescription}</p>
          </div>
          <Link href={contactPath} className="inline-flex items-center gap-2 text-sm font-extrabold underline decoration-white/60 decoration-2 underline-offset-4">
            <Mail className="h-4 w-4" />{copy.contact}<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
