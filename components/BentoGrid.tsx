"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/lib/skills";

const spanClasses = [
  "md:col-span-4", "md:col-span-2", "md:col-span-3",
  "md:col-span-3", "md:col-span-3", "md:col-span-3", "md:col-span-6",
];

export default function BentoGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {groups.map((g, idx) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: idx * 0.06 }}
          className={`glass rounded-2xl p-6 ${spanClasses[idx % spanClasses.length]}`}
        >
          <h3 className="font-display font-bold text-base">{g.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {g.skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full bg-panel2 border border-line px-3 py-1.5 text-xs text-mist/85"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
