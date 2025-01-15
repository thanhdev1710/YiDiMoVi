"use client";
import { Episode } from "@/_interfaces/DataFilmByFilm";
import { EpisodeMovie, EpisodeMovieSmall } from "./EpisodeMovie";
import { useState } from "react";

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
  const [search, setSearch] = useState(0);
  const data =
    search !== 0
      ? episodes[0].items.filter((item) =>
          Number(item.slug.slice(item.slug.indexOf("-") + 1))
            .toString()
            .includes(search.toString())
        )
      : episodes[0].items;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Danh sách</h2>
      <div className="flex gap-2 mb-8 items-center">
        <label htmlFor="page">Nhập số trang muốn tìm:</label>
        <input
          id="page"
          type="number"
          placeholder="xxxxx"
          onChange={(e) => setSearch(Number(e.currentTarget.value))}
          className="py-1 px-2 bg-gray-200 rounded dark:bg-gray-800"
        />
      </div>
      <div
        className={`pb-2 ${
          episodes[0].items.length < 30
            ? "flex gap-6 overflow-x-scroll"
            : "grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-6"
        }`}
      >
        {episodes[0].items.length < 30
          ? data.map((item: any, i) => (
              <EpisodeMovie
                key={name + item.name}
                description=""
                curEpisodes={curEpisodes}
                episode={Number(item.slug.slice(item.slug.indexOf("-") + 1))}
                url={poster_url}
                slug={slug}
                i={i}
              />
            ))
          : data.map((item: any, i) => (
              <EpisodeMovieSmall
                key={name + item.name}
                curEpisodes={curEpisodes}
                episode={Number(item.slug.slice(item.slug.indexOf("-") + 1))}
                slug={slug}
                i={i}
              />
            ))}
      </div>
    </section>
  );
}
