"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easing } from "@/lib/motion/tokens";

const messages = ["Preparing the chamber", "Lighting the halls", "Opening the archive"];

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("celestial-intro-seen") === "true";
    const total = prefersReducedMotion ? 350 : seen ? 900 : 2300;

    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) => Math.min(current + 1, messages.length - 1));
    }, Math.max(300, total / messages.length));

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("celestial-intro-seen", "true");
      setVisible(false);
    }, total);

    return () => {
      window.clearInterval(messageTimer);
      window.clearTimeout(timer);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-obsidian [animation:loader-fallback-hide_3.4s_ease_forwards]"
          initial={{ opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 0 100%)", transition: { duration: 0.85, ease: easing.palaceEase } }
          }
        >
          <div className="absolute inset-0 palace-noise opacity-70" />
          <motion.div
            className="absolute h-[150vmax] w-[150vmax] rounded-full border border-gold/10"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <motion.svg
              width="92"
              height="92"
              viewBox="0 0 92 92"
              className="drop-shadow-[0_0_24px_rgba(215,168,77,0.45)]"
            >
              <motion.circle
                cx="46"
                cy="46"
                r="34"
                fill="none"
                stroke="url(#loaderGold)"
                strokeWidth="1.5"
                strokeDasharray="214"
                initial={{ strokeDashoffset: 214 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.1 : 1.35, ease: easing.goldenSweep }}
              />
              <path d="M46 18 L55 45 L46 74 L37 45 Z" fill="rgba(215,168,77,0.18)" stroke="#d7a84d" />
              <defs>
                <linearGradient id="loaderGold" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#fff6df" />
                  <stop offset="0.5" stopColor="#d7a84d" />
                  <stop offset="1" stopColor="#8c622f" />
                </linearGradient>
              </defs>
            </motion.svg>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.42em] text-gold/80">
                Opening the Archive
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={messages[messageIndex]}
                  className="mt-3 font-inscription text-2xl text-ivory"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {messages[messageIndex]}...
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="h-px w-72 overflow-hidden bg-gold/15">
              <motion.div
                className="h-full bg-gradient-to-r from-bronze via-gold to-sun"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: prefersReducedMotion ? 0.1 : 2.1, ease: easing.palaceEase }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
