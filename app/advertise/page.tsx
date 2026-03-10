import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advertise With Us | FieldSalesTools.com",
  description: "Reach thousands of field sales professionals and D2D sales managers. Featured placements, sponsored listings, and display advertising on FieldSalesTools.com.",
};

export default function AdvertisePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Advertise on FieldSalesTools.com
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Put your tool in front of the right audience — sales managers, D2D team leaders,
            and field reps actively looking for software solutions.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Audience stats */}
        <section className="bg-white rounded-2xl p-8 mb-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-6 text-center" style={{ color: "#0f2340" }}>Who We Reach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "Field Sales Audience" },
              { value: "D2D", label: "Core Focus" },
              { value: "Solar · Roofing · Telecom", label: "Top Industries" },
              { value: "US", label: "Primary Market" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black mb-1" style={{ color: "#1d6ce8" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-6" style={{ color: "#0f2340" }}>Advertising Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Standard Listing",
                price: "$0",
                period: "Free",
                color: "#f8fafc",
                border: "#e2e8f0",
                badge: null,
                features: [
                  "Listed in directory",
                  "Basic tool description",
                  "Link to your website",
                  "Standard placement",
                ],
                cta: "Submit Your Tool",
                ctaHref: "/submit",
                ctaColor: "#64748b",
              },
              {
                name: "Featured Placement",
                price: "$299",
                period: "/month",
                color: "#f0f6ff",
                border: "#1d6ce8",
                badge: "MOST POPULAR",
                features: [
                  "Top 3 placement on homepage",
                  "Featured badge on listing",
                  "Priority in category pages",
                  "Bold card border styling",
                  "Included in email features",
                ],
                cta: "Get Started",
                ctaHref: "mailto:advertise@fieldsalestools.com?subject=Featured Placement Inquiry",
                ctaColor: "#1d6ce8",
              },
              {
                name: "Full Package",
                price: "$399",
                period: "/month",
                color: "#fefce8",
                border: "#f59e0b",
                badge: "BEST VALUE",
                features: [
                  "Everything in Featured",
                  "300×250 sidebar ad unit",
                  "728×90 leaderboard ad",
                  "Homepage banner placement",
                  "Monthly performance report",
                ],
                cta: "Contact Us",
                ctaHref: "mailto:advertise@fieldsalestools.com?subject=Full Package Inquiry",
                ctaColor: "#f59e0b",
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{ backgroundColor: pkg.color, border: `2px solid ${pkg.border}` }}
              >
                {pkg.badge && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-3 self-start"
                    style={{ backgroundColor: pkg.border }}
                  >
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-black text-lg mb-1" style={{ color: "#0f2340" }}>{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-black" style={{ color: "#0f2340" }}>{pkg.price}</span>
                  <span className="text-sm ml-1" style={{ color: "#64748b" }}>{pkg.period}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.ctaHref}
                  className="block w-full text-center text-sm font-bold py-3 rounded-xl no-underline text-white"
                  style={{ backgroundColor: pkg.ctaColor }}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}>
          <h2 className="text-xl font-black text-white mb-2">Ready to Get Started?</h2>
          <p className="text-sm mb-6" style={{ color: "#94b8d4" }}>
            Email us and we&apos;ll get your listing set up within 24 hours.
          </p>
          <a
            href="mailto:advertise@fieldsalestools.com"
            className="inline-block text-sm font-bold px-8 py-3 rounded-xl no-underline text-white"
            style={{ backgroundColor: "#1d6ce8" }}
          >
            advertise@fieldsalestools.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
