import { EVENT } from "../content/thrive";

export const THRIVE_START = Date.parse(EVENT.startsAtISO);
export function eventCountdown(now: number) {
  const remaining = Math.max(0, THRIVE_START - now);
  const eventDayEnds = Date.parse("2026-11-29T00:00:00Z");
  return {
    status: now < THRIVE_START ? "upcoming" : now < eventDayEnds ? "event-day" : "past",
    values: [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60],
  };
}