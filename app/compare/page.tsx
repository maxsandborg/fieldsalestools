"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { tools } from "@/data/tools";
import { comparisons } from "@/data/comparisons";

const editorPicks = comparisons.slice(0, 6);

export default function ComparePage() {
  const router = useRouter();
  const [tool1, setTool1] = useState("");
  const [tool2, setTool2] = useState("");
  const [error, setError] = useState("");

  const handleCompare = () => {
    if (!tool1 || !tool2) { setError("Please select two tools to compare."); return; }
    if (tool1 === tool2) { setError("Please select two different tools."); return; }
    setError("");
    router.push(`/compare/${tool1}-vs-${tool2}`);
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
      <Header />
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Compare Any Two Tools</h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#94b8d4" }}>
            Pick any two platforms and get a side-by-side breakdown — pricing, features, ratings, and our verdict.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-10" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(15,35,64,0.07)" }}>
          <h2 className="text-base font-black mb-5 text-center" style={{ color: "#0f2340" }}>Select two tools to compare</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end mb-5">
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#64748b" }}>Tool A</label>
              <select value={tool1} onChange={(e) => { setTool1(e.target.value); setError(""); }} style={selectStyle}>
                <option value="">Select a tool…</option>
                {tool1Options.map((t) => (<option key={t.slug} value={t.slug}>{t.name}</option>))}
              </select>
            </div>
            <div className="flex items-center justify-center pb-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black" style={{ backgroundColor: "#0f2340", color: "#fff" }}>VS</div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "#64748b" }}>Tool B</label>
              <select value={tool2} onChange={(e) => { setTool2(e.target.value); setError(""); }} style={selectStyle}>
                <option value="">Select a tool…</option>
                {tool2Options.map((t) => (<option key={t.slug} value={t.slug}>{t.name}</option>))}
              </select>
            </div>
          </div>

          {(tool1 || tool2) && (
            <div className="flex items-center justify-center gap-3 mb-4">
              {[tool1, tool2].map((slug, i) => {
                const t = tools.find((x) => x.slug === slug);
                return (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#f0f6ff" }}>
                    <span className="text-lg">{t?.logo ?? "—"}</span>
                    <span className="text-sm font-bold" style={{ color: "#0f2340" }}>{t?.name ?? "—"}</span>
                  </div>
                );
              })}
            </div>
          )}

          {error && <p className="text-center text-sm mb-3" style={{ color: "#dc2626" }}>{error}</p>}

          <button
            onClick={handleCompare}
            disabled={!tool1 || !tool2 || tool1 === tool2}
            className="w-full py-3.5 rounded-xl font-black text-white text-sm"
            style={{ backgroundColor: "#1d6ce8", opacity: (!tool1 || !tool2 || tool1 === tool2) ? 0.45 : 1, cursor: (!tool1 || !tool2 || tool1 === tool2) ? "not-allowed" : "pointer" }}
          >
            Compare Now →
          </button>
        </div>

        <div>
          <h2 className="text-xl font-black mb-1" style={{ color: "#0f2340" }}>Editor&apos;s Comparisons</h2>
          <p className="text-sm mb-5" style={{ color: "#64748b" }}>Research-backed head-to-head breakdowns of the most popular tool pairs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {editorPicks.map((c) => {
              const t1 = tools.find((t) => t.slug === c.tool1);
              const t2 = tools.find((t) => t.slug === c.tool2);
              return (
                <Link key={c.slug} href={`/compare/${c.slug}`} className="no-underline">
                  <div className="bg-white rounded-xl p-5 h-full" style={{ border: "1px solid #e2e8f0" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{t1?.logo ?? "🔧"}</span>
                      <span className="text-xs font-black" style={{ color: "#94a3b8" }}>VS</span>
                      <span className="text-xl">{t2?.logo ?? "🔧"}</span>
                      <span className="text-sm font-bold ml-1" style={{ color: "#0f2340" }}>{c.title}</span>
                    </div>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#64748b" }}>{c.metaDescription}</p>
                    <span className="text-xs font-semibold" style={{ color: "#1d6ce8" }}>Read comparison →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
