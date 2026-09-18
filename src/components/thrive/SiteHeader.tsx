import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { EVENT } from "@/content/thrive";
import { THRIVE_LOGO } from "@/content/thrive-media";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RegisterButton } from "./RegisterButton";

type MenuItem = { label: string; href?: string };

const THRIVE_MENU: MenuItem[] = [
  { label: "Thrive 2026", href: "/" },
  { label: "Thrive 2025", href: "/thrive-2025" },
];

const SPEAKERS_MENU: MenuItem[] = [
  { label: "Speakers 2026" },
  { label: "Speakers 2025" },
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
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="border border-ink-border bg-ink p-2 shadow-2xl">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href ?? "#"}
              className="block px-4 py-3 font-display text-lg text-ink-foreground transition-colors hover:bg-white/5 hover:text-primary"
            >
              {item.label}
            </a>
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
          <img src={THRIVE_LOGO} alt="Thrive Summit" className="h-12 w-auto object-contain sm:h-14" />
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

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink-foreground hover:bg-white/5 hover:text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-ink-border bg-ink lg:hidden">
          <div className="section-x py-4">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="thrive" className="border-ink-border">
                <AccordionTrigger className="font-display text-lg text-ink-foreground hover:no-underline">Thrive</AccordionTrigger>
                <AccordionContent className="flex flex-col pb-3">
                  {THRIVE_MENU.map((item) => <a key={item.label} href={item.href} className="py-2 text-ink-muted hover:text-primary">{item.label}</a>)}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="speakers" className="border-ink-border">
                <AccordionTrigger className="font-display text-lg text-ink-foreground hover:no-underline">Speakers</AccordionTrigger>
                <AccordionContent className="flex flex-col pb-3">
                  {SPEAKERS_MENU.map((item) => <a key={item.label} href={item.href ?? "#"} className="py-2 text-ink-muted hover:text-primary">{item.label}</a>)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col border-b border-ink-border">
              <span className="py-4 font-display text-lg text-ink-foreground">Resources</span>
            </div>
            <div className="flex flex-col border-b border-ink-border">
              <span className="py-4 font-display text-lg text-ink-foreground">About</span>
            </div>
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
