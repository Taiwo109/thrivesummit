/**
 * Single source of truth for Thrive Summit content.
 * IMPORTANT: never invent 2026 speakers, sponsors, statistics or ticket links.
 * Placeholder entries stay flagged until the client supplies real information.
 */

export const EVENT = {
  name: "Thrive Summit UK 2026",
  theme: "From Surviving to Thriving.",
  dateLabel: "7 November 2026",
  dayLabel: "Saturday 7 November 2026",
  timeLabel: "11:00 AM to 4:00 PM",
  venue: "The Envoy Nation",
  addressLines: ["66 Burleys Way", "Leicester", "LE1 3BD", "United Kingdom"],
  city: "Leicester",
  /** ISO timestamp used by the countdown (11:00 UK time, GMT in November). */
  startsAtISO: "2026-11-07T11:00:00Z",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=66+Burleys+Way,+Leicester+LE1+3BD,+UK",
  mapEmbedUrl:
    "https://www.google.com/maps?q=66+Burleys+Way,+Leicester+LE1+3BD,+UK&output=embed",
  /** Set this only when the client supplies the 2026 registration URL. */
  registrationUrl: null as string | null,
} as const;

export const PILLARS = [
  {
    title: "Exposure",
    body: "Rooms, stories and standards that widen what you believe is possible for your life and work.",
  },
  {
    title: "Knowledge",
    body: "Practical insight from people doing the work, shared plainly and without gatekeeping.",
  },
  {
    title: "Connection",
    body: "Deliberate space to meet people you would not meet on an ordinary Saturday.",
  },
  {
    title: "Action",
    body: "You leave with next steps, not just notes. Thrive is built to be applied on Monday.",
  },
] as const;

export const TAKEAWAYS = [
  { label: "Perspectives", body: "A wider view of what thriving can look like for you." },
  { label: "Strategies", body: "Practical approaches you can put to work straight away." },
  { label: "Connections", body: "People, not just business cards." },
  { label: "Possibilities", body: "A clearer sense of the next door to walk through." },
] as const;

/** 2025 replays supplied by the client. */
export const REPLAYS_2025 = [
  {
    title: "Thrive Summit UK 2025, Stream 1",
    url: "https://www.youtube.com/live/mSA_ods7g44",
    youtubeId: "mSA_ods7g44",
  },
  {
    title: "Thrive Summit UK 2025, Stream 2",
    url: "https://www.youtube.com/live/SLEFgGyAXF0",
    youtubeId: "SLEFgGyAXF0",
  },
] as const;
