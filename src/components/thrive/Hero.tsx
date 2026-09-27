import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { HERO_MONTAGE } from "@/content/thrive-media";
import { Button } from "@/components/ui/button";
import { RegisterButton } from "./RegisterButton";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [montageSrc, setMontageSrc] = useState<string>();

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const selectMontage = () => setMontageSrc(query.matches ? HERO_MONTAGE.mobile : HERO_MONTAGE.desktop);
    selectMontage();
    query.addEventListener("change", selectMontage);
    return () => query.removeEventListener("change", selectMontage);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !montageSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [montageSrc]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) void video.play().catch(() => undefined);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink" aria-label="Thrive Summit montage">
        <video
          key={montageSrc}
          ref={videoRef}
          src={montageSrc}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onCanPlay={(event) => {
            if (event.currentTarget.getBoundingClientRect().bottom > 0) {
              void event.currentTarget.play().catch(() => undefined);
            }
          }}
          aria-label="Thrive Summit event montage"
          className="block h-auto w-full"
        />
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={toggleSound}
          aria-label={muted ? "Unmute montage" : "Mute montage"}
          title={muted ? "Unmute montage" : "Mute montage"}
          className="absolute bottom-4 right-4 border border-ink-border bg-ink/80 text-ink-foreground hover:bg-ink sm:bottom-6 sm:right-6"
        >
          {muted ? <VolumeX aria-hidden /> : <Volume2 aria-hidden />}
        </Button>
      </section>

      <section className="bg-ink py-12 text-ink-foreground sm:py-16">
        <div className="section-x flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            From surviving
            <br />
            to <span className="text-primary">thriving.</span>
          </h1>
          <div className="shrink-0">
            <RegisterButton />
          </div>
        </div>
      </section>
    </>
  );
}
