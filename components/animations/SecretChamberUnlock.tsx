"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Fireflies } from "./Fireflies";

const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function SecretChamberUnlock() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const next = [...sequence, event.key].slice(-konami.length);
      setSequence(next);
      if (next.join("|").toLowerCase() === konami.join("|").toLowerCase()) {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [sequence]);

  return (
    <>
      <button
        type="button"
        aria-label="Hidden chamber sigil"
        data-cursor="button"
        data-cursor-label="Sigil"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-obsidian/50 text-gold/55 backdrop-blur transition hover:border-gold hover:text-gold"
      >
        <Sparkles size={16} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[85] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(53,209,192,0.28),rgba(7,7,7,0.95)_58%)] p-5"
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 50% 50%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          >
            <Fireflies count={40} />
            <div className="stone-panel relative z-10 max-w-xl rounded-[1.75rem] p-8 text-center">
              <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-aqua/40 bg-aqua/10 shadow-[0_0_60px_rgba(53,209,192,0.28)]">
                <motion.div
                  className="h-12 w-12 rounded-full border border-gold bg-[radial-gradient(circle,rgba(255,246,223,0.9),rgba(215,168,77,0.32)_45%,transparent_70%)]"
                  animate={{ y: [0, -10, 0], rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <p className="font-display text-xs uppercase tracking-[0.35em] text-aqua">Secret Chamber</p>
              <h2 className="mt-3 font-inscription text-4xl text-ivory">You found the hidden chamber.</h2>
              <p className="mt-4 text-sm leading-7 text-ivory/72">
                The most useful systems often begin as hidden rooms: quiet experiments, careful notes, and doors
                opened before anyone else can see the passage.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-7 rounded-full border border-gold/40 px-5 py-3 text-xs uppercase tracking-[0.26em] text-gold transition hover:border-gold hover:bg-gold/10 hover:text-ivory"
              >
                Seal the chamber
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
