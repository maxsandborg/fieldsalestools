import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, tools } from "@/data/tools";
import { getReview, reviewedSlugs } from "@/data/reviews";
import AffiliateBanner from "@/components/AffiliateBanner";

export async function generateStaticParams() {
  return reviewedSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Alternatives Not Found" };
  return {
    title: `Best ${tool.name} Alternatives (2026) — Honest Comparison | FieldSalesTools.com`,
    description: `Looking for ${tool.name} alternatives? We compared the top options on pricing, features, and real user ratings. Find the best replacement for your field sales team.`,
    alternates: { canonical: `https://www.fieldsalestools.com/alternatives/${slug}` },
  };
}

const alternativeReasons: Record<string, string[]> = {
  spotio: [
    "The 5-user minimum is too restrictive for solo reps or small teams",
    "App crashes and reliability issues are frustrating in the field",
    "Pricing feels too high for what you get at the small team level",
    "Reporting is activity-focused — teams needing revenue reporting look elsewhere",
  ],
  salesrabbit: [
    "Data loss incidents — leads and notes disappearing — are a recurring concern",
    "No SOC 2 Type 2 compliance blocks enterprise procurement in some organizations",
    "Limited customization for complex CRM workflow needs",
    "Monthly billing is 67% more expensive than annual — painful for flexible buyers",
  ],
  "badger-maps": [
    "Badger Maps is built for account management, not cold door-to-door canvassing",
    "Offline functionality is limited compared to SalesRabbit and Knockbase",
    "No built-in communication tools between reps",
    "Pricing at $49/user/month can be steep for smaller teams",
  ],
  "map-my-customers": [
    "The desktop version is noticeably clunky and less capable than mobile",
    "Android support lags behind iOS significantly",
    "A small team means slower product updates than market leaders",
    "Integration options are narrower than Badger Maps or SPOTIO",
  ],
  knockbase: [
    "No public G2 or Capterra reviews — impossible to independently verify claims",
    "Pricing requires a sales call — no public tiers for quick comparison",
    "Founded 2023 — too new for risk-averse enterprise buyers",
    "No external funding limits development speed and support capacity",
  ],
  sunbase: [
    "Very industry-specific — less useful for teams outside solar, roofing, or home improvement",
    "UI is less polished than SPOTIO or SalesRabbit",
    "Fewer third-party integrations make it harder to connect to existing tech stacks",
    "Pricing is not published — requires a sales call to evaluate",
  ],
  knockio: [
    "Limited advanced analytics compared to SPOTIO or SalesRabbit",
    "Fewer integrations than larger platforms restrict workflow automation",
    "Not suitable for enterprise-scale teams needing deep rep performance data",
    "A newer, smaller support team means potentially slower response during busy seasons",
  ],
  repmove: [
    "Less specialized for pure D2D cold canvassing — SPOTIO and SalesRabbit are better for that use case",
    "Offline functionality is more limited than Knockbase for dead-zone canvassing",
    "AI features are only available on the higher-tier CRM plan",
    "Smaller community and ecosystem than legacy platforms like SPOTIO or Badger Maps",
  ],
  outfield: [
    "Less specialized for pure D2D canvassing than SPOTIO or SalesRabbit",
    "Gamification may feel misaligned with certain enterprise or B2B sales cultures",
    "Fewer integrations than RepMove's 5,000+ connector ecosystem",
    "Less advanced AI and analytics than RepMove or SPOTIO",
  ],
  "salesforce-maps": [
    "Only makes sense if you're already paying for Salesforce — the cost is prohibitive otherwise",
    "Implementation requires Salesforce administrator expertise and significant configuration time",
    "G2 reviews consistently flag customer support quality as below expectations for the price",
    "Not built for cold D2D canvassing — purely an account management and territory tool",
  ],
  repsly: [
    "Built for CPG retail execution — teams in D2D canvassing or B2B distribution need a different tool",
    "Enterprise pricing requires a sales call and can be high for smaller distributors",
    "Full feature set requires meaningful onboarding and training investment",
    "Less useful outside the food, beverage, and consumer goods verticals",
  ],
  skynamo: [
    "Pricing is custom and not published — requires a sales call to get a number",
    "Less suited for D2D canvassing or retail execution than for B2B distribution sales",
    "Implementation involves ERP integration work that adds setup complexity and timeline",
    "Primary focus is B2B distribution and manufacturing — not ideal for consumer-facing D2D teams",
  ],
  maptive: [
    "Not a field rep CRM — no knock logging, lead capture, or in-field mobile workflow",
    "Higher annual cost ($1,250+) than more full-featured field sales platforms",
    "Limited mobile app functionality compared to SPOTIO, RepMove, or SalesRabbit",
    "Real-time field rep GPS tracking is not a core feature",
  ],
  "leadsquared-field-force": [
    "Support operates in international time zones — US teams report meaningful response gaps",
    "Built primarily for Asian enterprise markets; North American D2D workflows feel secondary",
    "Complex setup and implementation — not suitable for small teams without IT resources",
    "Overkill for teams under 100 reps — the enterprise scale is a cost and complexity burden",
  ],
  canvass: [
    "Limited CRM and pipeline management — not suitable for complex sales workflows",
    "Basic reporting only — managers needing analytics dashboards will hit the ceiling quickly",
    "No advanced integrations with CRM or marketing automation tools",
    "Not scalable for teams beyond 15–20 reps",
  ],
  "d2d-crm": [
    "Limited scalability — the platform's ceiling is visible for teams beyond 20–25 reps",
    "Dated UI compared to modern alternatives like RepMove or Knockio",
    "Few third-party integrations restrict workflow automation",
    "Smaller development team means slower product updates and feature additions",
  ],
  leadbeam: [
    "Newer platform (2021) with a shorter track record than established alternatives",
    "Priced at $49/user/month — higher than RepMove ($20) or Outfield ($20) for comparable functionality",
    "Best value requires annual commitment — quarterly pricing at $65/user/month is steep",
    "Less suited for pure D2D canvassing than for outside sales account management",
  ],
  geopointe: [
    "Requires Salesforce — there's no compelling reason to use Geopointe without the CRM integration",
    "UI complexity for non-technical users is a recurring theme in reviews",
    "Less powerful than Salesforce Maps for enterprise-scale territory design",
    "Parent company (Ascendix) is a consulting firm, not a pure-play product company — affects roadmap pace",
  ],
  "insitu-sales": [
    "Niche focus on wholesale distribution — not suitable for D2D canvassing or retail execution",
    "Smaller feature set than Skynamo's ERP integration depth or Repsly's AI shelf auditing",
    "Limited integrations compared to premium platforms",
    "Less suited for teams outside food & bev, wholesale, or specialty distribution",
  ],
  marketsharp: [
    "Monthly pricing ($199+) is high for smaller home improvement operations",
    "Dated UI compared to modern platforms — the mobile experience lags newer tools",
    "Only useful within home improvement verticals — very limited outside windows, roofing, HVAC",
    "Low G2 review volume (97 after 30 years) suggests limited digital community for peer support",
  ],
};

export default async function AlternativesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const review = getReview(slug);
  if (!review) notFound();

  const alternatives = review.alternativeSlugs
    .map((s) => getToolBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getToolBySlug>>[];

  const reasons = alternativeReasons[slug] ?? [
    `Pricing doesn't fit your budget`,
    `Missing a key feature your team needs`,
    `Looking to evaluate all options before deciding`,
  ];

  // JSON-LD: ItemList of alternatives + BreadcrumbList
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": `Best ${tool.name} Alternatives 2026`,
        "description": `The top alternatives to ${tool.name} for field sales teams, ranked and reviewed by FieldSalesTools.com.`,
        "url": `https://www.fieldsalestools.com/alternatives/${slug}`,
        "numberOfItems": alternatives.length,
        "itemListElement": alternatives.map((alt, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": alt.name,
          "url": `https://www.fieldsalestools.com/tools/${alt.slug}`,
          "item": {
            "@type": "SoftwareApplication",
            "name": alt.name,
            "description": alt.tagline,
            "applicationCategory": "BusinessApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": alt.rating.toString(),
              "reviewCount": alt.reviewCount.toString(),
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fieldsalestools.com" },
          { "@type": "ListItem", "position": 2, "name": tool.name, "item": `https://www.fieldsalestools.com/tools/${slug}` },
          { "@type": "ListItem", "position": 3, "name": `${tool.name} Alternatives`, "item": `https://www.fieldsalestools.com/alternatives/${slug}` }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />


      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "#6fa3c8" }}>
            <Link href="/" className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>Home</Link>
            <span>/</span>
            <Link href={`/tools/${tool.slug}`} className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>{tool.name}</Link>
            <span>/</span>
            <span className="text-white">Alternatives</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Best {tool.name} Alternatives (2026)
          </h1>
          <p className="text-lg mb-6" style={{ color: "#94b8d4" }}>
            We reviewed {alternatives.length} alternatives to {tool.name} — comparing pricing, features, ratings, and real-world use cases to help you find the right fit.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm px-3 py-1 rounded-full font-medium text-white" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              {alternatives.length} alternatives reviewed
            </span>
            <span className="text-sm px-3 py-1 rounded-full font-medium text-white" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              Updated March 2026
            </span>
            <span className="text-sm px-3 py-1 rounded-full font-medium text-white" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              FieldSalesTools.com Editorial Team
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">

        {/* FTC Affiliate Disclosure */}
        <AffiliateBanner />

        {/* Why people look for alternatives */}
        <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>
            Why Teams Look for {tool.name} Alternatives
          </h2>
          <p className="text-sm mb-4" style={{ color: "#475569" }}>
            {tool.name} is a capable platform, but it isn&apos;t the right fit for every team. Based on user reviews across G2, Capterra, and Reddit, here are the most common reasons field sales teams start evaluating alternatives:
          </p>
          <ul className="space-y-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm" style={{ color: "#374151" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: "#f59e0b" }}>→</span>
                {reason}
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4" style={{ color: "#475569" }}>
            If any of the above resonates, keep reading. We&apos;ve ranked the best alternatives below, with honest assessments of who each one is actually best suited for.
          </p>
        </section>

        {/* Alternatives list */}
        {alternatives.map((alt, i) => (
          <section key={alt.slug} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            {/* Header */}
            <div className="p-6 pb-0">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: "#f0f6ff", border: "1px solid #dbeafe" }}
                  >
                    {alt.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#1d6ce8" }}>
                        #{i + 1} Alternative
                      </span>
                      {alt.featured && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#f59e0b" }}>
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black mt-1" style={{ color: "#0f2340" }}>{alt.name}</h3>
                    <p className="text-sm" style={{ color: "#64748b" }}>{alt.tagline}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-black" style={{ color: "#0f2340" }}>{alt.pricingFrom}</div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>{alt.pricingModel}</div>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <span style={{ color: "#f59e0b" }}>★</span>
                    <span className="font-bold text-sm" style={{ color: "#0f2340" }}>{alt.rating}</span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>({alt.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{alt.description}</p>

              {/* vs comparison */}
              <div className="rounded-xl p-4" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#94a3b8" }}>
                  {alt.name} vs {tool.name}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-xs font-semibold" style={{ color: "#94a3b8" }}>Starting Price</span>
                    <p className="font-bold" style={{ color: "#0f2340" }}>{alt.pricingFrom}</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>vs {tool.pricingFrom}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold" style={{ color: "#94a3b8" }}>G2 Rating</span>
                    <p className="font-bold" style={{ color: "#0f2340" }}>{alt.rating}/5</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>vs {tool.rating}/5 for {tool.name}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold" style={{ color: "#94a3b8" }}>Best For</span>
                    <p className="font-bold text-xs leading-snug" style={{ color: "#0f2340" }}>{alt.industries.slice(0, 2).join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* Key features */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {alt.keyFeatures.slice(0, 4).map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-2 py-1 rounded-lg"
                      style={{ backgroundColor: "#f1f5f9", color: "#374151", border: "1px solid #e2e8f0" }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid #f1f5f9" }}>
                <Link
                  href={`/tools/${alt.slug}`}
                  className="text-sm font-semibold no-underline"
                  style={{ color: "#1d6ce8" }}
                >
                  Read full {alt.name} review →
                </Link>
                <a
                  href={`/api/go/${alt.slug}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="text-sm font-bold px-4 py-2 rounded-lg no-underline text-white"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  Visit {alt.name} →
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="rounded-2xl p-6 text-center" style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
          <h2 className="text-xl font-black text-white mb-2">Still not sure which tool is right for you?</h2>
          <p className="text-sm mb-4" style={{ color: "#94b8d4" }}>
            Use our comparison tool to build a side-by-side breakdown of any two platforms — pricing, features, ratings, and our verdict.
          </p>
          <Link
            href="/compare"
            className="inline-block text-sm font-bold px-6 py-3 rounded-xl no-underline text-white"
            style={{ backgroundColor: "#1d6ce8" }}
          >
            Compare Any Two Tools →
          </Link>
        </section>

      </main>


    </div>
  );
}
