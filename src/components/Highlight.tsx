/* eslint-disable @typescript-eslint/no-explicit-any */
import Main from "@/components/Main";
import { Metadata } from "next";
import { AllMovieFetchPagination } from "@/components/AllMovieFetchPagination";
import { Suspense } from "react";
import { SkeletonAllMovieFetchPaginationList } from "@/components/Skeleton/SkeletonAllMovieFetchPaginationList";
import { FetchMovieAll } from "@/utils/FetchMovieAll";
import { Hero } from "@/components/Hero";
import removeChar from "@/utils/removeChar";
import { Session } from "next-auth";

type Props = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ [key: string]: string }>;
  session: Session | null;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { type, value, page } = await searchParams;

  const typeMovieFormat = removeChar(value, "Phim ");

  return {
    title: `Phim ${typeMovieFormat} - YidiMovi`,
    alternates: {
      canonical: "/block/highlight",
    },
    keywords: `phim ${typeMovieFormat}, phim bom tấn, phim chiếu rạp, xem phim online`,
    description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
    openGraph: {
      title: `Phim ${typeMovieFormat} - YidiMovi`,
      description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/block/highlight?type=${
        type || "national"
      }&value=${value || "Việt Nam"}&page=${page || "1"}`,
      type: "website",
      images: {
        url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/images/website.png`,
        width: 1200,
        height: 630,
        alt: "YiDiMoVi Website",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `Phim ${typeMovieFormat} - YidiMovi`,
      description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      images: {
        url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/images/website.png`,
        width: 1200,
        height: 630,
        alt: "YiDiMoVi Website",
      },
    },
    robots: "index, follow",
  };
}

export default async function Highlight({ searchParams, session }: Props) {
  const {
    page = "1",
    type = "national",
    value = "Việt Nam",
  } = await searchParams;
  const dataList = await FetchMovieAll(type, value, "1");
  const typeMovieFormat = removeChar(value, "Phim ");

  return (
    <Main>
      <section className="mb-20">
        <Hero
          userId={session?.user?.userId}
          listFavorite={[]}
          slideList={dataList}
        />
        <h1 className="sm:text-4xl text-2xl font-bold mt-10 mb-4 text-[#38B6FF]">
          Phim {typeMovieFormat}
        </h1>
        <p>
          Khám phá các bộ phim {typeMovieFormat.toLowerCase()} hấp dẫn nhất trên
          YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom
          tấn.
        </p>
      </section>
      <Suspense
        key={page + type + value}
        fallback={<SkeletonAllMovieFetchPaginationList />}
      >
        <AllMovieFetchPagination page={page} type={type} value={value} />
      </Suspense>
    </Main>
  );
}
