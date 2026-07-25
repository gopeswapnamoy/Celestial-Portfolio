"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "gate", label: "Gate" },
  { id: "identity", label: "Identity" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "lab", label: "AI Lab" },
  { id: "contact", label: "Contact" },
];

export function NavCompass() {
  const [active, setActive] = useState(navItems[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(section!.id);
          },
          { threshold: 0.38, rootMargin: "-12% 0px -35% 0px" },
        );
        observer.observe(section!);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const links = navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      data-cursor="link"
      data-cursor-label="Travel"
      onClick={() => setOpen(false)}
      className={cn(
        "relative rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition",
        active === item.id ? "text-obsidian" : "text-ivory/72 hover:text-gold",
      )}
    >
      {active === item.id ? (
        <motion.span
          layoutId="nav-compass-marker"
          className="absolute inset-0 -z-10 rounded-full bg-gold shadow-[0_0_22px_rgba(215,168,77,0.38)]"
        />
      ) : null}
      {item.label}
    </a>
  ));

  return (
    <>
      <motion.nav
        className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-gold/20 bg-obsidian/54 px-2 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-1">{links}</div>
      </motion.nav>
      <button
        type="button"
        className="fixed right-5 top-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-obsidian/70 text-gold shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 grid place-items-center bg-obsidian/92 p-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 7%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 7%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 7%)" }}
          >
            <div className="flex w-full max-w-sm flex-col gap-3 text-center">{links}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
