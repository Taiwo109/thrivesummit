import logoAsset from "@/assets/thrive/thrive-logo.webp.asset.json";
import memory01 from "@/assets/thrive/homepage/memory-01.webp.asset.json";
import memory02 from "@/assets/thrive/homepage/memory-02.webp.asset.json";
import memory03 from "@/assets/thrive/homepage/memory-03.webp.asset.json";
import memory04 from "@/assets/thrive/homepage/memory-04.webp.asset.json";
import memory05 from "@/assets/thrive/homepage/memory-05.webp.asset.json";
import memory06 from "@/assets/thrive/homepage/memory-06.webp.asset.json";
import memory07 from "@/assets/thrive/homepage/memory-07.webp.asset.json";
import memory08 from "@/assets/thrive/homepage/memory-08.webp.asset.json";
import memory09 from "@/assets/thrive/homepage/memory-09.webp.asset.json";
import memory10 from "@/assets/thrive/homepage/memory-10.webp.asset.json";
import sponsors from "@/assets/thrive/sponsors/sponsors-2025.webp.asset.json";
import snippet01 from "@/assets/thrive/snippets/snippet-1.mp4.asset.json";
import snippet02 from "@/assets/thrive/snippets/snippet-2.mp4.asset.json";
import snippet03 from "@/assets/thrive/snippets/snippet-3.mp4.asset.json";
import poster01 from "@/assets/thrive/posters/snippet-1.jpg.asset.json";
import poster02 from "@/assets/thrive/posters/snippet-2.jpg.asset.json";
import poster03 from "@/assets/thrive/posters/snippet-3.jpg.asset.json";
import heroMobile from "@/assets/thrive/hero/thrive-mobile-montage.webm.asset.json";
import heroDesktop from "@/assets/thrive/hero/thrive-desktop-montage.webm.asset.json";
import speaker202501 from "@/assets/thrive/speakers-2025/speaker-01.webp.asset.json";
import speaker202502 from "@/assets/thrive/speakers-2025/speaker-02.webp.asset.json";
import speaker202503 from "@/assets/thrive/speakers-2025/speaker-03.webp.asset.json";
import speaker202504 from "@/assets/thrive/speakers-2025/speaker-04.webp.asset.json";
import speaker202505 from "@/assets/thrive/speakers-2025/speaker-05.webp.asset.json";
import speaker202506 from "@/assets/thrive/speakers-2025/speaker-06.webp.asset.json";
import speaker202507 from "@/assets/thrive/speakers-2025/speaker-07.webp.asset.json";
import speaker202508 from "@/assets/thrive/speakers-2025/speaker-08.webp.asset.json";
import speaker202509 from "@/assets/thrive/speakers-2025/speaker-09.webp.asset.json";
import speaker202510 from "@/assets/thrive/speakers-2025/speaker-10.webp.asset.json";
import speaker202511 from "@/assets/thrive/speakers-2025/speaker-11.webp.asset.json";
import speaker202512 from "@/assets/thrive/speakers-2025/speaker-12.webp.asset.json";

export const THRIVE_LOGO = logoAsset.url;

export const HOMEPAGE_MEMORIES = [
  memory01.url,
  memory02.url,
  memory03.url,
  memory04.url,
  memory05.url,
  memory06.url,
  memory07.url,
  memory08.url,
  memory09.url,
  memory10.url,
] as const;

export const HERO_MONTAGE = {
  mobile: heroMobile.url,
  desktop: heroDesktop.url,
} as const;

export const SPEAKER_ARTWORK_2025 = [
  speaker202501.url,
  speaker202502.url,
  speaker202503.url,
  speaker202504.url,
  speaker202505.url,
  speaker202506.url,
  speaker202507.url,
  speaker202508.url,
  speaker202509.url,
  speaker202510.url,
  speaker202511.url,
  speaker202512.url,
] as const;
export const SPONSORS_2025 = sponsors.url;
export const SNIPPETS_2025 = [snippet01.url, snippet02.url, snippet03.url] as const;
export const SNIPPET_POSTERS_2025 = [poster01.url, poster02.url, poster03.url] as const;