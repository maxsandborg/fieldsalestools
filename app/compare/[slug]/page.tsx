import { notFound } from "next/navigation";
import Link from "next/link";
import { getComparison, getAllComparisonSlugs } from "@/data/comparisons";
import { getToolBySlug, tools } from "@/data/tools";
import type { Metadata } from "next";
import AffiliateBanner from "@/components/AffiliateBanner";
import AuthorByline from "@/components/AuthorByline";

// Parse slug like "spotio-vs-salesrabbit" → ["spotio", "salesrabbit"]
function parseSlugs(slug: string): [string, string] | null {
  const idx = slug.indexOf("-vs-");
  if (idx === -1) return null;
  const s1 = slug.slice(0, idx);
  const s2 = slug.slice(idx + 4);
  return [s1, s2];
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // Try pre-written comparison first
  const c = getComparison(slug) ?? getComparison(
    (() => { const p = parseSlugs(slug); return p ? `${p[1]}-vs-${p[0]}` : ""; })()
  );
  if (c) return { title: c.title + " | FieldSalesTools.com", description: c.metaDescription, alternates: { canonical: `https://www.fieldsalestools.com/compare/${slug}` } };

  const parsed = parseSlugs(slug);
  if (!parsed) return { title: "Comparison Not Found" };
  const [s1, s2] = parsed;
  const t1 = getToolBySlug(s1);
  const t2 = getToolBySlug(s2);
  if (!t1 || !t2) return { title: "Comparison Not Found" };
  return {
    title: `${t1.name} vs ${t2.name} (${new Date().getFullYear()}) | FieldSalesTools.com`,
    description: `${t1.name} vs ${t2.name} — compare pricing, features, ratings, and use cases for field sales teams.`,
    alternates: { canonical: `https://www.fieldsalestools.com/compare/${slug}` },
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // 1. Try exact match
  let c = getComparison(slug);
  // 2. Try reversed slug
  if (!c) {
    const parsed = parseSlugs(slug);
    if (parsed) c = getComparison(`${parsed[1]}-vs-${parsed[0]}`);
  }

  const parsed = parseSlugs(slug);
  if (!parsed) notFound();
  const [slug1, slug2] = parsed;

  const tool1 = getToolBySlug(slug1);
  const tool2 = getToolBySlug(slug2);
  if (!tool1 || !tool2) notFound();

  const tool1Name = tool1.name;
  const tool2Name = tool2.name;
  const isEditorPick = !!c;

  // Auto-generate differences from tools.ts data if no pre-written comparison
  const autoDifferences = [
    { label: "Rating", tool1: `${tool1.rating}/5 (${tool1.reviewCount.toLocaleString()} reviews)`, tool2: `${tool2.rating}/5 (${tool2.reviewCount.toLocaleString()} reviews)` },
    { label: "Starting Price", tool1: tool1.pricingFrom, tool2: tool2.pricingFrom },
    { label: "Pricing Model", tool1: tool1.pricingModel, tool2: tool2.pricingModel },
    { label: "Company Size", tool1: tool1.companySize.join(", "), tool2: tool2.companySize.join(", ") },
    { label: "Founded", tool1: tool1.founded, tool2: tool2.founded },
    { label: "Headquarters", tool1: tool1.headquartered, tool2: tool2.headquartered },
    { label: "User Base", tool1: tool1.userBase, tool2: tool2.userBase },
    { label: "Platforms", tool1: tool1.platforms.join(", "), tool2: tool2.platforms.join(", ") },
    { label: "Top Categories", tool1: tool1.categories.slice(0, 2).join(", "), tool2: tool2.categories.slice(0, 2).join(", ") },
    { label: "Industries Served", tool1: tool1.industries.slice(0, 3).join(", "), tool2: tool2.industries.slice(0, 3).join(", ") },
  ];

  const differences = c ? c.differences : autoDifferences;

  // Determine winner for auto-comparisons
  const autoWinner = tool1.rating > tool2.rating ? "tool1" : tool2.rating > tool1.rating ? "tool2" : "tie";
  const winnerOverall = c ? c.winnerOverall : autoWinner;
  const winnerName = winnerOverall === "tool1" ? tool1Name : winnerOverall === "tool2" ? tool2Name : null;

  const title = c ? c.title : `${tool1Name} vs ${tool2Name} (${new Date().getFullYear()})`;
  const metaDesc = c ? c.metaDescription : `${tool1Name} vs ${tool2Name} — compare pricing, features, ratings, and use cases.`;
  const summary = c ? c.summary : `${tool1Name} and ${tool2Name} are both field sales platforms worth considering. Here's how they compare across the key dimensions that matter to sales teams.`;
  const bestFor1 = c ? c.bestFor1 : tool1.pros[0] ?? `${tool1Name} users`;
  const bestFor2 = c ? c.bestFor2 : tool2.pros[0] ?? `${tool2Name} users`;
  const verdict = c ? c.verdict : `Based on ratings and features, ${winnerName ?? "both tools"} ${winnerOverall === "tie" ? "are evenly matched" : "has the edge"} — but the right choice depends on your team's specific workflow and budget.`;

  // JSON-LD: ComparisonPage schema with both SoftwareApplications + BreadcrumbList
  const compareSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": title,
        "description": metaDesc,
        "url": `https://www.fieldsalestools.com/compare/${slug}`,
        "dateModified": "2026-03-01",
        "about": [
          {
            "@type": "SoftwareApplication",
            "name": tool1Name,
            "url": `https://www.fieldsalestools.com/tools/${slug1}`,
            "applicationCategory": "BusinessApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": tool1.rating.toString(),
              "reviewCount": tool1.reviewCount.toString(),
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          {
            "@type": "SoftwareApplication",
            "name": tool2Name,
            "url": `https://www.fieldsalestools.com/tools/${slug2}`,
            "applicationCategory": "BusinessApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": tool2.rating.toString(),
              "reviewCount": tool2.reviewCount.toString(),
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fieldsalestools.com" },
          { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.fieldsalestools.com/compare" },
          { "@type": "ListItem", "position": 3, "name": `${tool1Name} vs ${tool2Name}`, "item": `https://www.fieldsalestools.com/compare/${slug}` }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareSchema) }}
      />


      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          {isEditorPick && (
            <div className="mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#1d6ce8", color: "#fff" }}>
                ✦ Editor&apos;s Comparison
              </span>
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">{title}</h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>{metaDesc}</p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* FTC Affiliate Disclosure */}
        <AffiliateBanner />

        {/* Author byline */}
        <AuthorByline variant="compact" lastUpdated="March 2026" />

        <div style={{ display: "none" }}></div>

        {/* Tool overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {([
            { tool: tool1, name: tool1Name, bestFor: bestFor1, side: "tool1" as const },
            { tool: tool2, name: tool2Name, bestFor: bestFor2, side: "tool2" as const },
          ]).map(({ tool, name, bestFor, side }) => (
            <div key={side} className="bg-white rounded-2xl p-6" style={{ border: winnerOverall === side ? "2px solid #1d6ce8" : "1px solid #e2e8f0" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: "#f0f6ff" }}>
                  {tool.logo}
                </div>
                <div>
                  <h2 className="font-black text-lg" style={{ color: "#0f2340" }}>{name}</h2>
                  {winnerOverall === side && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>✓ Our Pick</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm font-bold" style={{ color: "#0f2340" }}>{tool.rating}</span>
                  <span className="text-xs" style={{ color: "#94a3b8" }}>({tool.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: "#475569" }}>From {tool.pricingFrom}</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                <strong>Best for:</strong> {bestFor}
              </p>
              <a href={`/api/go/${tool.slug}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full text-center text-sm font-semibold py-2.5 rounded-lg text-white no-underline" style={{ backgroundColor: "#1d6ce8" }}>
                Visit {name} →
              </a>
            </div>
          ))}
        </div>

        {/* Summary */}
        <section className="bg-white rounded-2xl p-6 mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-lg font-black mb-3" style={{ color: "#0f2340" }}>Overview</h2>
          {summary.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "#475569" }}>{para}</p>
          ))}
        </section>

        {/* Differences table */}
        <section className="bg-white rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <div className="px-6 py-4" style={{ borderBottom: "1px solid #e2e8f0" }}>
            <h2 className="text-lg font-black" style={{ color: "#0f2340" }}>Side-by-Side Comparison</h2>
          </div>
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-bold uppercase tracking-wide" style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#64748b" }}>
            <div>Feature</div>
            <div className="text-center">{tool1Name}</div>
            <div className="text-center">{tool2Name}</div>
          </div>
          {differences.map((row, i) => (
            <div key={row.label} className="grid grid-cols-3 px-6 py-4 text-sm" style={{ borderBottom: i < differences.length - 1 ? "1px solid #f1f5f9" : "none", backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
              <div className="font-semibold" style={{ color: "#374151" }}>{row.label}</div>
              <div className="text-center" style={{ color: "#475569" }}>{row.tool1}</div>
              <div className="text-center" style={{ color: "#475569" }}>{row.tool2}</div>
            </div>
          ))}
        </section>

        {/* Pros/Cons if no pre-written comparison */}
        {!isEditorPick && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              { tool: tool1, name: tool1Name },
              { tool: tool2, name: tool2Name },
            ].map(({ tool, name }) => (
              <div key={tool.slug} className="bg-white rounded-2xl p-5" style={{ border: "1px solid #e2e8f0" }}>
                <h3 className="font-black text-base mb-3" style={{ color: "#0f2340" }}>{name} — Pros & Cons</h3>
                <div className="mb-3">
                  <p className="text-xs font-bold mb-1.5 uppercase tracking-wide" style={{ color: "#16a34a" }}>Pros</p>
                  {tool.pros.slice(0, 3).map((p) => (
                    <div key={p} className="flex gap-2 mb-1">
                      <span style={{ color: "#16a34a" }}>✓</span>
                      <span className="text-xs" style={{ color: "#374151" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold mb-1.5 uppercase tracking-wide" style={{ color: "#dc2626" }}>Cons</p>
                  {tool.cons.slice(0, 3).map((p) => (
                    <div key={p} className="flex gap-2 mb-1">
                      <span style={{ color: "#dc2626" }}>✗</span>
                      <span className="text-xs" style={{ color: "#374151" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "none" }}></div>

        {/* Verdict */}
        <section className="rounded-2xl p-6 mb-8" style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏆</span>
            <h2 className="text-lg font-black text-white">
              {winnerOverall === "tie" ? "Verdict: Too close to call" : `Verdict: ${winnerName} Wins`}
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#94b8d4" }}>{verdict}</p>
          {c?.winnerReason && (
            <p className="text-xs font-semibold mt-3" style={{ color: "#60a5fa" }}>{c.winnerReason}</p>
          )}
        </section>

        {/* CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { tool: tool1, name: tool1Name, bestFor: bestFor1 },
            { tool: tool2, name: tool2Name, bestFor: bestFor2 },
          ].map(({ tool, name, bestFor }) => (
            <div key={tool.slug} className="bg-white rounded-2xl p-5" style={{ border: "1px solid #e2e8f0" }}>
              <h3 className="font-black text-base mb-1" style={{ color: "#0f2340" }}>Choose {name} if…</h3>
              <p className="text-sm mb-4" style={{ color: "#64748b" }}>{bestFor}</p>
              <div className="flex gap-2">
                <a href={`/api/go/${tool.slug}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="flex-1 text-center text-sm font-semibold py-2 rounded-lg text-white no-underline" style={{ backgroundColor: "#1d6ce8" }}>
                  Try {name}
                </a>
                <Link href={`/tools/${tool.slug}`} className="flex-1 text-center text-sm font-semibold py-2 rounded-lg no-underline" style={{ backgroundColor: "#f1f5f9", color: "#0f2340" }}>
                  Full Review
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Compare another */}
        <div className="text-center">
          <Link href="/compare" className="text-sm font-semibold no-underline" style={{ color: "#1d6ce8" }}>
            ← Compare other tools
          </Link>
        </div>

        {/* Author byline — full card at end */}
        <AuthorByline variant="full" lastUpdated="March 2026" />

      </main>

    </div>
  );
}
