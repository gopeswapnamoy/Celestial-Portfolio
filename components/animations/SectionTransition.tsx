import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTransition({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:px-12", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold/5 to-transparent" />
      {children}
    </section>
  );
}
