import { getMovieByNational, getMovieBySlugAndPage } from "@/_libs/service";
import { SwiperMovie } from "./SwiperMovie";
import Link from "next/link";
import removeAccents from "@/_utils/removeAccents";

export async function ListMovie({ slug }: { slug: string }) {
  const name = slug.split("%")[0];
  const type = slug.split("%")[1];
  const nameFormat = removeAccents(name);
  const dataList =
    type === "National"
      ? await getMovieByNational(nameFormat, "1")
      : await getMovieBySlugAndPage(nameFormat, "1");
  return (
    <section className="my-20 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Phim {name}</h2>
        <Link
          href={`/block/highlight/${name}?type=${type}`}
          className="hover:text-blue-default text-sm"
        >
          Xem tất cả
        </Link>
      </div>
      <SwiperMovie dataList={dataList} />
    </section>
  );
}
