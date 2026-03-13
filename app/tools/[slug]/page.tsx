import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug, getAllSlugs, tools } from "@/data/tools";
import { getReview, reviewedSlugs } from "@/data/reviews";
import { comparisons } from "@/data/comparisons";
import { industries } from "@/data/industries";
import { stacks } from "@/data/stacks";
import { bestForPages } from "@/data/best-for";
import ToolLogo from "@/components/ToolLogo";
import AffiliateBanner from "@/components/AffiliateBanner";
import AuthorByline from "@/components/AuthorByline";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const toolTitle = `${tool.name} Review (2026) | FieldSalesTools.com`;
  const toolDesc = `${tool.name} review: pricing, features, pros & cons. Is it right for your field sales team? Compare alternatives.`;
  return {
    title: toolTitle,
    description: toolDesc,
    alternates: { canonical: `https://www.fieldsalestools.com/tools/${tool.slug}` },
    openGraph: {
      title: toolTitle,
      description: toolDesc,
      url: `https://www.fieldsalestools.com/tools/${tool.slug}`,
      siteName: "FieldSalesTools.com",
      images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: toolTitle,
      description: toolDesc,
      images: ["https://www.fieldsalestools.com/og-image.png"],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="w-5 h-5" fill="#f59e0b" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {half && (
        <svg className="w-5 h-5" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="hg">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="w-5 h-5" fill="#e2e8f0" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const review = getReview(slug);

  const related = tools.filter(
    (t) =>
      t.slug !== tool.slug &&
      t.categories.some((c) => tool.categories.includes(c))
  ).slice(0, 3);

  // Internal linking helpers
  const hasAlternativesPage = reviewedSlugs.includes(tool.slug);
  const relatedComparisons = comparisons.filter(
    (c) => c.tool1 === tool.slug || c.tool2 === tool.slug
  );
  const toolIndustryPages = industries.filter((ind) =>
    tool.industries.includes(ind.industryKey)
  );
  const toolStacks = stacks.filter((s) =>
    s.tools.some((t) => t.slug === tool.slug)
  );
  const toolBestFor = bestForPages.filter((bp) =>
    bp.tools.some((t) => t.slug === tool.slug)
  );

  // FAQ generation from existing tool data
  const hasFree = tool.pricing.some(
    (t) => t.price === "Free" || t.price === "$0" || t.price.toLowerCase().includes("free")
  );
  const hasMobileApp = tool.platforms.some(
    (p) => p.toLowerCase().includes("ios") || p.toLowerCase().includes("android")
  );
  const faqs: { question: string; answer: string }[] = [
    {
      question: `Is ${tool.name} free?`,
      answer: hasFree
        ? `Yes, ${tool.name} offers a free plan. Paid plans start from ${tool.pricingFrom}.`
        : `${tool.name} does not offer a free plan. Pricing starts from ${tool.pricingFrom} (${tool.pricingModel}). There is no permanent free tier, though a demo or trial may be available.`,
    },
    {
      question: `How much does ${tool.name} cost?`,
      answer: `${tool.name} pricing starts from ${tool.pricingFrom}. The billing model is ${tool.pricingModel}. ${
        tool.pricing.filter((t) => t.price !== "Custom").length > 0
          ? `Plans include: ${tool.pricing.map((t) => `${t.name} at ${t.price}${t.period ? " " + t.period : ""}`).join("; ")}.`
          : "Enterprise pricing is available on request."
      }`,
    },
    {
      question: `Does ${tool.name} have a mobile app?`,
      answer: hasMobileApp
        ? `Yes, ${tool.name} has a mobile app available on ${tool.platforms.filter((p) => p.toLowerCase().includes("ios") || p.toLowerCase().includes("android")).join(" and ")}. It is also accessible via ${tool.platforms.filter((p) => !p.toLowerCase().includes("ios") && !p.toLowerCase().includes("android")).join(", ") || "web browser"}.`
        : `${tool.name} is accessible via ${tool.platforms.join(", ")}. There is no dedicated iOS or Android app.`,
    },
    ...(tool.industries.length > 0
      ? [
          {
            question: `What industries is ${tool.name} best for?`,
            answer: `${tool.name} is most commonly used in ${tool.industries.slice(0, 5).join(", ")}${tool.industries.length > 5 ? ` and ${tool.industries.length - 5} other industries` : ""}. It is particularly suited for ${tool.companySize.join(" and ")} companies.`,
          },
        ]
      : []),
    ...(tool.integrations.length > 0
      ? [
          {
            question: `What does ${tool.name} integrate with?`,
            answer: `${tool.name} integrates with ${tool.integrations.slice(0, 6).join(", ")}${tool.integrations.length > 6 ? `, and ${tool.integrations.length - 6} more tools` : ""}. Most integrations are available on paid plans.`,
          },
        ]
      : []),
  ];

  // Parse numeric price from pricingFrom (e.g. "$25/user/month" → 25)
  const priceMatch = tool.pricingFrom.match(/\$(\d+)/);
  const numericPrice = priceMatch ? priceMatch[1] : null;

  const toolSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.description,
        "url": `https://www.fieldsalestools.com/tools/${tool.slug}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": tool.platforms.join(", "),
        "dateModified": "2026-03-01",
        ...(numericPrice && {
          "offers": {
            "@type": "Offer",
            "price": numericPrice,
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/MinimumAdvertisedPrice",
              "unitText": "per user per month"
            }
          }
        }),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": tool.rating,
          "reviewCount": tool.reviewCount,
          "bestRating": 5,
          "worstRating": 1
        },
        ...(review && {
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.editorScore,
              "bestRating": 10,
              "worstRating": 1
            },
            "author": {
              "@type": "Organization",
              "name": "FieldSalesTools.com Editorial Team",
              "url": "https://www.fieldsalestools.com"
            },
            "reviewBody": review.reviewBody[0],
            "datePublished": "2026-03-01"
          }
        })
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.fieldsalestools.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "All Tools",
            "item": "https://www.fieldsalestools.com/tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": tool.name,
            "item": `https://www.fieldsalestools.com/tools/${tool.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />


      {/* Tool hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "#6fa3c8" }}>
            <Link href="/" className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>Home</Link>
            <span>/</span>
            <Link href="/tools" className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>Tools</Link>
            <span>/</span>
            <span className="text-white">{tool.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.95)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px" }}
                >
                  <ToolLogo
                    website={tool.website}
                    name={tool.name}
                    fallbackEmoji={tool.logo}
                    size={52}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-black text-white">{tool.name}</h1>
                    {tool.badgeText && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: "#f59e0b" }}
                      >
                        {tool.badgeText}
                      </span>
                    )}
                    {tool.featured && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: "#1d6ce8" }}
                      >
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-0.5" style={{ color: "#94b8d4" }}>{tool.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <StarRating rating={tool.rating} />
                  <span className="font-bold text-white text-lg">{tool.rating.toFixed(1)}</span>
                  <span className="text-sm" style={{ color: "#6fa3c8" }}>
                    ({tool.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tool.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ backgroundColor: "rgba(29,108,232,0.25)", color: "#93c5fd" }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div
              className="rounded-2xl p-6 flex-shrink-0 w-full md:w-72"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <div className="mb-1">
                <span className="text-xs" style={{ color: "#94b8d4" }}>Starting from</span>
                <p className="text-xl font-black text-white">{tool.pricingFrom}</p>
                <p className="text-xs mt-0.5" style={{ color: "#6fa3c8" }}>{tool.pricingModel}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-4">
                {tool.platforms.map((p) => (
                  <span key={p} className="text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#c8dff0" }}>
                    {p}
                  </span>
                ))}
              </div>
              <a
                href={`/api/go/${tool.slug}`}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="block w-full text-center text-sm font-bold py-3 rounded-xl no-underline text-white mb-3"
                style={{ backgroundColor: "#1d6ce8" }}
              >
                Visit {tool.name} →
              </a>
              <p className="text-center text-xs" style={{ color: "#4a6a8a" }}>
                External link — opens {tool.name}&apos;s official site
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* FTC Affiliate Disclosure */}
        <AffiliateBanner />

        {/* Author byline */}
        <AuthorByline variant="compact" lastUpdated="March 2026" />

        {/* Top leaderboard ad */}
        <div className="ad-placeholder w-full mb-8" style={{ display: "none",  height: "90px" }}>
          
        </div>

        <div className="flex gap-8 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Overview */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-3" style={{ color: "#0f2340" }}>Overview</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                {tool.description}
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5" style={{ borderTop: "1px solid #f1f5f9" }}>
                {[
                  { label: "Founded", value: tool.founded },
                  { label: "Headquarters", value: tool.headquartered },
                  { label: "User Base", value: tool.userBase },
                  { label: "Platforms", value: tool.platforms.join(", ") },
                ].map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#94a3b8" }}>
                      {fact.label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "#1a1f36" }}>
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial Review — shown only for reviewed tools */}
            {review && (
              <>
                {/* Editor score banner */}
                <section className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0 text-center">
                      <div className="text-5xl font-black text-white">{review.editorScore}</div>
                      <div className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: "#6fa3c8" }}>Editor Score</div>
                      <div className="text-xs mt-0.5" style={{ color: "#4a6a8a" }}>out of 10</div>
                    </div>
                    <div className="flex-1" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "1.5rem" }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6fa3c8" }}>Editor&apos;s Verdict</p>
                      <p className="text-white font-medium leading-relaxed">&ldquo;{review.editorVerdict}&rdquo;</p>
                      <p className="text-xs mt-2" style={{ color: "#4a6a8a" }}>Last tested: {review.lastTested} · FieldSalesTools.com Editorial Team</p>
                    </div>
                  </div>
                </section>

                {/* Full review */}
                <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
                  <h2 className="text-lg font-black mb-5" style={{ color: "#0f2340" }}>Full Review</h2>
                  <div className="space-y-4">
                    {review.reviewBody.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed" style={{ color: "#475569" }}>{para}</p>
                    ))}
                  </div>

                  {/* Who should use / avoid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6" style={{ borderTop: "1px solid #f1f5f9" }}>
                    <div>
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#16a34a" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Who Should Use {tool.name}
                      </h3>
                      <ul className="space-y-2">
                        {review.whoShouldUse.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#dc2626" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Who Should Avoid {tool.name}
                      </h3>
                      <ul className="space-y-2">
                        {review.whoShouldAvoid.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                            <span className="flex-shrink-0 mt-0.5" style={{ color: "#dc2626" }}>✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom line */}
                  <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: "#f0f6ff", border: "1px solid #dbeafe" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#1d6ce8" }}>Bottom Line</p>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: "#1e3a5f" }}>{review.bottomLine}</p>
                  </div>

                  {/* Link to alternatives */}
                  <div className="mt-4 text-center">
                    <Link
                      href={`/alternatives/${tool.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold no-underline"
                      style={{ color: "#1d6ce8" }}
                    >
                      View best {tool.name} alternatives →
                    </Link>
                  </div>
                </section>
              </>
            )}

            {/* Key Features */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#eef4ff" }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="#1d6ce8" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "#374151" }}>{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Mid-content ad */}
            <div className="ad-placeholder w-full" style={{ display: "none",  height: "90px" }}>
              Advertisement — 728×90
            </div>

            {/* Pros & Cons */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>Pros &amp; Cons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#16a34a" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#dc2626" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: "#dc2626" }}>✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>Pricing</h2>
              <p className="text-sm mb-4" style={{ color: "#64748b" }}>
                Pricing model: <strong>{tool.pricingModel}</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tool.pricing.map((tier, i) => (
                  <div
                    key={tier.name}
                    className="rounded-xl p-5"
                    style={{
                      border: i === 1 ? "2px solid #1d6ce8" : "1px solid #e2e8f0",
                      backgroundColor: i === 1 ? "#f0f6ff" : "#fafafa",
                    }}
                  >
                    {i === 1 && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block" style={{ backgroundColor: "#1d6ce8" }}>
                        POPULAR
                      </span>
                    )}
                    <h3 className="font-bold text-base" style={{ color: "#0f2340" }}>{tier.name}</h3>
                    <div className="my-2">
                      <span className="text-2xl font-black" style={{ color: "#0f2340" }}>{tier.price}</span>
                      <span className="text-xs ml-1" style={{ color: "#64748b" }}>{tier.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs" style={{ color: "#475569" }}>
                          <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Integrations */}
            {tool.integrations.length > 0 && (
              <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
                <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>Integrations</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.integrations.map((int) => (
                    <span
                      key={int}
                      className="text-sm px-3 py-1.5 rounded-lg font-medium"
                      style={{ backgroundColor: "#f1f5f9", color: "#374151", border: "1px solid #e2e8f0" }}
                    >
                      {int}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Best for */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-4" style={{ color: "#0f2340" }}>Best For</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[...tool.industries, ...tool.companySize].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg p-3 text-sm font-medium text-center"
                    style={{ backgroundColor: "#f0f6ff", color: "#1d6ce8", border: "1px solid #dbeafe" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Explore More — internal linking */}
            {(hasAlternativesPage || relatedComparisons.length > 0 || toolIndustryPages.length > 0 || toolStacks.length > 0 || toolBestFor.length > 0) && (
              <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
                <h2 className="text-lg font-black mb-5" style={{ color: "#0f2340" }}>Explore More</h2>
                <div className="space-y-5">

                  {/* Alternatives page */}
                  {hasAlternativesPage && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                        Alternatives
                      </p>
                      <Link
                        href={`/alternatives/${tool.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold no-underline px-4 py-2 rounded-lg"
                        style={{ backgroundColor: "#eef4ff", color: "#1d6ce8", border: "1px solid #dbeafe" }}
                      >
                        Best {tool.name} Alternatives
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}

                  {/* Compare pages */}
                  {relatedComparisons.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                        Head-to-Head Comparisons
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedComparisons.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/compare/${c.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: "#f1f5f9", color: "#374151", border: "1px solid #e2e8f0" }}
                          >
                            {c.title.replace(/ \(\d{4}\)$/, "")}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Industry pages */}
                  {toolIndustryPages.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                        Industry Guides
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {toolIndustryPages.map((ind) => (
                          <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
                          >
                            {ind.name}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Best-for guides */}
                  {toolBestFor.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                        Buyer&apos;s Guides
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {toolBestFor.map((bp) => (
                          <Link
                            key={bp.slug}
                            href={`/best/${bp.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: "#fae8ff", color: "#7e22ce", border: "1px solid #e9d5ff" }}
                          >
                            {bp.title}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stack pages */}
                  {toolStacks.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                        Tech Stacks Featuring {tool.name}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {toolStacks.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/stacks/${s.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium no-underline px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}
                          >
                            {s.title}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </section>
            )}

            {/* FAQ section — visible on page (required for FAQPage schema to qualify for rich results) */}
            <section className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
              <h2 className="text-lg font-black mb-5" style={{ color: "#0f2340" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}
                  >
                    <h3 className="text-sm font-bold mb-1.5" style={{ color: "#0f2340" }}>
                      {faq.question}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Author byline — full card at end of content */}
            <AuthorByline variant="full" lastUpdated="March 2026" />

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-5 w-64 flex-shrink-0">
            <div className="ad-placeholder" style={{ display: "none",  height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
              
            </div>

            {/* Quick summary card */}
            <div className="rounded-xl p-5 bg-white" style={{ border: "1px solid #e2e8f0" }}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#0f2340" }}>Quick Summary</h3>
              <div className="space-y-2">
                {[
                  { label: "Rating", value: `${tool.rating}/5` },
                  { label: "Reviews", value: tool.reviewCount.toLocaleString() },
                  { label: "From", value: tool.pricingFrom },
                  { label: "Founded", value: tool.founded },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-xs">
                    <span style={{ color: "#94a3b8" }}>{row.label}</span>
                    <span className="font-semibold" style={{ color: "#1a1f36" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a
                href={`/api/go/${tool.slug}`}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="block w-full text-center text-sm font-bold py-2.5 rounded-lg no-underline text-white mt-4"
                style={{ backgroundColor: "#1d6ce8" }}
              >
                Visit {tool.name} →
              </a>
            </div>

            <div className="ad-placeholder" style={{ display: "none",  height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
              
            </div>

            {/* Related tools */}
            {related.length > 0 && (
              <div className="rounded-xl p-5 bg-white" style={{ border: "1px solid #e2e8f0" }}>
                <h3 className="font-bold text-sm mb-3" style={{ color: "#0f2340" }}>Related Tools</h3>
                <div className="space-y-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/tools/${rel.slug}`}
                      className="flex items-center gap-3 no-underline group"
                    >
                      <ToolLogo website={rel.website} name={rel.name} fallbackEmoji={rel.logo} size={28} />
                      <div>
                        <p className="text-sm font-semibold group-hover:underline" style={{ color: "#1d6ce8" }}>
                          {rel.name}
                        </p>
                        <p className="text-xs" style={{ color: "#94a3b8" }}>
                          {rel.rating} ★ · {rel.pricingFrom}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>


    </div>
  );
}
