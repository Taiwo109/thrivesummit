import { RegisterButton } from "./RegisterButton";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <>
      <section className="overflow-hidden bg-ink" aria-label="Thrive Summit montage">
        <img
          src={heroBg}
          alt="Thrive Summit event montage"
          width={1920}
          height={1088}
          className="h-auto w-full object-contain"
        />
      </section>

      <section className="bg-ink py-12 text-ink-foreground sm:py-16">
        <div className="section-x grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,6.8rem)]">
            From surviving
            <br />
            to <span className="text-primary">thriving.</span>
          </h1>
          <div className="md:justify-self-end">
            <RegisterButton label="Registration Opening Soon" />
          </div>
        </div>
      </section>
    </>
  );
}
