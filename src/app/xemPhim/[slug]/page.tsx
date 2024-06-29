import { DescriptionMovie } from "@/_components/DescriptionMovie";
import { FavoriteAndShare } from "@/_components/FavoriteAndShare";
import Main from "@/_components/Main";
import VideoEmbed from "@/_components/VideoEmbed";
import { getMovieByFilm, getMovieByPage } from "@/_libs/service";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Dot } from "lucide-react";
import { notFound } from "next/navigation";
import { ListEpisodeMovie } from "../../../_components/ListEpisodeMovie";
import RelatedMovies from "./RelatedMovies";
import { Suspense } from "react";
import LoadingWatch from "@/_components/LoadingWatch";

export async function generateStaticParams() {
  const listSlug = await getMovieByPage("1");

  return listSlug.items.map((item) => ({ slug: item.slug }));
}

export default async function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let movie;
  const { slug } = params;
  const tap = searchParams.tap ? Number(searchParams.tap) : 1;
  const data = await getMovieByFilm(slug);
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

  return (
    <Main>
      <VideoEmbed url={movie.embed} />
      <section className="mt-10 space-y-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h4 className="">Follow Your Heart</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center py-2 px-3 bg-gray-800 rounded-lg">
            <StarFilledIcon className="text-blue-default h-6 w-6 mr-2" />
            <span className="text-lg font-bold mr-1">X.X</span>
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
          <FavoriteAndShare />
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
      <Suspense key={slugList.join("")} fallback={<LoadingWatch />}>
        <RelatedMovies slugList={slugList} />
      </Suspense>
    </Main>
  );
}
