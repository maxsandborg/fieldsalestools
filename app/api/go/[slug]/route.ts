import { NextRequest, NextResponse } from "next/server";
import { getToolBySlug } from "@/data/tools";
import { getAffiliateUrl } from "@/lib/affiliates";

/**
 * Affiliate click-through redirect endpoint
 *
 * Route: GET /api/go/:slug
 * e.g.   GET /api/go/salesrabbit
 *
 * Behavior:
 *  1. Look up the tool by slug
 *  2. Check lib/affiliates.ts for an active affiliate URL
 *  3. If affiliate URL exists → 302 to affiliate URL (tracked, earns commission)
 *  4. If no affiliate URL  → 302 to tool.website (no commission, still useful)
 *  5. If tool not found    → 404
 *
 * The redirect is 302 (temporary) so Google doesn't consolidate link equity.
 * rel="nofollow sponsored" on the incoming links tells Google this is a paid link.
 *
 * To add tracking/analytics: log the click here before redirecting.
 * Future: POST to Plausible custom event, write to KV store, etc.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Validate the slug
  const tool = getToolBySlug(slug);
  if (!tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  // Resolve destination: affiliate URL if configured, otherwise official site
  const affiliateUrl = getAffiliateUrl(slug);
  const destination = affiliateUrl ?? tool.website;

  // --- Optional: log click for analytics ---
  // In production you could write to a KV store, Plausible, etc.
  // console.log(`[affiliate-click] slug=${slug} hasAffiliate=${!!affiliateUrl} dest=${destination}`);

  // 302 redirect — temporary so Google keeps the page indexed separately
  return NextResponse.redirect(destination, {
    status: 302,
    headers: {
      // Tell browsers and crawlers this is a temporary redirect
      "Cache-Control": "no-store, no-cache",
      // FTC compliance: this page initiates a potentially commercial redirect
      "X-Affiliate-Redirect": "1",
    },
  });
}
