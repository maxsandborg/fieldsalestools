import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#0a1e38",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
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
          <div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16, letterSpacing: "-0.3px" }}>
              FieldSalesTools
            </span>
            <span style={{ color: "#4f9ef8", fontSize: 14, fontWeight: 400, marginLeft: 1 }}>.com</span>
          </div>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            href="/tools"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            Tools
          </Link>
          <Link
            href="/compare"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            Compare
          </Link>
          <Link
            href="/industries"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            Industries
          </Link>
          <Link
            href="/stacks"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            Stacks
          </Link>
          <Link
            href="/advertise"
            style={{
              background: "#1d6ce8",
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              padding: "7px 16px",
              borderRadius: 8,
              marginLeft: 10,
              whiteSpace: "nowrap",
            }}
          >
            Get Listed →
          </Link>
        </nav>
      </div>
    </header>
  );
}
