export const duration = {
  fast: 0.18,
  medium: 0.45,
  slow: 0.9,
  ceremonial: 1.6,
  grand: 2.4,
} as const;

export const easing = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  palaceEase: [0.16, 1, 0.3, 1],
  royalExit: [0.7, 0, 0.84, 0],
  goldenSweep: [0.22, 1, 0.36, 1],
  waterEase: [0.45, 0, 0.55, 1],
} as const;

export const spring = {
  softSpring: { type: "spring", stiffness: 120, damping: 18 },
  magneticSpring: { type: "spring", stiffness: 220, damping: 22 },
  artifactSpring: { type: "spring", stiffness: 140, damping: 18 },
  heavyDoorSpring: { type: "spring", stiffness: 72, damping: 17 },
  scrollSpring: { type: "spring", stiffness: 80, damping: 24 },
} as const;

export const stagger = {
  words: 0.055,
  cards: 0.12,
  chips: 0.045,
  nav: 0.07,
} as const;

export const zDepth = {
  background: -10,
  base: 0,
  floating: 10,
  nav: 40,
  modal: 80,
  cursor: 100,
} as const;

export const parallax = {
  foreground: 0.25,
  architecture: 0.12,
  mountains: -0.08,
  light: -0.15,
  text: 0.18,
} as const;
