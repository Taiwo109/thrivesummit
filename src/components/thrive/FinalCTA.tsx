import { EVENT } from "@/content/thrive";
import { RegisterButton } from "./RegisterButton";

export function FinalCTA() {
  return (
    <section className="bg-ink py-24 text-center text-ink-foreground sm:py-32">
      <div className="section-x">
        <h2 className="mx-auto max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">
          Are you ready to <span className="text-primary">thrive?</span>
        </h2>
        <p className="mt-6 text-lg text-ink-muted">
          Join us in {EVENT.city} on {EVENT.dateLabel}.
        </p>
        <div className="mt-10 flex justify-center">
          <RegisterButton />
        </div>
      </div>
    </section>
  );
}
