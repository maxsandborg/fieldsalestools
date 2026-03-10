import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f2340", color: "#94a3b8" }}>
      {/* Ad banner above footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="ad-placeholder w-full mb-8" style={{ height: "90px" }}>
          Advertisement — 728×90
        </div>
      </div>

      <div style={{ borderTop: "1px solid #1e3d63" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
                  style={{ backgroundColor: "#1d6ce8" }}
                >
                  FST
                </div>
                <span className="text-white font-bold text-sm">FieldSalesTools.com</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#64a3d4" }}>
                The most comprehensive directory of field sales and door-to-door software tools. Trusted by sales managers and D2D teams.
              </p>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Top Tools</h4>
              <ul className="space-y-2">
                {["SPOTIO", "SalesRabbit", "Badger Maps", "Map My Customers", "Knockbase"].map((tool) => (
                  <li key={tool}>
                    <Link
                      href={`/tools/${tool.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs no-underline hover:text-white"
                      style={{ color: "#94a3b8" }}
                    >
                      {tool}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Categories</h4>
              <ul className="space-y-2">
                {["D2D Software", "Field Sales CRM", "Canvassing Tools", "Territory Management", "Route Planning"].map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs no-underline hover:text-white"
                      style={{ color: "#94a3b8" }}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Site</h4>
              <ul className="space-y-2">
                {[
                  { label: "Submit a Tool", href: "/submit" },
                  { label: "Advertise With Us", href: "/advertise" },
                  { label: "About", href: "/about" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs no-underline hover:text-white"
                      style={{ color: "#94a3b8" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{ borderTop: "1px solid #1e3d63" }}
            className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="text-xs" style={{ color: "#4a6a8a" }}>
              © {new Date().getFullYear()} FieldSalesTools.com — All rights reserved.
            </p>
            <p className="text-xs text-center" style={{ color: "#4a6a8a" }}>
              Some links on this site may be affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
