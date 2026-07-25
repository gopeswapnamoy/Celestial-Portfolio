"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { timelineEvents } from "@/data/portfolio";
import { getGsap } from "@/lib/motion/gsap";
import { SectionHeading } from "./SectionHeading";

export function JourneyCorridor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || mobile) return;

    const { gsap } = getGsap();
    const distance = Math.max(0, rail.scrollWidth - window.innerWidth + 120);
    const tween = gsap.to(rail, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${distance + window.innerHeight * 0.55}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <SectionTransition id="journey" className="bg-[linear-gradient(180deg,#090908,#111111_48%,#071111)]">
      <div ref={sectionRef} className="relative z-10 mx-auto max-w-[1500px]">
        <SectionHeading
          eyebrow="Journey Corridor"
          title="A golden thread through the work."
          copy="The path is still being built, but its direction is clear: from foundations to web craft, from AI practice to global-scale systems."
        />
        <div className="pointer-events-none absolute left-0 right-0 top-[58%] hidden h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent lg:block" />
        <div ref={railRef} className="mt-16 grid gap-6 lg:flex lg:w-max lg:gap-10">
          {timelineEvents.map((event, index) => (
            <motion.article
              key={event.title}
              className="glass-panel relative min-h-64 rounded-[1.4rem] p-6 lg:w-[360px]"
              initial={{ opacity: 0.4, scale: 0.92, y: 36 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.72, delay: index * 0.05 }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 font-display text-xs text-gold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-aqua/75">{event.year}</p>
              <h3 className="mt-4 font-inscription text-3xl text-ivory">{event.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/64">{event.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
