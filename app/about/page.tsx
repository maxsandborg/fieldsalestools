import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About FieldSalesTools.com | The #1 D2D & Field Sales Software Directory",
  description: "FieldSalesTools.com is the most comprehensive directory of field sales and door-to-door software tools. We help sales managers find the right software faster.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            About FieldSalesTools.com
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            The most comprehensive directory for field sales and door-to-door software — built by sales professionals, for sales professionals.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">

        {/* Mission */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#0f2340" }}>Our Mission</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            Finding the right software for your field sales team shouldn&apos;t require hours of Googling Reddit threads and watching YouTube demos. FieldSalesTools.com was built to solve that problem.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            We curate, review, and rank the best tools for D2D sales teams, field reps, solar companies, roofing crews, telecom teams, and any organization that sells on the ground. Our goal is simple: help sales managers make faster, smarter software decisions.
          </p>
        </section>

        {/* What we cover */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#0f2340" }}>What We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🗺️", label: "Territory Management" },
              { icon: "📍", label: "Route Planning" },
              { icon: "🚪", label: "D2D Canvassing" },
              { icon: "📊", label: "Field Sales CRM" },
              { icon: "📋", label: "Lead Management" },
              { icon: "⚡", label: "Sales Automation" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-semibold" style={{ color: "#0f2340" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#0f2340" }}>Industries We Serve</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            Our directory is built with these industries in mind — the ones where field sales and door-to-door are the primary growth engine:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Solar", "Roofing", "Telecom / ISP", "Home Security", "Pest Control", "HVAC", "Insurance", "Real Estate", "Home Services"].map((ind) => (
              <span
                key={ind}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: "#eef4ff", color: "#1d6ce8" }}
              >
                {ind}
              </span>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#0f2340" }}>How We Review Tools</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Research", desc: "We analyze features, pricing, customer reviews, and market position for each tool." },
              { step: "02", title: "Evaluate", desc: "Tools are scored on ease of use, D2D-specific features, integrations, and value for money." },
              { step: "03", title: "Rank", desc: "Our rankings reflect real-world use cases for field sales teams — not paid placement (unless marked as Featured)." },
              { step: "04", title: "Update", desc: "Listings are reviewed and updated regularly to reflect pricing changes, new features, and market shifts." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: "#0f2340" }}>{item.title}</div>
                  <div className="text-sm" style={{ color: "#64748b" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclosure */}
        <section className="rounded-2xl p-6" style={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d" }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: "#92400e" }}>Transparency Notice</h3>
          <p className="text-xs leading-relaxed" style={{ color: "#78350f" }}>
            Some tool listings on this site are marked as &quot;Featured&quot; — these vendors pay for prominent placement. Paid placement does not influence our editorial reviews or ranking methodology. We also use affiliate links on some tool pages, meaning we may earn a commission if you click through and make a purchase, at no extra cost to you. See our{" "}
            <a href="/disclaimer" style={{ color: "#1d6ce8" }}>full disclaimer</a> for details.
          </p>
        </section>

        {/* Contact CTA */}
        <section className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}>
          <h2 className="text-xl font-black text-white mb-2">Get in Touch</h2>
          <p className="text-sm mb-6" style={{ color: "#94b8d4" }}>
            Questions, feedback, or want to list your tool?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:advertise@fieldsalestools.com"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl no-underline text-white"
              style={{ backgroundColor: "#1d6ce8" }}
            >
              Advertise With Us
            </a>
            <a
              href="/submit"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl no-underline"
              style={{ backgroundColor: "transparent", border: "1px solid #4a6a8a", color: "#94b8d4" }}
            >
              Submit a Tool
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
