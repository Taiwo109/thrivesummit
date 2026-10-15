import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/thrive/EventPages";
const title = "About Thrive Summit UK | Our Story & Purpose";
const description = "Discover the story, vision and convenor behind Thrive Summit UK, a space for business and career growth.";
export const Route = createFileRoute("/about")({
 head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: AboutPage,
});
