import { getMovieByPage } from "@/libs/service";
import { MetadataRoute } from "next";

export const revalidate = 86400; // 24 giờ

async function fetchSlugs(baseUrl: string) {
  const pages = Array.from({ length: 100 }, (_, i) => `${i + 1}`);

  const results = await Promise.allSettled(
    pages.map((page) => getMovieByPage(page))
  );

  const movies = results.flatMap((result) => {
    if (result.status === "fulfilled") return result.value.items;
    console.error("Lỗi khi lấy dữ liệu trang:", result.reason);
    return [];
  });

  return movies.map((item) => ({
    url: `${baseUrl}/xemPhim/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env["NEXT_PUBLIC_APP_DOMAIN"] || "";
  const slugUrls = await fetchSlugs(baseUrl);

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/block/highlight`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dangNhap`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gioiThieu`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/timKiem`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/truyenHinh`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...slugUrls,
  ];
}
