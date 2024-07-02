import Main from "@/_components/Main";
import { Metadata } from "next";
import { AllMovieFetchPagination } from "@/_components/AllMovieFetchPagination";
import { Suspense } from "react";
import { SkeletonAllMovieFetchPaginationList } from "@/_components/Skeleton/SkeletonAllMovieFetchPaginationList";
import { FetchMovieAll } from "@/_utils/FetchMovieAll";
import { Hero } from "@/_components/Hero";
import removeChar from "@/_utils/removeChar";
import { auth } from "@/_libs/auth";
import { getMovieFavorite } from "@/_libs/supabase-service";

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { type, value, page } = searchParams;

  const typeMovieFormat = removeChar(value, "Phim ");

  return {
    title: `Phim ${typeMovieFormat} - YidiMovi`,
    alternates: {
      canonical: "/block/highlight",
      languages: {
        vi: "/vi-VN",
      },
    },
    keywords: `phim ${typeMovieFormat}, phim bom tấn, phim chiếu rạp, xem phim online`,
    description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
    openGraph: {
      title: `Phim ${typeMovieFormat} - YidiMovi`,
      description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/block/highlight?type=${
        type || "national"
      }&value=${value || "Việt Nam"}&page=${page || "1"}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/website.png`,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Phim ${typeMovieFormat} - YidiMovi`,
      description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/website.png`,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
      ],
    },
    robots: "index, follow",
  };
}

export default async function page({ params, searchParams }: Props) {
  const { page, type, value } = searchParams;
  const session = await auth();
  let listFavorite: any[];
  if (session?.user.userId) {
    listFavorite = await getMovieFavorite(session?.user.userId);
  } else {
    listFavorite = [];
  }
  const dataList = await FetchMovieAll(
    type || "national",
    value || "Việt Nam",
    page || "1"
  );
  const typeMovieFormat = removeChar(value, "Phim ");
  return (
    <Main>
      <section className="mb-20">
        <Hero
          id={session?.user.userId}
          listFavorite={listFavorite}
          slideList={dataList}
        />
        <h1 className="sm:text-4xl text-2xl font-bold mt-10 mb-4 text-blue-default">
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
