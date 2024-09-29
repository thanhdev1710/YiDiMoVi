"use client";
import { Button } from "@/_components/ui/button";
import RootApiFilmBySlug from "@/_interfaces/DataFilmBySlug";
import RootApiFilmNewUpdate from "@/_interfaces/DataFilmNewUpdateProps";
import { getMovieBySearch } from "@/_libs/service";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchItem({
  dataDefault,
}: {
  dataDefault: RootApiFilmBySlug | RootApiFilmNewUpdate;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState<
    RootApiFilmBySlug | RootApiFilmNewUpdate
  >(dataDefault);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 500;
  useEffect(() => {
    const searchTimeOut = setTimeout(async () => {
      try {
        setIsLoading(true);
        if (search) {
          const data = await getMovieBySearch(search, "1");
          setDataSearch(data);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    }, delay);

    return () => {
      clearTimeout(searchTimeOut);
    };
  }, [search, delay]);
  return (
    <section className="absolute w-full z-20 py-6 px-8 bg-gray-800 text-white rounded-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search.length > 0) {
            router.push(`/block/highlight?type=search&value=${search}`);
          }
        }}
        className="flex"
      >
        <div className="flex gap-4 items-center w-full">
          <Search />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Nhập tên phim"
            className="bg-transparent outline-none w-full px-2"
          />
        </div>
        <Button
          variant="secondary"
          className="!bg-blue-default text-lg font-bold"
        >
          Tìm kiếm
        </Button>
      </form>
      {search.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            dataSearch.items.map((item) => (
              <Link
                aria-label={item.name}
                className="w-full py-1 px-3 rounded-md hover:bg-slate-600"
                href={`/xemPhim/${item.slug}`}
                key={item.name}
              >
                {item.name}
              </Link>
            ))
          )}
        </div>
      )}
    </section>
  );
}
