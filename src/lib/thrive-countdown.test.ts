import { describe, expect, it } from "vitest";
import { eventCountdown, THRIVE_START } from "./thrive-countdown";
import { EVENT } from "../content/thrive";
import { PROGRAMME_2026 } from "../content/thrive-2026";
describe("Thrive event rules", () => {
  it("starts on 7 November 2026 at 11am GMT", () => {
    expect(THRIVE_START).toBe(Date.parse("2026-11-07T11:00:00+00:00"));
    expect(Date.parse(EVENT.startsAtISO)).toBe(THRIVE_START);
  });
  it("calculates all four units from the visitor's time", () => {
    expect(eventCountdown(THRIVE_START - 90061000).values).toEqual([1, 1, 1, 1]);
    expect(eventCountdown(Date.parse("2026-11-07T12:00:00+01:00")).values).toEqual([0, 0, 0, 0]);
  });
  it("shows event-day state without negative numbers", () => {
    expect(eventCountdown(THRIVE_START + 1000)).toEqual({ status: "event-day", values: [0, 0, 0, 0] });
  });
  it("shows post-event state after the UK event day", () => {
    expect(eventCountdown(Date.parse("2026-11-08T00:00:00Z")).status).toBe("past");
  });
  it("retains the indicative 4pm to 5pm closing slot", () => {
    expect(PROGRAMME_2026[4].time).toBe("4:00pm to 5:00pm");
  });
  it("never presents an unconfirmed finishing time", () => {
    expect(EVENT.timeLabel).toBe("Doors open at 11:00 AM");
  });
});