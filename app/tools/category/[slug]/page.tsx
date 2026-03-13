import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { getReview } from "@/data/reviews";
import ToolLogo from "@/components/ToolLogo";

/* ── Category definitions ────────────────────────────── */

type CategoryDef = {
  slug: string;
  label: string;
  match: string;           // value matched against tool.categories[]
  title: string;           // H1 + meta title prefix
  description: string;     // meta description
  intro: string;           // hero paragraph
};

const CATEGORY_DEFS: CategoryDef[] = [
  {
    slug: "field-sales-crm",
    label: "Field Sales CRM",
    match: "Field Sales CRM",
    title: "Best Field Sales CRM Software",
    description:
      "Compare the best field sales CRM tools for D2D, canvassing, and outside sales teams. Honest reviews, pricing, and editor scores.",
    intro:
      "A purpose-built field sales CRM keeps reps productive on the road with mobile-first lead tracking, pipeline visibility, and activity logging. These platforms go beyond generic CRMs with features like geo-tagged check-ins, territory management, and offline access.",
  },
  {
    slug: "territory-management",
    label: "Territory Management",
    match: "Territory Management",
    title: "Best Territory Management Software",
    description:
      "Find the best territory management tools for field sales teams. Map territories, balance workloads, and maximize coverage.",
    intro:
      "Territory management software helps field sales leaders divide, assign, and optimize geographic sales territories. The best tools offer visual map-based assignment, workload balancing, and real-time rep tracking to ensure full coverage.",
  },
  {
    slug: "d2d-software",
    label: "D2D Software",
    match: "D2D Software",
    title: "Best Door-to-Door (D2D) Sales Software",
    description:
      "Top-rated door-to-door sales software for canvassing teams. Track leads, optimize routes, and manage reps in the field.",
    intro:
      "Door-to-door sales software is built specifically for canvassing workflows — tracking which doors have been knocked, logging outcomes, and routing reps through their turf efficiently. These tools help D2D teams in solar, pest control, home security, and more.",
  },
  {
    slug: "route-planning",
    label: "Route Planning",
    match: "Route Planning",
    title: "Best Route Planning Software for Sales",
    description:
      "Compare the best route planning and optimization tools for outside sales reps. Save hours of drive time and visit more accounts.",
    intro:
      "Route planning software helps field reps minimize drive time and maximize face-to-face selling. The best tools auto-optimize multi-stop routes, sync with your CRM, and adjust on the fly when meetings change.",
  },
  {
    slug: "canvassing",
    label: "Canvassing",
    match: "Canvassing",
    title: "Best Canvassing Software",
    description:
      "Find the best canvassing software for door-to-door teams. Track areas, manage leads, and boost rep productivity.",
    intro:
      "Canvassing software streamlines door-to-door outreach with area mapping, lead disposition tracking, and real-time team visibility. Essential for solar, roofing, pest control, and political canvassing operations.",
  },
  {
    slug: "solar-crm",
    label: "Solar CRM",
    match: "Solar CRM",
    title: "Best Solar CRM Software",
    description:
      "Compare CRM software built for solar sales teams. Manage leads, proposals, and installations from knock to close.",
    intro:
      "Solar CRMs are purpose-built for the solar sales workflow — from door knock to signed contract to installation scheduling. These platforms handle proposal generation, financing options, and utility bill analysis alongside standard CRM features.",
  },
  {
    slug: "enterprise-sales",
    label: "Enterprise Sales",
    match: "Enterprise Sales",
    title: "Best Enterprise Field Sales Platforms",
    description:
      "Enterprise-grade field sales platforms for large sales organizations. Advanced analytics, territory management, and CRM integration.",
    intro:
      "Enterprise field sales platforms serve large organizations with hundreds or thousands of reps. They offer advanced territory management, granular analytics, role-based access, and deep CRM integrations required at scale.",
  },
];

/* ── Helpers ──────────────────────────────────────────── */

function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return CATEGORY_DEFS.find((c) => c.slug === slug);
}

function getToolsForCategory(match: string) {
  return tools
    .filter((t) => t.categories.includes(match))
    .sort((a, b) => b.rating - a.rating);
}

/* ── Static params ───────────────────────────────────── */

export function generateStaticParams() {
  return CATEGORY_DEFS.map((c) => ({ slug: c.slug }));
}

/* ── Metadata ────────────────────────────────────────── */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  const pageUrl = `https://www.fieldsalestools.com/tools/category/${cat.slug}`;
  return {
    title: `${cat.title} (2026) | FieldSalesTools.com`,
    description: cat.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${cat.title} (2026) | FieldSalesTools.com`,
      description: cat.description,
      url: pageUrl,
      siteName: "FieldSalesTools.com",
      images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${cat.title} 2026`,
      description: cat.description,
      images: ["https://www.fieldsalestools.com/og-image.png"],
    },
  };
}

/* ── Page component ──────────────────────────────────── */

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const categoryTools = getToolsForCategory(cat.match);
  const pageUrl = `https://www.fieldsalestools.com/tools/category/${cat.slug}`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fieldsalestools.com" },
      { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.fieldsalestools.com/tools" },
      { "@type": "ListItem", position: 3, name: cat.label, item: pageUrl },
    ],
  };

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #0a1e38 0%, #0f2b4a 100%)",
          padding: "60px 20px 48px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#4f9ef8", textDecoration: "none", fontSize: 13 }}>
              Home
            </Link>
            <span style={{ color: "#334155" }}>/</span>
            <Link href="/tools" style={{ color: "#4f9ef8", textDecoration: "none", fontSize: 13 }}>
              All Tools
            </Link>
            <span style={{ color: "#334155" }}>/</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>{cat.label}</span>
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 14px",
              letterSpacing: "-0.5px",
            }}
          >
            {cat.title}
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 16,
              maxWidth: 640,
              margin: "0 0 24px",
              lineHeight: 1.65,
            }}
          >
            {cat.intro}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span
              style={{
                background: "rgba(29,108,232,0.15)",
                color: "#93c5fd",
                fontSize: 13,
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 20,
                border: "1px solid rgba(29,108,232,0.3)",
              }}
            >
              {categoryTools.length} tools reviewed
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Updated March 2026
            </span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
        {/* Category navigation */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          <Link
            href="/tools"
            style={{
              display: "inline-block",
              padding: "7px 14px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              background: "#fff",
              color: "#475569",
              border: "1px solid #e2e8f0",
            }}
          >
            All Tools
          </Link>
          {CATEGORY_DEFS.map((c) => (
            <Link
              key={c.slug}
              href={`/tools/category/${c.slug}`}
              style={{
                display: "inline-block",
                padding: "7px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                background: c.slug === slug ? "#1d6ce8" : "#fff",
                color: c.slug === slug ? "#fff" : "#475569",
                border: c.slug === slug ? "none" : "1px solid #e2e8f0",
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {/* Tools list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {categoryTools.map((tool, index) => {
            const review = getReview(tool.slug);
            const editorScore = review?.editorScore;
            const bestFor = tool.industries?.[0] ?? "";

            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    transition: "border-color 0.15s",
                  }}
                >
                  {/* Rank */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: index < 3 ? "#1d6ce8" : "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: index < 3 ? "#fff" : "#64748b",
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Logo */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "#f8fafc",
                      borderRadius: 10,
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <ToolLogo website={tool.website} name={tool.name} fallbackEmoji={tool.logo} size={36} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ color: "#0f2340", fontWeight: 700, fontSize: 16 }}>{tool.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <span style={{ color: "#f59e0b", fontSize: 13 }}>★</span>
                        <span style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>{tool.rating}</span>
                        <span style={{ color: "#94a3b8", fontSize: 12 }}>({tool.reviewCount})</span>
                      </div>
                      {bestFor && (
                        <span
                          style={{
                            background: "#f0f9ff",
                            color: "#0369a1",
                            fontSize: 11,
                            padding: "2px 8px",
                            borderRadius: 20,
                            fontWeight: 500,
                            border: "1px solid #bae6fd",
                          }}
                        >
                          Best for: {bestFor}
                        </span>
                      )}
                    </div>
                    <p style={{ color: "#475569", fontSize: 13, margin: "0 0 8px", lineHeight: 1.55 }}>
                      {tool.tagline}
                    </p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {tool.categories.map((c) => (
                        <span
                          key={c}
                          style={{
                            background: c === cat.match ? "#eff6ff" : "#f1f5f9",
                            color: c === cat.match ? "#1d6ce8" : "#475569",
                            fontSize: 11,
                            padding: "3px 8px",
                            borderRadius: 20,
                            fontWeight: c === cat.match ? 600 : 500,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                      <span
                        style={{
                          background: "#fefce8",
                          color: "#854d0e",
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 20,
                          fontWeight: 600,
                          border: "1px solid #fef08a",
                        }}
                      >
                        From {tool.pricingFrom}
                      </span>
                    </div>
                  </div>

                  {/* Editor score + arrow */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    {editorScore !== undefined && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          background:
                            editorScore >= 9 ? "#16a34a" : editorScore >= 7.5 ? "#1d6ce8" : editorScore >= 6 ? "#d97706" : "#dc2626",
                          color: "#fff",
                          borderRadius: 8,
                          padding: "6px 10px",
                          minWidth: 52,
                        }}
                      >
                        <span style={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{editorScore.toFixed(1)}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          {editorScore >= 9 ? "Excellent" : editorScore >= 7.5 ? "Very Good" : editorScore >= 6 ? "Good" : "Fair"}
                        </span>
                      </div>
                    )}
                    <span style={{ color: "#94a3b8", fontSize: 18 }}>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty state */}
        {categoryTools.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ color: "#64748b", fontSize: 16 }}>No tools found in this category yet.</p>
            <Link href="/tools" style={{ color: "#1d6ce8", fontWeight: 600, fontSize: 14 }}>
              ← Browse all tools
            </Link>
          </div>
        )}

        {/* Cross-links to other categories */}
        <div style={{ marginTop: 48, padding: "28px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
          <h2 style={{ color: "#0f2340", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>
            Browse by Category
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {CATEGORY_DEFS.filter((c) => c.slug !== slug).map((c) => {
              const count = tools.filter((t) => t.categories.includes(c.match)).length;
              return (
                <Link
                  key={c.slug}
                  href={`/tools/category/${c.slug}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: 10,
                    textDecoration: "none",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <span style={{ color: "#0f2340", fontWeight: 600, fontSize: 14 }}>{c.label}</span>
                  <span
                    style={{
                      background: "#eff6ff",
                      color: "#1d6ce8",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    {count} tools
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div style={{ padding: "28px", background: "#0f2340", borderRadius: 16 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
              Not sure which {cat.label.toLowerCase()} tool wins?
            </h2>
            <p style={{ color: "#94a3b8", margin: "0 0 16px", fontSize: 14, lineHeight: 1.6 }}>
              Head-to-head comparisons on pricing, features, and use cases.
            </p>
            <Link
              href="/compare"
              style={{
                background: "#1d6ce8",
                color: "#fff",
                textDecoration: "none",
                padding: "9px 20px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 13,
                display: "inline-block",
              }}
            >
              Compare Tools →
            </Link>
          </div>
          <div style={{ padding: "28px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
            <h2 style={{ color: "#0f2340", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
              Need a complete tech stack?
            </h2>
            <p style={{ color: "#64748b", margin: "0 0 16px", fontSize: 14, lineHeight: 1.6 }}>
              Curated tool combinations by industry and team size.
            </p>
            <Link
              href="/stacks"
              style={{
                background: "#0f2340",
                color: "#fff",
                textDecoration: "none",
                padding: "9px 20px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 13,
                display: "inline-block",
              }}
            >
              Browse Stack Guides →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
