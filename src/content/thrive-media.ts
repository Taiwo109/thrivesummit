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
import speaker01 from "@/assets/thrive/speakers/speaker-1.webp.asset.json";
import speaker02 from "@/assets/thrive/speakers/speaker-2.webp.asset.json";
import sponsors from "@/assets/thrive/sponsors/sponsors-2025.webp.asset.json";
import snippet01 from "@/assets/thrive/snippets/snippet-1.mp4.asset.json";
import snippet02 from "@/assets/thrive/snippets/snippet-2.mp4.asset.json";
import snippet03 from "@/assets/thrive/snippets/snippet-3.mp4.asset.json";
import poster01 from "@/assets/thrive/posters/snippet-1.jpg.asset.json";
import poster02 from "@/assets/thrive/posters/snippet-2.jpg.asset.json";
import poster03 from "@/assets/thrive/posters/snippet-3.jpg.asset.json";

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

export const SPEAKER_ARTWORK_2025 = [speaker01.url, speaker02.url] as const;
export const SPONSORS_2025 = sponsors.url;
export const SNIPPETS_2025 = [snippet01.url, snippet02.url, snippet03.url] as const;
export const SNIPPET_POSTERS_2025 = [poster01.url, poster02.url, poster03.url] as const;