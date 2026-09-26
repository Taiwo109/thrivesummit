import { EVENT } from "@/content/thrive";
import { RegisterButton } from "./RegisterButton";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/40"
      />

      <div className="section-x flex min-h-[clamp(34rem,82vh,46rem)] flex-col justify-end py-20 sm:py-28">
        <p className="eyebrow text-primary">Thrive Summit 2026</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,9vw,6.5rem)]">
          From surviving
          <br />
          to <span className="text-primary">thriving.</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
          <span>{EVENT.dateLabel}</span>
          <span aria-hidden className="h-4 w-px bg-ink-border" />
          <span>
            {EVENT.venue}, {EVENT.city}
          </span>
        </div>

        <div className="mt-10">
          <RegisterButton />
        </div>
      </div>
    </section>
  );
}
