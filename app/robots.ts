import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/disclaimer"],
    },
    sitemap: "https://www.fieldsalestools.com/sitemap.xml",
  };
}
