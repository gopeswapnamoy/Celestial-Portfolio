"use client";

import { CSSProperties } from "react";

function pseudoRandom(index: number, salt: number) {
  const value = Math.sin(index * 999 + salt * 37) * 10000;
  return value - Math.floor(value);
}

function cssNumber(value: number, digits = 3) {
  return Number(value.toFixed(digits));
}

export function FloatingDust({ count = 46 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, index) => {
    const left = cssNumber(pseudoRandom(index, 1) * 100);
    const top = cssNumber(pseudoRandom(index, 2) * 100);
    const delay = cssNumber(pseudoRandom(index, 3) * -16);
    const duration = cssNumber(8 + pseudoRandom(index, 4) * 12);
    const drift = cssNumber(-24 + pseudoRandom(index, 5) * 48);
    const size = cssNumber(1 + pseudoRandom(index, 6) * 2.4);
    const opacity = cssNumber(0.18 + pseudoRandom(index, 7) * 0.44, 2);
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      "--dust-drift": `${drift}px`,
      "--dust-opacity": opacity.toFixed(2),
    } as CSSProperties;

    return <span key={index} className="absolute rounded-full bg-sun/80 blur-[0.5px] [animation:dust-float_linear_infinite]" style={style} />;
  });

  return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">{particles}</div>;
}
