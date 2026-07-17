"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TechIcon } from "@/lib/tech-icons";

export default function IconTile({ tech, index = 0 }: { tech: TechIcon; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 12) * 0.03 }}
      className="flex flex-col items-center gap-2.5"
    >
      <div className="icon-tile w-16 h-16 p-3">
        <div className="relative w-full h-full">
          <Image src={tech.icon} alt={tech.name} fill sizes="64px" className="object-contain" />
        </div>
      </div>
      <span className="text-xs text-dim text-center leading-tight">{tech.name}</span>
    </motion.div>
  );
}
