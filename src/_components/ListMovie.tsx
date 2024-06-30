import { FetchMovieAll } from "@/_utils/FetchMovieAll";
import { SwiperMovie } from "./SwiperMovie";
import Link from "next/link";

export async function ListMovie({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  const dataList = await FetchMovieAll(type, name);
  return (
    <section className="my-20 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Phim {name}</h2>
        <Link
          href={`/block/highlight?type=${type}&name=${name}&page=1`}
          className="hover:text-blue-default text-sm"
        >
          Xem tất cả
        </Link>
      </div>
      <SwiperMovie dataList={dataList} />
    </section>
  );
}
