import Image from "next/image";
import LoadingWatch from "./LoadingWatch";
import Link from "next/link";

export function EpisodeMovie({
  url,
  episode,
  curEpisodes,
  description,
  slug,
}: {
  url: string;
  episode: number;
  curEpisodes: number;
  description: string;
  slug: string;
}) {
  return (
    <div className="space-y-4 w-52 relative">
      <Link
        href={`/xemPhim/${slug}?tap=${episode}`}
        className="inline-block w-52 bg-red-200 relative aspect-video"
      >
        <Image
          fill
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
    </div>
  );
}
