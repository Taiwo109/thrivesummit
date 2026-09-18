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

const title = "Thrive Summit UK 2026 | 7 November, Leicester";
const description =
  "Thrive Summit UK 2026, from surviving to thriving. Saturday 7 November 2026 at The Envoy Nation, Leicester. A day of exposure, knowledge, connection and action.";

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
  component: Index,
});

function Index() {
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
