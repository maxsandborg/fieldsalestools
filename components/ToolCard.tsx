"use client";
import Link from "next/link";
import { Tool } from "@/data/tools";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="w-3.5 h-3.5" fill="#f59e0b" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {half && (
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="w-3.5 h-3.5" fill="#e2e8f0" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function ToolCard({ tool, rank }: { tool: Tool; rank?: number }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden flex flex-col relative"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)",
        border: tool.featured ? "2px solid #1d6ce8" : "1px solid #e2e8f0",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Featured badge */}
      {tool.featured && (
        <div
          className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "#1d6ce8", fontSize: "10px", letterSpacing: "0.04em" }}
        >
          FEATURED
        </div>
      )}

      {/* Rank badge */}
      {rank !== undefined && (
        <div
          className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
          style={{ backgroundColor: rank <= 3 ? "#0f2340" : "#94a3b8" }}
        >
          {rank}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Logo & name */}
        <div className="flex items-start gap-3 mb-3 mt-1">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: "#f0f4f8", border: "1px solid #e2e8f0" }}
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${new URL(tool.website).hostname.replace(/^www\./, "")}&sz=128`}
              alt={`${tool.name} logo`}
              width={40}
              height={40}
              style={{ objectFit: "contain", width: "40px", height: "40px" }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) parent.innerHTML = `<span style="font-size:1.5rem">${tool.logo}</span>`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-bold text-base leading-tight mb-0.5"
              style={{ color: "#0f2340" }}
            >
              {tool.name}
            </h3>
            <p className="text-xs truncate" style={{ color: "#64748b" }}>
              {tool.tagline}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={tool.rating} />
          <span className="text-xs font-semibold" style={{ color: "#1a1f36" }}>
            {tool.rating.toFixed(1)}
          </span>
          <span className="text-xs" style={{ color: "#94a3b8" }}>
            ({tool.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tool.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: "#eef4ff", color: "#1d6ce8" }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Top features */}
        <ul className="space-y-1 mb-4 flex-1">
          {tool.keyFeatures.slice(0, 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-xs" style={{ color: "#475569" }}>
              <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        {/* Pricing & CTA */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #f1f5f9" }}
        >
          <div>
            <span className="text-xs" style={{ color: "#94a3b8" }}>
              From
            </span>
            <p className="text-sm font-bold" style={{ color: "#0f2340" }}>
              {tool.pricingFrom}
            </p>
          </div>
          <Link
            href={`/tools/${tool.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-lg no-underline text-white"
            style={{ backgroundColor: "#1d6ce8" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#1558c5")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#1d6ce8")
            }
          >
            View Tool
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
