import { FetchMovieAll } from "@/utils/FetchMovieAll";
import { SwiperMovie } from "./SwiperMovie";
import Link from "next/link";
import removeChar from "@/utils/removeChar";

export async function ListMovie({
  value,
  type,
}: {
  value: string;
  type: string;
}) {
  const dataList = await FetchMovieAll(type, value);
  return (
    <div className="md:my-20 my-10 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-[#38B6FF]">
          Phim {removeChar(value, "Phim ")}
        </h2>
        <Link
          aria-label="Show all"
          href={`/block/highlight?type=${type}&value=${value}&page=1`}
          className="hover:text-[#38B6FF] text-sm"
        >
          Xem tất cả
        </Link>
      </div>
      <SwiperMovie dataList={dataList} />
    </div>
  );
}
