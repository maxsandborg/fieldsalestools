import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Field Sales Software by Industry | FieldSalesTools.com",
  description:
    "Find the best field sales and D2D software for your industry. Solar, roofing, telecom, pest control, HVAC, home services, and more.",
};

const industryIcons: Record<string, string> = {
  solar: "☀️",
  roofing: "🏠",
  telecom: "📡",
  "fiber-cable-isp": "🌐",
  "pest-control": "🐛",
  hvac: "❄️",
  "home-services": "🔧",
  "home-security": "🔒",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>


      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Field Sales Tools by Industry
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Find the right D2D and field sales software for your specific industry — with
            tailored recommendations, key features, and buying guides.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="no-underline">
              <div
                className="bg-white rounded-2xl p-6 h-full"
                style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: "#f0f6ff" }}
                  >
                    {industryIcons[ind.slug] ?? "🏭"}
                  </div>
                  <h2 className="text-base font-black" style={{ color: "#0f2340" }}>
                    {ind.name}
                  </h2>
                </div>
                <p className="text-sm mb-4" style={{ color: "#64748b" }}>
                  {ind.heroSubheading}
                </p>
                <div className="text-sm font-semibold" style={{ color: "#1d6ce8" }}>
                  View Tools →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>


    </div>
  );
}
