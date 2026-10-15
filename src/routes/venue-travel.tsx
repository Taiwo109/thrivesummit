import { createFileRoute } from "@tanstack/react-router";
import { VenueTravelPage } from "@/components/thrive/EventPages";
const title = "Thrive Summit UK 2026 Venue & Travel | Leicester";
const description = "Find The Envoy Nation at 66 Burleys Way, Leicester. Explore the interactive map, transport, nearby parking and accessibility information.";
export const Route = createFileRoute("/venue-travel")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: VenueTravelPage,
});
