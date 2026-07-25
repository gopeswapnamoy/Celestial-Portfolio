"use client";

import { RefObject, useEffect } from "react";

export function useMagnetic<T extends HTMLElement>(
  ref: RefObject<T | null>,
  strength = 0.18,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    let frame = 0;

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * strength;
        const y = (event.clientY - rect.top - rect.height / 2) * strength;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const leave = () => {
      cancelAnimationFrame(frame);
      element.style.transform = "translate3d(0, 0, 0)";
    };

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
    };
  }, [ref, strength]);
}
