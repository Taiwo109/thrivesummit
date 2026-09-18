import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOMEPAGE_MEMORIES } from "@/content/thrive-media";

export function MemoriesCarousel() {
  const loop = [...HOMEPAGE_MEMORIES, ...HOMEPAGE_MEMORIES];

  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="section-x flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-primary">Thrive Summit 2025</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Moments that moved us</h2>
        </div>
        <Button asChild size="lg" className="w-fit rounded-none font-bold uppercase tracking-[0.14em]">
          <Link to="/thrive-2025">
            More memories
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>

      <div className="marquee-viewport mt-12 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-4 px-5 sm:gap-6">
          {loop.map((image, index) => (
            <figure key={`${image}-${index}`} className="w-[15rem] shrink-0 sm:w-[19rem]">
              <img
                src={image}
                alt={`A moment from Thrive Summit UK 2025, photograph ${(index % HOMEPAGE_MEMORIES.length) + 1}`}
                loading="lazy"
                width={900}
                height={1200}
                className="aspect-[3/4] h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}