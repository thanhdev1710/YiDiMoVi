import Main from "@/_components/Main";
import { Metadata } from "next";
import Image from "next/image";
import { AllMovieFetchPagination } from "@/_components/AllMovieFetchPagination";
import { Suspense } from "react";
import { SkeletonAllMovieFetchPaginationList } from "@/_components/SkeletonAllMovieFetchPaginationList";
import { FetchMovieAll } from "@/_utils/FetchMovieAll";

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { page, type, value } = searchParams;
  const typeMovie = value.startsWith("Phim")
    ? value.replace("Phim ", "")
    : value;
  const typeMovieFormat = typeMovie
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
  return {
    title: `Phim ${typeMovieFormat} - YidiMovi`,
    keywords: `phim ${typeMovieFormat}, phim bom tấn, phim chiếu rạp, xem phim online`,
    description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
    openGraph: {
      title: `Phim ${typeMovieFormat} - YidiMovi`,
      description: `Khám phá các bộ phim ${typeMovieFormat} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/block/highlight/${typeMovieFormat}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_APP_DOMAIN || ""}/images/website.png`,
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
          url: `${process.env.NEXT_APP_DOMAIN || ""}/images/website.png`,
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
  const dataList = await FetchMovieAll(type, value, page);
  const { poster_url, name: nameMovie } = dataList.items[0];
  const typeMovie = value.startsWith("Phim")
    ? value.replace("Phim ", "")
    : value;
  const typeMovieFormat = typeMovie
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
  return (
    <Main>
      <section className="mb-8">
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden">
          <Image
            alt={nameMovie}
            src={poster_url}
            priority
            fill
            className="object-cover absolute"
          />
        </div>
        <h1 className="text-center sm:text-3xl text-2xl font-bold mt-8">
          Phim {typeMovieFormat}
        </h1>
      </section>
      <Suspense
        fallback={<SkeletonAllMovieFetchPaginationList />}
        key={page + value}
      >
        <AllMovieFetchPagination page={page} type={type} value={value} />
      </Suspense>
    </Main>
  );
}
