"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "link" | "button" | "project" | "text" | "disabled";

export function useCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [state, setState] = useState<CursorState>("default");
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCursor) return;

    document.body.classList.add("cursor-ready");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    const move = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(animate);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("[data-cursor], a, button, input, textarea");
      const cursorLabel = interactive?.dataset.cursorLabel ?? "";
      const cursorState = (interactive?.dataset.cursor as CursorState | undefined) ?? "default";

      setLabel(cursorLabel);
      setState(interactive ? cursorState : "default");
    };

    frame = requestAnimationFrame(() => {
      setEnabled(true);
      animate();
    });

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });

    return () => {
      setEnabled(false);
      document.body.classList.remove("cursor-ready");
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  return { enabled, dotRef, ringRef, label, state };
}
