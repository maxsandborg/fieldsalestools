/**
 * Centralized affiliate URL configuration for FieldSalesTools.com
 *
 * How to add a new affiliate:
 *  1. Get your tracking link from the affiliate program (PartnerStack, ShareASale, direct, etc.)
 *  2. Add an entry below: toolSlug → affiliateUrl
 *  3. The /api/go/[slug] route will automatically use this URL.
 *
 * Tools WITHOUT an entry here will pass through to their official website (tool.website).
 * This means no commission is earned — add the link as soon as you're approved.
 *
 * STATUS KEY:
 *   ✅ ACTIVE     — tracking link confirmed, earning commissions
 *   ⏳ PENDING    — applied, awaiting approval
 *   ❌ NO PROGRAM — no public affiliate program found
 *   🔍 RESEARCH   — needs investigation
 */

export const affiliateUrls: Record<string, string> = {
  // ─────────────────────────────────────────────
  // ✅ ACTIVE AFFILIATES
  // ─────────────────────────────────────────────

  // InSitu Sales — 20% recurring commission (~$68/customer/month)
  // Program: Direct — REFERRAL CODE received: "Fieldsalestools"
  // ⚠️  TODO: Get full tracking URL from InSitu (ask if it's insitusales.com?ref=Fieldsalestools or similar)
  // Once confirmed, uncomment and replace YOUR_REFERRAL_CODE:
  // "insitu-sales": "https://insitusales.com/?ref=Fieldsalestools",

  // ─────────────────────────────────────────────
  // ⏳ PENDING APPROVAL
  // ─────────────────────────────────────────────

  // SalesRabbit — $1,500/conversion + 15% recurring (PartnerStack)
  // Applied: 2026-03 — check dashboard: https://salesrabbit.partnerstack.com
  // "salesrabbit": "https://salesrabbit.partnerstack.com/?fpr=YOUR_REF",

  // ─────────────────────────────────────────────
  // 🔍 HIGH PRIORITY — APPLY NOW
  // ─────────────────────────────────────────────

  // SPOTIO — largest D2D platform, likely has program
  // Check: https://spotio.com/partners or email partnerships@spotio.com
  // "spotio": "https://spotio.com/?ref=fieldsalestools",

  // Knockio — $50/conversion reported
  // Check: https://knockio.com/affiliate or PartnerStack
  // "knockio": "https://knockio.com/?ref=fieldsalestools",

  // Badger Maps — popular route optimization, check impact.com
  // "badger-maps": "https://www.badgermapping.com/?ref=fieldsalestools",

  // Map My Customers — CRM, check PartnerStack
  // "map-my-customers": "https://mapmycustomers.com/?ref=fieldsalestools",
};

/**
 * Returns the affiliate URL for a tool slug, or null if not configured.
 * The /api/go route falls back to the tool's official website if null.
 */
export function getAffiliateUrl(slug: string): string | null {
  return affiliateUrls[slug] ?? null;
}

/**
 * Returns true if we have an active affiliate relationship for this tool.
 * Use to show commission disclosure badges on tool cards (optional).
 */
export function hasAffiliate(slug: string): boolean {
  return slug in affiliateUrls;
}
