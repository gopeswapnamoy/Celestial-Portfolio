import { FloatingDust } from "@/components/animations/FloatingDust";
import { LightRays } from "@/components/animations/LightRays";
import { PalaceGateIntro } from "@/components/animations/PalaceGateIntro";
import { TextReveal } from "@/components/animations/TextReveal";
import { WaterShimmer } from "@/components/animations/WaterShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  return (
    <section
      id="gate"
      className="relative min-h-screen overflow-hidden bg-obsidian"
      aria-label="Opening Gate"
    >
      <PalaceGateIntro>
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/celestial-palace-hero.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,7,7,0.18),rgba(7,7,7,0.72)_58%,rgba(7,7,7,0.95)),linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.72)_80%,#070707)]" />
        <LightRays />
        <FloatingDust count={58} />
        <WaterShimmer />
        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-28 text-center">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-7 h-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-80" />
            <p className="font-display text-xs uppercase tracking-[0.48em] text-gold/80">
              The Celestial Portfolio
            </p>
            <TextReveal
              as="h1"
              text="Architecture for Intelligent Futures"
              className="mx-auto mt-5 justify-center font-inscription text-6xl leading-[0.92] text-ivory sm:text-7xl md:text-8xl lg:text-9xl"
            />
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ivory/78 sm:text-lg">
              AI Engineer &bull; Creative Technologist &bull; Builder of Intelligent Systems
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-ivory/62 sm:text-base">
              I build intelligent systems where engineering meets imagination. Every project here is a
              chamber: designed, engineered, tested, and refined for a future that deserves more than generic
              software.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="#projects" size="lg" cursorLabel="Enter">
                Enter the Gallery
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary" size="lg" cursorLabel="Inspect">
                View Projects
              </MagneticButton>
            </div>
            <a
              href="#identity"
              data-cursor="link"
              data-cursor-label="Descend"
              className="group mx-auto mt-16 inline-flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.34em] text-ivory/55 transition hover:text-gold"
            >
              <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent transition group-hover:h-16" />
              Descend into the Gallery
            </a>
          </div>
        </div>
      </PalaceGateIntro>
    </section>
  );
}
