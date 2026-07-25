"use client";

import { CSSProperties } from "react";

function pseudoRandom(index: number, salt: number) {
  const value = Math.sin(index * 431 + salt * 19) * 10000;
  return value - Math.floor(value);
}

function cssNumber(value: number, digits = 3) {
  return Number(value.toFixed(digits));
}

export function Fireflies({ count = 24 }: { count?: number }) {
  const fireflies = Array.from({ length: count }, (_, index) => {
    const style = {
      left: `${cssNumber(pseudoRandom(index, 1) * 100)}%`,
      top: `${cssNumber(pseudoRandom(index, 2) * 100)}%`,
      animationDelay: `${cssNumber(pseudoRandom(index, 3) * -9)}s`,
      animationDuration: `${cssNumber(4 + pseudoRandom(index, 4) * 7)}s`,
      "--firefly-x": `${cssNumber(-18 + pseudoRandom(index, 5) * 36)}px`,
      "--firefly-y": `${cssNumber(-24 + pseudoRandom(index, 6) * 48)}px`,
    } as CSSProperties;

    return (
      <span
        key={index}
        className="absolute h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_16px_rgba(53,209,192,0.85)] [animation:firefly-float_ease-in-out_infinite]"
        style={style}
      />
    );
  });

  return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">{fireflies}</div>;
}
