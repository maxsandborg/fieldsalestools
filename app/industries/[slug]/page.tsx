import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { getIndustry, getAllIndustrySlugs } from "@/data/industries";
import { tools } from "@/data/tools";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry Not Found" };
  return {
    title: ind.metaTitle,
    description: ind.metaDescription,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  // Get tools that serve this industry
  const industryTools = tools.filter((t) =>
    t.industries.includes(ind.industryKey)
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#94b8d4" }}>
            Industry Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            {ind.heroHeading}
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            {ind.heroSubheading}
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Top ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-lg font-black mb-3" style={{ color: "#0f2340" }}>
            Field Sales in {ind.name}
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>{ind.intro}</p>
          <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{ind.whyFieldSales}</p>
        </section>

        {/* Tools for this industry */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-xl font-black" style={{ color: "#0f2340" }}>
              Top Tools for {ind.name}
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "#64748b" }}>
              {industryTools.length} platform{industryTools.length !== 1 ? "s" : ""} built for {ind.name.toLowerCase()} sales teams
            </p>
          </div>
          {industryTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {industryTools.map((tool, i) => (
                <ToolCard key={tool.slug} tool={tool} rank={i + 1} />
              ))}
            </div>
          ) : (
            <div
              className="bg-white rounded-xl p-10 text-center"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <p className="text-base font-bold" style={{ color: "#0f2340" }}>
                No tools listed yet for this industry
              </p>
              <p className="text-sm mt-1" style={{ color: "#64748b" }}>
                <Link href="/" className="no-underline" style={{ color: "#1d6ce8" }}>
                  Browse all tools →
                </Link>
              </p>
            </div>
          )}
        </section>

        {/* Mid ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90 Leaderboard
        </div>

        {/* Top Features */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-5" style={{ color: "#0f2340" }}>
            Key Features to Look For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ind.topFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white rounded-xl p-5"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{feat.icon}</span>
                  <h3 className="font-bold text-sm" style={{ color: "#0f2340" }}>
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-5" style={{ color: "#0f2340" }}>
            Buying Guide: Questions to Ask
          </h2>
          <div className="flex flex-col gap-4">
            {ind.buyingGuide.map((item) => (
              <div
                key={item.question}
                className="bg-white rounded-xl p-5"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0f2340" }}>
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to industries */}
        <div className="text-center mb-4">
          <Link
            href="/industries"
            className="text-sm font-semibold no-underline"
            style={{ color: "#1d6ce8" }}
          >
            ← All Industries
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
