"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/timeline";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-8 space-y-10">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
      {entries.map((e, idx) => (
        <motion.div
          key={e.title}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-violet shadow-glow" />
          <span className="text-xs uppercase tracking-wide text-saffron font-mono">{e.period}</span>
          <h3 className="mt-1 font-display text-lg font-bold">{e.title}</h3>
          <p className="mt-2 text-sm text-dim leading-relaxed">{e.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {e.items.map((it) => (
              <span key={it} className="text-xs rounded-full border border-line bg-panel2 px-3 py-1 text-mist/80">
                {it}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
