import { useEffect, useState } from "react";
import { EVENT } from "@/content/thrive";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86_400_000),
    Math.floor(ms / 3_600_000) % 24,
    Math.floor(ms / 60_000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export function Countdown() {
  const target = new Date(EVENT.startsAtISO).getTime();
  const [values, setValues] = useState<number[] | null>(null);

  useEffect(() => {
    setValues(diff(target));
    const id = setInterval(() => setValues(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="bg-ink py-16 text-ink-foreground sm:py-20">
      <div className="section-x text-center">
        <p className="eyebrow text-primary">The countdown to Thrive</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">{EVENT.dayLabel}</h2>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {UNITS.map((unit, i) => (
            <div key={unit} className="border border-ink-border bg-white/[0.03] px-4 py-6">
              <div className="font-display text-4xl tabular-nums text-primary sm:text-6xl">
                {values ? String(values[i]).padStart(2, "0") : "--"}
              </div>
              <div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ink-muted">
                {unit}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          {EVENT.timeLabel} · {EVENT.venue}, {EVENT.city}
        </p>
      </div>
    </section>
  );
}
