import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { getReview } from "@/data/reviews";
import { comparisons } from "@/data/comparisons";
import FaqAccordion from "@/components/FaqAccordion";
import ToolLogo from "@/components/ToolLogo";

export const metadata: Metadata = {
  title: "Best Field Sales Software 2026 — Reviews, Comparisons & Pricing | FieldSalesTools.com",
  description:
    "Independent reviews of 20+ field sales, D2D, and canvassing software tools. Compare pricing, features, and editor scores — find the right software for your team.",
  alternates: {
    canonical: "https://www.fieldsalestools.com",
  },
  openGraph: {
    title: "Best Field Sales Software 2026 — Reviews & Comparisons",
    description:
      "Independent reviews of 20+ field sales tools. Compare SPOTIO, SalesRabbit, Badger Maps, and more. Real pricing, editor scores, and side-by-side comparisons.",
    type: "website",
    url: "https://www.fieldsalestools.com",
    siteName: "FieldSalesTools.com",
  },
};

const CATEGORIES = [
  { label: "All Tools", href: "/tools" },
  { label: "Field Sales CRM", href: "/tools?category=Field+Sales+CRM" },
  { label: "D2D Software", href: "/tools?category=D2D+Software" },
  { label: "Territory Management", href: "/tools?category=Territory+Management" },
  { label: "Route Planning", href: "/tools?category=Route+Optimization" },
  { label: "Canvassing", href: "/tools?category=Canvassing" },
];

const HOMEPAGE_FAQS = [
  {
    question: "What is the best field sales CRM in 2026?",
    answer:
      "Based on our independent testing, SPOTIO ranks #1 for most field sales teams with an editor score of 8.6/10. It combines territory mapping, lead management, and activity tracking in one platform. SalesRabbit is the top pick specifically for D2D teams. The best tool depends on your industry, team size, and whether you prioritize mobile usability or CRM depth.",
  },
  {
    question: "How much does field sales software typically cost?",
    answer:
      "Pricing ranges from $15/user/month (Knockio) to $85+/user/month for enterprise platforms. Most mid-market tools fall in the $25–$50/user/month range. Most vendors require a minimum of 3–5 seats. Free trials are available for most tools on this list.",
  },
  {
    question: "What is the difference between SPOTIO and SalesRabbit?",
    answer:
      "SPOTIO is stronger on the CRM side with deeper pipeline management and sales sequence automation. SalesRabbit is more focused on canvassing workflows, lead generation, and gamification for D2D teams. SPOTIO suits mixed B2B/B2C outside sales teams; SalesRabbit is purpose-built for residential door-to-door. See our full SPOTIO vs SalesRabbit comparison for a side-by-side breakdown.",
  },
  {
    question: "Which tools work best for solar sales teams?",
    answer:
      "For solar D2D teams, SPOTIO and SalesRabbit are the top two options. Both have offline maps, pin-dropping, and lead tracking built for door-knocking workflows. If your team also does B2B commercial solar, SPOTIO's CRM depth is worth the higher price. See our Solar Sales Software guide for a full breakdown.",
  },
  {
    question: "Do field sales apps work offline (no cell signal)?",
    answer:
      "Yes — most modern field sales apps are built for low-signal environments. SPOTIO, SalesRabbit, Knockio, and RepMove all support full offline functionality. Data syncs automatically when signal is restored. Badger Maps has limited offline support and requires pre-caching routes before heading into the field.",
  },
  {
    question: "How do I choose between a route planner and a full field sales CRM?",
    answer:
      "If your team's biggest challenge is maximizing daily stops and covering territory efficiently — go with a route planner like Badger Maps or RepMove. If you also need lead management, follow-up sequences, and manager dashboards — go with a full field sales CRM like SPOTIO. The key question: do you need a map tool, or a full sales system?",
  },
];

export default function HomePage() {
  const featuredTools = tools
    .filter((t) => t.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, 3);

  const topCompareTools = tools
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const popularComparisons = comparisons.slice(0, 4);

  // Get tool by slug helper
  const getToolBySlug = (slug: string) => tools.find((t) => t.slug === slug);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #071525 0%, #0f2340 40%, #122d54 70%, #0e2448 100%)",
          padding: "72px 20px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,108,232,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(29,108,232,0.15)",
              border: "1px solid rgba(29,108,232,0.35)",
              color: "#93c5fd",
              fontSize: 12,
              fontWeight: 600,
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 20,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            ✓ The #1 Independent Directory for Field Sales Professionals
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "0 0 16px",
              letterSpacing: "-1px",
            }}
          >
            Find the Best{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Field Sales Software
            </span>{" "}
            for Your Team
          </h1>

          <p
            style={{
              color: "#7ba8c8",
              fontSize: "clamp(16px, 2vw, 18px)",
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Honest reviews, real pricing, side-by-side comparisons — no sponsored rankings, no BS.
          </p>

          {/* Search bar — submits to /tools?q=... */}
          <form
            action="/tools"
            method="GET"
            style={{ maxWidth: 620, margin: "0 auto 28px", position: "relative" }}
          >
            <span
              style={{
                position: "absolute",
                left: 18,
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.35)",
                fontSize: 18,
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              name="q"
              type="text"
              placeholder="Search SPOTIO, SalesRabbit, Badger Maps..."
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                borderRadius: 14,
                padding: "16px 120px 16px 52px",
                color: "#fff",
                fontSize: 16,
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "#1d6ce8",
                color: "#fff",
                border: "none",
                borderRadius: 9,
                padding: "9px 20px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </form>

          {/* Category pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#cbd5e1",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "7px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Trust strip */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(20px, 5vw, 48px)",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: `${tools.length}+`, label: "Tools Reviewed" },
              { num: "2,800+", label: "User Reviews Analyzed" },
              { num: `${comparisons.length}+`, label: "Side-by-Side Comparisons" },
              { num: "100%", label: "Independent Editorial" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: 26, fontWeight: 900 }}>{stat.num}</div>
                <div style={{ color: "#5a86a8", fontSize: 12, fontWeight: 500, marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TOOLS (top 3) ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 20px 48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 6,
              }}
            >
              🏆 Top Picks — March 2026
            </div>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 900,
                color: "#0f2340",
                margin: 0,
              }}
            >
              Featured & Highest-Rated Tools
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", margin: "4px 0 0" }}>
              Independently tested and verified by our editorial team
            </p>
          </div>
          <Link
            href="/tools"
            style={{ fontSize: 13, color: "#1d6ce8", fontWeight: 600, textDecoration: "none" }}
          >
            View all {tools.length} tools →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {featuredTools.map((tool) => {
            const review = getReview(tool.slug);
            const bestFor = tool.industries[0] ?? tool.categories[0];
            return (
              <div
                key={tool.slug}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1.5px solid #e2e8f0",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Featured badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    color: "#78350f",
                    fontSize: 10,
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  ⭐ Featured
                </div>

                {/* Top section: logo + name + rating */}
                <div
                  style={{
                    padding: "20px 20px 14px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: "#f8fafc",
                      border: "1.5px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <ToolLogo
                      website={tool.website}
                      name={tool.name}
                      fallbackEmoji={tool.logo}
                      size={36}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#0f2340" }}>{tool.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{tool.tagline}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                      <span style={{ color: "#f59e0b", fontSize: 13 }}>★★★★</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#0f2340" }}>{tool.rating}</span>
                      <span style={{ fontSize: 12, color: "#94a3b8" }}>({tool.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "14px 20px", flex: 1 }}>
                  {/* Best for */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: 8,
                      padding: "6px 10px",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#16a34a",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        flexShrink: 0,
                      }}
                    >
                      Best for
                    </span>
                    <span style={{ fontSize: 12, color: "#166534", fontWeight: 500 }}>{bestFor}</span>
                  </div>

                  {/* Freshness */}
                  {review && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 11,
                        color: "#94a3b8",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#22c55e",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      Last tested: {review.lastTested}
                    </div>
                  )}

                  {/* Categories */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                    {tool.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "3px 10px",
                          borderRadius: 6,
                          background: "#eff6ff",
                          color: "#1d6ce8",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0f2340", marginBottom: 8 }}>
                    From {tool.pricingFrom}
                  </div>

                  {/* Editor score */}
                  {review && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          background: "#0f2340",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 900,
                          padding: "4px 10px",
                          borderRadius: 8,
                        }}
                      >
                        {review.editorScore}
                      </span>
                      <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>
                        Editor Score / 10
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div
                  style={{
                    padding: "12px 20px",
                    background: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <Link
                    href={`/tools/${tool.slug}`}
                    style={{ fontSize: 12, color: "#64748b", textDecoration: "none" }}
                  >
                    Read full review →
                  </Link>
                  <a
                    href={tool.affiliateUrl ?? tool.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      background: "#1d6ce8",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      padding: "7px 16px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    Visit {tool.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ALL TOOLS LOGO STRIP ── (SEO: internal links to all 20 tool pages) */}
      <section
        style={{
          background: "#fff",
          borderTop: "1px solid #f1f5f9",
          borderBottom: "1px solid #f1f5f9",
          padding: "28px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            All {tools.length} tools reviewed on FieldSalesTools.com
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                title={`${tool.name} review`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "6px 12px",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#334155",
                  transition: "all 0.15s",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <ToolLogo website={tool.website} name={tool.name} fallbackEmoji={tool.logo} size={18} />
                </span>
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK COMPARE TABLE ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 20px 48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 6,
              }}
            >
              ⚡ Quick Compare
            </div>
            <h2
              style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#0f2340", margin: 0 }}
            >
              Top Tools at a Glance
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", margin: "4px 0 0" }}>
              Key metrics across our highest-rated field sales tools
            </p>
          </div>
          <Link
            href="/compare"
            style={{ fontSize: 13, color: "#1d6ce8", fontWeight: 600, textDecoration: "none" }}
          >
            Full comparisons →
          </Link>
        </div>

        <div
          style={{
            borderRadius: 16,
            border: "1.5px solid #e2e8f0",
            background: "#fff",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Tool", "Score", "Rating", "Starting Price", "Best For", "Review"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        letterSpacing: "0.7px",
                        background: "#f8fafc",
                        textAlign: "left",
                        borderBottom: "1px solid #e2e8f0",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topCompareTools.map((tool, idx) => {
                  const review = getReview(tool.slug);
                  const bestFor = tool.industries[0] ?? tool.categories[0];
                  return (
                    <tr
                      key={tool.slug}
                      style={{
                        borderBottom: idx < topCompareTools.length - 1 ? "1px solid #f1f5f9" : "none",
                      }}
                    >
                      <td style={{ padding: "13px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              border: "1px solid #e2e8f0",
                              background: "#f8fafc",
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
                              size={24}
                            />
                          </div>
                          <span style={{ fontWeight: 700, color: "#0f2340", fontSize: 14 }}>
                            {tool.name}
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: "13px 16px" }}>
                        {review ? (
                          <span
                            style={{
                              background: "#0f2340",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: 900,
                              padding: "3px 9px",
                              borderRadius: 6,
                            }}
                          >
                            {review.editorScore}
                          </span>
                        ) : (
                          <span style={{ color: "#94a3b8", fontSize: 13 }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "13px 16px", fontSize: 13, color: "#334155" }}>
                        ★ {tool.rating}{" "}
                        <span style={{ color: "#94a3b8" }}>({tool.reviewCount})</span>
                      </td>
                      <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 600, color: "#0f2340" }}>
                        {tool.pricingFrom}
                      </td>
                      <td style={{ padding: "13px 16px" }}>
                        <span
                          style={{
                            fontSize: 11,
                            background: "#f0fdf4",
                            color: "#16a34a",
                            border: "1px solid #bbf7d0",
                            borderRadius: 6,
                            padding: "2px 8px",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {bestFor}
                        </span>
                      </td>
                      <td style={{ padding: "13px 16px" }}>
                        <Link
                          href={`/tools/${tool.slug}`}
                          style={{
                            background: "#eff6ff",
                            color: "#1d6ce8",
                            fontSize: 12,
                            fontWeight: 600,
                            padding: "6px 12px",
                            borderRadius: 7,
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Review →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BROWSE BY CATEGORY ── */}
      <section style={{ background: "#f8fafc", padding: "56px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 6,
              }}
            >
              Browse by Use Case
            </div>
            <h2
              style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#0f2340", margin: 0 }}
            >
              What Are You Looking For?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              { icon: "📱", color: "#eff6ff", label: "Field Sales CRM", count: 7, href: "/tools?category=Field+Sales+CRM" },
              { icon: "🚪", color: "#f0fdf4", label: "D2D & Canvassing", count: 6, href: "/tools?category=D2D+Software" },
              { icon: "🗺️", color: "#fff7ed", label: "Territory Management", count: 5, href: "/tools?category=Territory+Management" },
              { icon: "📍", color: "#fdf4ff", label: "Route Planning", count: 5, href: "/tools?category=Route+Optimization" },
              { icon: "⚡", color: "#fffbeb", label: "Sales Engagement", count: 4, href: "/tools?category=Sales+Engagement" },
              { icon: "📊", color: "#f0f9ff", label: "Analytics & Reporting", count: 3, href: "/tools?category=Analytics" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    border: "1.5px solid #e2e8f0",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: cat.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0f2340" }}>{cat.label}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                      {cat.count} tools reviewed
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR COMPARISONS ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 6,
              }}
            >
              Side-by-Side
            </div>
            <h2
              style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#0f2340", margin: 0 }}
            >
              Popular Comparisons
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", margin: "4px 0 0" }}>
              Can&apos;t decide? We break it down for you.
            </p>
          </div>
          <Link
            href="/compare"
            style={{ fontSize: 13, color: "#1d6ce8", fontWeight: 600, textDecoration: "none" }}
          >
            All {comparisons.length}+ comparisons →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 12,
          }}
        >
          {popularComparisons.map((comp) => {
            const tool1 = getToolBySlug(comp.tool1);
            const tool2 = getToolBySlug(comp.tool2);
            if (!tool1 || !tool2) return null;
            return (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    border: "1.5px solid #e2e8f0",
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 4px",
                          overflow: "hidden",
                        }}
                      >
                        <ToolLogo
                          website={tool1.website}
                          name={tool1.name}
                          fallbackEmoji={tool1.logo}
                          size={24}
                        />
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#0f2340" }}>
                        {tool1.name}
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f1f5f9",
                        color: "#94a3b8",
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "3px 7px",
                        borderRadius: 5,
                      }}
                    >
                      VS
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 4px",
                          overflow: "hidden",
                        }}
                      >
                        <ToolLogo
                          website={tool2.website}
                          name={tool2.name}
                          fallbackEmoji={tool2.logo}
                          size={24}
                        />
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#0f2340" }}>
                        {tool2.name}
                      </div>
                    </div>
                  </div>
                  <span style={{ color: "#1d6ce8", fontSize: 18, flexShrink: 0 }}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── INDUSTRY STRIP ── */}
      <section style={{ background: "#f8fafc", padding: "56px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 6,
              }}
            >
              By Industry
            </div>
            <h2
              style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#0f2340", margin: 0 }}
            >
              Find Tools for Your Vertical
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {[
              { icon: "🏠", label: "Roofing & Siding", count: 8, href: "/industries/roofing" },
              { icon: "☀️", label: "Solar Sales", count: 7, href: "/industries/solar" },
              { icon: "📡", label: "Telecom & Internet", count: 6, href: "/industries/telecom" },
              { icon: "🐛", label: "Pest Control", count: 5, href: "/industries/pest-control" },
            ].map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #0f2340, #1a3a5c)",
                    borderRadius: 14,
                    padding: "20px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{ind.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{ind.label}</div>
                  <div style={{ fontSize: 12, color: "#5a86a8", marginTop: 3 }}>
                    {ind.count} tools reviewed
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(255,255,255,0.25)",
                      fontSize: 18,
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "56px 20px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1d6ce8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 10,
              }}
            >
              Frequently Asked
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 900,
                color: "#0f2340",
                lineHeight: 1.2,
                margin: "0 0 12px",
              }}
            >
              Everything You Need to Know About Field Sales Software
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.6, margin: "0 0 24px" }}>
              Our editorial team answers the most common questions from field sales managers and reps.
            </p>
            <Link
              href="/tools"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1d6ce8",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: 10,
                textDecoration: "none",
              }}
            >
              Browse All Reviews →
            </Link>
          </div>
          <FaqAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* ── ADVERTISE / PRICING TIERS ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #071525 0%, #0f2340 100%)",
          padding: "72px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(29,108,232,0.2)",
                border: "1px solid rgba(29,108,232,0.4)",
                color: "#93c5fd",
                fontSize: 11,
                fontWeight: 700,
                padding: "5px 16px",
                borderRadius: 20,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: 14,
              }}
            >
              For Software Vendors
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 8px",
              }}
            >
              Get Your Tool in Front of Field Sales Teams
            </h2>
            <p style={{ fontSize: 16, color: "#5a86a8", margin: 0 }}>
              Sales managers and D2D teams use FieldSalesTools.com to evaluate software for their teams.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {/* Free */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#5a86a8",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 12,
                }}
              >
                Free Listing
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", marginBottom: 8 }}>Free</div>
              <div style={{ fontSize: 14, color: "#5a86a8", marginBottom: 24 }}>
                Get listed in our directory. No credit card required.
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {["Basic listing in directory", "Company description & logo", "Pricing & feature info"].map(
                  (f) => (
                    <li key={f} style={{ fontSize: 14, color: "#94b8d4", display: "flex", gap: 10 }}>
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span> {f}
                    </li>
                  )
                )}
                {["Featured badge", "Homepage placement", "Newsletter mention"].map((f) => (
                  <li key={f} style={{ fontSize: 14, color: "#3a5a7a", display: "flex", gap: 10 }}>
                    <span style={{ flexShrink: 0 }}>–</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/advertise"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px",
                  borderRadius: 12,
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "#94b8d4",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Claim Free Listing
              </Link>
            </div>

            {/* Featured (most popular) */}
            <div
              style={{
                background: "rgba(29,108,232,0.12)",
                border: "1.5px solid #1d6ce8",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  color: "#78350f",
                  fontSize: 11,
                  fontWeight: 800,
                  padding: "4px 18px",
                  borderRadius: 20,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                ⭐ Most Popular
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#5a86a8",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 12,
                }}
              >
                Featured
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 8 }}>
                <sup style={{ fontSize: 22, verticalAlign: "top", marginTop: 8, display: "inline-block" }}>
                  $
                </sup>
                299
                <sub style={{ fontSize: 16, fontWeight: 400, color: "#5a86a8" }}>/month</sub>
              </div>
              <div style={{ fontSize: 14, color: "#5a86a8", marginBottom: 24 }}>
                Stand out in search results and category pages.
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "Everything in Free",
                  "Gold Featured badge on listing",
                  "Priority placement in category pages",
                  "Featured card on homepage (rotating)",
                  "Highlighted in all comparisons",
                  "Monthly traffic & click report",
                ].map((f) => (
                  <li key={f} style={{ fontSize: 14, color: "#94b8d4", display: "flex", gap: 10 }}>
                    <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/advertise"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px",
                  borderRadius: 12,
                  background: "#1d6ce8",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Get Featured →
              </Link>
            </div>

            {/* Premium */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#5a86a8",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 12,
                }}
              >
                Premium
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 8 }}>
                <sup style={{ fontSize: 22, verticalAlign: "top", marginTop: 8, display: "inline-block" }}>
                  $
                </sup>
                599
                <sub style={{ fontSize: 16, fontWeight: 400, color: "#5a86a8" }}>/month</sub>
              </div>
              <div style={{ fontSize: 14, color: "#5a86a8", marginBottom: 24 }}>
                Maximum visibility. Dedicated editorial spotlight.
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "Everything in Featured",
                  "Permanent homepage hero slot",
                  "Monthly newsletter mention (12k+ subs)",
                  "Dedicated Best For [Industry] page",
                  "Comparison page prominence",
                  "Quarterly editorial review update",
                  "Dedicated account manager",
                ].map((f) => (
                  <li key={f} style={{ fontSize: 14, color: "#94b8d4", display: "flex", gap: 10 }}>
                    <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/advertise"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: "#78350f",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Go Premium →
              </Link>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 28,
              fontSize: 13,
              color: "#3a5a7a",
            }}
          >
            All plans include a 14-day free trial. Cancel anytime. Questions?{" "}
            <a href="mailto:vendors@fieldsalestools.com" style={{ color: "#5a86a8" }}>
              vendors@fieldsalestools.com
            </a>
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{ background: "#0f2340", padding: "56px 20px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          {[
            { num: `${tools.length}+`, label: "Tools Reviewed", sub: "Independently tested" },
            { num: "2,800+", label: "User Reviews", sub: "Aggregated from G2 & Capterra" },
            { num: `${comparisons.length}+`, label: "Comparisons", sub: "Head-to-head breakdowns" },
            { num: "0", label: "Pay-to-Rank", sub: "100% editorial independence" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#fff" }}>{stat.num}</div>
              <div
                style={{ fontSize: 14, color: "#94b8d4", fontWeight: 700, marginTop: 4 }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: 13, color: "#5a86a8", marginTop: 2 }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
