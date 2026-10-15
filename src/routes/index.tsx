import { createFileRoute } from "@tanstack/react-router";
import {
  Header2026, Hero2026, Intro, WhyAttend, WhoFor, Speakers2026,
  Programme2026, Sponsors2026, Experience2025Teaser, Venue2026, FinalCTA2026, Footer2026,
} from "@/components/thrive/Home2026";
import { Countdown } from "@/components/thrive/Countdown";

const title = "Thrive Summit UK 2026 | Building Beyond Limits, Leicester";
const description =
  "Free summit for career professionals and business owners. Saturday 7 November 2026 at The Envoy Nation, Leicester. Learn, connect and grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home2026,
});

function Home2026() {
  return (
    <div className="min-h-screen bg-background">
      <Header2026 />
      <main>
        <Hero2026 />
        <Countdown />
        <Intro />
        <WhyAttend />
        <WhoFor />
        <Speakers2026 />
        <Programme2026 />
        <Sponsors2026 />
        <Experience2025Teaser />
        <Venue2026 />
        <FinalCTA2026 />
      </main>
      <Footer2026 />
    </div>
  );
}
