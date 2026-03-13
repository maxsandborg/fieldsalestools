"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tools } from "@/data/tools";
import { comparisons } from "@/data/comparisons";
import ToolLogo from "@/components/ToolLogo";

// ── Helpers ─────────────────────────────────────────────────────────────────────
function getToolName(slug: string) {
  return tools.find((t) => t.slug === slug)?.name ?? slug;
}
function getToolLogo(slug: string) {
  return tools.find((t) => t.slug === slug)?.logo ?? "🔧";
}

/** All tool slugs that appear in at least one comparison, sorted by frequency */
function getToolsWithComparisons() {
  const counts: Record<string, number> = {};
  comparisons.forEach((c) => {
    counts[c.tool1] = (counts[c.tool1] ?? 0) + 1;
    counts[c.tool2] = (counts[c.tool2] ?? 0) + 1;
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([slug, count]) => ({ slug, count }));
}

// ── Featured / editorial picks — the 6 most popular matchups ────────────────
const editorPicks = comparisons.slice(0, 6);

// ─────────────────────────────────────────────────────────────────────────────────
export default function ComparePage() {
  const router = useRouter();
  const [tool1, setTool1] = useState("");
  const [tool2, setTool2] = useState("");
  const [error, setError] = useState("");
  const [filterTool, setFilterTool] = useState<string>("all");

  const toolsWithComparisons = useMemo(() => getToolsWithComparisons(), []);

  /** Filtered comparisons — show all or only comparisons involving a specific tool */
  const filteredComparisons = useMemo(() => {
    if (filterTool === "all") return comparisons;
    return comparisons.filter(
      (c) => c.tool1 === filterTool || c.tool2 === filterTool
    );
  }, [filterTool]);

  const handleCompare = () => {
    if (!tool1 || !tool2) { setError("Please select two tools to compare."); return; }
    if (tool1 === tool2) { setError("Please select two different tools."); return; }
    setError("");
    // Check if comparison exists in either direction
    const slug1 = `${tool1}-vs-${tool2}`;
    const slug2 = `${tool2}-vs-${tool1}`;
    const exists = comparisons.find((c) => c.slug === slug1 || c.slug === slug2);
    if (exists) {
      router.push(`/compare/${exists.slug}`);
    } else {
      router.push(`/compare/${slug1}`);
    }
  };

  const tool1Options = tools.filter((t) => t.slug !== tool2);
  const tool2Options = tools.filter((t) => t.slug !== tool1);

  const selectStyle = {
    border: "1.5px solid #d1d9e6",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "0.95rem",
    color: "#0f2340",
    backgroundColor: "#fff",
    cursor: "pointer",
    outline: "none",
    width: "100%",
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat" as const,
    backgroundPosition: "right 12px center",
    paddingRight: "40px",
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Compare Field Sales Tools
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#94b8d4" }}>
            {comparisons.length} head-to-head comparisons. Pick any two platforms for a side-by-side
            breakdown — pricing, features, ratings, and our verdict.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* ── Custom Compare Tool ────────────────────────────────────────────────── */}
        <div
          className="bg-white rounded-2xl p-6 md:p-8 mb-10"
          style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(15,35,64,0.07)" }}
        >
          <h2 className="text-base font-black mb-5 text-center" style={{ color: "#0f2340" }}>
            Build Your Own Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-5">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ color: "#64748b" }}
              >
                Tool A
              </label>
              <select
                value={tool1}
                onChange={(e) => { setTool1(e.target.value); setError(""); }}
                style={selectStyle}
              >
                <option value="">Select a tool…</option>
                {tool1Options.map((t) => (
                  <option key={t.slug} value={t.slug}>{t.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center pb-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
                style={{ backgroundColor: "#0f2340", color: "#fff" }}
              >
                VS
              </div>
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ color: "#64748b" }}
              >
                Tool B
              </label>
              <select
                value={tool2}
                onChange={(e) => { setTool2(e.target.value); setError(""); }}
                style={selectStyle}
              >
                <option value="">Select a tool…</option>
                {tool2Options.map((t) => (
                  <option key={t.slug} value={t.slug}>{t.name}</option>
                ))}
              </select>
            </div>
          </div>

          {(tool1 || tool2) && (
            <div className="flex items-center justify-center gap-3 mb-4">
              {[tool1, tool2].map((slug, i) => {
                const t = tools.find((x) => x.slug === slug);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{ backgroundColor: "#f0f6ff" }}
                  >
                    {t ? <ToolLogo website={t.website} name={t.name} fallbackEmoji={t.logo} size={24} /> : <span className="text-lg">—</span>}
                    <span className="text-sm font-bold" style={{ color: "#0f2340" }}>
                      {t?.name ?? "—"}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {error && (
            <p className="text-center text-sm mb-3" style={{ color: "#dc2626" }}>{error}</p>
          )}

          <button
            onClick={handleCompare}
            disabled={!tool1 || !tool2 || tool1 === tool2}
            className="w-full py-3.5 rounded-xl font-black text-white text-sm"
            style={{
              backgroundColor: "#1d6ce8",
              opacity: !tool1 || !tool2 || tool1 === tool2 ? 0.45 : 1,
              cursor: !tool1 || !tool2 || tool1 === tool2 ? "not-allowed" : "pointer",
            }}
          >
            Compare Now →
          </button>
        </div>

        {/* ── Editor's Picks ─────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="text-xl font-black mb-1" style={{ color: "#0f2340" }}>
            Most Popular Comparisons
          </h2>
          <p className="text-sm mb-5" style={{ color: "#64748b" }}>
            The matchups field sales teams search for the most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {editorPicks.map((c) => (
              <ComparisonCard key={c.slug} comparison={c} />
            ))}
          </div>
        </section>

        {/* ── Filter + All Comparisons ───────────────────────────────────────────── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-xl font-black" style={{ color: "#0f2340" }}>
                All Comparisons
              </h2>
              <p className="text-sm" style={{ color: "#64748b" }}>
                {filteredComparisons.length} of {comparisons.length} comparisons
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "#64748b" }}
              >
                Filter by tool:
              </label>
              <select
                value={filterTool}
                onChange={(e) => setFilterTool(e.target.value)}
                style={{
                  ...selectStyle,
                  width: "auto",
                  minWidth: 180,
                  padding: "8px 36px 8px 12px",
                  fontSize: "0.85rem",
                }}
              >
                <option value="all">All tools ({comparisons.length})</option>
                {toolsWithComparisons.map(({ slug, count }) => (
                  <option key={slug} value={slug}>
                    {getToolName(slug)} ({count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tool filter chips — quick access for top tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setFilterTool("all")}
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
              style={{
                backgroundColor: filterTool === "all" ? "#0f2340" : "#f0f6ff",
                color: filterTool === "all" ? "#fff" : "#1d6ce8",
                border: "none",
                cursor: "pointer",
              }}
            >
              All
            </button>
            {toolsWithComparisons.slice(0, 8).map(({ slug, count }) => (
              <button
                key={slug}
                onClick={() => setFilterTool(slug)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                style={{
                  backgroundColor: filterTool === slug ? "#0f2340" : "#f0f6ff",
                  color: filterTool === slug ? "#fff" : "#1d6ce8",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ToolLogo website={tools.find(t => t.slug === slug)?.website ?? ""} name={getToolName(slug)} fallbackEmoji={getToolLogo(slug)} size={16} /> {getToolName(slug)} ({count})
              </button>
            ))}
          </div>

          {/* Comparison grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredComparisons.map((c) => (
              <ComparisonCard key={c.slug} comparison={c} />
            ))}
          </div>

          {filteredComparisons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                No comparisons found for this filter. Try selecting a different tool or use the
                comparison builder above.
              </p>
            </div>
          )}
        </section>

        {/* ── Bottom CTA ─────────────────────────────────────────────────────────── */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 text-center"
          style={{ background: "#0f2340" }}
        >
          <h3 className="text-lg font-black text-white mb-2">
            Can&apos;t find your comparison?
          </h3>
          <p className="text-sm mb-5" style={{ color: "#94a3b8" }}>
            Use the tool selector above to compare any two platforms — even if we haven&apos;t
            written a dedicated comparison yet.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 rounded-xl text-sm font-black text-white"
            style={{ backgroundColor: "#1d6ce8", border: "none", cursor: "pointer" }}
          >
            Build Your Own Comparison ↑
          </button>
        </div>
      </main>
    </div>
  );
}

// ── Comparison Card ──────────────────────────────────────────────────────────────
function ComparisonCard({
  comparison: c,
}: {
  comparison: (typeof comparisons)[number];
}) {
  const t1 = tools.find((t) => t.slug === c.tool1);
  const t2 = tools.find((t) => t.slug === c.tool2);

  const winnerLabel =
    c.winnerOverall === "tool1"
      ? t1?.name
      : c.winnerOverall === "tool2"
        ? t2?.name
        : "Tie — depends on use case";

  const winnerColor =
    c.winnerOverall === "tie" ? "#64748b" : "#16a34a";

  return (
    <Link href={`/compare/${c.slug}`} className="no-underline">
      <div
        className="bg-white rounded-xl p-5 h-full flex flex-col"
        style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
      >
        {/* Tool logos + VS */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#f0f6ff" }}
          >
            {t1 ? <ToolLogo website={t1.website} name={t1.name} fallbackEmoji={t1.logo} size={28} /> : <span className="text-lg">🔧</span>}
          </div>
          <span
            className="text-[10px] font-black"
            style={{ color: "#94a3b8" }}
          >
            VS
          </span>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#f0f6ff" }}
          >
            {t2 ? <ToolLogo website={t2.website} name={t2.name} fallbackEmoji={t2.logo} size={28} /> : <span className="text-lg">🔧</span>}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-black mb-1" style={{ color: "#0f2340" }}>
          {t1?.name ?? c.tool1} vs {t2?.name ?? c.tool2}
        </h3>

        {/* Winner badge */}
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: c.winnerOverall === "tie" ? "#f1f5f9" : "#f0fdf4",
              color: winnerColor,
            }}
          >
            {c.winnerOverall === "tie" ? "⚖️" : "🏆"} {winnerLabel}
          </span>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#64748b" }}>
          <span>
            {t1?.name}: ★ {t1?.rating.toFixed(1)}
          </span>
          <span>·</span>
          <span>
            {t2?.name}: ★ {t2?.rating.toFixed(1)}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <span className="text-xs font-semibold" style={{ color: "#1d6ce8" }}>
            Read comparison →
          </span>
        </div>
      </div>
    </Link>
  );
}
