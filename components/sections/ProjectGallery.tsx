"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FloatingDust } from "@/components/animations/FloatingDust";
import { PortalModal } from "@/components/animations/PortalModal";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { ProjectArtifactCard } from "@/components/ui/ProjectArtifactCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { projects, type Project } from "@/data/portfolio";
import { getGsap } from "@/lib/motion/gsap";
import { SectionHeading } from "./SectionHeading";

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 1024px)").matches;
    if (reduce || mobile) return;

    const { gsap, ScrollTrigger } = getGsap();
    const distance = Math.max(0, rail.scrollWidth - window.innerWidth + 96);

    const tween = gsap.to(rail, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${distance + window.innerHeight * 0.7}`,
        scrub: 0.9,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <SectionTransition id="projects" className="bg-[linear-gradient(180deg,#090908,#111713_50%,#070707)]">
      <FloatingDust count={34} />
      <div ref={sectionRef} className="relative z-10 mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Gallery of Projects"
          title="Artifacts of intelligent craft."
          copy="Each project is treated like a museum object: context, materials, system decisions, and the quiet mechanics underneath."
        />
        <div ref={railRef} className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.76, delay: index * 0.05 }}
            >
              <ProjectArtifactCard project={project} onOpen={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>
      <PortalModal
        open={Boolean(selectedProject)}
        title={selectedProject?.title ?? "Project detail"}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject ? (
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.32em] text-gold/80">
                Artifact {selectedProject.artifactNo} / {selectedProject.category}
              </p>
              <h3 className="mt-4 font-inscription text-5xl leading-none text-ivory sm:text-6xl">
                {selectedProject.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-ivory/70">{selectedProject.longDescription}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Problem", "Solution", "Security", "Future"].map((label, index) => (
                  <div key={label} className="rounded-2xl border border-gold/16 bg-obsidian/35 p-4">
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-gold/70">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-ivory/62">
                      {selectedProject.highlights[index % selectedProject.highlights.length]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-gold/18 bg-[radial-gradient(circle_at_50%_20%,rgba(53,209,192,0.22),transparent_34%),linear-gradient(180deg,rgba(255,246,223,0.08),rgba(7,7,7,0.62)),url('/images/celestial-palace-hero.png')] bg-cover bg-center p-5 shadow-[inset_0_-140px_120px_rgba(0,0,0,0.62)]">
              <div className="min-h-[360px]" />
              <div className="rounded-2xl border border-ivory/10 bg-obsidian/70 p-5 backdrop-blur">
                <p className="font-display text-[10px] uppercase tracking-[0.28em] text-aqua/80">Tech Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-gold/20 px-3 py-1 text-xs text-ivory/72">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <MagneticButton href={selectedProject.liveUrl} variant="secondary" cursorLabel="Live">
                    Live Link <ExternalLink size={14} />
                  </MagneticButton>
                  <MagneticButton href={selectedProject.githubUrl} variant="ghost" cursorLabel="Code">
                    GitHub <Code2 size={14} />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </PortalModal>
    </SectionTransition>
  );
}
