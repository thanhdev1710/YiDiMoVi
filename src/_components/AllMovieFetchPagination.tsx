import { PaginationPage } from "./PaginationPage";
import Image from "next/image";
import Link from "next/link";
import { FetchMovieAll } from "../_utils/FetchMovieAll";

export async function AllMovieFetchPagination({
  type,
  value,
  page,
}: {
  type: string;
  value: string;
  page: string;
}) {
  const dataList = await FetchMovieAll(type, value, page);
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
              <p className="text-xs">{item.description?.slice(0, 160)}...</p>
            </Link>
          </article>
        ))}
      </div>

      <PaginationPage totalPage={total_page} name={value} type={type} />
    </section>
  );
}
