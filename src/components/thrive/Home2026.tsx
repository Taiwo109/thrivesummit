import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOMEPAGE_MEMORIES } from "@/content/thrive-media";
import { EVENT_2026, PROGRAMME_2026 } from "@/content/thrive-2026";
import { EVENT, PILLARS } from "@/content/thrive";
import officialFlyer from "@/assets/thrive/2026/official-flyer.jpg.asset.json";
import { RegisterButton } from "./RegisterButton";
import { Montage } from "./Montage";
export { SiteHeader as Header2026, SiteFooter as Footer2026 } from "./SiteChrome";

export function Hero2026() {
  return <section className="editorial-hero relative overflow-hidden bg-ink text-ink-foreground">
    <div className="section-x hero-2026-layout py-12 sm:py-16"><div>
      <p className="eyebrow text-primary">Thrive Summit UK 2026</p>
      <h1 className="hero-heading mt-7 max-w-4xl">Building<br />beyond limits<br /><span className="text-primary">in business<br />and career.</span></h1>
      <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">Join career professionals and business owners for a day of practical insights, meaningful connections, and new perspectives on growth.</p>
      <ul className="mt-7 flex max-w-xl flex-wrap gap-x-5 gap-y-2 border-t border-ink-border pt-6 text-sm font-semibold"><li>{EVENT_2026.dayLabel}</li><li>{EVENT.timeLabel}</li><li>The Envoy Nation, Leicester</li><li className="text-primary">Free registration</li></ul>
      <div className="mt-8 flex flex-wrap gap-3"><RegisterButton /><Button asChild variant="eventOutline" size="event"><Link to="/about">Discover Thrive <ArrowUpRight aria-hidden /></Link></Button></div>
      <p className="mt-6 text-xs text-ink-muted">Dress code: {EVENT.dressCode}</p>
    </div><figure className="hero-2026-artwork"><img src={officialFlyer.url} alt="Official Thrive Summit UK 2026 flyer, Saturday 28 November, 10am to 3pm at The Envoy Nation in Leicester" className="h-auto w-full" fetchPriority="high" width="768" height="768" /><figcaption className="mt-4 flex justify-between gap-4 text-xs text-ink-muted"><span>Business. Career. Beyond limits.</span><span className="text-primary">Leicester · 2026</span></figcaption></figure></div>
  </section>;
}

export function Intro() {
  return <section className="bg-background py-20 sm:py-28"><div className="section-x">
    <p className="eyebrow text-muted-foreground">More than an event</p>
    <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]"><h2 className="text-5xl sm:text-6xl">A space to grow.<br /><span className="text-primary">A room to belong.</span></h2><div className="max-w-xl text-lg leading-relaxed text-muted-foreground"><p>Thrive Summit brings career professionals and business owners together for honest conversations, practical insight and meaningful connection.</p><p className="mt-4">One day in Leicester, built around the people and perspectives that make your next step possible.</p><Button asChild variant="link" className="mt-5 px-0 font-bold text-foreground"><Link to="/about">The story behind Thrive <ArrowRight aria-hidden /></Link></Button></div></div>
    <figure className="mt-12"><img src={HOMEPAGE_MEMORIES[4]} alt="A shared moment at Thrive Summit UK 2025" loading="lazy" className="intro-photo w-full object-cover" /><figcaption className="mt-3 text-xs text-muted-foreground">Connections made at Thrive Summit UK 2025.</figcaption></figure>
  </div></section>;
}

export function WhyAttend() {
 return <section className="bg-ink py-20 text-ink-foreground sm:py-28"><div className="section-x"><p className="eyebrow text-primary">Why be in the room?</p><h2 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Leave with more<br />than <span className="text-primary">inspiration.</span></h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{PILLARS.map((item,i) => <div key={item.title} className="border-t border-ink-border pt-6"><span className="font-display text-4xl text-primary">0{i+1}</span><h3 className="mt-6 text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.body}</p></div>)}</div></div></section>;
}

export function WhoFor() {
 return <section className="bg-primary py-16 text-primary-foreground sm:py-24"><div className="section-x"><p className="eyebrow">All backgrounds. All industries.</p><h2 className="mt-5 text-5xl sm:text-6xl">Your ambition<br />belongs here.</h2><ul className="mt-10 grid gap-x-12 sm:grid-cols-2">{["Career professionals growing or changing direction", "Business owners building beyond today", "Founders and entrepreneurs taking their next step", "Anyone seeking perspective and meaningful connection"].map(item => <li key={item} className="flex items-start gap-4 border-t border-primary-foreground/25 py-5 text-lg"><ArrowUpRight className="mt-1 h-5 w-5 shrink-0" aria-hidden />{item}</li>)}</ul></div></section>;
}

export function Speakers2026() {
 return <section className="bg-background py-16 sm:py-24"><div className="section-x flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-muted-foreground">The voices of the next chapter</p><h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">2026 speakers will be<br /><span className="text-primary">announced soon.</span></h2></div><Button asChild variant="eventOutline" size="event" className="w-fit"><Link to="/speakers">Speakers 2026 <ArrowRight aria-hidden /></Link></Button></div></section>;
}

export function Programme2026() {
 return <section className="bg-secondary py-20 sm:py-28"><div className="section-x"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow text-muted-foreground">Programme preview</p><h2 className="mt-5 text-5xl sm:text-6xl">A day with purpose.</h2></div><Button asChild variant="link" className="w-fit px-0 text-foreground"><Link to="/programme">Explore the programme <ArrowRight aria-hidden /></Link></Button></div><p className="mt-5 text-sm text-muted-foreground">{EVENT.timeLabel}. Session timings will be confirmed ahead of the event.</p><ol className="mt-10 grid gap-8 md:grid-cols-3">{PROGRAMME_2026.slice(0,3).map((item,i) => <li key={item.time} className="border-t-2 border-primary pt-5"><span className="text-xs font-bold text-muted-foreground">0{i+1}</span><h3 className="mt-3 text-2xl">{item.time}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{item.what}</p></li>)}</ol></div></section>;
}

export function Sponsors2026() {
 return <section className="bg-ink py-20 text-ink-foreground sm:py-24"><div className="section-x grid gap-10 lg:grid-cols-[1.4fr_1fr]"><div><p className="eyebrow text-primary">Sponsors & partnerships</p><h2 className="mt-5 text-5xl sm:text-6xl">Build people.<br /><span className="text-primary">Back possibility.</span></h2><p className="mt-6 max-w-lg text-ink-muted">Support a day of practical learning and connection for career professionals and business owners.</p><Button asChild variant="event" size="event" className="mt-7"><Link to="/sponsors">Partner with Thrive <ArrowUpRight aria-hidden /></Link></Button></div><div className="self-end border-l-2 border-primary pl-7"><p className="eyebrow text-ink-muted">Confirmed sponsor & host partner</p><h3 className="mt-5 text-4xl">The Envoy Nation</h3><p className="mt-5 text-sm text-ink-muted">Our Leicester venue and partner for Thrive Summit UK 2026.</p><p className="mt-8 text-xs text-ink-muted">Partner announcements coming soon.</p></div></div></section>;
}

export function Experience2025Teaser() {
 return <section className="bg-background py-20 sm:py-28"><div className="section-x"><p className="eyebrow text-muted-foreground">Experience Thrive · 2025 footage</p><h2 className="mt-5 text-5xl sm:text-6xl">2025 was just<br /><span className="text-primary">the beginning.</span></h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Relive the moments, the conversations, and the connections that helped shape Thrive. Then be part of what comes next.</p><div className="mt-10"><Montage /></div><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="eventOutline" size="event"><Link to="/experience-2025">Relive the Moments <ArrowRight aria-hidden /></Link></Button><RegisterButton label="Join Thrive 2026" /></div></div></section>;
}

export function Venue2026() {
 return <section className="border-y border-border bg-secondary py-16 sm:py-24"><div className="section-x flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="eyebrow text-muted-foreground">Your next chapter begins in Leicester</p><h2 className="mt-5 text-4xl sm:text-5xl">Find your way<br />to Thrive.</h2><address className="mt-5 text-lg not-italic">The Envoy Nation<br />66 Burleys Way, Leicester, LE1 3BD</address><p className="mt-4 text-sm text-muted-foreground">Please plan ahead: the venue does not have step-free access.</p></div><Button asChild variant="eventOutline" size="event" className="w-fit"><Link to="/venue-travel">Venue & Travel <ArrowUpRight aria-hidden /></Link></Button></div></section>;
}

export function FinalCTA2026() {
 return <section className="bg-ink py-20 text-center text-ink-foreground sm:py-28"><div className="section-x"><p className="eyebrow text-primary">{EVENT_2026.dayLabel}</p><h2 className="mx-auto mt-6 max-w-4xl text-5xl sm:text-7xl">Your next chapter<br /><span className="text-primary">starts here.</span></h2><p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">One day. Meaningful connections. New perspectives on business and career.</p><div className="mt-8"><RegisterButton /></div><p className="mt-5 text-sm text-ink-muted">The Envoy Nation, Leicester · {EVENT.timeLabel} · Free registration</p></div></section>;
}
