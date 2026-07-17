"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function PageHero({
  eyebrow,
  title,
  description,
  banner,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  banner?: string;
}) {
  if (banner) {
    return (
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={banner} alt="" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <HeroText eyebrow={eyebrow} title={title} description={description} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <AnimatedBackground variant="subtle" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <HeroText eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}

function HeroText({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.2em] text-violet font-mono"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-dim max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </>
  );
}
