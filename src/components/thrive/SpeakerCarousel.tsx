import { UserRound } from "lucide-react";

/**
 * 2026 speakers are not announced yet. Slots stay as clearly-labelled
 * placeholders; swap in { name, role, image } once the client supplies them.
 */
type Speaker = { name: string; role: string; image?: string };

const SPEAKERS: Speaker[] = Array.from({ length: 6 }, () => ({
  name: "To be announced",
  role: "Speaker reveal coming soon",
}));

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="w-[17rem] shrink-0 sm:w-[20rem]">
      <div className="flex aspect-[4/5] items-center justify-center border border-ink-border bg-white/[0.04]">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserRound className="h-14 w-14 text-ink-muted/50" aria-hidden />
        )}
      </div>
      <h3 className="mt-4 text-xl text-ink-foreground">{speaker.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{speaker.role}</p>
    </article>
  );
}

export function SpeakerCarousel() {
  const loop = [...SPEAKERS, ...SPEAKERS];

  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">The voices</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">2026 Speakers</h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          The 2026 line-up is being confirmed. Full profiles will live under Speakers → 2026.
        </p>
      </div>

      <div className="marquee-viewport mt-12 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6 px-5">
          {loop.map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
