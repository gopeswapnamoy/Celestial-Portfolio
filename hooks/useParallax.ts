"use client";

import { RefObject, useEffect } from "react";

export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  speed = 0.12,
  disabledOnMobile = true,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduce || (disabledOnMobile && mobile)) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        element.style.transform = `translate3d(0, ${center * speed * -1}px, 0)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [disabledOnMobile, ref, speed]);
}
