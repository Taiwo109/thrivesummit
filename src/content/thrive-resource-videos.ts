import { HERO_MONTAGE, HERO_MONTAGE_MP4, SNIPPETS_2025, SNIPPET_POSTERS_2025, HOMEPAGE_MEMORIES } from "./thrive-media";
import video01 from "@/assets/thrive/public-videos/TNc9F3hrWH8.mp4.asset.json";
import video02 from "@/assets/thrive/public-videos/uIAqLaf8_jw.mp4.asset.json";
import video03 from "@/assets/thrive/public-videos/VPj95TgRZNg.mp4.asset.json";
import short from "@/assets/thrive/public-videos/Av4R7fcsSWc.mp4.asset.json";
import poster01 from "@/assets/thrive/public-videos/TNc9F3hrWH8.jpg.asset.json";
import poster02 from "@/assets/thrive/public-videos/uIAqLaf8_jw.jpg.asset.json";
import poster03 from "@/assets/thrive/public-videos/VPj95TgRZNg.jpg.asset.json";
import shortPoster from "@/assets/thrive/public-videos/Av4R7fcsSWc.jpg.asset.json";
import playback01 from "@/assets/thrive/public-videos/TNc9F3hrWH8.webm.asset.json";
import playback02 from "@/assets/thrive/public-videos/uIAqLaf8_jw.webm.asset.json";
import playback03 from "@/assets/thrive/public-videos/VPj95TgRZNg.webm.asset.json";
import shortPlayback from "@/assets/thrive/public-videos/Av4R7fcsSWc.webm.asset.json";

export const PUBLIC_VIDEOS_2025 = [
  { title: "2025 video 01", url: playback01.url, downloadUrl: video01.url, poster: poster01.url, portrait: false, filename: "thrive-2025-video-01.mp4" },
  { title: "2025 video 02", url: playback02.url, downloadUrl: video02.url, poster: poster02.url, portrait: false, filename: "thrive-2025-video-02.mp4" },
  { title: "2025 video 03", url: playback03.url, downloadUrl: video03.url, poster: poster03.url, portrait: false, filename: "thrive-2025-video-03.mp4" },
  { title: "2025 Short", url: shortPlayback.url, downloadUrl: short.url, poster: shortPoster.url, portrait: true, filename: "thrive-2025-short.mp4" },
] as const;
export const SHORT_2025 = PUBLIC_VIDEOS_2025[3];

export const RESOURCE_VIDEOS = [
  { title: "2025 montage, landscape", url: HERO_MONTAGE.desktop, downloadUrl: HERO_MONTAGE_MP4.desktop, poster: HOMEPAGE_MEMORIES[0], portrait: false, filename: "thrive-2025-montage-landscape.mp4" },
  { title: "2025 montage, portrait", url: HERO_MONTAGE.mobile, downloadUrl: HERO_MONTAGE_MP4.mobile, poster: HOMEPAGE_MEMORIES[0], portrait: true, filename: "thrive-2025-montage-portrait.mp4" },
  ...SNIPPETS_2025.map((url, index) => ({ title: `2025 snippet ${index + 1}`, url, downloadUrl: url, poster: SNIPPET_POSTERS_2025[index], portrait: true, filename: `thrive-2025-snippet-${index + 1}.mp4` })),
  ...PUBLIC_VIDEOS_2025,
] as const;