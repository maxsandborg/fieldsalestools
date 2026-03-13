import Link from "next/link";
import { bestForPages } from "@/data/best-for";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Best Field Sales Software Guides | FieldSalesTools.com",
  description:
    "Find the best field sales software for your use case. Solar, roofing, D2D, canvassing, small teams, enterprise — ranked for 2026.",
  openGraph: {
    title: "Best Field Sales Software Guides | FieldSalesTools.com",
    description:
      "Find the best field sales software for your use case. Ranked and reviewed for 2026.",
    url: "https://www.fieldsalestools.com/best",
    siteName: "FieldSalesTools.com",
    images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Field Sales Software Guides | FieldSalesTools.com",
    description:
      "Find the best field sales software for your use case. Ranked and reviewed for 2026.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fieldsalestools.com/best",
  },
};

export default function BestPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Best Field Sales Software — Buyer&apos;s Guides
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Curated rankings for every use case. Each guide is based on hands-on testing,
            verified G2 ratings, and real pricing — not paid placements.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bestForPages.map((page) => {
            const topTool = tools.find((t) => t.slug === page.quickPick);
            return (
              <Link key={page.slug} href={`/best/${page.slug}`} className="no-underline">
                <div
                  className="bg-white rounded-2xl p-6 h-full"
                  style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
                >
                  <h2 className="text-base font-black mb-2" style={{ color: "#0f2340" }}>
                    {page.h1}
                  </h2>
                  <p className="text-sm mb-3" style={{ color: "#64748b" }}>
                    {page.tools.length} tools ranked · Last updated{" "}
                    {page.lastUpdated}
                  </p>
                  {topTool && (
                    <div
                      className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg mb-3"
                      style={{ backgroundColor: "#f0fdf4", color: "#16a34a" }}
                    >
                      <span>{topTool.logo}</span>
                      <span>Top pick: {topTool.name}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {page.tools.slice(0, 3).map((t) => (
                      <span
                        key={t.slug}
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: "#f0f6ff", color: "#1d6ce8" }}
                      >
                        {t.name}
                      </span>
                    ))}
                    {page.tools.length > 3 && (
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: "#f0f6ff", color: "#64748b" }}
                      >
                        +{page.tools.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "#1d6ce8" }}>
                    View Rankings →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
