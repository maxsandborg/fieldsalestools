import Link from "next/link";
import { tools } from "@/data/tools";
import { reviewedSlugs } from "@/data/reviews";

export const metadata = {
  title: "Field Sales Software Alternatives | FieldSalesTools.com",
  description:
    "Alternatives to SPOTIO, SalesRabbit, and other field sales tools. Compare pricing, features, and real user ratings.",
  openGraph: {
    title: "Field Sales Software Alternatives | FieldSalesTools.com",
    description:
      "Alternatives to SPOTIO, SalesRabbit, and other field sales tools. Compare pricing, features, and ratings.",
    url: "https://www.fieldsalestools.com/alternatives",
    siteName: "FieldSalesTools.com",
    images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Sales Software Alternatives | FieldSalesTools.com",
    description:
      "Alternatives to SPOTIO, SalesRabbit, and other field sales tools. Compare pricing and ratings.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fieldsalestools.com/alternatives",
  },
};

export default function AlternativesPage() {
  // Map reviewed slugs to full tool data for display
  const reviewedTools = reviewedSlugs
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Field Sales Software Alternatives
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Not sure if your current tool is the best fit? Explore alternatives to every major
            field sales platform — with honest comparisons, pricing, and real user ratings.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviewedTools.map((tool) =>
            tool ? (
              <Link
                key={tool.slug}
                href={`/alternatives/${tool.slug}`}
                className="no-underline"
              >
                <div
                  className="bg-white rounded-2xl p-6 h-full"
                  style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: "#f0f6ff" }}
                    >
                      {tool.logo}
                    </div>
                    <div>
                      <h2 className="text-base font-black" style={{ color: "#0f2340" }}>
                        {tool.name} Alternatives
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold" style={{ color: "#d97706" }}>
                          ★ {tool.rating.toFixed(1)}
                        </span>
                        <span className="text-xs" style={{ color: "#94a3b8" }}>
                          ({tool.reviewCount} reviews)
                        </span>
                        <span className="text-xs" style={{ color: "#94a3b8" }}>
                          · From {tool.pricingFrom}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "#64748b" }}>
                    See how {tool.name} compares to other {tool.categories[0]?.toLowerCase() || "field sales"} tools — and which
                    alternatives might be a better fit for your team.
                  </p>
                  <div className="text-sm font-semibold" style={{ color: "#1d6ce8" }}>
                    View Alternatives →
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </main>
    </div>
  );
}
