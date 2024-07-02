import { Episode } from "@/_interfaces/DataFilmByFilm";
import { EpisodeMovie } from "./EpisodeMovie";

export function ListEpisodeMovie({
  episodes,
  name,
  poster_url,
  curEpisodes,
  slug,
}: {
  name: string;
  poster_url: string;
  curEpisodes: number;
  episodes: Episode[];
  slug: string;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Danh sách</h2>
      <div className="flex gap-6 overflow-x-scroll pb-2">
        {episodes[0].items.map((item: any, i) => (
          <EpisodeMovie
            key={name + item.name}
            description=""
            curEpisodes={curEpisodes}
            episode={Number(item.slug.slice(item.slug.indexOf("-") + 1))}
            url={poster_url}
            slug={slug}
            i={i}
          />
        ))}
      </div>
    </section>
  );
}
