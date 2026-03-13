import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FieldSalesTools.com",
  description:
    "Built by Max Sandborg, a field sales manager who led D2D fiber teams across the US. Real-world reviews from the field.",
  openGraph: {
    title: "About Us | FieldSalesTools.com",
    description: "Built by Max Sandborg, a field sales manager who led D2D fiber teams across the US.",
    url: "https://www.fieldsalestools.com/about",
    siteName: "FieldSalesTools.com",
    images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | FieldSalesTools.com",
    description: "Built by Max Sandborg, a field sales manager who led D2D fiber teams across the US.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>


      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(29,108,232,0.2)",
              border: "1px solid rgba(29,108,232,0.4)",
              borderRadius: 20,
              padding: "4px 14px",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
              BUILT BY A FIELD SALES MANAGER
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            About FieldSalesTools.com
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Not another generic software review site. This one was built by someone who&apos;s
            actually managed D2D teams, evaluated these tools in the field, and felt the pain of
            choosing the wrong software.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">

        {/* Author Card */}
        <section
          className="bg-white rounded-2xl p-8"
          style={{ border: "1px solid #e2e8f0" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1d6ce8, #0f2340)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                flexShrink: 0,
              }}
            >
              👤
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="text-xl font-black" style={{ color: "#0f2340", margin: 0 }}>
                  Max Sandborg
                </h2>
                <a
                  href="https://www.linkedin.com/in/max-sandborg-53155ab5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "#0a66c2",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 4,
                    textDecoration: "none",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1d6ce8" }}>
                Founder · Head of Sales, Zellyfi LLC · Former Sales Manager, Open Infra Inc
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                I&apos;ve spent the last several years building and managing field sales teams —
                specifically in D2D fiber optic sales across the United States. Before that, I ran
                field sales at Google and AB InBev. I know what it actually takes to hit quota door
                to door, and I&apos;ve personally evaluated most of the tools on this site.
              </p>
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "#0f2340" }}>Why I Built This</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            When I was managing a D2D sales team at Open Infra — scaling fiber door-to-door across
            US markets — choosing the right software stack was one of the hardest parts of the job.
            There was no single resource that gave me honest, practical comparisons from someone
            who&apos;d actually used these tools with real reps in the field.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            Most review sites are either written by generalist writers who&apos;ve never run a sales team,
            or they&apos;re stuffed with affiliate links that push you toward whoever pays the most.
            I wanted something different: a resource built on real experience, where the rankings
            reflect how tools actually perform when your reps are knocking 80 doors a day.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            That&apos;s FieldSalesTools.com. I continue to update every listing based on what I see
            in the field — currently as Head of Sales at Zellyfi LLC, still running D2D fiber
            operations in the Tampa Bay area and beyond.
          </p>
        </section>

        {/* Experience Timeline */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-6" style={{ color: "#0f2340" }}>Field Sales Background</h2>
          <div className="space-y-6">
            {[
              {
                period: "Sep 2025 – Present",
                role: "Head of Sales",
                company: "Zellyfi LLC",
                location: "Tampa Bay Area, FL",
                desc: "Leading full field sales function for a D2D fiber optic residential sales operation. Responsible for rep recruitment, training, territory management, and tool stack decisions.",
                icon: "🏠",
                current: true,
              },
              {
                period: "Oct 2023 – Aug 2025",
                role: "Sales Manager",
                company: "Open Infra Inc",
                location: "United States",
                desc: "Recruited from Sweden to lead D2D fiber door-to-door sales operations across US markets. Built and managed field rep teams, implemented territory routing and CRM systems.",
                icon: "🌐",
                current: false,
              },
              {
                period: "Mar 2019 – Dec 2019",
                role: "Territory Sales Manager",
                company: "Google",
                location: "Stockholm & Northern Sweden",
                desc: "Field sales for Google Home and Nest hardware product lines. Managed retail partner relationships and territory performance across major Swedish markets.",
                icon: "🔷",
                current: false,
              },
              {
                period: "Jan 2018 – Mar 2019",
                role: "Business Developer",
                company: "AB InBev",
                location: "Scandinavia",
                desc: "Field sales and business development for Corona, Budweiser, and the broader AB InBev portfolio during Scandinavia market re-entry. Extensive D2D account management.",
                icon: "🍺",
                current: false,
              },
            ].map((job) => (
              <div key={job.role + job.company} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: job.current ? "#1d6ce8" : "#f1f5f9",
                      border: job.current ? "none" : "2px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {job.icon}
                  </div>
                  <div style={{ width: 2, flex: 1, background: "#e2e8f0", marginTop: 6 }} />
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-sm font-black" style={{ color: "#0f2340" }}>
                      {job.role}
                    </span>
                    {job.current && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          background: "#dcfce7",
                          color: "#16a34a",
                          padding: "1px 7px",
                          borderRadius: 10,
                          letterSpacing: "0.04em",
                        }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#1d6ce8" }}>
                    {job.company} · {job.location}
                  </p>
                  <p className="text-xs mb-1" style={{ color: "#94a3b8" }}>
                    {job.period}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {job.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we cover */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-2" style={{ color: "#0f2340" }}>What This Site Covers</h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
            Every category I&apos;ve personally had to evaluate and decide on as a sales manager:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "🗺️", label: "Territory Management" },
              { icon: "📍", label: "Route Optimization" },
              { icon: "🚪", label: "D2D Canvassing Apps" },
              { icon: "📊", label: "Field Sales CRM" },
              { icon: "📋", label: "Lead Management" },
              { icon: "⚡", label: "Sales Automation" },
              { icon: "📈", label: "Rep Performance Tracking" },
              { icon: "🔗", label: "CRM Integrations" },
              { icon: "💰", label: "Pricing & Value Analysis" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-semibold" style={{ color: "#0f2340" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-2" style={{ color: "#0f2340" }}>Industries We Serve</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            These are the industries where D2D and field sales are core to the business model —
            the ones I know best, and the ones where picking the wrong software actually costs you reps.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Fiber / Telecom",
              "Solar",
              "Roofing",
              "Home Security",
              "Pest Control",
              "HVAC",
              "Insurance",
              "Real Estate",
              "Home Services",
              "Medical Devices",
            ].map((ind) => (
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

        {/* How we review */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-2" style={{ color: "#0f2340" }}>How I Review Tools</h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
            I&apos;ve evaluated most of these tools while actively running field sales teams. Here&apos;s
            how I approach every review:
          </p>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Real-World Use Case First",
                desc: "I evaluate tools the way a sales manager would: can my reps actually use this in the field? Does it solve the problems that matter on the ground?",
              },
              {
                step: "02",
                title: "Features vs. Fluff",
                desc: "I score on D2D-specific features (territory routing, canvassing workflows, rep tracking), not generic CRM capabilities that sound impressive but don't help in the field.",
              },
              {
                step: "03",
                title: "Honest Pricing Analysis",
                desc: "Field sales software pricing is notoriously opaque. I dig into real per-seat costs, contract lengths, and what you actually need to pay to get the features that matter.",
              },
              {
                step: "04",
                title: "Kept Current",
                desc: "Pricing changes. Features get added. Companies pivot. I review and update listings regularly — not set-it-and-forget-it like most review sites.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: "#0f2340" }}>
                    {item.title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transparency / Disclosure */}
        <section
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#92400e" }}>
            Transparency Notice
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#78350f" }}>
            Some tool listings on this site are marked as &quot;Featured&quot; — these vendors pay for
            prominent placement. Paid placement does not influence my editorial reviews or ranking
            methodology. I also use affiliate links on some tool pages, meaning I may earn a
            commission if you click through and make a purchase, at no extra cost to you. See our{" "}
            <a href="/disclaimer" style={{ color: "#1d6ce8" }}>
              full disclaimer
            </a>{" "}
            for details.
          </p>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #0f2340, #1a3a5c)" }}
        >
          <h2 className="text-xl font-black text-white mb-2">Get in Touch</h2>
          <p className="text-sm mb-6" style={{ color: "#94b8d4" }}>
            Questions, feedback, want to advertise, or have a tool to list?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@fieldsalestools.com"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl no-underline text-white"
              style={{ backgroundColor: "#1d6ce8" }}
            >
              Advertise With Us
            </a>
            <a
              href="/submit"
              className="inline-block text-sm font-bold px-6 py-3 rounded-xl no-underline"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #4a6a8a",
                color: "#94b8d4",
              }}
            >
              Submit a Tool
            </a>
          </div>
        </section>

      </main>


    </div>
  );
}
