import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Download, Image as ImageIcon, Film, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/thrive/SiteChrome";
import { RESOURCE_PHOTOS, RESOURCE_ARTWORK, RESOURCE_ARCHIVES } from "@/content/thrive-resources";
import { RESOURCE_VIDEOS } from "@/content/thrive-resource-videos";
import { REPLAYS_2025 } from "@/content/thrive";

const title = "Thrive Summit UK 2025 Resources | Photos, Films & Downloads";
const description = "Explore the Thrive Summit UK 2025 media collection: event photographs, montage films, video snippets, speaker and sponsor graphics, and original archive downloads.";

export const Route = createFileRoute("/resources-2025")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Resources2025,
});

function Resources2025() {
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="bg-ink py-14 text-ink-foreground sm:py-20">
        <div className="section-x">
          <Button asChild variant="link" className="mb-8 px-0 text-ink-muted"><Link to="/experience-2025"><ArrowLeft aria-hidden /> Experience Thrive</Link></Button>
          <p className="eyebrow text-primary">The 2025 collection</p>
          <h1 className="page-heading mt-5">Moments worth<br /><span className="text-primary">keeping.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">The people, the conversations, the energy. Photographs and films from Thrive Summit UK 2025.</p>
          <nav aria-label="Resource collections" className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-ink-border pt-6 text-sm font-bold">
            <a href="#photographs" className="flex items-center gap-2 hover:text-primary"><ImageIcon className="h-4 w-4" aria-hidden /> Photographs <span className="text-primary">{RESOURCE_PHOTOS.length}</span></a>
            <a href="#films" className="flex items-center gap-2 hover:text-primary"><Film className="h-4 w-4" aria-hidden /> Films</a>
            <a href="#artwork" className="hover:text-primary">Speaker & sponsor graphics</a>
            <a href="#archives" className="flex items-center gap-2 hover:text-primary"><Archive className="h-4 w-4" aria-hidden /> Original archives</a>
          </nav>
        </div>
      </section>
      <section id="photographs" className="scroll-mt-24 py-16 sm:py-24">
        <div className="section-x">
          <p className="eyebrow text-primary">In the room</p><h2 className="mt-4 text-4xl sm:text-5xl">The photo collection.</h2>
          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {RESOURCE_PHOTOS.map((photo, i) => <figure key={photo.url} className="mb-8 break-inside-avoid">
              <a href={photo.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${photo.name} full size`}><img src={photo.url} alt={`Guests and event moments at Thrive Summit UK 2025, photograph ${i + 1}`} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="h-auto w-full bg-secondary" /></a>
              <figcaption className="mt-3 flex items-center justify-between gap-3 border-b border-border pb-3"><span className="text-xs font-bold text-muted-foreground">2025 / {String(i + 1).padStart(2, "0")}</span><Button asChild variant="ghost" size="sm"><a href={photo.url} download={`thrive-2025-photo-${String(i + 1).padStart(2, "0")}.webp`} aria-label={`Download photograph ${i + 1}`}><Download aria-hidden /> Download</a></Button></figcaption>
            </figure>)}
          </div>
        </div>
      </section>
      <section id="films" className="scroll-mt-24 bg-ink py-16 text-ink-foreground sm:py-24">
        <div className="section-x">
          <p className="eyebrow text-primary">Sound. Stories. Connection.</p><h2 className="mt-4 text-4xl sm:text-5xl">Thrive on film.</h2>
          <div className="mt-10 grid items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_VIDEOS.map(video => <article key={video.url}>
              <video poster={video.poster} controls playsInline preload="none" aria-label={video.title} className={video.portrait ? "aspect-[9/16] max-h-[32rem] w-full bg-ink object-contain" : "aspect-video w-full bg-ink object-contain"}><source src={video.url} type={video.url.endsWith(".webm") ? "video/webm" : "video/mp4"} />{video.url !== video.downloadUrl && <source src={video.downloadUrl} type="video/mp4" />}</video>
              <h3 className="mt-4 text-xl leading-tight">{video.title}</h3><Button asChild variant="eventOutline" className="mt-4"><a href={video.downloadUrl} download={video.filename}><Download aria-hidden /> Download video</a></Button>
            </article>)}
          </div>
          <div className="mt-14 border-t border-ink-border pt-8"><h3 className="text-3xl">Full event replays</h3><div className="mt-5 flex flex-wrap gap-4">{REPLAYS_2025.map(video => <Button key={video.youtubeId} asChild variant="eventOutline"><a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}<ArrowUpRight aria-hidden /></a></Button>)}</div></div>
        </div>
      </section>
      <section id="artwork" className="scroll-mt-24 py-16 sm:py-24"><div className="section-x"><p className="eyebrow text-primary">The people behind 2025</p><h2 className="mt-4 text-4xl sm:text-5xl">Speakers & sponsors.</h2><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{RESOURCE_ARTWORK.map((image, i) => <figure key={image.url}><a href={image.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${image.name}`}><img src={image.url} width={image.width} height={image.height} loading="lazy" decoding="async" alt={`Thrive Summit UK 2025, ${image.name}`} className="aspect-[4/5] w-full bg-secondary object-contain" /></a><figcaption className="mt-4 flex items-start justify-between gap-3"><span className="min-w-0 text-sm font-bold">{image.name}</span><Button asChild variant="ghost" size="icon" className="shrink-0"><a href={image.url} download={`thrive-2025-graphic-${i+1}.webp`} aria-label={`Download ${image.name}`} title={`Download ${image.name}`}><Download aria-hidden /></a></Button></figcaption></figure>)}</div></div></section>
      <section id="archives" className="scroll-mt-24 border-t border-border bg-secondary py-16 sm:py-20"><div className="section-x"><p className="eyebrow text-muted-foreground">Original files</p><h2 className="mt-4 text-4xl sm:text-5xl">The complete archives.</h2><div className="mt-8 grid gap-x-10 sm:grid-cols-2">{RESOURCE_ARCHIVES.map(archive => <div key={archive.url} className="flex items-center justify-between gap-4 border-b border-border py-5"><span className="min-w-0 text-sm font-bold">{archive.name}</span><Button asChild variant="eventOutline" size="sm"><a href={archive.url} download={`thrive-${archive.name.toLowerCase().replaceAll(" ", "-")}.zip`}><Download aria-hidden /> ZIP</a></Button></div>)}</div></div></section>
    </main><SiteFooter />
  </div>;
}