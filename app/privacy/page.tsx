import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for FieldSalesTools.com.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 20px 80px" }}>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "#0f2340",
          margin: "0 0 8px",
          letterSpacing: "-0.5px",
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 40 }}>
        Last updated: March 2026
      </p>

      {[
        {
          title: "What we collect",
          body: "FieldSalesTools.com does not collect personally identifiable information. We use standard web analytics (page views, referrers) to understand how visitors use the site. No account creation is required and no forms are used to collect your data.",
        },
        {
          title: "Cookies",
          body: "We may use cookies for basic analytics purposes. These are first-party cookies and do not track you across other websites. You can disable cookies in your browser settings.",
        },
        {
          title: "Third-party links",
          body: "Our site links to external tools and software vendors (e.g., SalesRabbit, HubSpot, etc.) and to our sister site FieldSalesTools.com. We are not responsible for the privacy practices of these third-party sites. Please review their privacy policies separately.",
        },
        {
          title: "Affiliate disclosure",
          body: "Some links on this site may be affiliate links. If you click through and make a purchase, we may earn a commission at no extra cost to you. This does not affect our editorial independence or recommendations.",
        },
        {
          title: "Contact",
          body: "Questions about this privacy policy? You can reach us through FieldSalesTools.com.",
        },
      ].map((section) => (
        <div key={section.title} style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#0f2340",
              margin: "0 0 10px",
            }}
          >
            {section.title}
          </h2>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, margin: 0 }}>
            {section.body}
          </p>
        </div>
      ))}
    </div>
  );
}
