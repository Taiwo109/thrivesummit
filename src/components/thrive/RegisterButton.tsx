import { EVENT } from "@/content/thrive";
import { Button } from "@/components/ui/button";

type Props = {
  size?: "sm" | "lg";
  full?: boolean;
  label?: string;
};

/**
 * Registration is not open yet: the 2025 Eventbrite link must NOT be reused.
 * The button becomes a real link as soon as EVENT.registrationUrl is set.
 */
export function RegisterButton({ size = "lg", full = false, label = "Register Free" }: Props) {
  const classes = `${full ? "w-full" : ""} ${size === "sm" ? "text-xs px-4 py-3" : ""}`;

  if (!EVENT.registrationUrl) {
    return (
      <Button variant="event" size="event" disabled className={classes} title="Registration opening soon" aria-label={`${label}, registration opening soon`}>
        {label}<span className="text-[0.65rem] normal-case">Opening soon</span>
      </Button>
    );
  }

  return (
    <Button asChild variant="event" size="event" className={classes}><a
      href={EVENT.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a></Button>
  );
}
