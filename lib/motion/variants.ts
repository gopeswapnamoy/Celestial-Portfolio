import type { Variants } from "framer-motion";
import { duration, easing, spring, stagger } from "./tokens";

export const fadeReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: easing.palaceEase },
  },
};

export const riseReveal: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.easeOutExpo },
  },
};

export const maskReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: duration.slow, ease: easing.goldenSweep },
  },
};

export const textStaggerReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.words, delayChildren: 0.05 },
  },
};

export const wordReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: easing.easeOutExpo },
  },
};

export const cardArtifactReveal: Variants = {
  hidden: { opacity: 0, y: 70, rotateX: 8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: easing.palaceEase },
  },
};

export const modalPortalReveal: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.94, clipPath: "inset(48% 48% 48% 48%)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.72, ease: easing.palaceEase },
  },
  exit: {
    opacity: 0,
    y: 28,
    scale: 0.96,
    clipPath: "inset(12% 18% 12% 18%)",
    transition: { duration: duration.medium, ease: easing.royalExit },
  },
};

export const navReveal: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring.softSpring, staggerChildren: stagger.nav },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.medium } },
  exit: { opacity: 0, transition: { duration: duration.medium } },
};

export const secretReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: duration.ceremonial, ease: easing.palaceEase },
  },
};
