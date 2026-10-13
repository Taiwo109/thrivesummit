/**
 * 2026 homepage facts from the client's 2026 website copy, registration plan and sponsorship brochure.
 * The finishing time conflicts (4pm vs 5pm) so it is never shown as confirmed.
 */
export const EVENT_2026 = {
  theme: "Building Beyond Limits in Business and Career",
  dayLabel: "Saturday, 7 November 2026",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=66+Burleys+Way,+Leicester+LE1+3BD,+UK",
} as const;

/** Contact listed in the official sponsorship brochure. */
export const CONTACT_EMAIL = "aanu@penpixeldp.com";

/** Indicative only until the organiser confirms the final schedule. */
export const PROGRAMME_2026 = [
  { time: "11:00am to 12:00pm", what: "Doors open, red carpet, breakfast and networking." },
  { time: "12:00pm to 1:30pm", what: "Welcome, opening and keynote sessions." },
  { time: "1:30pm to 2:15pm", what: "Lunch and networking." },
  { time: "2:15pm to 4:00pm", what: "Panel discussions, practical sessions and Q&A." },
  { time: "4:00pm onwards", what: "Live raffle, closing, and final networking and photos." },
] as const;
