import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { HERO_MONTAGE, HOMEPAGE_MEMORIES, SNIPPET_POSTERS_2025, THRIVE_LOGO } from "@/content/thrive-media";
import { EVENT_2026, PROGRAMME_2026, CONTACT_EMAIL } from "@/content/thrive-2026";
import brochure from "@/assets/thrive/docs/sponsorship-brochure.pdf.asset.json";
import { RegisterButton } from "./RegisterButton";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Venue & Travel", href: "#venue" },
];

export function Header2026() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-semibold uppercase tracking-[0.12em] text-ink-foreground/80 hover:text-primary focus-visible:text-primary";
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/95 backdrop-blur">
      <div className="section-x flex items-center justify-between gap-6 py-3">
        <a href="#top" aria-label="Thrive Summit UK 2026 home">
          <img src={THRIVE_LOGO} alt="Thrive Summit" className="h-12 w-auto object-contain" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV.map((n) => <a key={n.label} href={n.href} className={linkCls}>{n.label}</a>)}
          <Link to="/experience-2025" className={linkCls}>Experience 2025</Link>
          <RegisterButton size="sm" label="Register Free" />
        </nav>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="p-2 text-ink-foreground xl:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="section-x flex flex-col border-t border-ink-border pb-5 xl:hidden">
          {NAV.map((n) => <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="border-b border-ink-border py-3 font-display text-lg uppercase text-ink-foreground">{n.label}</a>)}
          <Link to="/experience-2025" className="border-b border-ink-border py-3 font-display text-lg uppercase text-ink-foreground">Experience 2025</Link>
          <div className="pt-4"><RegisterButton full label="Register Free" /></div>
        </nav>
      )}
    </header>
  );
}

export function Hero2026() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(rm.matches);
    const pick = () => setSrc(mq.matches ? HERO_MONTAGE.mobile : HERO_MONTAGE.desktop);
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, []);
  return (
    <section id="top" className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={HOMEPAGE_MEMORIES[0]} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      {src && !reduced && (
        <video key={src} ref={ref} src={src} autoPlay muted loop playsInline preload="metadata" poster={HOMEPAGE_MEMORIES[0]} aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
      <div className="section-x w-full pb-16 pt-32 sm:pb-24">
        <p className="eyebrow text-primary">Thrive Summit UK 2026</p>
        <h1 className="mt-4 max-w-5xl text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.95]">
          Building Beyond Limits in <span className="text-primary">Business and Career</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-foreground/85">
          Join career professionals and business owners for a day of insights, practical learning, meaningful connections, and new possibilities.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em]">
          <li>{EVENT_2026.dayLabel}</li>
          <li className="text-primary" aria-hidden>/</li>
          <li>The Envoy Nation, Leicester</li>
          <li className="text-primary" aria-hidden>/</li>
          <li>Free Registration</li>
        </ul>
        <div className="mt-9 flex flex-wrap gap-4">
          <RegisterButton label="Register Free" />
          <a href="#about" className="inline-flex items-center border border-ink-foreground/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] hover:border-primary hover:text-primary">Discover Thrive</a>
        </div>
      </div>
    </section>
  );
}

export function InfoStrip() {
  const items = [EVENT_2026.dayLabel, "Leicester, United Kingdom", "Free registration", "Business and career growth"];
  return (
    <section aria-label="Event information" className="rule-accent text-primary-foreground">
      <ul className="section-x grid grid-cols-2 gap-px py-5 text-center text-xs font-bold uppercase tracking-[0.16em] sm:text-sm lg:grid-cols-4">
        {items.map((i) => <li key={i} className="px-2 py-2">{i}</li>)}
      </ul>
    </section>
  );
}

export function Intro() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-primary">About Thrive</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">A Space to Grow Beyond Limits</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>Thrive Summit UK is where ambitious people come to grow. Whether you are building a career, running a business, or doing both, this is a room full of practical knowledge, real stories and the kind of connections that move your life forward.</p>
            <p>This year we are bringing together professionals and business owners from every background, across finance, property, business and career, for one powerful day in the heart of Leicester.</p>
            <p>It is free to attend, and breakfast and lunch are provided. All we ask is that you register and show up ready to grow.</p>
          </div>
          <Link to="/experience-2025" className="mt-8 inline-flex border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.16em] hover:text-primary">Discover the Thrive Experience</Link>
        </div>
        <img src={HOMEPAGE_MEMORIES[3]} alt="Attendees at Thrive Summit UK 2025" loading="lazy" width={900} height={1200} className="aspect-[4/5] w-full object-cover" />
      </div>
    </section>
  );
}

const WHY = [
  { n: "01", t: "Learn", b: "Practical sessions on money, career growth, funding, sales and building a brand, from people who have done it." },
  { n: "02", t: "Connect", b: "Network with professionals, business owners and community leaders who can open doors." },
  { n: "03", t: "Grow", b: "Explore ideas across two tracks, Career and Business, and leave knowing your next step." },
  { n: "04", t: "Experience", b: "A red carpet, breakfast, lunch, live networking and a prize raffle on the day." },
];

export function WhyAttend() {
  return (
    <section className="bg-ink py-20 text-ink-foreground sm:py-28">
      <div className="section-x">
        <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)]">Why attend <span className="text-primary">Thrive Summit?</span></h2>
        <div className="mt-12 grid border-t border-ink-border md:grid-cols-2">
          {WHY.map((w, i) => (
            <div key={w.t} className={`border-b border-ink-border py-8 md:px-8 ${i % 2 === 0 ? "md:border-r md:pl-0" : ""}`}>
              <span className="font-display text-5xl text-primary">{w.n}</span>
              <h3 className="mt-3 text-3xl">{w.t}</h3>
              <p className="mt-3 max-w-md text-ink-muted">{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoFor() {
  const list = ["Career professionals wanting to grow, pivot or protect their future", "Business owners and founders building something real", "Entrepreneurs and people navigating redundancy or change", "Anyone seeking new perspectives, useful connections and professional growth"];
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="section-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-primary">Who it is for</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">Is Thrive for you?</h2>
          <p className="mt-5 text-lg text-muted-foreground">All backgrounds, all industries, all welcome.</p>
          <div className="mt-8"><RegisterButton label="Register Free" /></div>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {list.map((l) => <li key={l} className="flex gap-5 py-6 text-xl"><span className="text-primary" aria-hidden>+</span>{l}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function Speakers2026() {
  return (
    <section id="speakers" className="scroll-mt-20 bg-ink py-20 text-center text-ink-foreground sm:py-28">
      <div className="section-x">
        <p className="eyebrow text-primary">Speakers 2026</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2.25rem,5vw,4rem)]">Meet the Voices of Thrive Summit 2026</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">Our 2026 speaker announcements are coming soon. Check back for updates.</p>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex aspect-[4/5] items-center justify-center border border-dashed border-ink-border font-display text-xl uppercase text-ink-muted">Announcing soon</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Programme2026() {
  return (
    <section id="programme" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x">
        <p className="eyebrow text-primary">Programme preview</p>
        <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">The day at a glance</h2>
        <p className="mt-4 text-muted-foreground">Indicative schedule. Final timings will be confirmed by the organiser.</p>
        <ol className="mt-10 border-t border-border">
          {PROGRAMME_2026.map((p) => (
            <li key={p.time} className="grid gap-2 border-b border-border py-6 sm:grid-cols-[14rem_1fr]">
              <span className="font-display text-2xl text-primary">{p.time}</span>
              <span className="text-lg">{p.what}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Sponsors2026() {
  return (
    <section id="sponsors" className="scroll-mt-20 bg-ink py-20 text-ink-foreground sm:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Sponsors and partnerships</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">Put your brand in the room</h2>
          <p className="mt-5 text-lg text-ink-muted">Thrive Summit is made possible by businesses who believe in building people. Sponsorship starts from £300, and you can also sponsor a raffle prize.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${CONTACT_EMAIL}?subject=Thrive%20Summit%202026%20sponsorship`} className="inline-flex bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:bg-highlight">Become a Sponsor</a>
            <a href={brochure.url} target="_blank" rel="noopener noreferrer" className="inline-flex border border-ink-foreground/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] hover:border-primary hover:text-primary">Sponsorship brochure (PDF)</a>
          </div>
        </div>
        <div className="border border-ink-border p-8">
          <p className="eyebrow text-ink-muted">Venue and host partner</p>
          <p className="mt-3 font-display text-4xl">The Envoy Nation</p>
          <p className="mt-8 text-sm text-ink-muted">Further confirmed sponsors will be announced here.</p>
        </div>
      </div>
    </section>
  );
}

export function Experience2025Teaser() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <img src={SNIPPET_POSTERS_2025[0]} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/60" />
      <div className="section-x max-w-3xl">
        <p className="eyebrow text-primary">Thrive 2025</p>
        <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">Experience the Journey. Be Part of What Comes Next.</h2>
        <p className="mt-5 text-lg text-ink-foreground/85">Explore the first summit through its photographs, video highlights, speakers and moments.</p>
        <Link to="/experience-2025" className="mt-8 inline-flex bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:bg-highlight">Explore Thrive 2025</Link>
      </div>
    </section>
  );
}

export function Venue2026() {
  return (
    <section id="venue" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Venue and travel</p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)]">The Envoy Nation</h2>
          <address className="mt-4 not-italic text-lg">66 Burleys Way, Leicester, LE1 3BD, United Kingdom</address>
          <p className="mt-4 text-muted-foreground">A one to two minute walk from St Margaret's Bus Station, Leicester city centre.</p>
          <a href={EVENT_2026.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.16em] hover:text-primary">Get directions</a>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl">Parking</h3>
            <p className="mt-2 text-muted-foreground">The venue car park is not available for this event. Nearby options:</p>
            <ul className="mt-3 space-y-1">
              <li>NCP Leicester Garden Street, LE1 3UA</li>
              <li>Euro Car Parks Mansfield Street, LE1 3DL</li>
            </ul>
          </div>
          <div className="border-l-4 border-primary pl-5">
            <h3 className="text-2xl">Accessibility</h3>
            <p className="mt-2 text-muted-foreground">Please note the venue does not have step-free access. If you have access needs or questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary">{CONTACT_EMAIL}</a> before the day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA2026() {
  return (
    <section className="bg-ink py-24 text-center text-ink-foreground sm:py-32">
      <div className="section-x">
        <h2 className="mx-auto max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">Your Next Chapter <span className="text-primary">Starts Here.</span></h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">Join us at Thrive Summit UK 2026 for a day of learning, connection, and new perspectives on building beyond limits in business and career.</p>
        <div className="mt-10 flex justify-center"><RegisterButton label="Register Free" /></div>
      </div>
    </section>
  );
}

export function Footer2026() {
  return (
    <footer className="border-t border-ink-border bg-ink py-14 text-ink-foreground">
      <div className="section-x grid gap-10 md:grid-cols-3">
        <div>
          <img src={THRIVE_LOGO} alt="Thrive Summit" className="h-14 w-auto object-contain" />
          <p className="mt-4 text-sm text-ink-muted">Building Beyond Limits in Business and Career.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map((n) => <a key={n.label} href={n.href} className="text-ink-muted hover:text-primary">{n.label}</a>)}
          <Link to="/experience-2025" className="text-ink-muted hover:text-primary">Experience 2025</Link>
        </nav>
        <div className="text-sm text-ink-muted">
          <p>Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a></p>
          <div className="mt-5"><RegisterButton size="sm" label="Register Free" /></div>
        </div>
      </div>
      <p className="section-x mt-10 text-xs text-ink-muted">© {new Date().getFullYear()} Thrive Summit UK. All rights reserved.</p>
    </footer>
  );
}
