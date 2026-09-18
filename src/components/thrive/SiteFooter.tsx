import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import { EVENT } from "@/content/thrive";
import { THRIVE_LOGO } from "@/content/thrive-media";

const NAV = ["Thrive 2026", "Thrive 2025", "Speakers", "Resources", "About"];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink py-16 text-ink-foreground">
      <div className="section-x grid gap-10 md:grid-cols-3">
        <div>
          <img src={THRIVE_LOGO} alt="Thrive Summit" className="h-20 w-auto object-contain" />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            {EVENT.venue}, {EVENT.addressLines.join(", ")}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            {EVENT.dateLabel} · {EVENT.timeLabel}
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm tracking-[0.2em] text-primary">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {NAV.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-primary">Connect</h3>
          <div className="mt-4 flex gap-3">
            {[Instagram, Youtube, Facebook, Mail].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center border border-ink-border text-ink-muted"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Social and contact links to be supplied.
          </p>
        </div>
      </div>

      <div className="section-x mt-12 flex flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Thrive Summit UK. All rights reserved.</p>
        <p className="flex gap-5">
          <span>Privacy Policy</span>
          <span>Terms &amp; Conditions</span>
        </p>
      </div>
    </footer>
  );
}
