"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, EyeOff, Mail, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/contact";
import { dict, type Locale } from "@/lib/dictionary";

export default function PrivacyBody({ locale = "en" }: { locale?: Locale }) {
  const t = dict[locale].privacy;
  const reduceMotion = useReducedMotion();

  const points = [
    { icon: ShieldCheck, text: t.p1 },
    { icon: BarChart3, text: t.p2 },
    { icon: EyeOff, text: t.p3 },
  ];

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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h1>
          </div>
        </div>
      </motion.section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {points.map(({ icon: Icon, text }) => (
              <motion.article
                key={text}
                variants={{
                  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/[0.14] via-brand/[0.055] to-transparent p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-brand/80"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/45 bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm leading-6 text-white/80">{text}</p>
                <div aria-hidden="true" className="mt-auto h-[2px] w-12 bg-brand" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
            <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/80">
              {t.p4}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
