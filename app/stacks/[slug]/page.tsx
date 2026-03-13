import type { Metadata } from "next";
import { stacks, getStack } from "../../../data/stacks";
import { notFound } from "next/navigation";
import StackPageClient from "./StackPageClient";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stack = getStack(slug);
  if (!stack) return {};
  const url = `https://www.fieldsalestools.com/stacks/${stack.slug}`;
  return {
    title: stack.title,
    description: stack.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: stack.headline,
      description: stack.metaDescription,
      type: "article",
      url,
      siteName: "FieldSalesTools.com",
      images: [
        {
          url: "https://www.fieldsalestools.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${stack.title} — FieldSalesTools.com`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: stack.title,
      description: stack.metaDescription,
      images: ["https://www.fieldsalestools.com/og-image.png"],
    },
  };
}

// ─── Page (server) ─────────────────────────────────────────────────────────────
export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stack = getStack(slug);
  if (!stack) notFound();

  const pageUrl = `https://www.fieldsalestools.com/stacks/${stack.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        url: pageUrl,
        headline: stack.headline,
        description: stack.metaDescription,
        datePublished: stack.lastUpdated,
        dateModified: stack.lastUpdated,
        image: "https://www.fieldsalestools.com/og-image.png",
        author: { "@type": "Organization", name: "FieldSalesTools.com", url: "https://www.fieldsalestools.com" },
        publisher: {
          "@type": "Organization",
          name: "FieldSalesTools.com",
          url: "https://www.fieldsalestools.com",
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
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
            name: stack.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: stack.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
      <StackPageClient stack={stack} />
    </>
  );
}
