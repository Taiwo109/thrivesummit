import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/thrive/EventPages";
const title = "Thrive Summit UK 2026 Programme | Indicative Schedule";
const description = "Explore the indicative 7 November 2026 programme, including networking, keynote sessions, lunch and practical discussions.";
export const Route = createFileRoute("/programme")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: ProgrammePage,
});
