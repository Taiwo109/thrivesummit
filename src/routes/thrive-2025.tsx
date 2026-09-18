import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOMEPAGE_MEMORIES, THRIVE_LOGO } from "@/content/thrive-media";

const title = "Thrive Summit UK 2025 | Memories";
const description = "Relive the people, conversations and moments from Thrive Summit UK 2025.";

export const Route = createFileRoute("/thrive-2025")({
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
  component: Thrive2025,
});

function Thrive2025() {
  return (
    <main className="min-h-screen bg-ink text-ink-foreground">
      <header className="section-x flex items-center justify-between py-5">
        <Link to="/" aria-label="Thrive Summit home">
          <img src={THRIVE_LOGO} alt="Thrive Summit" className="h-16 w-auto object-contain" />
        </Link>
        <Button asChild variant="outline" className="rounded-none border-ink-border bg-transparent text-ink-foreground">
          <Link to="/">
            <ArrowLeft aria-hidden />
            Home
          </Link>
        </Button>
      </header>
      <section className="section-x py-16 sm:py-24">
        <p className="eyebrow text-primary">Thrive Summit 2025</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,6rem)]">More memories</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted">
          Relive the people, conversations and moments that made Thrive Summit UK 2025 special.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {HOMEPAGE_MEMORIES.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Thrive Summit UK 2025 memory ${index + 1}`}
              width={900}
              height={1200}
              className="aspect-[3/4] h-auto w-full object-cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}