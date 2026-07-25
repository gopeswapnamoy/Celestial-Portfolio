export function LightRays({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -left-[12%] -top-[16%] h-[86%] w-[52%] rotate-[-10deg] bg-[linear-gradient(90deg,rgba(255,217,138,0.28),rgba(255,217,138,0.08),transparent)] blur-2xl [animation:light-breathe_18s_ease-in-out_infinite]" />
      <div className="absolute left-[18%] top-0 h-[58%] w-[20%] rotate-[-14deg] bg-[linear-gradient(90deg,rgba(255,246,223,0.12),transparent)] blur-xl [animation:light-breathe_22s_ease-in-out_infinite]" />
    </div>
  );
}
