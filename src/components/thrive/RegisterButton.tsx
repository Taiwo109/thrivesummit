import { EVENT } from "@/content/thrive";

type Props = {
  size?: "sm" | "lg";
  full?: boolean;
  label?: string;
};

/**
 * Registration is not open yet: the 2025 Eventbrite link must NOT be reused.
 * The button becomes a real link as soon as EVENT.registrationUrl is set.
 */
export function RegisterButton({ size = "lg", full = false, label = "Register Now" }: Props) {
  const base =
    "inline-flex items-center justify-center font-bold uppercase tracking-[0.16em] transition-colors";
  const sizing = size === "sm" ? "px-5 py-2.5 text-xs" : "px-8 py-4 text-sm";
  const width = full ? "w-full" : "";

  if (!EVENT.registrationUrl) {
    return (
      <span className={`${base} ${sizing} ${width} cursor-not-allowed bg-primary/25 text-ink-foreground/70 ring-1 ring-primary/40`}>
        Registration opening soon
      </span>
    );
  }

  return (
    <a
      href={EVENT.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${width} bg-primary text-primary-foreground hover:bg-highlight`}
    >
      {label}
    </a>
  );
}
