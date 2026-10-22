import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/thrive/EventPages";
const title = "Thrive Summit UK 2026 Programme | Indicative Schedule";
const description = "Explore the 28 November 2026 programme, 10am to 3pm GMT, including networking, keynote sessions, lunch and practical discussions. Session timings to be confirmed.";
export const Route = createFileRoute("/programme")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: ProgrammePage,
});
