/**
 * FTC Disclosure Banner
 *
 * Required by FTC guidelines for pages with affiliate/sponsored links.
 * Place near the top of any page that contains affiliate CTAs.
 * Variant "compact" for tool/compare pages, "inline" for subtle in-content use.
 */

interface AffiliateBannerProps {
  variant?: "compact" | "inline";
}

export default function AffiliateBanner({ variant = "compact" }: AffiliateBannerProps) {
  if (variant === "inline") {
    return (
      <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 8px", lineHeight: 1.5 }}>
        <strong style={{ color: "#475569" }}>Disclosure:</strong>{" "}
        FieldSalesTools.com earns a commission if you buy tools through our links — at no extra cost to you.{" "}
        <a href="/disclaimer" style={{ color: "#1d6ce8", textDecoration: "none" }}>
          Learn more →
        </a>
      </p>
    );
  }

  return (
    <div
      style={{
        background: "#fefce8",
        border: "1px solid #fde68a",
        borderRadius: 8,
        padding: "10px 16px",
        marginBottom: 20,
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>ℹ️</span>
      <p style={{ margin: 0, fontSize: 12, color: "#713f12", lineHeight: 1.6 }}>
        <strong>Affiliate disclosure:</strong> Some links on this page are affiliate links. If you click
        through and purchase a product, FieldSalesTools.com may earn a commission — at no extra cost to
        you. Our editorial ratings and reviews are{" "}
        <strong>independent of any commercial relationships.</strong>{" "}
        <a href="/disclaimer" style={{ color: "#92400e", textDecoration: "underline" }}>
          Read our full disclaimer →
        </a>
      </p>
    </div>
  );
}
