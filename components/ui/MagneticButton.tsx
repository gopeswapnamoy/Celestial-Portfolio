"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  cursorLabel?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "border-gold/70 bg-gradient-to-br from-gold via-[#b77b30] to-bronze text-obsidian shadow-[0_18px_48px_rgba(215,168,77,0.25)] hover:shadow-[0_22px_70px_rgba(215,168,77,0.36)]",
  secondary:
    "border-gold/35 bg-obsidian/42 text-ivory backdrop-blur hover:border-gold hover:bg-gold/10",
  ghost: "border-transparent bg-transparent text-gold hover:border-gold/30 hover:bg-gold/5",
};

const sizes = {
  md: "px-5 py-3 text-xs",
  lg: "px-6 py-4 text-sm",
};

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  cursorLabel = "Open",
  icon,
  ...buttonProps
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  useMagnetic(ref, 0.18);

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-[130%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/32 to-transparent opacity-0 transition group-hover:opacity-100 group-hover:[animation:sweep_0.9s_ease_forwards]" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon ?? <ArrowRight size={16} aria-hidden />}
      </span>
    </>
  );

  const sharedClass = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border font-display uppercase tracking-[0.22em] transition duration-300 will-change-transform active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={sharedClass}
        data-cursor="button"
        data-cursor-label={cursorLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={sharedClass}
      data-cursor="button"
      data-cursor-label={cursorLabel}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
