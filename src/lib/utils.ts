import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ✅ Tailwind class merge utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ✅ Google Ads conversion tracking helper
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

/**
 * Fires a Google Ads conversion event.
 * @param eventId The conversion event ID (from Google Ads, e.g. "AW-XXXXXXX/abc123XYZ")
 * @param value Conversion value (default = 1.0)
 * @param currency Currency code (default = INR)
 */
export function sendGoogleAdsConversion(
  eventId: string,
  value: number = 1.0,
  currency: string = "INR"
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: eventId,
      value,
      currency,
    })
    console.log("✅ Google Ads conversion sent:", { eventId, value, currency })
  } else {
    console.warn("⚠️ Google Ads gtag not available yet")
  }
}
