import { cn } from "@/lib/utils";

export function WaterShimmer({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-48 overflow-hidden opacity-80",
        className,
      )}
    >
      <div className="absolute inset-x-[-12%] bottom-[-38%] h-full rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(53,209,192,0.65),rgba(31,106,85,0.22)_42%,transparent_72%)] blur-2xl [animation:water-shimmer_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-x-0 bottom-4 h-24 bg-[repeating-linear-gradient(100deg,transparent_0_18px,rgba(255,246,223,0.14)_19px,transparent_22px)] opacity-35 [animation:water-shimmer_9s_ease-in-out_infinite_alternate]" />
    </div>
  );
}
