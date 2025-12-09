import { getMovieByPage } from "@/libs/service";
import { MetadataRoute } from "next";

async function fetchSlugs(baseUrl: string) {
  const pages = ["1", "2", "3", "4", "5"];

  const results = await Promise.allSettled(
    pages.map((page) => getMovieByPage(page))
  );

  const movies = results.flatMap((result) => {
    if (result.status === "fulfilled") {
      return result.value.items;
    } else {
      console.error(`Lỗi khi lấy dữ liệu trang:`, result.reason);
      return [];
    }
  });

  return movies.map((item) => ({
    url: `${baseUrl}/xemPhim/${item.slug}`,
    lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/block/highlight`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dangNhap`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gioiThieu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/timKiem`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/truyenHinh`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...slugUrls,
  ];
}
