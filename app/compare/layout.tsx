import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Field Sales Tools (50+) | FieldSalesTools.com",
  description:
    "Compare any two field sales, D2D, or canvassing tools side by side. 50+ comparisons with pricing, features, and verdicts.",
  openGraph: {
    title: "Compare Field Sales Tools (50+) | FieldSalesTools.com",
    description:
      "Compare any two field sales tools side by side. 50+ comparisons with pricing, features, and verdicts.",
    url: "https://www.fieldsalestools.com/compare",
    siteName: "FieldSalesTools.com",
    images: [{ url: "https://www.fieldsalestools.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Field Sales Tools (50+) | FieldSalesTools.com",
    description:
      "Compare any two field sales tools side by side. 50+ comparisons with pricing and verdicts.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
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
