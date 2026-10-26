import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/thrive/SiteChrome";
import { Hero } from "@/components/thrive/Hero";
import {
  WhatIsThrive,
  WhyThrive,
  WhatYouLeaveWith,
  Partners,
} from "@/components/thrive/Sections";
import { SpeakerCarousel } from "@/components/thrive/SpeakerCarousel";
import { ExperienceThrive } from "@/components/thrive/ExperienceThrive";
import { FinalCTA } from "@/components/thrive/FinalCTA";
import { MemoriesCarousel } from "@/components/thrive/MemoriesCarousel";

const title = "Experience Thrive Summit UK 2025 | Highlights";
const description =
  "Relive Thrive Summit UK 2025 in Leicester: montage, speakers, replays, snippets and memories from the first summit.";

export const Route = createFileRoute("/experience-2025")({
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
  component: Experience2025,
});

function Experience2025() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="bg-primary py-3 text-center text-sm font-semibold text-primary-foreground">Reliving Thrive Summit UK 2025. <Link to="/" className="underline underline-offset-4">Discover Thrive 2026</Link></div>
        <Hero />
        <WhatIsThrive />
        <WhyThrive />
        <SpeakerCarousel />
        <ExperienceThrive />
        <MemoriesCarousel />
        <WhatYouLeaveWith />
        <Partners />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
