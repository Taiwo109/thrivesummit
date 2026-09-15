import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { EVENT } from "@/content/thrive";
import { RegisterButton } from "./RegisterButton";

type MenuItem = { label: string; note: string; href?: string };

const THRIVE_MENU: MenuItem[] = [
  { label: "Thrive 2026", note: "The next summit — 7 November, Leicester" },
  { label: "Thrive 2025", note: "The story, replays and photos" },
];

const SPEAKERS_MENU: MenuItem[] = [
  { label: "Speakers 2026", note: "Coming soon" },
  { label: "Speakers 2025", note: "Last year's line-up" },
];

function Dropdown({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 py-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink-foreground/80 transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-2 border border-ink-border bg-ink p-3 shadow-2xl">
          {items.map((item) => (
            <span
              key={item.label}
              className="block rounded-sm p-5 transition-colors hover:bg-white/5"
            >
              <span className="block font-display text-xl text-ink-foreground">{item.label}</span>
              <span className="mt-1 block text-sm text-ink-muted">{item.note}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div className="rule-accent text-primary-foreground">
      <p className="section-x flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] sm:text-xs">
        <span>Thrive Summit UK 2026</span>
        <span aria-hidden className="opacity-50">
          |
        </span>
        <span>7 November</span>
        <span aria-hidden className="opacity-50">
          |
        </span>
        <span>Leicester</span>
      </p>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/95 backdrop-blur">
      <div className="section-x flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3 py-4">
          <span className="rule-accent flex h-9 w-9 items-center justify-center font-display text-lg text-primary-foreground">
            T
          </span>
          <span className="font-display text-xl leading-none text-ink-foreground">
            Thrive<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <Dropdown label="Thrive" items={THRIVE_MENU} />
          <Dropdown label="Speakers" items={SPEAKERS_MENU} />
          <span className="py-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink-foreground/80">
            Resources
          </span>
          <span className="py-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink-foreground/80">
            About
          </span>
          <RegisterButton size="sm" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 text-ink-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-border bg-ink lg:hidden">
          <div className="section-x flex flex-col gap-1 py-5">
            {[...THRIVE_MENU, ...SPEAKERS_MENU].map((item) => (
              <span key={item.label} className="py-2.5 text-ink-foreground">
                <span className="font-display text-lg">{item.label}</span>
                <span className="ml-2 text-sm text-ink-muted">{item.note}</span>
              </span>
            ))}
            <span className="py-2.5 font-display text-lg text-ink-foreground">Resources</span>
            <span className="py-2.5 font-display text-lg text-ink-foreground">About</span>
            <div className="pt-3">
              <RegisterButton full />
            </div>
            <p className="pt-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
              {EVENT.dateLabel} · {EVENT.city}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
