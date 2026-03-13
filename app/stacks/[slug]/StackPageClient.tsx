// Server component — no "use client". All article content renders as HTML.
// Only TocHighlighter and FaqAccordion are client components.

import Link from "next/link";
import type { Stack, StackTool } from "../../../data/stacks";
import ToolLogo from "@/components/ToolLogo";
import TocHighlighter from "../../../components/TocHighlighter";
import FaqAccordion from "../../../components/FaqAccordion";

export default function StackPageContent({ stack }: { stack: Stack }) {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: stack.heroGradient,
          padding: "48px 20px 52px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <nav style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{stack.title}</span>
          </nav>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {stack.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginBottom: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {stack.category === "industry" ? stack.industry : stack.teamSize}
              </div>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(22px, 4vw, 40px)",
                  fontWeight: 900,
                  margin: "0 0 12px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                }}
              >
                {stack.headline}
              </h1>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: "6px 14px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                  }}
                >
                  <span style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>
                    {stack.totalCostLow}–{stack.totalCostHigh}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                    &nbsp;{stack.totalCostNote}
                  </span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                  {stack.tools.length} tools · Last updated {stack.lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px 80px",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <aside style={{ position: "sticky", top: 80 }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: "16px 12px",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#94a3b8",
                margin: "0 0 12px 10px",
              }}
            >
              On This Page
            </p>
            {/* TocHighlighter handles the active state client-side */}
            <TocHighlighter />

            <div
              style={{
                marginTop: 20,
                padding: "12px",
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
              }}
            >
              <p style={{ fontSize: 11, color: "#64748b", margin: "0 0 8px", lineHeight: 1.4 }}>
                Compare individual tools in detail:
              </p>
              <a
                href="/tools"
                style={{
                  display: "block",
                  background: "#1d6ce8",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "7px 10px",
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                FieldSalesTools.com →
              </a>
            </div>
          </div>
          <Link
            href="/stacks"
            style={{
              display: "block",
              marginTop: 12,
              fontSize: 13,
              color: "#64748b",
              textDecoration: "none",
              padding: "6px 10px",
              borderRadius: 6,
            }}
          >
            ← All stacks
          </Link>
        </aside>

        {/* Article — fully server-rendered */}
        <article style={{ minWidth: 0 }}>
          {/* Overview */}
          <section id="overview" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>Overview</h2>
            {stack.intro.split("\n\n").map((para, i) => (
              <p key={i} style={proseStyle}>{para}</p>
            ))}
            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: 10,
                padding: "16px 20px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 20 }}>🎯</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1d40af", marginBottom: 4 }}>
                  Who is this stack for?
                </div>
                <div style={{ fontSize: 14, color: "#1e40af", lineHeight: 1.5 }}>{stack.whoIsItFor}</div>
              </div>
            </div>
          </section>

          {/* Total Cost */}
          <section id="cost" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>Total Cost Per Rep</h2>
            <div
              style={{
                background: "#0f2340",
                borderRadius: 14,
                padding: "28px",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div>
                <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Estimated monthly cost
                </div>
                <div style={{ color: "#fff", fontSize: 44, fontWeight: 900, lineHeight: 1 }}>
                  {stack.totalCostLow}–{stack.totalCostHigh}
                </div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 6 }}>{stack.totalCostNote}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {stack.tools.map((tool) => (
                  <div key={tool.slug} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 24, textAlign: "center", display: "inline-flex", justifyContent: "center" }}><ToolLogo website={tool.website} name={tool.name} fallbackEmoji={tool.logo} size={20} /></span>
                    <span style={{ color: "#94a3b8", fontSize: 13, minWidth: 120 }}>{tool.name}</span>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{tool.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ ...proseStyle, fontSize: 13, color: "#94a3b8" }}>
              Prices based on annual billing as of {stack.lastUpdated}. Always verify directly with vendors.
            </p>
          </section>

          {/* Tools */}
          <section id="tools" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>The Stack: Tool-by-Tool Breakdown</h2>
            <p style={proseStyle}>
              Here's every tool in this stack — what role it plays, why it earns its spot, and exactly what it costs.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {stack.tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

          {/* Why it works */}
          <section id="why" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>Why This Combination Works</h2>
            {stack.whyThisStack.split("\n\n").map((para, i) => (
              <p key={i} style={proseStyle}>{para}</p>
            ))}
          </section>

          {/* Verdict */}
          <section id="verdict" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>Our Verdict</h2>
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderLeft: "4px solid #10b981",
                borderRadius: 10,
                padding: "20px 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 18 }}>✅</span>
                <span style={{ fontWeight: 800, fontSize: 15, color: "#065f46" }}>Recommended Stack</span>
              </div>
              {stack.verdict.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    ...proseStyle,
                    color: "#065f46",
                    marginBottom: i < stack.verdict.split("\n\n").length - 1 ? 12 : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* FAQ — client component for accordion, content still crawlable via JSON-LD */}
          <section id="faq" style={{ marginBottom: 56 }}>
            <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>
            <FaqAccordion faqs={stack.faqs} />
          </section>

          {/* Bottom CTA */}
          <div
            style={{
              background: "#0f2340",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 6 }}>
                Ready to compare individual tools?
              </div>
              <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>
                Deep-dive into pricing, reviews, and features for each tool in this stack.
              </div>
            </div>
            <a
              href="/tools"
              style={{
                background: "#1d6ce8",
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
                padding: "11px 22px",
                borderRadius: 9,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Visit FieldSalesTools.com →
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

// ─── ToolCard — server component ──────────────────────────────────────────────
function ToolCard({ tool }: { tool: StackTool }) {
  const stars = Math.round(tool.rating);

  return (
    <div
      className="tool-card"
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        overflow: "hidden",
        transition: "all 0.15s ease",
      }}
    >
      <div
        style={{
          background: "#f8fafc",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            background: "#fff",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            border: "1px solid #e2e8f0",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <ToolLogo website={tool.website} name={tool.name} fallbackEmoji={tool.logo} size={36} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: "#0f2340" }}>{tool.name}</span>
            <span
              style={{
                background: "#eff6ff",
                color: "#1d6ce8",
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 20,
                border: "1px solid #bfdbfe",
              }}
            >
              {tool.role}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
            <span style={{ color: "#f59e0b", fontSize: 12 }}>
              {"★".repeat(stars)}{"☆".repeat(5 - stars)}
            </span>
            <span style={{ color: "#94a3b8", fontSize: 12 }}>
              {tool.rating} ({tool.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: "#0f2340" }}>{tool.price}</div>
          {tool.priceNote && (
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{tool.priceNote}</div>
          )}
        </div>
      </div>

      <div style={{ padding: "18px 20px" }}>
        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: "0 0 16px" }}>
          {tool.why}
        </p>
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            Key Features
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tool.keyFeatures.map((f) => (
              <span
                key={f}
                style={{
                  background: "#f1f5f9",
                  color: "#475569",
                  fontSize: 12,
                  padding: "3px 9px",
                  borderRadius: 6,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Link
            href={tool.toolsUrl}
            style={{
              background: "#1d6ce8",
              color: "#fff",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 700,
              padding: "7px 14px",
              borderRadius: 7,
              display: "inline-block",
            }}
          >
            Full Review →
          </Link>
          <a
            href={`/api/go/${tool.slug}`}
            target="_blank"
            rel="nofollow sponsored noopener"
            style={{
              background: "#f1f5f9",
              color: "#475569",
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 600,
              padding: "7px 14px",
              borderRadius: 7,
              border: "1px solid #e2e8f0",
            }}
          >
            Visit Website ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────────────────
const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(18px, 2.5vw, 24px)",
  fontWeight: 800,
  color: "#0f2340",
  margin: "0 0 18px",
  letterSpacing: "-0.3px",
  paddingTop: 8,
  borderTop: "2px solid #f1f5f9",
};

const proseStyle: React.CSSProperties = {
  fontSize: 15,
  color: "#374151",
  lineHeight: 1.75,
  margin: "0 0 16px",
};
