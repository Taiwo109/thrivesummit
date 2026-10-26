import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_MONTAGE, HOMEPAGE_MEMORIES } from "@/content/thrive-media";

/** Load footage only as it approaches the viewport; native controls remain accessible. */
export function Montage() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const visible = useRef(false);
  const userPaused = useRef(false);
  const tryPlay = () => {
    const video = ref.current;
    if (video && visible.current && !userPaused.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !document.hidden) {
      void video.play().catch(() => undefined);
    }
  };
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mobile = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let loaded = false;
    const choose = () => { if (loaded) setSrc(mobile.matches ? HERO_MONTAGE.mobile : HERO_MONTAGE.desktop); };
    const load = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { loaded = true; choose(); load.disconnect(); }
    }, { rootMargin: "200px" });
    const playback = new IntersectionObserver(([entry]) => {
      visible.current = Boolean(entry?.isIntersecting);
      if (!visible.current) { video.pause(); video.muted = true; setMuted(true); }
      else if (!reduced.matches && !userPaused.current && !document.hidden && video.readyState >= 2) void video.play().catch(() => undefined);
    }, { threshold: 0.2 });
    const visibility = () => { if (document.hidden) { video.pause(); video.muted = true; setMuted(true); } else tryPlay(); };
    const motion = () => { if (reduced.matches) video.pause(); else tryPlay(); };
    load.observe(video); playback.observe(video);
    mobile.addEventListener("change", choose);
    reduced.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    return () => { load.disconnect(); playback.disconnect(); mobile.removeEventListener("change", choose); reduced.removeEventListener("change", motion); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <div className="relative bg-ink">
    <video ref={ref} src={src} poster={HOMEPAGE_MEMORIES[0]} controls muted={muted} playsInline loop preload="none" aria-label="Thrive Summit UK 2025 montage" className="montage-video block w-full bg-ink object-contain" onCanPlay={tryPlay} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onVolumeChange={event => setMuted(event.currentTarget.muted)} />
    <div className="flex items-center justify-end gap-2 border-t border-ink-border p-3">
      <Button variant="ghost" size="icon" className="text-ink-foreground hover:bg-ink-border" aria-label={playing ? "Pause montage" : "Play montage"} title={playing ? "Pause montage" : "Play montage"} onClick={() => {
        const video = ref.current; if (!video) return;
        userPaused.current = !video.paused;
        if (video.paused) void video.play().catch(() => undefined); else video.pause();
      }}>{playing ? <Pause aria-hidden /> : <Play aria-hidden />}</Button>
      <Button variant="ghost" size="icon" className="text-ink-foreground hover:bg-ink-border" aria-label={muted ? "Unmute montage" : "Mute montage"} title={muted ? "Unmute montage" : "Mute montage"} onClick={() => { const video = ref.current; if (video) { video.muted = !video.muted; setMuted(video.muted); } }}>{muted ? <VolumeX aria-hidden /> : <Volume2 aria-hidden />}</Button>
    </div>
  </div>;
}