import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env["NEXT_PUBLIC_APP_DOMAIN"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Không cần crawl API
          "/_next/", // Folder build
          "/static/", // Nếu có static assets
          "/timKiem*", // Search results không SEO
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
