"use client";

import { Mail, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Fireflies } from "@/components/animations/Fireflies";
import { SectionTransition } from "@/components/animations/SectionTransition";
import { WaterShimmer } from "@/components/animations/WaterShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "./SectionHeading";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactSanctuary() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message ?? "Unable to seal the message.");
      setStatus("success");
      setMessage(data.message ?? "Message sealed.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <SectionTransition id="contact" className="min-h-screen bg-[linear-gradient(180deg,#090908,#061211_58%,#070707)]">
      <Fireflies count={24} />
      <WaterShimmer className="h-72 opacity-70" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact Sanctuary"
          title="Send a signal through the water."
          copy="Use the form for collaborations, questions, opportunities, or ideas that deserve careful engineering."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="stone-panel rounded-[1.75rem] p-7">
            <ShieldCheck className="text-gold" size={28} />
            <h3 className="mt-5 font-inscription text-4xl text-ivory">Privacy by default.</h3>
            <p className="mt-4 text-sm leading-7 text-ivory/66">
              Messages are validated, rate-limited, and stored locally in the database. No secrets are exposed to
              the browser, and logs avoid message contents.
            </p>
            <a
              href="mailto:hello@example.com"
              data-cursor="link"
              data-cursor-label="Email"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-gold/25 px-4 py-3 text-sm text-gold transition hover:border-gold hover:bg-gold/10"
            >
              <Mail size={16} /> hello@example.com
            </a>
            <div className="royal-divider my-7" />
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-ivory/55">
              <a href="#" className="hover:text-gold">GitHub</a>
              <a href="#" className="hover:text-gold">LinkedIn</a>
              <a href="#" className="hover:text-gold">X / Twitter</a>
            </div>
          </aside>
          <form onSubmit={handleSubmit} className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="group">
                <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-gold/70">Name</span>
                <input
                  name="name"
                  required
                  maxLength={120}
                  className="w-full rounded-2xl border border-gold/16 bg-obsidian/60 px-4 py-4 text-ivory outline-none transition focus:border-gold focus:shadow-[0_0_0_4px_rgba(215,168,77,0.1)]"
                  placeholder="Your name"
                />
              </label>
              <label>
                <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-gold/70">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={180}
                  className="w-full rounded-2xl border border-gold/16 bg-obsidian/60 px-4 py-4 text-ivory outline-none transition focus:border-gold focus:shadow-[0_0_0_4px_rgba(215,168,77,0.1)]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-gold/70">Subject</span>
              <input
                name="subject"
                required
                maxLength={160}
                className="w-full rounded-2xl border border-gold/16 bg-obsidian/60 px-4 py-4 text-ivory outline-none transition focus:border-gold focus:shadow-[0_0_0_4px_rgba(215,168,77,0.1)]"
                placeholder="What should we build?"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-gold/70">Message</span>
              <textarea
                name="message"
                required
                minLength={20}
                maxLength={2000}
                rows={6}
                className="w-full resize-none rounded-2xl border border-gold/16 bg-obsidian/60 px-4 py-4 text-ivory outline-none transition focus:border-gold focus:shadow-[0_0_0_4px_rgba(215,168,77,0.1)]"
                placeholder="A thoughtful message enters the archive..."
              />
            </label>
            <label className="hidden" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-ivory/50">
                Honeypot and rate limiting are active. Please do not include passwords, API keys, or private
                credentials.
              </p>
              <MagneticButton type="submit" disabled={status === "loading"} cursorLabel="Seal" icon={<Send size={15} />}>
                {status === "loading" ? "Sealing" : status === "success" ? "Message sealed" : "Send Message"}
              </MagneticButton>
            </div>
            {message ? (
              <div
                role="status"
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                  status === "error"
                    ? "border-danger/40 bg-danger/10 text-[#ffb199]"
                    : "border-emerald/40 bg-emerald/10 text-ivory"
                }`}
              >
                {message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </SectionTransition>
  );
}
