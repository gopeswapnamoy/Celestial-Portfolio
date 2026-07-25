import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function getGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return { gsap, ScrollTrigger };
}

export function registerScrollTrigger(lenis?: { on?: (event: "scroll", cb: () => void) => unknown }) {
  if (typeof window === "undefined") return;
  const { ScrollTrigger: Trigger } = getGsap();
  lenis?.on?.("scroll", Trigger.update);
  Trigger.refresh();
}

export function cleanupScrollTriggers(scope?: Element | null) {
  const { ScrollTrigger: Trigger } = getGsap();
  Trigger.getAll().forEach((trigger) => {
    if (!scope || (trigger.trigger && scope.contains(trigger.trigger as Element))) {
      trigger.kill();
    }
  });
}
