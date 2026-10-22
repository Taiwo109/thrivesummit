import { useEffect, useState } from "react";
import { eventCountdown } from "@/lib/thrive-countdown";
import { EVENT } from "@/content/thrive";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

export function Countdown() {
  const [countdown, setCountdown] = useState<ReturnType<typeof eventCountdown> | null>(null);

  useEffect(() => {
    const update = () => setCountdown(eventCountdown(Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-ink-border bg-ink py-8 text-ink-foreground" aria-label="Countdown to Thrive Summit UK 2026">
      <div className="section-x grid items-center gap-7 md:grid-cols-[1fr_1.2fr]">
        <div><p className="eyebrow text-primary">The next chapter is coming</p><h2 className="mt-3 text-3xl">{EVENT.dateLabel}</h2><p className="mt-2 text-sm text-ink-muted">{EVENT.timeLabel} · Leicester</p></div>
        {countdown && countdown.status !== "upcoming" ? <p role="status" className="font-display text-3xl text-primary">{countdown.status === "event-day" ? "Today, we Thrive. Welcome to Leicester." : "Thank you for being part of Thrive 2026."}</p> : <div className="grid grid-cols-4 gap-3" role="timer" aria-label="Time until the event begins">
          {UNITS.map((unit, i) => (
            <div key={unit} className="border-l border-ink-border pl-3 sm:pl-6">
              <div className="font-display text-4xl tabular-nums text-primary sm:text-5xl">
                {countdown ? String(countdown.values[i]).padStart(2, "0") : "··"}
              </div>
              <div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-ink-muted">
                {unit}
              </div>
            </div>
          ))}
        </div>}
      </div>
    </section>
  );
}
