import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { THRIVE_LOGO } from "@/content/thrive-media";
import { CONTACT_EMAIL } from "@/content/thrive-2026";
import { RegisterButton } from "./RegisterButton";
import { EVENT } from "@/content/thrive";

export const SITE_NAV = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" },
  { label: "Programme", to: "/programme" }, { label: "Speakers", to: "/speakers" },
  { label: "Sponsors", to: "/sponsors" }, { label: "Venue & Travel", to: "/venue-travel" },
  { label: "Contact Us", to: "/contact" },
] as const;

const EXPERIENCE_NAV = [
  { label: "Thrive 2025", to: "/experience-2025" },
  { label: "2025 Resources", to: "/resources-2025" },
] as const;

function ExperienceNavigation({ mobile = false }: { mobile?: boolean }) {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);
  const linksId = useId();
  const active = EXPERIENCE_NAV.some(item => pathname === item.to);
  useEffect(() => { setExpanded(false); }, [pathname]);
  return <div className={mobile ? "" : "relative"} onKeyDown={event => { if (event.key === "Escape") setExpanded(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}>
    <Button variant="ghost" onClick={() => setExpanded(value => !value)} aria-expanded={expanded} aria-controls={linksId} className={mobile ? `mobile-nav-link h-auto w-full rounded-none px-0 ${active ? "nav-active" : ""}` : `nav-link h-auto rounded-none px-0 hover:bg-transparent ${active ? "nav-active" : ""}`}>
      Experience Thrive <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden />
    </Button>
    {expanded && <div id={linksId} className={mobile ? "pl-5" : "absolute right-0 top-full z-50 w-56 border border-ink-border bg-ink p-2"}>
      {EXPERIENCE_NAV.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} aria-current={pathname === item.to ? "page" : undefined} className="mobile-nav-link px-3 text-sm hover:text-primary" activeProps={{ className: "mobile-nav-link nav-active px-3 text-sm" }}>{item.label}</Link>)}
    </div>}
  </div>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header sticky top-0 z-50 border-b border-ink-border bg-ink text-ink-foreground">
    <div className="section-x flex min-h-20 items-center justify-between gap-3">
      <Link to="/" aria-label="Thrive Summit UK home" className="shrink-0"><img src={THRIVE_LOGO} alt="Thrive Summit" className="h-12 w-auto" /></Link>
      <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">{SITE_NAV.filter(item => item.to !== "/contact").map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} aria-current={pathname === item.to ? "page" : undefined} className="nav-link" activeProps={{ className: "nav-link nav-active" }}>{item.label}</Link>)}<ExperienceNavigation /><Link to="/contact" className="nav-link" activeProps={{ className: "nav-link nav-active" }}>Contact Us</Link></nav>
      <div className="flex items-center gap-2"><RegisterButton size="sm" /><Button variant="ghost" size="icon" className="text-ink-foreground hover:bg-ink-border xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="section-x max-h-[calc(100svh-5rem)] overflow-auto border-t border-ink-border py-3 xl:hidden">{SITE_NAV.filter(item => item.to !== "/contact").map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} aria-current={pathname === item.to ? "page" : undefined} activeProps={{ className: "mobile-nav-link nav-active" }} className="mobile-nav-link" onClick={() => setOpen(false)}>{item.label}<ArrowUpRight className="h-4 w-4" aria-hidden /></Link>)}<ExperienceNavigation mobile /><Link to="/contact" className="mobile-nav-link" activeProps={{ className: "mobile-nav-link nav-active" }}>Contact Us<ArrowUpRight className="h-4 w-4" aria-hidden /></Link></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-ink-border bg-ink py-14 text-ink-foreground">
    <div className="section-x grid gap-10 md:grid-cols-[1fr_1fr_1fr]">
      <div><Link to="/" aria-label="Thrive home"><img src={THRIVE_LOGO} alt="Thrive Summit" className="h-16 w-auto" /></Link><p className="mt-5 max-w-xs text-sm text-ink-muted">Building beyond limits in business and career.</p><p className="mt-3 text-sm text-ink-muted">{EVENT.dateLabel} · Leicester</p><p className="mt-2 text-xs text-ink-muted">{EVENT.timeLabel}</p></div>
      <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-5 gap-y-4 text-sm">{SITE_NAV.map(item => <Link key={item.to} to={item.to} className="text-ink-muted hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{item.label}</Link>)}<div className="col-span-2"><ExperienceNavigation mobile /></div></nav>
      <div><p className="eyebrow text-primary">Be part of what comes next</p><div className="mt-5"><RegisterButton /></div><a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 block break-all text-sm text-ink-muted underline underline-offset-4 hover:text-primary">{CONTACT_EMAIL}</a></div>
    </div><div className="section-x mt-12 border-t border-ink-border pt-6 text-xs text-ink-muted">© 2026 Thrive Summit UK. All rights reserved.</div>
  </footer>;
}