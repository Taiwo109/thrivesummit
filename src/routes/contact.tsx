import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { EventPage } from "@/components/thrive/EventPages";
import { SystemeForm } from "@/components/thrive/SystemeForm";
import { CONTACT_EMAIL } from "@/content/thrive-2026";

const title = "Contact Us | Thrive Summit UK 2026";
const description = "Contact the Thrive Summit UK 2026 team about attending, sponsorship and partnerships by email, WhatsApp or our contact form.";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ContactPage,
});

function ContactPage() {
  return <EventPage>
    <section className="bg-ink py-16 text-ink-foreground sm:py-24"><div className="section-x"><p className="eyebrow text-primary">Thrive Summit UK 2026</p><h1 className="page-heading mt-6">Contact Us</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">Have a question about Thrive Summit UK 2026, sponsorship, partnerships, or attending the event? We'd love to hear from you. Send us a message using the form below or contact our team directly.</p></div></section>
    <section className="bg-background py-16 sm:py-24"><div className="section-x grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-muted-foreground">Get in touch</p><h2 className="mt-5 text-4xl">Let's talk.</h2><div className="mt-9 space-y-8"><a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 border-t border-border pt-6 hover:text-primary"><Mail className="h-6 w-6 shrink-0 text-primary" aria-hidden /><span className="min-w-0"><span className="block text-sm font-bold">Email</span><span className="mt-2 block break-all">{CONTACT_EMAIL}</span></span></a><a href="https://wa.me/447925171979" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 border-t border-border pt-6 hover:text-primary"><MessageCircle className="h-6 w-6 shrink-0 text-primary" aria-hidden /><span><span className="block text-sm font-bold">WhatsApp</span><span className="mt-2 block">+44 7925 171979</span></span><ArrowUpRight className="ml-auto h-4 w-4 shrink-0" aria-hidden /></a></div></div><div className="min-w-0"><h2 className="mb-8 text-3xl">Send us a message</h2><SystemeForm kind="contact" /></div></div></section>
  </EventPage>;
}