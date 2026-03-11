"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { tools, categories, getFeaturedTools } from "@/data/tools";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = getFeaturedTools();

  const filteredTools = tools.filter((tool) =>
    activeCategory === "All" || tool.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 60%, #1d4e8a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(29,108,232,0.2)", color: "#93c5fd", border: "1px solid rgba(29,108,232,0.3)" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              The most complete directory for field sales professionals
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Find the Best{" "}
              <span style={{ color: "#60a5fa" }}>Field Sales &amp; D2D</span>
              <br />
              Software Tools
            </h1>
            <p className="text-base md:text-lg mb-10" style={{ color: "#94b8d4" }}>
              Compare SPOTIO, SalesRabbit, Badger Maps, and 7 more platforms.
              Honest reviews, real pricing, and side-by-side comparisons — all in one place.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Tools Listed", value: "20+" },
                { label: "Categories", value: "5" },
                { label: "Reviews", value: "2,800+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#6fa3c8" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Top leaderboard ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Featured / Top 3 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-black" style={{ color: "#0f2340" }}>
                🏆 Top Recommended Tools
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "#64748b" }}>
                The most widely-used platforms in field sales and D2D
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((tool, i) => (
              <ToolCard key={tool.slug} tool={tool} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Mid ad */}
        <div className="ad-placeholder w-full mb-10" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Full catalog */}
        <section id="all-tools">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-xl font-black" style={{ color: "#0f2340" }}>
                All Field Sales Tools
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "#64748b" }}>
                {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {/* Category filter */}
          <div id="categories" className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-sm font-medium px-4 py-1.5 rounded-full border cursor-pointer"
                style={{
                  backgroundColor: activeCategory === cat ? "#0f2340" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "#475569",
                  borderColor: activeCategory === cat ? "#0f2340" : "#e2e8f0",
                  transition: "all 0.15s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid + Sidebar */}
          <div className="flex gap-6 items-start">
            {/* Main grid */}
            <div className="flex-1 min-w-0">
              {filteredTools.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center" style={{ border: "1px solid #e2e8f0" }}>
                  <p className="text-lg font-bold" style={{ color: "#0f2340" }}>No tools found</p>
                  <p className="text-sm mt-1" style={{ color: "#64748b" }}>Try a different category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {filteredTools.map((tool, i) => (
                    <div key={tool.slug}>
                      <ToolCard tool={tool} rank={tools.indexOf(tool) + 1} />
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom in-content ad */}
              <div className="ad-placeholder w-full mt-8" style={{ height: "90px" }}>
                Advertisement — 728×90 Leaderboard
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-5 w-72 flex-shrink-0">
              <div className="ad-placeholder" style={{ height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
                Advertisement<br />300×250
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "#0f2340" }}>
                <h3 className="font-bold text-sm mb-1 text-white">Want to get listed?</h3>
                <p className="text-xs mb-3" style={{ color: "#94b8d4" }}>
                  Reach thousands of field sales professionals. Featured placements from $299/mo.
                </p>
                <a
                  href="/advertise"
                  className="block w-full text-center text-sm font-semibold py-2 rounded-lg text-white no-underline"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  Advertise With Us →
                </a>
              </div>

              <div className="ad-placeholder" style={{ height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
                Advertisement<br />300×250
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "#fff7ed", border: "1px solid #fed7aa" }}>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#92400e" }}>Vendor? Get Listed</h3>
                <p className="text-xs mb-3" style={{ color: "#b45309" }}>
                  Put your tool in front of thousands of field sales professionals.
                </p>
                <a
                  href="/submit"
                  className="block w-full text-center text-sm font-semibold py-2 rounded-lg no-underline text-white"
                  style={{ backgroundColor: "#f59e0b" }}
                >
                  Submit Your Tool →
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Trust section */}
        <section className="mt-14 mb-4">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}
          >
            <h2 className="text-2xl font-black text-white mb-3">Why Trust FieldSalesTools.com?</h2>
            <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: "#94b8d4" }}>
              A dedicated directory run by field sales professionals — not a marketing agency.
              Every review is based on real-world usage, independent research, and verified data.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "🔍", title: "Independent Reviews", desc: "Not paid to recommend specific tools. Rankings based on features, pricing, and user feedback." },
                { icon: "📊", title: "Current Data", desc: "Pricing, features, and company info updated regularly to reflect the market accurately." },
                { icon: "🏆", title: "Industry-Specific", desc: "Focused exclusively on D2D and field sales — not a generic software directory." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#7ca8c9" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
