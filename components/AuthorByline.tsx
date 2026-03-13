import Link from "next/link";

interface AuthorBylineProps {
  /** compact = single-line inline version for top of articles
   *  full    = card with bio, used at the bottom of long-form pages */
  variant?: "compact" | "full";
  /** Optional last-updated date string e.g. "March 2025" */
  lastUpdated?: string;
}

export default function AuthorByline({
  variant = "compact",
  lastUpdated,
}: AuthorBylineProps) {
  if (variant === "full") {
    return (
      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: 16,
          padding: "24px 28px",
          marginTop: 40,
        }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#94a3b8",
            marginBottom: 14,
            marginTop: 0,
            textTransform: "uppercase",
          }}
        >
          About the Author
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          {/* Avatar */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1d6ce8, #0f2340)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            👤
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: "#0f2340" }}>
                Max Sandborg
              </span>
              <a
                href="https://www.linkedin.com/in/max-sandborg-53155ab5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: "#0a66c2",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
            <p style={{ fontSize: 12, color: "#1d6ce8", fontWeight: 600, margin: "0 0 6px" }}>
              Head of Sales, Zellyfi LLC · Former Sales Manager, Open Infra Inc
            </p>
            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: "0 0 8px" }}>
              Max has led D2D field sales teams across the US in the fiber optic industry. He&apos;s
              evaluated most of the tools on this site while actively managing reps in the field.{" "}
              <Link href="/about" style={{ color: "#1d6ce8", textDecoration: "none", fontWeight: 600 }}>
                Read full bio →
              </Link>
            </p>
            {lastUpdated && (
              <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>
                Last reviewed: {lastUpdated}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // compact variant — single row, for top of page
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1d6ce8, #0f2340)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          flexShrink: 0,
        }}
      >
        👤
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: "#374151" }}>
          By{" "}
          <Link href="/about" style={{ color: "#0f2340", fontWeight: 700, textDecoration: "none" }}>
            Max Sandborg
          </Link>
        </span>
        <span style={{ color: "#cbd5e1", fontSize: 13 }}>·</span>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>
          Head of Sales, Zellyfi LLC · D2D Sales Manager
        </span>
        {lastUpdated && (
          <>
            <span style={{ color: "#cbd5e1", fontSize: 13 }}>·</span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>Updated {lastUpdated}</span>
          </>
        )}
      </div>
    </div>
  );
}
