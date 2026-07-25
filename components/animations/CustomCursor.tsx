"use client";

import { useCursor } from "@/hooks/useCursor";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const { enabled, dotRef, ringRef, label, state } = useCursor();

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[100] grid h-9 w-9 place-items-center rounded-full border border-gold/70 mix-blend-screen transition-[width,height,border-color,background-color] duration-200",
          state === "button" && "h-14 w-14 border-sun bg-gold/10",
          state === "project" && "h-20 w-20 border-aqua/80 bg-aqua/10",
          state === "text" && "h-8 w-1 rounded-sm border-ivory/70",
        )}
      >
        {label ? (
          <span className="translate-y-8 whitespace-nowrap rounded-full border border-gold/30 bg-obsidian/80 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">
            {label}
          </span>
        ) : null}
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2.5 w-2.5 rounded-full bg-ivory shadow-[0_0_18px_rgba(215,168,77,0.8)]"
      />
    </>
  );
}
