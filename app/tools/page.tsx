import Link from "next/link";
import { tools } from "@/data/tools";
import { getReview } from "@/data/reviews";
import ToolLogo from "@/components/ToolLogo";

export const metadata = {
  title: "Best Field Sales Software 2026 — 20+ Tools Reviewed | FieldSalesTools.com",
  description:
    "Independent reviews of every major field sales, D2D, and canvassing software tool. Compare pricing, features, and see which tools fit your team size and vertical.",
};

const CATEGORIES = [
  { label: "All Tools", value: null },
  { label: "D2D & Canvassing", value: "D2D & Canvassing" },
  { label: "CRM & Pipeline", value: "CRM & Pipeline" },
  { label: "Route Optimization", value: "Route Optimization" },
  { label: "Team Management", value: "Team Management" },
  { label: "Analytics", value: "Analytics" },
];

function EditorScoreBadge({ score }: { score: number }) {
  const color =
    score >= 9 ? "#16a34a" : score >= 7.5 ? "#1d6ce8" : score >= 6 ? "#d97706" : "#dc2626";
  const label =
    score >= 9 ? "Excellent" : score >= 7.5 ? "Very Good" : score >= 6 ? "Good" : "Fair";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: color,
        color: "#fff",
        borderRadius: 8,
        padding: "6px 10px",
        minWidth: 52,
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{score.toFixed(1)}</span>
      <span style={{ fontSize: 9, fontWeight: 600, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </span>
    </div>
  );
}

export default function ToolsPage() {
  const featured = tools
    .filter((t) => t.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const rest = tools
    .filter((t) => !t.featured)
    .sort((a, b) => b.rating - a.rating);
  const allTools = [...featured, ...rest];

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #0a1e38 0%, #0f2b4a 100%)", padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 10 }}>
            <Link href="/" style={{ color: "#4f9ef8", textDecoration: "none", fontSize: 13 }}>
              FieldSalesTools.com
            </Link>
            <span style={{ color: "#334155", margin: "0 8px" }}>/</span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Tools</span>
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
            Field Sales Software Directory
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 16, maxWidth: 560, margin: "0 0 28px", lineHeight: 1.65 }}>
            {tools.length} tools reviewed by practitioners. Unbiased editorial ratings — no
            pay-to-rank. Find the right software for your D2D, canvassing, or field sales team.
          </p>

          {/* Search bar */}
          <form
            action="/tools"
            method="GET"
            style={{ display: "flex", gap: 0, maxWidth: 520 }}
          >
            <input
              name="q"
              placeholder={'Search tools, e.g. "SPOTIO" or "route planning"…'}
              style={{
                flex: 1,
                padding: "12px 16px",
                fontSize: 14,
                border: "none",
                borderRadius: "8px 0 0 8px",
                outline: "none",
                color: "#0f2340",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#1d6ce8",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "0 8px 8px 0",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Search →
            </button>
          </form>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginBottom: 32,
            padding: "18px 24px",
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: `${tools.length}+`, label: "Tools Reviewed" },
            { value: "100%", label: "Independent Editorial" },
            { value: "March 2026", label: "Last Updated" },
            { value: "Free", label: "No Signup Required" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0f2340" }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category filter pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.value ? `/tools?category=${encodeURIComponent(cat.value)}` : "/tools"}
              style={{
                display: "inline-block",
                padding: "7px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                background: cat.value === null ? "#1d6ce8" : "#fff",
                color: cat.value === null ? "#fff" : "#475569",
                border: cat.value === null ? "none" : "1px solid #e2e8f0",
              }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Tools list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {allTools.map((tool, index) => {
            const review = getReview(tool.slug);
            const editorScore = review?.editorScore;
            const lastTested = review?.lastTested;
            const bestFor = tool.industries?.[0] ?? tool.categories?.[0] ?? "";

            return (
              <div
                key={tool.slug}
                style={{
                  background: "#fff",
                  border: tool.featured ? "2px solid #1d6ce8" : "1px solid #e2e8f0",
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Featured ribbon */}
                {tool.featured && (
                  <div
                    style={{
                      background: "linear-gradient(90deg, #1d6ce8, #3b82f6)",
                      padding: "4px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      ★ {tool.badgeText ?? "Featured Listing"}
                    </span>
                    {lastTested && (
                      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                        Last tested: {lastTested}
                      </span>
                    )}
                  </div>
                )}

                <Link
                  href={`/tools/${tool.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      padding: "18px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    {/* Rank number */}
                    {!tool.featured && (
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "#f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#64748b",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </div>
                    )}

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
                      <ToolLogo
                        website={tool.website}
                        name={tool.name}
                        fallbackEmoji={tool.logo}
                        size={36}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                        <span style={{ color: "#0f2340", fontWeight: 700, fontSize: 16 }}>
                          {tool.name}
                        </span>
                        {/* Star rating */}
                        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                          <span style={{ color: "#f59e0b", fontSize: 13 }}>★</span>
                          <span style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>
                            {tool.rating}
                          </span>
                          <span style={{ color: "#94a3b8", fontSize: 12 }}>
                            ({tool.reviewCount})
                          </span>
                        </div>
                        {/* Best for badge */}
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
                        {/* Freshness (non-featured tools) */}
                        {!tool.featured && lastTested && (
                          <span style={{ color: "#94a3b8", fontSize: 11 }}>
                            Tested {lastTested}
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          color: "#475569",
                          fontSize: 13,
                          margin: "0 0 8px",
                          lineHeight: 1.55,
                        }}
                      >
                        {tool.tagline}
                      </p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                        {tool.categories.slice(0, 3).map((cat) => (
                          <span
                            key={cat}
                            style={{
                              background: "#f1f5f9",
                              color: "#475569",
                              fontSize: 11,
                              padding: "3px 8px",
                              borderRadius: 20,
                              fontWeight: 500,
                            }}
                          >
                            {cat}
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

                    {/* Right side: editor score + arrow */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 8,
                        flexShrink: 0,
                      }}
                    >
                      {editorScore !== undefined && (
                        <EditorScoreBadge score={editorScore} />
                      )}
                      <span style={{ color: "#94a3b8", fontSize: 18 }}>→</span>
                    </div>
                  </div>

                  {/* Featured CTA strip */}
                  {tool.featured && tool.affiliateUrl && (
                    <div
                      style={{
                        borderTop: "1px solid #e2e8f0",
                        padding: "10px 20px",
                        background: "#f8fafc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <span style={{ color: "#64748b", fontSize: 12 }}>
                        {review?.editorVerdict
                          ? `"${review.editorVerdict.slice(0, 80)}${review.editorVerdict.length > 80 ? "…" : ""}"`
                          : `Read our full ${tool.name} review →`}
                      </span>
                      <span
                        style={{
                          background: "#1d6ce8",
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "6px 14px",
                          borderRadius: 6,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visit {tool.name} →
                      </span>
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {/* Compare CTA */}
          <div
            style={{
              padding: "28px",
              background: "#0f2340",
              borderRadius: 16,
            }}
          >
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
              Not sure which tool wins?
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

          {/* Get Listed CTA */}
          <div
            style={{
              padding: "28px",
              background: "#fff",
              borderRadius: 16,
              border: "2px solid #1d6ce8",
            }}
          >
            <h2 style={{ color: "#0f2340", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
              Are you a vendor?
            </h2>
            <p style={{ color: "#64748b", margin: "0 0 16px", fontSize: 14, lineHeight: 1.6 }}>
              Get featured at the top of this directory and reach field sales buyers actively
              researching tools.
            </p>
            <Link
              href="/advertise"
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
              Get Listed → From $299/mo
            </Link>
          </div>
        </div>

        {/* Stack guides strip */}
        <div
          style={{
            marginTop: 20,
            padding: "24px 28px",
            background: "#f1f5f9",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <span style={{ color: "#0f2340", fontWeight: 700, fontSize: 15 }}>
              Not sure which tools to combine?
            </span>
            <span style={{ color: "#64748b", fontSize: 14, marginLeft: 10 }}>
              See curated tech stack guides for every industry and team size.
            </span>
          </div>
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
              whiteSpace: "nowrap",
            }}
          >
            Browse Stack Guides →
          </Link>
        </div>
      </div>
    </main>
  );
}
