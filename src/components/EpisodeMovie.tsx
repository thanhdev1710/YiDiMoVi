import Image from "next/image";
import LoadingWatch from "./LoadingWatch";
import Link from "next/link";

export function EpisodeMovie({
  url,
  episode,
  curEpisodes,
  description,
  slug,
  i,
}: {
  url: string;
  episode: number;
  curEpisodes: number;
  description: string;
  slug: string;
  i: number;
}) {
  return (
    <div className="space-y-4 w-52 relative">
      <Link
        aria-label="Film"
        href={`/xemPhim/${slug}?tap=${episode}`}
        className="inline-block w-52 relative aspect-video"
      >
        <Image
          fill
          draggable={false}
          sizes="200px"
          alt={description}
          src={url}
          className="absolute object-cover brightness-50 rounded-lg"
        />
      </Link>
      <h3
        className={`text-lg font-bold ${
          curEpisodes === episode ? "text-[#38B6FF]" : ""
        }`}
      >
        Tập {episode}
      </h3>
      <p className="text-xs">{description}</p>
      {curEpisodes === episode && (
        <div className="absolute right-2 bottom-16">
          <LoadingWatch />
        </div>
      )}
      {i >= 2 && (
        <div className="absolute right-2 bottom-12 px-2 py-1 bg-[#38B6FF] text-white font-bold rounded">
          VIP
        </div>
      )}
    </div>
  );
}

export function EpisodeMovieSmall({
  episode,
  curEpisodes,
  slug,
  i,
}: {
  episode: number;
  curEpisodes: number;
  slug: string;
  i: number;
}) {
  return (
    <div
      className={`${
        curEpisodes === episode ? "bg-teal-400" : "bg-blue-300"
      } inline-block p-1 rounded text-center relative`}
    >
      <Link aria-label="Film" href={`/xemPhim/${slug}?tap=${episode}`}>
        <p className="text-sm">
          <span className="text-xs">Tập</span> {episode}
        </p>
      </Link>
      {i >= 2 && (
        <div className="absolute -right-2.5 bottom-5 px-1 py-0.5 bg-[#38B6FF] text-white text-xs rounded">
          VIP
        </div>
      )}
    </div>
  );
}
