"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easing } from "@/lib/motion/tokens";

export function PalaceGateIntro({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <div className="relative isolate overflow-hidden [perspective:1600px]">
      <motion.div
        className="relative z-0"
        initial={{ scale: 1.08, opacity: 0.55 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.25, ease: easing.palaceEase, delay: 0.55 }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/2 origin-left border-r border-gold/35 bg-[linear-gradient(90deg,#090807,#1b140d_46%,#6f4c23_100%)] shadow-[inset_-18px_0_42px_rgba(255,217,138,0.13)]"
        initial={{ x: 0, rotateY: 0 }}
        animate={{ x: "-54vw", rotateY: -12 }}
        transition={{ duration: 2.2, ease: easing.palaceEase, delay: 0.2 }}
      >
        <div className="absolute inset-8 border border-gold/20 bg-[radial-gradient(circle_at_90%_50%,rgba(255,217,138,0.18),transparent_16%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/2 origin-right border-l border-gold/35 bg-[linear-gradient(270deg,#090807,#1b140d_46%,#6f4c23_100%)] shadow-[inset_18px_0_42px_rgba(255,217,138,0.13)]"
        initial={{ x: 0, rotateY: 0 }}
        animate={{ x: "54vw", rotateY: 12 }}
        transition={{ duration: 2.2, ease: easing.palaceEase, delay: 0.2 }}
      >
        <div className="absolute inset-8 border border-gold/20 bg-[radial-gradient(circle_at_10%_50%,rgba(255,217,138,0.18),transparent_16%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 z-30 w-px bg-sun shadow-[0_0_42px_16px_rgba(255,217,138,0.32)]"
        initial={{ opacity: 0.15, scaleY: 0.5 }}
        animate={{ opacity: 0, scaleY: 1.4 }}
        transition={{ duration: 1.55, ease: easing.goldenSweep }}
      />
    </div>
  );
}
