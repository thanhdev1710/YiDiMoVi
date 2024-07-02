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
          curEpisodes === episode ? "text-blue-default" : ""
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
        <div className="absolute right-2 bottom-12 px-2 py-1 bg-blue-default text-white font-bold rounded">
          VIP
        </div>
      )}
    </div>
  );
}
