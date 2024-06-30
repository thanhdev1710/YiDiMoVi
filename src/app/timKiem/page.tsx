import { DescriptionMovie } from "@/_components/DescriptionMovie";
import Main from "@/_components/Main";
import { Button } from "@/_components/ui/button";
import { getMovieByPage } from "@/_libs/service";
import Image from "next/image";
import Link from "next/link";
import { SearchItem } from "../../_components/SearchItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN || ""),
  alternates: {
    canonical: "/timKiem",
    languages: {
      vi: "/vi-VN",
    },
  },
  title: {
    template: "%s | YiDiMoVi - Trang web xem phim trực tuyến",
    default: "YiDiMoVi | YiDiMoVi - Trang web xem phim trực tuyến",
  },
  description:
    "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
  openGraph: {
    title: "YiDiMoVi - Trang web xem phim trực tuyến",
    description:
      "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
    url: process.env.NEXT_PUBLIC_APP_DOMAIN + "/timKiem",
    type: "website",
    images: [
      {
        url: `/images/website.png`,
        width: 1200,
        height: 630,
        alt: "YiDiMoVi Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YiDiMoVi - Trang web xem phim trực tuyến",
    description:
      "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
    images: [
      {
        url: `/images/website.png`,
        width: 1200,
        height: 630,
        alt: "YiDiMoVi Website",
      },
    ],
  },
  robots: "index, follow",
};

export default async function page() {
  const [dataList1, dataList2] = await Promise.all([
    getMovieByPage("1"),
    getMovieByPage("2"),
  ]);
  const { items: items1 } = dataList1;
  const { items: items2 } = dataList2;

  return (
    <Main>
      <SearchItem dataDefault={dataList1} />
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-40">
        <div className="lg:col-span-2">
          <h2 className="font-bold text-2xl mb-5">Xu hướng gần đây</h2>
          <div className="space-y-4">
            {items2.map((item) => (
              <div className="flex gap-4" key={item.name}>
                <Link
                  href={`/xemPhim/${item.slug}`}
                  className="relative aspect-video min-w-52 rounded-lg overflow-hidden"
                >
                  <Image
                    className="absolute object-cover"
                    fill
                    sizes="208px"
                    alt={item.name}
                    src={item.poster_url}
                  />
                </Link>
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <DescriptionMovie
                    language={item.language}
                    quality={item.quality}
                    time={item.time}
                    total_episodes={item.total_episodes}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-5">Tìm kiếm hàng đầu</h2>
          <div className="flex flex-wrap gap-4">
            {items1.map((item) => (
              <Link key={item.name} href={`/xemPhim/${item.slug}`}>
                <Button variant="secondary">{item.name}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Main>
  );
}
