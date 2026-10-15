import { createFileRoute } from "@tanstack/react-router";
import { SpeakersPage } from "@/components/thrive/EventPages";
const title = "Thrive Summit UK 2026 Speakers | Announcements";
const description = "2026 speaker announcements are coming soon. Follow the confirmed line-up for Thrive Summit UK in Leicester.";
export const Route = createFileRoute("/speakers")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: SpeakersPage,
});
