import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0f2340", color: "#94a3b8", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "linear-gradient(135deg, #1d6ce8, #3b82f6)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                🛠️
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>FieldSalesTools.com</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>
              The #1 resource for field sales teams. Curated tool reviews, tech stack guides, and head-to-head comparisons.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.5, margin: 0, color: "#64748b" }}>
              FieldSalesTools.com is reader-supported. We may earn a commission when you buy tools we recommend.{" "}
              <Link href="/disclaimer" style={{ color: "#1d6ce8", textDecoration: "none" }}>Learn more</Link>
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 12, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Tools
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/tools", label: "All Tools" },
                { href: "/best", label: "Best Of Guides" },
                { href: "/alternatives", label: "Alternatives" },
                { href: "/compare", label: "Compare Tools" },
                { href: "/tools/category/field-sales-crm", label: "Field Sales CRM" },
                { href: "/tools/category/d2d-software", label: "D2D Software" },
                { href: "/tools/category/route-planning", label: "Route Planning" },
                { href: "/tools/category/canvassing", label: "Canvassing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Industry Stacks */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 12, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Industry Stacks
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/stacks/roofing", label: "Roofing" },
                { href: "/stacks/solar", label: "Solar" },
                { href: "/stacks/pest-control", label: "Pest Control" },
                { href: "/stacks/hvac", label: "HVAC" },
                { href: "/stacks/telecom-fiber", label: "Telecom & Fiber" },
                { href: "/stacks/solo-rep", label: "Solo Reps" },
                { href: "/stacks/smb-team", label: "Small Teams" },
                { href: "/stacks/mid-market-team", label: "Mid-Market" },
                { href: "/industries", label: "All Industries" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 12, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Company
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {[
                { href: "/about", label: "About" },
                { href: "/advertise", label: "Advertise" },
                { href: "/submit", label: "Submit a Tool" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 12, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Team Size
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { href: "/stacks/solo-rep", label: "Solo Rep" },
                { href: "/stacks/smb-team", label: "Small Team (2–20)" },
                { href: "/stacks/mid-market-team", label: "Mid-Market (20–100)" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 12 }}>
            © {currentYear} FieldSalesTools.com. Independent research — not affiliated with any software vendor.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" style={{ color: "#64748b", textDecoration: "none", fontSize: 12 }}>
              Privacy
            </Link>
            <Link href="/disclaimer" style={{ color: "#64748b", textDecoration: "none", fontSize: 12 }}>
              Disclaimer
            </Link>
            <Link href="/advertise" style={{ color: "#64748b", textDecoration: "none", fontSize: 12 }}>
              Advertise
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
