import { PaginationPage } from "./PaginationPage";
import Image from "next/image";
import Link from "next/link";
import { FetchMovieAll } from "../utils/FetchMovieAll";

export async function AllMovieFetchPagination({
  type,
  value,
  page,
}: {
  type: string;
  value: string;
  page: string;
}) {
  const [dataList1, dataList2] = await Promise.all([
    FetchMovieAll(type, value, page),
    FetchMovieAll(type, value, page + 1),
  ]);
  const { total_page: totalPage1 } = dataList1.paginate;
  const { items: items1 } = dataList1;
  const { total_page: totalPage2 } = dataList2.paginate;
  const { items: items2 } = dataList2;

  const totalPage = Math.max(totalPage1, totalPage2);
  const totalItems = [...items1, ...items2];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px_24px] mb-8">
        {totalItems.map((item) => (
          <article key={item.slug}>
            <Link
              aria-label="Film"
              href={`/xemPhim/${item.slug}`}
              className="space-y-4"
            >
              <Image
                width={300}
                height={200}
                className="object-cover w-full h-auto aspect-video rounded-md"
                loading="lazy"
                quality={50}
                alt={`Ảnh phim ${item.name}`}
                src={item.poster_url}
              />
              <h2 className="text-xl font-bold line-clamp-1">{item.name}</h2>
              <p className="text-xs line-clamp-2">
                {item.description?.slice(0, 160)}...
              </p>
            </Link>
          </article>
        ))}
      </div>

      <PaginationPage totalPage={totalPage} name={value} type={type} />
    </section>
  );
}
