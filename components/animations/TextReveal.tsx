"use client";

import { motion } from "framer-motion";
import { textStaggerReveal, wordReveal } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "word" | "letter";
  className?: string;
  delay?: number;
};

export function TextReveal({
  text,
  as = "span",
  mode = "word",
  className,
  delay = 0,
}: TextRevealProps) {
  const MotionTag = motion[as];
  const parts = mode === "letter" ? Array.from(text) : text.split(" ");

  return (
    <MotionTag
      className={cn("inline-flex flex-wrap overflow-hidden", className)}
      aria-label={text}
      variants={textStaggerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay }}
    >
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="overflow-hidden pr-[0.18em]" aria-hidden="true">
          <motion.span className="inline-block" variants={wordReveal}>
            {part === " " ? "\u00A0" : part}
            {mode === "word" && index < parts.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
