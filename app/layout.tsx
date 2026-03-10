import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Sales Tools — The #1 Directory for D2D & Field Sales Software",
  description:
    "Compare the best field sales and door-to-door software tools. Honest reviews, pricing, and comparisons of SPOTIO, SalesRabbit, Badger Maps, and more.",
  keywords:
    "field sales software, D2D software, door to door sales app, canvassing software, territory management, sales rabbit, spotio",
  openGraph: {
    title: "Field Sales Tools — The #1 Directory for D2D & Field Sales Software",
    description:
      "Compare the best field sales and door-to-door software tools. Honest reviews and pricing.",
    url: "https://fieldsalestools.com",
    siteName: "FieldSalesTools.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
