import { notFound } from "next/navigation";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { getIndustry, getAllIndustrySlugs } from "@/data/industries";
import { tools } from "@/data/tools";
import { stacks } from "@/data/stacks";
import { bestForPages } from "@/data/best-for";
import { comparisons } from "@/data/comparisons";
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
    alternates: { canonical: `https://www.fieldsalestools.com/industries/${slug}` },
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `https://www.fieldsalestools.com/industries/${slug}`,
      siteName: "FieldSalesTools.com",
      images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ind.metaTitle,
      description: ind.metaDescription,
      images: ["https://www.fieldsalestools.com/og-image.png"],
    },
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

  // Related stacks for this industry
  const industryToolSlugs = industryTools.map((t) => t.slug);
  const relatedStacks = stacks.filter(
    (s) => s.industry?.toLowerCase() === ind.name.toLowerCase() || s.tools.some((t) => industryToolSlugs.includes(t.slug))
  ).slice(0, 4);

  // Related best-for guides
  const relatedBestFor = bestForPages.filter((bp) =>
    bp.tools.some((t) => industryToolSlugs.includes(t.slug))
  ).slice(0, 4);

  // Related comparisons between industry tools
  const relatedComparisons = comparisons.filter(
    (c) => industryToolSlugs.includes(c.tool1) && industryToolSlugs.includes(c.tool2)
  ).slice(0, 6);

  const pageUrl = `https://www.fieldsalestools.com/industries/${slug}`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fieldsalestools.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.fieldsalestools.com/industries" },
      { "@type": "ListItem", position: 3, name: ind.heroHeading, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

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
        <div style={{ display: "none" }}></div>

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
        <div style={{ display: "none" }}></div>

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

        {/* Related Resources */}
        {(relatedStacks.length > 0 || relatedBestFor.length > 0 || relatedComparisons.length > 0) && (
          <section className="bg-white rounded-2xl p-6 mb-10" style={{ border: "1px solid #e2e8f0" }}>
            <h2 className="text-lg font-black mb-5" style={{ color: "#0f2340" }}>Related Resources</h2>
            <div className="space-y-5">
              {relatedStacks.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>Tech Stacks</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedStacks.map((s) => (
                      <Link key={s.slug} href={`/stacks/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
                        {s.title}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedBestFor.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>Buyer&apos;s Guides</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedBestFor.map((bp) => (
                      <Link key={bp.slug} href={`/best/${bp.slug}`} className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#fae8ff", color: "#7e22ce", border: "1px solid #e9d5ff" }}>
                        {bp.title}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedComparisons.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>Head-to-Head Comparisons</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedComparisons.map((c) => (
                      <Link key={c.slug} href={`/compare/${c.slug}`} className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#f1f5f9", color: "#374151", border: "1px solid #e2e8f0" }}>
                        {c.title.replace(/ \(\d{4}\).*$/, "")}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

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


    </div>
  );
}
