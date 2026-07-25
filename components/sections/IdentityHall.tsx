import { FloatingDust } from "@/components/animations/FloatingDust";
import { LightRays } from "@/components/animations/LightRays";
import { Reveal } from "@/components/animations/Reveal";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { identityPillars } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function IdentityHall() {
  return (
    <SectionTransition id="identity" className="bg-[linear-gradient(180deg,#070707,#11100d_48%,#090908)]">
      <LightRays className="opacity-70" />
      <FloatingDust count={38} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Hall of Identity"
          title="Beyond code, this is architecture for the future."
          copy="A portfolio for a builder who treats AI, full-stack engineering, security, and design as one connected craft."
        />
        <Reveal className="mx-auto mt-14 max-w-4xl rounded-[1.75rem] p-7 sm:p-10 stone-panel">
          <p className="font-inscription text-3xl leading-tight text-ivory sm:text-4xl">
            I am shaping myself into an AI engineer and creative technologist who can design the interface,
            defend the backend, model the data, and make the entire system feel inevitable.
          </p>
          <div className="royal-divider my-7" />
          <p className="leading-8 text-ivory/68">
            The mission is simple and demanding: build intelligent systems that are useful, secure, beautiful,
            and ambitious enough to feel like they came from a larger world.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {identityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="group glass-panel relative h-full overflow-hidden rounded-[1.25rem] p-5 transition duration-300 hover:-translate-y-2 hover:border-gold/50">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,168,77,0.16),transparent_45%)] opacity-0 transition group-hover:opacity-100" />
                  <Icon className="relative z-10 text-gold" size={24} />
                  <h3 className="relative z-10 mt-5 font-inscription text-2xl text-ivory">{pillar.title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-ivory/62">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
