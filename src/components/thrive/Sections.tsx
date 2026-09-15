import { ImageIcon, Building2 } from "lucide-react";
import { PILLARS, TAKEAWAYS } from "@/content/thrive";

export function WhatIsThrive() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="section-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-primary">What is Thrive?</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Thrive Summit
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            Thrive is more than an event. It is a pathway beyond survival.
          </p>
          <p>
            One day in Leicester built around honest conversation, practical insight and the
            people who make the next step possible — for your work, your purpose and your life.
          </p>
          <p>
            2025 was the evidence. 2026 is the destination.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyThrive() {
  return (
    <section className="border-y border-border bg-secondary py-20 sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">Why Thrive</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">Four reasons to be in the room</h2>

        <div className="mt-12 grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="bg-background p-8">
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhotoCollage() {
  const frames = ["lg:col-span-2 lg:row-span-2", "", "", "", "lg:col-span-2"];

  return (
    <section className="bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">Thrive 2025</p>
        <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">One summit. Many stories.</h2>

        <div className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] lg:grid-cols-4">
          {frames.map((span, i) => (
            <div
              key={i}
              className={`flex items-center justify-center border border-dashed border-ink-border bg-white/[0.03] ${span}`}
            >
              <ImageIcon className="h-7 w-7 text-ink-muted/50" aria-hidden />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          2025 photography will be placed here once the image library is supplied.
        </p>
      </div>
    </section>
  );
}

export function WhatYouLeaveWith() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="section-x">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">
          Come for the conversation.
          <br />
          Leave with <span className="text-primary">connections.</span>
        </h2>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TAKEAWAYS.map((item) => (
            <div key={item.label} className="border-t-2 border-primary pt-5">
              <dt className="text-xl uppercase font-display">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Highlights2025() {
  return (
    <section className="rule-accent py-20 text-primary-foreground sm:py-24">
      <div className="section-x">
        <p className="eyebrow">Thrive Summit 2025</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">The highlights</h2>

        <div className="mt-10 grid gap-px overflow-hidden bg-black/15 sm:grid-cols-3">
          {["Attendees", "Speakers", "Sessions"].map((label) => (
            <div key={label} className="bg-highlight/95 p-8">
              <div className="font-display text-5xl">—</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em]">
                2025 {label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm font-medium">
          Verified 2025 figures will be published here once confirmed.
        </p>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">2025 Partners &amp; Sponsors</p>
        <h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Those who helped make Thrive possible
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden bg-border sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex h-28 items-center justify-center bg-background">
              <Building2 className="h-7 w-7 text-muted-foreground/40" aria-hidden />
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Logos shown here relate to Thrive Summit 2025. 2026 partners will be confirmed
          separately.
        </p>
      </div>
    </section>
  );
}
