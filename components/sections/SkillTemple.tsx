"use client";

import { motion } from "framer-motion";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillTemple() {
  return (
    <SectionTransition id="skills" className="bg-[linear-gradient(180deg,#070707,#15110b_48%,#090908)]">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skill Temple"
          title="A map of pillars, not bars."
          copy="The craft is organized as a temple: AI, interface, backend, databases, automation, design, security, and tools supporting one structure."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const circumference = 2 * Math.PI * 38;
            const offset = circumference - (category.mastery / 100) * circumference;
            return (
              <motion.article
                key={category.title}
                className="group stone-panel relative overflow-hidden rounded-[1.5rem] p-6"
                initial={{ opacity: 0, y: 80, scale: 0.94, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.78, delay: index * 0.06 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,168,77,0.13),transparent_44%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div>
                    <Icon className="text-gold" size={24} />
                    <h3 className="mt-5 font-inscription text-3xl text-ivory">{category.title}</h3>
                  </div>
                  <svg width="92" height="92" viewBox="0 0 92 92" aria-label={`${category.mastery}% mastery`}>
                    <circle cx="46" cy="46" r="38" fill="none" stroke="rgba(255,246,223,0.1)" strokeWidth="5" />
                    <motion.circle
                      cx="46"
                      cy="46"
                      r="38"
                      fill="none"
                      stroke="url(#skillGold)"
                      strokeLinecap="round"
                      strokeWidth="5"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: offset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + index * 0.05 }}
                      transform="rotate(-90 46 46)"
                    />
                    <defs>
                      <linearGradient id="skillGold" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#fff6df" />
                        <stop offset="0.55" stopColor="#d7a84d" />
                        <stop offset="1" stopColor="#35d1c0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="relative z-10 mt-4 text-sm leading-7 text-ivory/62">{category.description}</p>
                <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gold/15 bg-gold/5 px-3 py-1 text-[11px] text-ivory/68 transition group-hover:border-gold/35 group-hover:text-ivory"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
