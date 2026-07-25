"use client";

import { Code2, ExternalLink, ScrollText } from "lucide-react";
import { MouseEvent, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

const accentClasses = {
  gold: "from-gold/18 via-gold/8 border-gold/32",
  aqua: "from-aqua/18 via-aqua/8 border-aqua/32",
  emerald: "from-emerald/24 via-emerald/10 border-emerald/42",
};

export function ProjectArtifactCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useMagnetic(ref, 0.06);

  const handlePointerMove = (event: MouseEvent<HTMLButtonElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${y * -7}deg`);
    card.style.setProperty("--tilt-y", `${x * 7}deg`);
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  const reset = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <button
      ref={ref}
      type="button"
      data-cursor="project"
      data-cursor-label="Inspect"
      onClick={() => onOpen(project)}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={cn(
        "group relative min-h-[520px] w-full shrink-0 overflow-hidden rounded-[1.75rem] border bg-gradient-to-br to-transparent p-4 text-left transition duration-300 [transform:perspective(1100px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] hover:-translate-y-2 lg:w-[430px]",
        accentClasses[project.accent],
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(420px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(255,246,223,0.16), transparent 42%)" }} />
      <div className="absolute inset-3 rounded-[1.35rem] border border-gold/12" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="arch-mask relative h-56 overflow-hidden rounded-t-[1.25rem] border border-gold/18 bg-[radial-gradient(circle_at_50%_20%,rgba(255,217,138,0.18),transparent_30%),linear-gradient(160deg,rgba(255,246,223,0.12),rgba(7,7,7,0.55)),url('/images/celestial-palace-hero.png')] bg-cover bg-center shadow-[inset_0_-60px_80px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-[1.015]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,246,223,0.2),transparent)] opacity-0 transition group-hover:opacity-100 group-hover:[animation:sweep_1.2s_ease_forwards]" />
          <div className="absolute bottom-4 left-4 rounded-full border border-gold/30 bg-obsidian/60 px-3 py-1 font-display text-[10px] uppercase tracking-[0.24em] text-gold backdrop-blur">
            Artifact {project.artifactNo}
          </div>
        </div>
        <div className="flex flex-1 flex-col px-2 py-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-gold/75">{project.category}</p>
            <span className="rounded-full border border-ivory/10 px-3 py-1 text-[11px] text-ivory/60">{project.status}</span>
          </div>
          <h3 className="mt-4 font-inscription text-4xl leading-none text-ivory">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-ivory/66">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gold/18 bg-gold/5 px-3 py-1 text-[11px] text-ivory/68 transition group-hover:-translate-y-0.5 group-hover:border-gold/32"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-7">
            <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-gold">
              <ScrollText size={15} /> Open Case Study
            </span>
            <span className="flex gap-3 text-ivory/55">
              <ExternalLink size={16} />
              <Code2 size={16} />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
