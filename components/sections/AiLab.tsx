import { BrainCircuit, CircuitBoard } from "lucide-react";
import { FloatingDust } from "@/components/animations/FloatingDust";
import { Reveal } from "@/components/animations/Reveal";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { experiments } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function AiLab() {
  return (
    <SectionTransition id="lab" className="bg-[radial-gradient(circle_at_50%_0%,rgba(53,209,192,0.16),transparent_35%),linear-gradient(180deg,#071111,#090908)]">
      <FloatingDust count={30} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Lab"
          title="Arcane machinery for practical intelligence."
          copy="This chamber shifts slightly forward in time: agents, prompts, dashboards, vision, and LLM interfaces inside the same architectural language."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="stone-panel relative grid min-h-[480px] place-items-center overflow-hidden rounded-[1.75rem] p-8">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(53,209,192,0.1)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(215,168,77,0.08)_50%,transparent_51%)] bg-[length:52px_52px]" />
              <div className="relative grid h-56 w-56 place-items-center rounded-full border border-aqua/30 bg-aqua/5 shadow-[0_0_90px_rgba(53,209,192,0.18)]">
                <div className="absolute inset-6 rounded-full border border-gold/20" />
                <div className="absolute inset-12 rounded-full border border-aqua/25" />
                <BrainCircuit className="text-gold drop-shadow-[0_0_18px_rgba(215,168,77,0.42)]" size={68} />
              </div>
              <p className="relative mt-8 max-w-sm text-center font-inscription text-2xl leading-tight text-ivory/82">
                Intelligence should feel legible, steerable, and trustworthy before it feels magical.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {experiments.map((experiment, index) => (
              <Reveal key={experiment.title} delay={index * 0.05}>
                <article className="group glass-panel h-full rounded-[1.25rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/40">
                  <CircuitBoard className="text-aqua" size={22} />
                  <p className="mt-5 font-display text-[10px] uppercase tracking-[0.3em] text-gold/70">
                    {experiment.signal}
                  </p>
                  <h3 className="mt-3 font-inscription text-3xl text-ivory">{experiment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ivory/64">{experiment.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
