"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-px w-full bg-ivory/5">
      <div
        className="h-full bg-gradient-to-r from-bronze via-gold to-sun shadow-[0_0_18px_rgba(215,168,77,0.8)]"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}
