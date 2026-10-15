import { createFileRoute } from "@tanstack/react-router";
import { SponsorsPage } from "@/components/thrive/EventPages";
const title = "Sponsor Thrive Summit UK 2026 | Partnerships";
const description = "Explore Thrive Summit 2026 sponsorship opportunities, the official brochure and partnership enquiries.";
export const Route = createFileRoute("/sponsors")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: SponsorsPage,
});
