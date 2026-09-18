import { Play } from "lucide-react";
import { REPLAYS_2025 } from "@/content/thrive";
import { SNIPPET_POSTERS_2025, SNIPPETS_2025 } from "@/content/thrive-media";

export function ExperienceThrive() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="section-x">
        <p className="eyebrow text-primary">2025</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">Experience Thrive</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">A glimpse into Thrive Summit 2025.</p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SNIPPETS_2025.map((video, index) => (
            <video
              key={video}
              src={video}
              poster={SNIPPET_POSTERS_2025[index]}
              controls
              playsInline
              preload="metadata"
              aria-label={`Thrive Summit 2025 video snippet ${index + 1}`}
              className="aspect-[9/16] h-auto w-full bg-ink object-cover"
            />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
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

        </div>
      </div>
    </section>
  );
}
