import { SPEAKER_INFOGRAPHICS_2025, THRIVE_LOGO } from "@/content/thrive-media";

function SpeakerCard({ image, number }: { image: string; number: number }) {
  return (
    <article className="w-[82vw] max-w-[17rem] shrink-0 sm:w-[17rem] lg:w-[18rem]">
      <img
        src={image}
        alt={`Thrive Summit UK 2025 speaker infographic ${number}`}
        loading="lazy"
        width={270}
        height={640}
        className="h-[32rem] w-full object-contain sm:h-[34rem]"
      />
    </article>
  );
}

export function SpeakerCarousel() {
  const loop = [...SPEAKER_INFOGRAPHICS_2025, ...SPEAKER_INFOGRAPHICS_2025];

  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-center lg:gap-8">
        <div className="text-center lg:text-left">
          <img
            src={THRIVE_LOGO}
            alt="Thrive Summit"
            className="mx-auto h-auto w-52 object-contain lg:mx-0 lg:w-full"
          />
          <p className="mt-7 font-display text-4xl uppercase leading-none sm:text-5xl">
            Meet the 2025
            <br />
            <span className="text-primary">speakers</span>
          </p>
        </div>

        <div className="speaker-marquee-viewport w-full overflow-hidden">
          <div className="speaker-marquee-track flex w-max gap-3 sm:gap-4">
          {loop.map((image, i) => (
              <SpeakerCard
                key={`${image}-${i}`}
                image={image}
                number={(i % SPEAKER_INFOGRAPHICS_2025.length) + 1}
              />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
