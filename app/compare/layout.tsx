import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Field Sales Tools — 50+ Head-to-Head Comparisons | FieldSalesTools.com",
  description:
    "Compare any two field sales, D2D, or canvassing tools side by side. 50+ research-backed comparisons with pricing, features, ratings, and verdicts.",
  openGraph: {
    title: "Compare Field Sales Tools — 50+ Head-to-Head Comparisons",
    description:
      "Compare any two field sales tools side by side. 50+ research-backed comparisons with pricing, features, and verdicts.",
    url: "https://www.fieldsalestools.com/compare",
    siteName: "FieldSalesTools.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Field Sales Tools — 50+ Head-to-Head Comparisons",
    description:
      "Compare any two field sales tools side by side. 50+ comparisons with pricing and verdicts.",
  },
  alternates: {
    canonical: "https://www.fieldsalestools.com/compare",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
