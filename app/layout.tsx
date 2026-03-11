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
    url: "https://www.fieldsalestools.com",
    siteName: "FieldSalesTools.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Sales Tools — The #1 Directory for D2D & Field Sales Software",
    description:
      "Compare the best field sales and door-to-door software tools. Honest reviews and pricing.",
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
  alternates: {
    canonical: "https://www.fieldsalestools.com",
  },
  verification: {
    google: "Sq04kzjr8rhtp57XI271jwngsVOt5zfJKNoVigHnDg4",
  },
};

// Site-wide JSON-LD: Organization + WebSite (with SearchAction for Google Sitelinks Search Box)
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.fieldsalestools.com/#organization",
      "name": "FieldSalesTools.com",
      "url": "https://www.fieldsalestools.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fieldsalestools.com/logo.png",
        "width": 200,
        "height": 60
      },
      "description":
        "The leading directory for field sales and door-to-door software. Honest reviews, pricing comparisons, and expert recommendations for D2D sales teams.",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://www.fieldsalestools.com/#website",
      "url": "https://www.fieldsalestools.com",
      "name": "FieldSalesTools.com",
      "description":
        "The #1 directory for field sales and D2D software tools. Compare SPOTIO, SalesRabbit, Badger Maps, and 17 more platforms.",
      "publisher": {
        "@id": "https://www.fieldsalestools.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.fieldsalestools.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {/* Plausible Analytics — privacy-friendly, GDPR-compliant, no cookie banner needed */}
        <script async src="https://plausible.io/js/pa-PM_qMeNbU04A4AkKj0B2x.js" />
        <script dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
