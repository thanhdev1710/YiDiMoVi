/* eslint-disable @typescript-eslint/no-explicit-any */
import { DescriptionMovie } from "@/components/DescriptionMovie";
import { FavoriteAndShare } from "@/components/FavoriteAndShare";
import Main from "@/components/Main";
import VideoEmbed from "@/components/VideoEmbed";
import { getMovieByFilm } from "@/libs/service";
import { Dot } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { ListEpisodeMovie } from "../../../components/ListEpisodeMovie";
import RelatedMovies from "../../../components/RelatedMovies";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { SkeletonHightLightBlock } from "@/components/Skeleton/SkeletonHightLightBlock";
import {
  createMovieViewingHistory,
  getMovieFavorite,
} from "@/libs/supabase-service";
import { auth } from "@/libs/auth";
import Link from "next/link";
import MovingRating from "@/components/MovingRating";
import CommentMovie from "@/components/CommentMovie";
import MoviePlayer from "@/components/VideoHLS";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const data = await getMovieByFilm(slug);
  const { poster_url, description, name } = data.movie || {
    poster_url: "",
    name: "",
    description: "No description available",
  };
  const previousImages = (await parent).openGraph?.images || [];
  const absolutePosterUrl = poster_url.startsWith("http")
    ? poster_url
    : `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}${poster_url}`;
  const absoluteUrl = `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/xemPhim/${slug}`;

  return {
    title: `Phim ${name} - YidiMovi`,
    keywords: `phim ${name}, phim bom tấn, phim chiếu rạp, xem phim online`,
    alternates: {
      canonical: `xemPhim/${slug}`,
    },
    description: `${description}`,
    openGraph: {
      title: `Phim ${name} - YidiMovi`,
      description: `${description}`,
      url: absoluteUrl,
      type: "website",
      images: [
        {
          url: absolutePosterUrl,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Phim ${name} - YidiMovi`,
      description: `${description}`,
      images: [
        {
          url: absolutePosterUrl,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
        ...previousImages,
      ],
    },
    robots: "index, follow",
  };
}

export default async function page(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const session = await auth();
  let movie;
  let listFavoriteAlready: any[];
  const { slug } = params;
  const { serverName } = searchParams;

  const tap = searchParams["tap"] ? Number(searchParams["tap"]) : 1;
  const data = await getMovieByFilm(slug);

  if (!session?.user?.email && tap >= 3) redirect("/dangNhap");

  const {
    total_episodes,
    episodes,
    name,
    language,
    quality,
    time,
    category,
    description,
    casts,
    poster_url,
    original_name,
  } = data.movie;

  if (tap > total_episodes) {
    notFound();
  }

  const indexServerName =
    episodes.findIndex((item) => item.server_name === serverName) === -1
      ? 0
      : episodes.findIndex((item) => item.server_name === serverName);

  if (total_episodes > 1) {
    movie = {
      name: episodes[indexServerName]!.items[tap - 1]!.name,
      embed: episodes[indexServerName]!.items[tap - 1]!.embed,
      m3u8: episodes[indexServerName]!.items[tap - 1]!.m3u8,
    };
  } else {
    movie = {
      name: episodes[indexServerName]!.items[0]!.name,
      embed: episodes[indexServerName]!.items[0]!.embed,
      m3u8: episodes[indexServerName]!.items[0]!.m3u8,
    };
  }

  const formatMovie = category["1"];
  const categoryMovie = category["2"];
  const yearMovie = category["3"];
  const nationMovie = category["4"];
  const slugList = categoryMovie!.list.map((item) => item.name);

  if (session?.user?.userId) {
    const error = await createMovieViewingHistory(
      session?.user?.userId,
      name,
      slug,
      tap,
      poster_url
    );

    listFavoriteAlready = (await getMovieFavorite(session?.user?.userId)).map(
      (item) => item.name
    );

    if (error) {
      console.log("Lưu lịch sử xem thất bại");
    } else {
      console.log("Lưu lịch sử xem thành công");
    }
  } else {
    listFavoriteAlready = [];
  }

  return (
    <Main>
      <VideoEmbed url={movie.embed} />
      {/* <MoviePlayer m3u8Url={movie.m3u8} movieId={movie.m3u8} /> */}
      <div className="flex gap-4 items-center mt-4">
        {data.movie.episodes.map((item) => (
          <Link
            className="px-2 py-1 text-sm bg-[#38B6FF] rounded-md text-white font-semibold"
            href={`/xemPhim/${slug}?serverName=${encodeURIComponent(
              item.server_name
            )}`}
            key={item.server_name}
          >
            {item.server_name}
          </Link>
        ))}
      </div>
      <section className="mt-10 space-y-2 pt-5 border-t-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h3>{original_name}</h3>
        <Suspense>
          <MovingRating slug={slug} session={session} />
        </Suspense>
        <div className="flex items-center">
          <p className="font-bold text-[#38B6FF] text-lg">
            {formatMovie!.list.map((item) => item.name).join(", ")}
          </p>
          <Dot />
          <DescriptionMovie
            className="mb-0"
            language={language}
            quality={quality}
            time={time}
            total_episodes={total_episodes}
          />
        </div>
        <p className="text-sm">{description}</p>
        <div className="space-x-2 my-6!">
          <FavoriteAndShare
            listFavoriteAlready={listFavoriteAlready}
            image={poster_url}
            name={name}
            slug={slug}
            userId={session?.user?.userId}
          />
        </div>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Diễn viên:</span>
          {casts}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Quốc gia:</span>
          {nationMovie!.list.map((item) => item.name).join(", ")}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Năm:</span>
          {yearMovie!.list.map((item) => item.name).join(", ")}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Thể loại:</span>
          {categoryMovie!.list.map((item) => item.name).join(", ")}
        </p>
      </section>
      {total_episodes > 1 && (
        <ListEpisodeMovie
          slug={slug}
          episodes={episodes}
          curEpisodes={tap}
          name={name}
          poster_url={poster_url}
        />
      )}
      <Suspense
        key={slugList.join("")}
        fallback={<SkeletonHightLightBlock name="Nội dung liên quan" />}
      >
        <RelatedMovies slugList={slugList} />
      </Suspense>
      <Suspense>
        <CommentMovie slug={slug} userId={session?.user?.userId} />
      </Suspense>
    </Main>
  );
}
