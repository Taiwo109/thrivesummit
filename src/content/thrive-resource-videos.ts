import { HERO_MONTAGE, HERO_MONTAGE_MP4, SNIPPETS_2025, SNIPPET_POSTERS_2025, HOMEPAGE_MEMORIES } from "./thrive-media";

export const RESOURCE_VIDEOS = [
  { title: "2025 montage, landscape", url: HERO_MONTAGE.desktop, downloadUrl: HERO_MONTAGE_MP4.desktop, poster: HOMEPAGE_MEMORIES[0], portrait: false, filename: "thrive-2025-montage-landscape.mp4" },
  { title: "2025 montage, portrait", url: HERO_MONTAGE.mobile, downloadUrl: HERO_MONTAGE_MP4.mobile, poster: HOMEPAGE_MEMORIES[0], portrait: true, filename: "thrive-2025-montage-portrait.mp4" },
  ...SNIPPETS_2025.map((url, index) => ({ title: `2025 snippet ${index + 1}`, url, downloadUrl: url, poster: SNIPPET_POSTERS_2025[index], portrait: true, filename: `thrive-2025-snippet-${index + 1}.mp4` })),
] as const;

export const REQUESTED_VIDEOS = [
  { title: "2025 video 01", url: "https://youtu.be/TNc9F3hrWH8" },
  { title: "2025 video 02", url: "https://youtu.be/uIAqLaf8_jw" },
  { title: "2025 video 03", url: "https://youtu.be/VPj95TgRZNg" },
  { title: "2025 Short", url: "https://youtube.com/shorts/Av4R7fcsSWc" },
] as const;