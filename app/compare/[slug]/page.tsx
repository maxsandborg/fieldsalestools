import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getComparison, getAllComparisonSlugs } from "@/data/comparisons";
import { getToolBySlug } from "@/data/tools";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getComparison(params.slug);
  if (!c) return { title: "Comparison Not Found" };
  return {
    title: c.title + " | FieldSalesTools.com",
    description: c.metaDescription,
  };
}

export default function ComparisonPage({ params }: Props) {
  const c = getComparison(params.slug);
  if (!c) notFound();

  const tool1 = getToolBySlug(c.tool1);
  const tool2 = getToolBySlug(c.tool2);

  const winnerName =
    c.winnerOverall === "tool1"
      ? c.tool1.charAt(0).toUpperCase() + c.tool1.slice(1)
      : c.winnerOverall === "tool2"
      ? c.tool2.charAt(0).toUpperCase() + c.tool2.slice(1)
      : null;

  const tool1Name = tool1?.name ?? c.tool1;
  const tool2Name = tool2?.name ?? c.tool2;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#94b8d4" }}>
            Tool Comparison
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{c.title}</h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            {c.metaDescription}
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Top ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Tool overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { tool: tool1, name: tool1Name, bestFor: c.bestFor1, side: "tool1" as const },
            { tool: tool2, name: tool2Name, bestFor: c.bestFor2, side: "tool2" as const },
          ].map(({ tool, name, bestFor, side }) => (
            <div
              key={side}
              className="bg-white rounded-2xl p-6"
              style={{
                border: c.winnerOverall === side ? "2px solid #1d6ce8" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "#f0f6ff" }}
                >
                  {tool?.logo ?? "🔧"}
                </div>
                <div>
                  <h2 className="font-black text-lg" style={{ color: "#0f2340" }}>
                    {name}
                  </h2>
                  {c.winnerOverall === side && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}
                    >
                      ✓ Our Pick
                    </span>
                  )}
                </div>
              </div>

              {tool && (
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-bold" style={{ color: "#0f2340" }}>{tool.rating}</span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>({tool.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#475569" }}>
                    From {tool.pricingFrom}
                  </span>
                </div>
              )}

              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                <strong>Best for:</strong> {bestFor}
              </p>

              {tool && (
                <a
                  href={tool.affiliateUrl ?? tool.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center text-sm font-semibold py-2.5 rounded-lg text-white no-underline"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  Visit {name} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <section className="bg-white rounded-2xl p-6 mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-lg font-black mb-3" style={{ color: "#0f2340" }}>Overview</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{c.summary}</p>
        </section>

        {/* Differences table */}
        <section className="bg-white rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <div className="px-6 py-4" style={{ borderBottom: "1px solid #e2e8f0" }}>
            <h2 className="text-lg font-black" style={{ color: "#0f2340" }}>Side-by-Side Comparison</h2>
          </div>

          {/* Table header */}
          <div
            className="grid grid-cols-3 px-6 py-3 text-xs font-bold uppercase tracking-wide"
            style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#64748b" }}
          >
            <div>Feature</div>
            <div className="text-center">{tool1Name}</div>
            <div className="text-center">{tool2Name}</div>
          </div>

          {c.differences.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 px-6 py-4 text-sm"
              style={{
                borderBottom: i < c.differences.length - 1 ? "1px solid #f1f5f9" : "none",
                backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc",
              }}
            >
              <div className="font-semibold" style={{ color: "#374151" }}>{row.label}</div>
              <div className="text-center" style={{ color: "#475569" }}>{row.tool1}</div>
              <div className="text-center" style={{ color: "#475569" }}>{row.tool2}</div>
            </div>
          ))}
        </section>

        {/* Mid ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Verdict */}
        <section
          className="rounded-2xl p-6 mb-8"
          style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏆</span>
            <h2 className="text-lg font-black text-white">
              {c.winnerOverall === "tie" ? "Verdict: It's a Tie" : `Verdict: ${c.winnerOverall === "tool1" ? tool1Name : tool2Name} Wins`}
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#94b8d4" }}>{c.verdict}</p>
          <p className="text-xs font-semibold" style={{ color: "#60a5fa" }}>{c.winnerReason}</p>
        </section>

        {/* CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { tool: tool1, name: tool1Name, bestFor: c.bestFor1 },
            { tool: tool2, name: tool2Name, bestFor: c.bestFor2 },
          ].map(({ tool, name, bestFor }) =>
            tool ? (
              <div
                key={tool.slug}
                className="bg-white rounded-2xl p-5"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <h3 className="font-black text-base mb-1" style={{ color: "#0f2340" }}>
                  Choose {name} if…
                </h3>
                <p className="text-sm mb-4" style={{ color: "#64748b" }}>{bestFor}</p>
                <div className="flex gap-2">
                  <a
                    href={tool.affiliateUrl ?? tool.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 text-center text-sm font-semibold py-2 rounded-lg text-white no-underline"
                    style={{ backgroundColor: "#1d6ce8" }}
                  >
                    Try {name}
                  </a>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="flex-1 text-center text-sm font-semibold py-2 rounded-lg no-underline"
                    style={{ backgroundColor: "#f1f5f9", color: "#0f2340" }}
                  >
                    Full Review
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Back to comparisons */}
        <div className="text-center mb-4">
          <Link
            href="/compare"
            className="text-sm font-semibold no-underline"
            style={{ color: "#1d6ce8" }}
          >
            ← See All Comparisons
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
