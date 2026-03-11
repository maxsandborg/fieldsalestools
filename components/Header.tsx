"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0f2340" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      {/* Top ad banner */}
      <div
        className="ad-placeholder w-full"
        style={{ height: "50px", borderRadius: 0, border: "none", borderBottom: "1px dashed #2a4a6e" }}
      >
        Advertisement — 728×90
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ backgroundColor: "#1d6ce8" }}
            >
              FST
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base tracking-tight">
                FieldSalesTools
              </span>
              <span style={{ color: "#64a3d4", fontSize: "10px", letterSpacing: "0.05em" }}>
                .COM
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-sm font-medium px-3 py-2 rounded-md no-underline"
              style={{ color: "#c8dff0" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
                (e.target as HTMLElement).style.backgroundColor = "#1a3a5c";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#c8dff0";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              All Tools
            </Link>
            <Link
              href="/compare"
              className="text-sm font-medium px-3 py-2 rounded-md no-underline"
              style={{ color: "#c8dff0" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
                (e.target as HTMLElement).style.backgroundColor = "#1a3a5c";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#c8dff0";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Compare
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium px-3 py-2 rounded-md no-underline"
              style={{ color: "#c8dff0" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
                (e.target as HTMLElement).style.backgroundColor = "#1a3a5c";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#c8dff0";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium px-3 py-2 rounded-md no-underline"
              style={{ color: "#c8dff0" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
                (e.target as HTMLElement).style.backgroundColor = "#1a3a5c";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#c8dff0";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              About
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/advertise"
              className="text-sm font-medium px-3 py-2 rounded-md no-underline"
              style={{ color: "#f59e0b" }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#fbbf24"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#f59e0b"}
            >
              Advertise
            </Link>
            <Link
              href="/submit"
              className="text-sm font-semibold px-4 py-2 rounded-lg no-underline text-white"
              style={{ backgroundColor: "#1d6ce8" }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#1558c5"}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "#1d6ce8"}
            >
              Submit a Tool
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#1a3a5c", borderTop: "1px solid #2a4a6e" }} className="md:hidden">
          <div className="px-4 py-3 flex flex-col gap-1">
            <Link href="/" className="text-white text-sm font-medium py-2 no-underline">All Tools</Link>
            <Link href="/compare" className="text-white text-sm font-medium py-2 no-underline">Compare</Link>
            <Link href="/industries" className="text-white text-sm font-medium py-2 no-underline">Industries</Link>
            <Link href="/about" className="text-white text-sm font-medium py-2 no-underline">About</Link>
            <Link href="/advertise" className="text-sm font-medium py-2 no-underline" style={{ color: "#f59e0b" }}>Advertise</Link>
            <Link href="/submit" className="text-sm font-medium py-2 no-underline" style={{ color: "#60a5fa" }}>Submit a Tool</Link>
          </div>
        </div>
      )}
    </header>
  );
}
