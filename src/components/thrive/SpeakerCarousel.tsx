import { SPEAKER_ARTWORK_2025, THRIVE_LOGO } from "@/content/thrive-media";

function SpeakerCard({ image, number }: { image: string; number: number }) {
  return (
    <article className="w-[70vw] max-w-[17rem] shrink-0 sm:w-[15rem] sm:max-w-none lg:w-[13rem]">
      <img
        src={image}
        alt={`Thrive Summit UK 2025 speaker ${number}`}
        loading="lazy"
        width={270}
        height={780}
        className="h-auto w-full object-contain sm:h-[34rem]"
      />
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

        <div className="speaker-marquee-viewport min-w-0 overflow-hidden">
          <div className="speaker-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-5 pr-5" aria-hidden={copy === 1}>
                {SPEAKER_ARTWORK_2025.map((image, index) => (
                  <SpeakerCard key={`${copy}-${image}`} image={image} number={index + 1} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
