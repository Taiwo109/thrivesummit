import { SPEAKER_ARTWORK_2025 } from "@/content/thrive-media";

function SpeakerCard({ image, number }: { image: string; number: number }) {
  return (
    <article className="w-[18rem] shrink-0 sm:w-[22rem]">
      <img src={image} alt={`Thrive Summit UK 2025 speaker artwork ${number}`} loading="lazy" width={1200} height={1200} className="aspect-square h-auto w-full object-cover" />
    </article>
  );
}

export function SpeakerCarousel() {
  const loop = [...SPEAKER_ARTWORK_2025, ...SPEAKER_ARTWORK_2025, ...SPEAKER_ARTWORK_2025, ...SPEAKER_ARTWORK_2025];

  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">The voices</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">2025 Speakers</h2>
      </div>

      <div className="marquee-viewport mt-12 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6 px-5">
          {loop.map((image, i) => (
            <SpeakerCard key={`${image}-${i}`} image={image} number={(i % SPEAKER_ARTWORK_2025.length) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
