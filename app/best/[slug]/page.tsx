import type { Metadata } from "next";
import { bestForPages, getBestForPage } from "../../../data/best-for";
import { notFound } from "next/navigation";
import Link from "next/link";
import AffiliateBanner from "@/components/AffiliateBanner";
import AuthorByline from "@/components/AuthorByline";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return bestForPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBestForPage(slug);
  if (!page) return {};
  const url = `https://www.fieldsalestools.com/best/${page.slug}`;
  return {
    title: `${page.title} | FieldSalesTools.com`,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "article",
      url,
      siteName: "FieldSalesTools.com",
      images: [
        {
          url: "https://www.fieldsalestools.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${page.title} — FieldSalesTools.com`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: ["https://www.fieldsalestools.com/og-image.png"],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BestForPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBestForPage(slug);
  if (!page) notFound();

  const pageUrl = `https://www.fieldsalestools.com/best/${page.slug}`;

  // ─── JSON-LD ────────────────────────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        description: page.metaDescription,
        url: pageUrl,
        datePublished: page.lastUpdated,
        dateModified: page.lastUpdated,
        author: {
          "@type": "Organization",
          name: "FieldSalesTools.com Editorial Team",
          url: "https://www.fieldsalestools.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "FieldSalesTools.com",
          url: "https://www.fieldsalestools.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.fieldsalestools.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Best",
            item: "https://www.fieldsalestools.com/best",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
      // FAQPage schema for People Also Ask
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem 4rem" }}>

        {/* ─── Breadcrumb ──────────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: "0.82rem",
            color: "#6b7280",
            padding: "1.5rem 0 0",
            marginBottom: "1.5rem",
          }}
        >
          <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>
            Home
          </Link>
          {" / "}
          <span style={{ color: "#374151" }}>Best Software Guides</span>
          {" / "}
          <span style={{ color: "#111827" }}>{page.title}</span>
        </nav>

        {/* ─── Affiliate Disclosure ─────────────────────────────────────────────── */}
        <AffiliateBanner variant="inline" />

        {/* ─── Author Byline ────────────────────────────────────────────────────── */}
        <AuthorByline variant="compact" lastUpdated="March 2026" />

        {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span
              style={{
                display: "inline-block",
                background: "#eff6ff",
                color: "#1d4ed8",
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "0.3rem 0.75rem",
                borderRadius: 20,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Buyer&apos;s Guide · Updated {page.lastUpdated}
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {page.h1}
          </h1>

          {/* Quick Pick */}
          <div
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #86efac",
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div style={{ fontSize: "1.5rem" }}>🏆</div>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#15803d",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.25rem",
                }}
              >
                Our Top Pick
              </div>
              <p style={{ margin: 0, color: "#15803d", fontWeight: 600 }}>
                {page.quickPickReason}
              </p>
              <Link
                href={`/tools/${page.quickPick}`}
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  fontSize: "0.82rem",
                  color: "#166534",
                  textDecoration: "underline",
                }}
              >
                View full review →
              </Link>
            </div>
          </div>
        </header>

        {/* ─── Intro ────────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          {page.intro.split("\n\n").map((para, i) => (
            <p
              key={i}
              style={{
                color: "#374151",
                lineHeight: 1.75,
                marginBottom: "1rem",
                fontSize: "1.0625rem",
              }}
            >
              {para}
            </p>
          ))}
        </section>

        {/* ─── Quick Comparison Table ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1rem",
            }}
          >
            Quick Comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    #
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    Tool
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    Starting Price
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    G2 Rating
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.tools.map((tool, idx) => (
                  <tr
                    key={tool.slug}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
                      background: idx === 0 ? "#fafffe" : "white",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        fontWeight: 700,
                        color: idx === 0 ? "#059669" : "#6b7280",
                      }}
                    >
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${tool.rank}`}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <Link
                        href={`/tools/${tool.slug}`}
                        style={{
                          fontWeight: 600,
                          color: "#1d4ed8",
                          textDecoration: "none",
                        }}
                      >
                        {tool.name}
                      </Link>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#6b7280",
                          marginTop: "0.15rem",
                        }}
                      >
                        {tool.tagline}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "#374151",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tool.price}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", whiteSpace: "nowrap" }}>
                      <span style={{ color: "#d97706", fontWeight: 600 }}>
                        ⭐ {tool.rating}
                      </span>
                      <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>
                        {" "}
                        ({tool.reviewCount.toLocaleString()})
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "#374151",
                        fontSize: "0.85rem",
                        maxWidth: 200,
                      }}
                    >
                      {tool.bestFor.length > 80
                        ? tool.bestFor.slice(0, 77) + "…"
                        : tool.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Detailed Tool Reviews ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "2rem",
            }}
          >
            Detailed Reviews
          </h2>

          {page.tools.map((tool, idx) => (
            <div
              key={tool.slug}
              id={tool.slug}
              style={{
                border: idx === 0 ? "2px solid #059669" : "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "2rem",
                marginBottom: "2rem",
                background: idx === 0 ? "#f0fdf4" : "white",
                position: "relative",
              }}
            >
              {/* Rank badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: idx === 0 ? "#059669" : "#6b7280",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.65rem",
                  borderRadius: 20,
                }}
              >
                #{tool.rank} Pick
              </div>

              {/* Header */}
              <div style={{ marginBottom: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: "0.25rem",
                  }}
                >
                  {tool.rank}. {tool.name}
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontStyle: "italic",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tool.tagline}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    fontSize: "0.85rem",
                    color: "#6b7280",
                  }}
                >
                  <span>
                    <strong style={{ color: "#374151" }}>Price:</strong>{" "}
                    {tool.price}
                  </span>
                  <span>
                    <strong style={{ color: "#374151" }}>Rating:</strong>{" "}
                    ⭐ {tool.rating}/5 ({tool.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              {/* Best For */}
              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: 8,
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  fontSize: "0.88rem",
                  color: "#374151",
                }}
              >
                <strong>Best for:</strong> {tool.bestFor}
              </div>

              {/* Pros & Cons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#059669",
                      marginBottom: "0.5rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    ✓ Pros
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                    {tool.pros.map((pro, i) => (
                      <li
                        key={i}
                        style={{
                          color: "#374151",
                          fontSize: "0.875rem",
                          marginBottom: "0.4rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#dc2626",
                      marginBottom: "0.5rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    ✗ Cons
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                    {tool.cons.map((con, i) => (
                      <li
                        key={i}
                        style={{
                          color: "#374151",
                          fontSize: "0.875rem",
                          marginBottom: "0.4rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div
                style={{
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <p
                  style={{
                    color: "#1e293b",
                    lineHeight: 1.7,
                    margin: 0,
                    fontSize: "0.9375rem",
                  }}
                >
                  <strong>Our verdict:</strong> {tool.verdict}
                </p>
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={`/api/go/${tool.slug}`}
                  rel="noopener noreferrer nofollow sponsored"
                  style={{
                    display: "inline-block",
                    background: idx === 0 ? "#059669" : "#1d4ed8",
                    color: "white",
                    padding: "0.6rem 1.25rem",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  Visit {tool.name} →
                </a>
                <Link
                  href={`/tools/${tool.slug}`}
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    color: "#374151",
                    padding: "0.6rem 1.25rem",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    border: "1px solid #d1d5db",
                  }}
                >
                  Full Review
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* ─── Methodology ────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#f8fafc",
            borderRadius: 16,
            padding: "2rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1rem",
            }}
          >
            How We Picked These Tools
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, margin: 0 }}>
            {page.methodology}
          </p>
        </section>

        {/* ─── FAQs ─────────────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1.5rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {page.faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    color: "#374151",
                    lineHeight: 1.7,
                    margin: 0,
                    fontSize: "0.9375rem",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Related Links ────────────────────────────────────────────────────────── */}
        <section
          style={{
            borderTop: "2px solid #f1f5f9",
            paddingTop: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1rem",
            }}
          >
            Related Guides
          </h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/tools"
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #dbeafe",
                borderRadius: 8,
                color: "#1d4ed8",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                background: "#eff6ff",
              }}
            >
              All Field Sales Tools →
            </Link>
            <Link
              href="/compare"
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #dbeafe",
                borderRadius: 8,
                color: "#1d4ed8",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                background: "#eff6ff",
              }}
            >
              Compare Tools →
            </Link>
            <Link
              href="/stacks"
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #dbeafe",
                borderRadius: 8,
                color: "#1d4ed8",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                background: "#eff6ff",
              }}
            >
              Stack Guides →
            </Link>
          </div>
        </section>

        {/* ─── Author Byline Card ───────────────────────────────────────────────── */}
        <AuthorByline variant="full" lastUpdated="March 2026" />

      </div>
    </>
  );
}
