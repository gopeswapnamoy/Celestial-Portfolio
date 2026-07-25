import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mx-auto max-w-4xl", align === "center" ? "text-center" : "text-left")}>
      <p className="font-display text-xs uppercase tracking-[0.36em] text-gold/75">{eyebrow}</p>
      <TextReveal
        as="h2"
        text={title}
        className="mt-4 justify-center font-inscription text-5xl leading-none text-ivory sm:text-6xl lg:text-7xl"
      />
      {copy ? <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">{copy}</p> : null}
    </div>
  );
}
