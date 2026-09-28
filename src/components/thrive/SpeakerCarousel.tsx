import { SPEAKER_ARTWORK_2025, THRIVE_LOGO } from "@/content/thrive-media";

function SpeakerCard({ image, number }: { image: string; number: number }) {
  return (
    <article className="w-[82vw] max-w-[19rem] shrink-0 sm:w-[15rem] lg:w-[13rem]">
      <img src={image} alt={`Thrive Summit UK 2025 speaker ${number}`} loading="lazy" width={270} height={640} className="h-[30rem] w-full object-contain sm:h-[34rem]" />
    </article>
  );
}

export function SpeakerCarousel() {
  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-center lg:gap-8">
        <div className="relative z-10 bg-ink">
          <img src={THRIVE_LOGO} alt="Thrive" className="h-auto w-48 object-contain sm:w-56" />
          <p className="mt-6 font-display text-4xl uppercase leading-none sm:text-5xl">
            Meet the <span className="text-primary">2025</span>
            <br />
            speakers
          </p>
        </div>

        <div className="speaker-marquee-viewport min-w-0 overflow-hidden">
          <div className="speaker-marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5" aria-hidden={copy === 1}>
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
