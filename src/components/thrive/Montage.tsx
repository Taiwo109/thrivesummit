import { useEffect, useRef, useState } from "react";
import { HERO_MONTAGE, HOMEPAGE_MEMORIES } from "@/content/thrive-media";

/** Load footage only as it approaches the viewport; native controls remain accessible. */
export function Montage() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();
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
      if (!entry?.isIntersecting) video.pause();
      else if (!reduced.matches && video.readyState >= 2) void video.play().catch(() => undefined);
    }, { threshold: 0.35 });
    load.observe(video); playback.observe(video);
    mobile.addEventListener("change", choose);
    return () => { load.disconnect(); playback.disconnect(); mobile.removeEventListener("change", choose); };
  }, []);
  return <video ref={ref} src={src} poster={HOMEPAGE_MEMORIES[0]} controls muted playsInline loop preload="none" aria-label="Thrive Summit UK 2025 montage" className="montage-video block w-full bg-ink object-contain" onCanPlay={event => {
    const video = event.currentTarget;
    const rect = video.getBoundingClientRect();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && rect.top < window.innerHeight && rect.bottom > 0) void video.play().catch(() => undefined);
  }} />;
}