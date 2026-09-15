import { Play, Film } from "lucide-react";
import { REPLAYS_2025 } from "@/content/thrive";

export function ExperienceThrive() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">2025</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">Experience Thrive</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A glimpse into Thrive Summit 2025.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REPLAYS_2025.map((video) => (
            <a
              key={video.youtubeId}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" aria-hidden />
                  </span>
                </span>
              </div>
              <h3 className="mt-4 text-lg">{video.title}</h3>
            </a>
          ))}

          <div className="flex flex-col">
            <div className="flex aspect-video items-center justify-center border border-dashed border-border bg-muted">
              <Film className="h-8 w-8 text-muted-foreground/60" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg text-muted-foreground">Snippet coming soon</h3>
          </div>
        </div>

        <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Explore Thrive 2025 — page coming soon
        </p>
      </div>
    </section>
  );
}
