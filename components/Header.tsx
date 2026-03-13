"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/tools", label: "Tools" },
    { href: "/compare", label: "Compare" },
    { href: "/industries", label: "Industries" },
    { href: "/stacks", label: "Stacks" },
  ];

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

        {/* Desktop Nav — hidden on mobile */}
        <nav className="fst-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 6,
              }}
            >
              {link.label}
            </Link>
          ))}
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

        {/* Hamburger button — shown on mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fst-hamburger"
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{
            display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2,
            transition: "transform 0.2s",
            transform: menuOpen ? "rotate(45deg) translate(0px, 7px)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2,
            transition: "opacity 0.2s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2,
            transition: "transform 0.2s",
            transform: menuOpen ? "rotate(-45deg) translate(0px, -7px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="fst-mobile-menu"
          style={{
            background: "#0f2340",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "8px 20px 20px",
            flexDirection: "column",
            gap: 0,
            display: "none",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                padding: "12px 4px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/advertise"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#1d6ce8",
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              padding: "11px 16px",
              borderRadius: 8,
              marginTop: 12,
              textAlign: "center",
              display: "block",
            }}
          >
            Get Listed →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .fst-desktop-nav { display: none !important; }
          .fst-hamburger { display: flex !important; }
          .fst-mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
