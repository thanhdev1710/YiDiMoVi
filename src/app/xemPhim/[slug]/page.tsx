import { DescriptionMovie } from "@/_components/DescriptionMovie";
import { FavoriteAndShare } from "@/_components/FavoriteAndShare";
import Main from "@/_components/Main";
import VideoEmbed from "@/_components/VideoEmbed";
import { getMovieByFilm, getMovieByPage } from "@/_libs/service";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Dot } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { ListEpisodeMovie } from "../../../_components/ListEpisodeMovie";
import RelatedMovies from "../../../_components/RelatedMovies";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { SkeletonHightLightBlock } from "@/_components/Skeleton/SkeletonHightLightBlock";
import {
  createMovieViewingHistory,
  getMovieFavorite,
} from "@/_libs/supabase-service";
import { auth } from "@/_libs/auth";

type Props = {
  params: { slug: string };
};

export const revalidate = 86400;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let { slug } = params;
  const data = await getMovieByFilm(slug);
  const { poster_url, description, name } = data.movie || {
    poster_url: "",
    name: "",
    description: "No description available",
  };
  const previousImages = (await parent).openGraph?.images || [];
  const absolutePosterUrl = poster_url.startsWith("http")
    ? poster_url
    : `${process.env.NEXT_PUBLIC_APP_DOMAIN}${poster_url}`;
  const absoluteUrl = `${process.env.NEXT_PUBLIC_APP_DOMAIN}/xemPhim/${slug}`;

  return {
    title: `Phim ${name} - YidiMovi`,
    keywords: `phim ${name}, phim bom tấn, phim chiếu rạp, xem phim online`,
    alternates: {
      canonical: `xemPhim/${slug}`,
      languages: {
        vi: "vi-VN",
      },
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

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();
  let movie;
  const { slug } = params;
  const tap = searchParams.tap ? Number(searchParams.tap) : 1;
  const data = await getMovieByFilm(slug);

  if (!session?.user.email && tap >= 3) redirect("/dangNhap");

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
  if (total_episodes > 1) {
    movie = {
      name: episodes[0].items[tap - 1].name,
      embed: episodes[0].items[tap - 1].embed,
    };
  } else {
    movie = {
      name: episodes[0].items[0].name,
      embed: episodes[0].items[0].embed,
    };
  }

  const formatMovie = category["1"];
  const categoryMovie = category["2"];
  const yearMovie = category["3"];
  const nationMovie = category["4"];
  const slugList = categoryMovie.list.map((item) => item.name);

  if (session?.user.userId) {
    const error = await createMovieViewingHistory(
      session?.user.userId,
      name,
      slug,
      poster_url
    );

    if (error) {
      console.error("Lưu lịch sử xem thất bại");
    } else {
      console.log("Lưu lịch sử xem thành công");
    }
  }

  const listFav = await getMovieFavorite(session?.user.userId);
  const listFavorite = listFav.map((item) => ({
    id: session?.user.userId,
    ...item,
  }));

  return (
    <Main>
      <VideoEmbed url={movie.embed} />
      <section className="mt-10 space-y-2 pt-5 border-t-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h3>{original_name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center py-2 px-3 bg-gray-800 rounded-lg">
            <StarFilledIcon className="text-blue-default h-6 w-6 mr-2" />
            <span className="text-lg font-bold mr-1 text-white">X.X</span>
            <span className="text-xs text-gray-400">(X)</span>
          </div>
          <div className="flex gap-1">
            <StarFilledIcon className="text-gray-700 h-5 w-5 hover:text-blue-default" />
            <StarFilledIcon className="text-gray-700 h-5 w-5 hover:text-blue-default" />
            <StarFilledIcon className="text-gray-700 h-5 w-5 hover:text-blue-default" />
            <StarFilledIcon className="text-gray-700 h-5 w-5 hover:text-blue-default" />
            <StarFilledIcon className="text-gray-700 h-5 w-5 hover:text-blue-default" />
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-blue-default text-lg">
            {formatMovie.list.map((item) => item.name).join(", ")}
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
        <div className="space-x-2 !my-6">
          <FavoriteAndShare
            listFavorite={listFavorite}
            id={session?.user.userId}
            image={poster_url}
            name={name}
            slug={slug}
          />
        </div>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Diễn viên:</span>
          {casts}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Quốc gia:</span>
          {nationMovie.list.map((item) => item.name).join(", ")}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Năm:</span>
          {yearMovie.list.map((item) => item.name).join(", ")}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-4 w-20 inline-block">Thể loại:</span>
          {categoryMovie.list.map((item) => item.name).join(", ")}
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
    </Main>
  );
}
