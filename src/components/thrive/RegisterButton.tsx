import { EVENT } from "@/content/thrive";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Props = {
  size?: "sm" | "lg";
  full?: boolean;
  label?: string;
};

/**
 * All upcoming-event CTAs share the approved registration destination.
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
      {label}<ArrowUpRight aria-hidden className="h-4 w-4 shrink-0" />
    </a></Button>
  );
}
