"use client";

import { ReactNode, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

export function ParallaxLayer({
  children,
  speed = 0.12,
  className,
  disabledOnMobile = true,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  disabledOnMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, speed, disabledOnMobile);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
