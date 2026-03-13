import { MetadataRoute } from "next";
import { stacks } from "../data/stacks";
import { tools, getAllSlugs } from "../data/tools";
import { comparisons, getAllComparisonSlugs } from "../data/comparisons";
import { industries } from "../data/industries";
import { reviewedSlugs } from "../data/reviews";
import { getAllBestForSlugs } from "../data/best-for";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fieldsalestools.com";
  const now = new Date();

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages = [
    { url: baseUrl,                      priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/tools`,           priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/stacks`,          priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/compare`,         priority: 0.9, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/industries`,      priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`,           priority: 0.4, changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/advertise`,       priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/submit`,          priority: 0.4, changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/disclaimer`,      priority: 0.3, changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/privacy`,         priority: 0.3, changeFrequency: "yearly"  as const },
  ].map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // ── Stack guides ─────────────────────────────────────────────────────────────
  const stackUrls = stacks.map((stack) => ({
    url: `${baseUrl}/stacks/${stack.slug}`,
    lastModified: new Date(stack.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Tool review pages ────────────────────────────────────────────────────────
  const toolUrls = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Comparison pages ──────────────────────────────────────────────────────────
  const compareUrls = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Industry pages ────────────────────────────────────────────────────────────
  const industryUrls = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── Alternatives pages ────────────────────────────────────────────────────────
  const alternativeUrls = reviewedSlugs.map((slug) => ({
    url: `${baseUrl}/alternatives/${slug}-alternatives`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── Best-for buyer's guide pages ─────────────────────────────────────────────
  const bestForUrls = getAllBestForSlugs().map((slug) => ({
    url: `${baseUrl}/best/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9, // High-intent buyer pages — top priority
  }));

  return [
    ...staticPages,
    ...stackUrls,
    ...toolUrls,
    ...compareUrls,
    ...industryUrls,
    ...alternativeUrls,
    ...bestForUrls,
  ];
}
