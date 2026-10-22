import { describe, expect, it } from "vitest";
import { eventCountdown, THRIVE_START } from "./thrive-countdown";
import { EVENT } from "../content/thrive";
describe("Thrive event rules", () => {
  it("starts on 28 November 2026 at 10am GMT", () => {
    expect(THRIVE_START).toBe(Date.parse("2026-11-28T10:00:00+00:00"));
    expect(Date.parse(EVENT.startsAtISO)).toBe(THRIVE_START);
  });
  it("calculates all four units from the visitor's time", () => {
    expect(eventCountdown(THRIVE_START - 90061000).values).toEqual([1, 1, 1, 1]);
    expect(eventCountdown(Date.parse("2026-11-28T11:00:00+01:00")).values).toEqual([0, 0, 0, 0]);
  });
  it("shows event-day state without negative numbers", () => {
    expect(eventCountdown(THRIVE_START + 1000)).toEqual({ status: "event-day", values: [0, 0, 0, 0] });
  });
  it("shows post-event state after the UK event day", () => {
    expect(eventCountdown(Date.parse("2026-11-29T00:00:00Z")).status).toBe("past");
  });
  it("ends at the flyer-approved 3pm GMT", () => {
    expect(Date.parse(EVENT.endsAtISO)).toBe(Date.parse("2026-11-28T15:00:00Z"));
  });
  it("uses the supplied 2026 Eventbrite destination", () => {
    expect(EVENT.registrationUrl).toBe("https://www.eventbrite.com/e/thrive-summit-uk-2026-tickets-2003770038124");
  });
  it("preserves the approved dress code", () => {
    expect(EVENT.dressCode).toBe("Corporate or smart casual");
  });
});