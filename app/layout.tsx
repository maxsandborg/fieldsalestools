import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fieldsalestools.com"),
  title: {
    default: "Field Sales Software Reviews & Comparisons | FieldSalesTools.com",
    template: "%s",
  },
  description:
    "Independent reviews of 20+ field sales, D2D, and canvassing tools. Compare pricing, features, and editor scores for your team.",
  keywords: [
    "field sales software stack",
    "field sales tech stack",
    "door to door sales tools",
    "field sales CRM",
    "canvassing software",
    "field sales apps",
    "roofing sales tools",
    "solar sales tools",
    "D2D sales software",
  ],
  openGraph: {
    type: "website",
    siteName: "FieldSalesTools.com",
    title: "Field Sales Software Reviews & Comparisons | FieldSalesTools.com",
    description:
      "Discover the best software stack for your field sales team. Curated tool combinations by industry and team size.",
    images: [
      {
        url: "https://www.fieldsalestools.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FieldSalesTools.com — Curated Tech Stacks for Field Sales Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Sales Software Reviews & Comparisons | FieldSalesTools.com",
    description:
      "Discover the best software stack for your field sales team. Curated tool combinations by industry and team size.",
    images: ["https://www.fieldsalestools.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FieldSalesTools.com",
  url: "https://www.fieldsalestools.com",
  description:
    "Curated tech stacks for field sales teams by industry and team size.",
  sameAs: ["https://www.fieldsalestools.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Plausible Analytics */}
        <script
          async
          src="https://plausible.io/js/pa-PM_qMeNbU04A4AkKj0B2x.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
