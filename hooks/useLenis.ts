"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useLenis() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
      on?: (event: "scroll", cb: () => void) => unknown;
    } | null = null;
    let frame = 0;
    let alive = true;

    async function setup() {
      const Lenis = (await import("lenis")).default;
      if (!alive) return;

      lenis = new Lenis({
        duration: 1.18,
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.12,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);

      const { registerScrollTrigger } = await import("@/lib/motion/gsap");
      registerScrollTrigger(lenis ?? undefined);
    }

    setup();

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);
}
