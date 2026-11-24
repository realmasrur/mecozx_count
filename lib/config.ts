export const SITE_URL = "https://mecozx.com";

/**
 * Fixed launch moment (7 days from 24 Nov 2026, midnight Bangladesh time).
 * Override without touching code: set NEXT_PUBLIC_LAUNCH_DATE in Cloudflare
 * Pages (ISO 8601, e.g. 2026-12-01T00:00:00+06:00) and redeploy.
 */
export const LAUNCH_DATE =
  process.env.NEXT_PUBLIC_LAUNCH_DATE || "2026-12-01T00:00:00+06:00";

export const TAGLINE = "The hardware layer for the decentralized future.";
