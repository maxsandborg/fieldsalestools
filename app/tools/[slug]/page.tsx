import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getToolBySlug, getAllSlugs, tools } from "@/data/tools";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2026 — Pricing, Features & Alternatives | FieldSalesTools.com`,
    description: `Honest ${tool.name} review: features, pricing, pros and cons. Is ${tool.name} right for your field sales team? Compare with top alternatives.`,
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

  const related = tools.filter(
    (t) =>
      t.slug !== tool.slug &&
      t.categories.some((c) => tool.categories.includes(c))
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Tool hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "#6fa3c8" }}>
            <Link href="/" className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>Home</Link>
            <span>/</span>
            <Link href="/" className="no-underline hover:text-white" style={{ color: "#6fa3c8" }}>Tools</Link>
            <span>/</span>
            <span className="text-white">{tool.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  {tool.logo}
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
                href={tool.affiliateUrl || tool.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
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

        {/* Top leaderboard ad */}
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90
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
            <div className="ad-placeholder w-full" style={{ height: "90px" }}>
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

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-5 w-64 flex-shrink-0">
            <div className="ad-placeholder" style={{ height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
              Advertisement<br />300×250
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
                href={tool.affiliateUrl || tool.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full text-center text-sm font-bold py-2.5 rounded-lg no-underline text-white mt-4"
                style={{ backgroundColor: "#1d6ce8" }}
              >
                Visit {tool.name} →
              </a>
            </div>

            <div className="ad-placeholder" style={{ height: "250px", width: "100%", flexDirection: "column", gap: "4px" }}>
              Advertisement<br />300×250
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
                      <span className="text-xl">{rel.logo}</span>
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

      <Footer />
    </div>
  );
}
