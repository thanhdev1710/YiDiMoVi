import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.yididev.online";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${baseUrl}/sitemap.xml`, "https://yididev.online/sitemap.xml"],
  };
}
