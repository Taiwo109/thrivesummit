import { MapPin, Clock } from "lucide-react";
import { EVENT } from "@/content/thrive";

export function Venue() {
  return (
    <section className="border-y border-border bg-secondary py-20 sm:py-24">
      <div className="section-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-primary">The venue</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Where we'll thrive</h2>

          <address className="mt-8 not-italic">
            <p className="flex gap-3 text-lg">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="block font-semibold">{EVENT.venue}</strong>
                {EVENT.addressLines.join(", ")}
              </span>
            </p>
            <p className="mt-5 flex gap-3 text-lg">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="block font-semibold">{EVENT.dayLabel}</strong>
                {EVENT.timeLabel}
              </span>
            </p>
          </address>

          <p className="mt-6 max-w-md text-muted-foreground">
            Red carpet, breakfast and networking from 11 AM.
          </p>

          <a
            href={EVENT.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get directions
          </a>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
          <iframe
            title={`Map to ${EVENT.venue}, Leicester`}
            src={EVENT.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
