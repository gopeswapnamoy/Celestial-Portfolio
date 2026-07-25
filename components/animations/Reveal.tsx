"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeReveal, maskReveal, riseReveal } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

const variantMap: Record<"fade" | "rise" | "mask", Variants> = {
  fade: fadeReveal,
  rise: riseReveal,
  mask: maskReveal,
};

export function Reveal({
  children,
  type = "rise",
  className,
  delay = 0,
}: {
  children: ReactNode;
  type?: "fade" | "rise" | "mask";
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={variantMap[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
