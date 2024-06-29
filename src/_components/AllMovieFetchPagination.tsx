import { RootApiFilmBySearch } from "@/_interfaces/DataFilmBySearch";
import RootApiFilmBySlug from "@/_interfaces/DataFilmBySlug";
import { PaginationPage } from "./PaginationPage";
import {
  getMovieByNational,
  getMovieBySearch,
  getMovieBySlugAndPage,
} from "@/_libs/service";
import removeAccents from "@/_utils/removeAccents";
import Image from "next/image";
import Link from "next/link";

export async function AllMovieFetchPagination({
  type,
  name,
  currentPage,
}: {
  type: string | string[] | undefined;
  name: string;
  currentPage: string;
}) {
  const nameFormat = removeAccents(name);
  const dataList =
    type === "search"
      ? await getMovieBySearch(name)
      : type === "National"
      ? await getMovieByNational(nameFormat, currentPage)
      : await getMovieBySlugAndPage(nameFormat, currentPage);
  const { total_page } = dataList.paginate;
  const { items } = dataList;
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[48px_24px]">
        {items.map((item) => (
          <article key={item.name}>
            <Link href={`/xemPhim/${item.slug}`} className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  fill
                  className="absolute object-cover"
                  alt={`Ảnh phim ${item.name}`}
                  src={item.poster_url}
                />
              </div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-xs">{item.description.slice(0, 160)}...</p>
            </Link>
          </article>
        ))}
      </div>

      <PaginationPage totalPage={total_page} name={name} type={type} />
    </section>
  );
}
