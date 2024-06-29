import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.yididev.online";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/block/highlight/${encodeURIComponent(
        "Việt Nam"
      )}?type=National`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/block/highlight/${encodeURIComponent(
        "Hàn Quốc"
      )}?type=National`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/block/highlight/${encodeURIComponent(
        "Kinh dị"
      )}?type=Movie Genre`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/block/highlight/${encodeURIComponent(
        "Hành động"
      )}?type=Movie Genre`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
