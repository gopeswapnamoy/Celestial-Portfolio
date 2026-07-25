"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { modalPortalReveal } from "@/lib/motion/variants";

export function PortalModal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const active = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      active?.focus?.();
    };
  }, [onClose, open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[82] grid place-items-center bg-obsidian/82 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="stone-panel custom-scrollbar relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] p-6 sm:p-9"
            variants={modalPortalReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              data-cursor="button"
              data-cursor-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-obsidian/70 text-gold transition hover:border-gold hover:text-ivory"
              aria-label="Close project detail"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
