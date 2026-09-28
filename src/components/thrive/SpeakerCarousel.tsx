import { SPEAKERS_2025, THRIVE_LOGO } from "@/content/thrive-media";

type Speaker = (typeof SPEAKERS_2025)[number];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="grid h-[29rem] w-[78vw] max-w-[18rem] shrink-0 grid-rows-[19rem_1fr] overflow-hidden rounded-md border border-ink-border bg-card text-card-foreground sm:h-[31rem] sm:w-[17rem] sm:grid-rows-[21rem_1fr] lg:w-[16rem]">
      <div className="relative overflow-hidden bg-primary">
        <img
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover object-top"
        />
        {"badge" in speaker ? (
          <span className="absolute bottom-3 left-3 bg-destructive px-3 py-1 text-xs font-extrabold uppercase text-destructive-foreground">
            {speaker.badge}
          </span>
        ) : null}
      </div>
      <div className="flex min-h-0 flex-col border-t-4 border-primary px-5 py-4">
        <h3 className="text-balance font-sans text-xl font-extrabold normal-case leading-tight sm:text-[1.35rem]">
          {speaker.name}
        </h3>
        <p className="mt-2 text-sm font-semibold leading-snug text-muted-foreground">
          {speaker.role}
        </p>
      </div>
    </article>
  );
}

export function SpeakerCarousel() {
  return (
    <section className="overflow-hidden bg-ink py-14 text-ink-foreground sm:py-24">
      <div className="section-x grid gap-7 sm:gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-center lg:gap-8">
        <div className="relative z-10 grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4 bg-ink sm:block">
          <img src={THRIVE_LOGO} alt="Thrive" className="h-auto w-20 object-contain sm:w-56" />
          <p className="min-w-0 font-display text-3xl uppercase leading-none sm:mt-6 sm:text-5xl">
            Meet the <span className="text-primary">2025</span>
            <br />
            speakers
          </p>
        </div>

        <div className="speaker-marquee-viewport min-w-0 overflow-hidden py-1">
          <div className="speaker-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden={copy === 1}>
                {SPEAKERS_2025.map((speaker) => (
                  <SpeakerCard key={`${copy}-${speaker.name}`} speaker={speaker} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
