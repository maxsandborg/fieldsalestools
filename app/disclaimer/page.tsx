import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Editorial disclaimer for FieldSalesTools.com.",
  robots: { index: false, follow: false },
};

export default function DisclaimerPage() {
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
        Disclaimer
      </h1>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 40 }}>
        Last updated: March 2026
      </p>

      {[
        {
          title: "Independence",
          body: "FieldSalesTools.com is an independent research site. We are not affiliated with, sponsored by, or endorsed by any of the software vendors mentioned on this site. Our stack recommendations are based on our own research and analysis of publicly available information.",
        },
        {
          title: "Accuracy",
          body: "We make every effort to keep pricing, features, and other product information accurate and up to date. However, software products change frequently. Always verify pricing and features directly with the vendor before making a purchasing decision.",
        },
        {
          title: "Not professional advice",
          body: "The content on this site is for informational purposes only and does not constitute professional advice. Every business is different — what works for one field sales team may not work for yours. Evaluate tools based on your specific needs.",
        },
        {
          title: "Affiliate links",
          body: "Some links on this site may be affiliate links. If you click through and make a purchase, we may earn a commission at no extra cost to you. Affiliate relationships do not influence our editorial recommendations.",
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
