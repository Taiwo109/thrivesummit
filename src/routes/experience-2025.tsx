import { createFileRoute } from "@tanstack/react-router";

import { AnnouncementBar, SiteHeader } from "@/components/thrive/SiteHeader";
import { Hero } from "@/components/thrive/Hero";
import { Countdown } from "@/components/thrive/Countdown";
import {
  WhatIsThrive,
  WhyThrive,
  WhatYouLeaveWith,
  Highlights2025,
  Partners,
} from "@/components/thrive/Sections";
import { SpeakerCarousel } from "@/components/thrive/SpeakerCarousel";
import { ExperienceThrive } from "@/components/thrive/ExperienceThrive";
import { Venue } from "@/components/thrive/Venue";
import { FinalCTA } from "@/components/thrive/FinalCTA";
import { SiteFooter } from "@/components/thrive/SiteFooter";
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
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <Countdown />
        <WhatIsThrive />
        <WhyThrive />
        <SpeakerCarousel />
        <ExperienceThrive />
        <MemoriesCarousel />
        <WhatYouLeaveWith />
        <Highlights2025 />
        <Partners />
        <Venue />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
