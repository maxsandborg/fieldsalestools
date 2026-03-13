import Link from "next/link";
import { stacks } from "@/data/stacks";

export const metadata = {
  title: "Field Sales Tech Stacks — Industry & Team Size Guides | FieldSalesTools.com",
  description:
    "Complete field sales tech stack guides for every industry and team size. See which tool combinations top-performing D2D teams actually use, with real pricing.",
  openGraph: {
    title: "Field Sales Tech Stacks — Industry & Team Size Guides",
    description:
      "Complete field sales tech stack guides for every industry and team size. See which tool combinations top-performing D2D teams actually use.",
    url: "https://www.fieldsalestools.com/stacks",
    siteName: "FieldSalesTools.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Sales Tech Stacks — Industry & Team Size Guides",
    description:
      "Complete field sales tech stack guides for every industry and team size.",
  },
  alternates: {
    canonical: "https://www.fieldsalestools.com/stacks",
  },
};

export default function StacksPage() {
  const industryStacks = stacks.filter((s) => s.category === "industry");
  const teamStacks = stacks.filter((s) => s.category === "team-size");

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Field Sales Tech Stacks
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Pre-built tool combinations that top-performing D2D and field sales teams actually
            use — organized by industry and team size, with real pricing.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        {/* Industry Stacks */}
        <h2 className="text-xl font-black mb-5" style={{ color: "#0f2340" }}>
          By Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {industryStacks.map((stack) => (
            <Link key={stack.slug} href={`/stacks/${stack.slug}`} className="no-underline">
              <div
                className="bg-white rounded-2xl p-6 h-full"
                style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: "#f0f6ff" }}
                  >
                    {stack.icon}
                  </div>
                  <h3 className="text-base font-black" style={{ color: "#0f2340" }}>
                    {stack.title}
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "#64748b" }}>
                  {stack.tools.length} tools · {stack.totalCostLow}–{stack.totalCostHigh}{" "}
                  {stack.totalCostNote}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {stack.tools.slice(0, 3).map((t) => (
                    <span
                      key={t.slug}
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: "#f0f6ff", color: "#1d6ce8" }}
                    >
                      {t.name}
                    </span>
                  ))}
                  {stack.tools.length > 3 && (
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: "#f0f6ff", color: "#64748b" }}
                    >
                      +{stack.tools.length - 3} more
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold" style={{ color: "#1d6ce8" }}>
                  View Stack →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Team Size Stacks */}
        {teamStacks.length > 0 && (
          <>
            <h2 className="text-xl font-black mb-5" style={{ color: "#0f2340" }}>
              By Team Size
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {teamStacks.map((stack) => (
                <Link key={stack.slug} href={`/stacks/${stack.slug}`} className="no-underline">
                  <div
                    className="bg-white rounded-2xl p-6 h-full"
                    style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ backgroundColor: "#f0f6ff" }}
                      >
                        {stack.icon}
                      </div>
                      <h3 className="text-base font-black" style={{ color: "#0f2340" }}>
                        {stack.title}
                      </h3>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "#64748b" }}>
                      {stack.tools.length} tools · {stack.totalCostLow}–{stack.totalCostHigh}{" "}
                      {stack.totalCostNote}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {stack.tools.slice(0, 3).map((t) => (
                        <span
                          key={t.slug}
                          className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ backgroundColor: "#f0f6ff", color: "#1d6ce8" }}
                        >
                          {t.name}
                        </span>
                      ))}
                      {stack.tools.length > 3 && (
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ backgroundColor: "#f0f6ff", color: "#64748b" }}
                        >
                          +{stack.tools.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "#1d6ce8" }}>
                      View Stack →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
