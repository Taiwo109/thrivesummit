/**
 * 2026 homepage facts from the client's 2026 website copy, registration plan and sponsorship brochure.
 * The latest official flyer supersedes the original event date and hours.
 */
export const EVENT_2026 = {
  theme: "Building Beyond Limits in Business and Career",
  dayLabel: "Saturday, 28 November 2026",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=66+Burleys+Way,+Leicester+LE1+3BD,+UK",
} as const;

/** Contact listed in the official sponsorship brochure. */
export const CONTACT_EMAIL = "aanu@penpixeldp.com";

/** Indicative only until the organiser confirms the final schedule. */
export const PROGRAMME_2026 = [
  { time: "Arrival & connection", what: "Doors open, red carpet, breakfast and networking." },
  { time: "Opening & keynotes", what: "Welcome, opening and keynote sessions." },
  { time: "Lunch & networking", what: "Lunch and networking." },
  { time: "Ideas & discussion", what: "Panel discussions, practical sessions and Q&A." },
  { time: "Closing moments", what: "Live raffle, closing, and final networking and photos." },
] as const;
