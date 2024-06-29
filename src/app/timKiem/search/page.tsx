import Main from "@/_components/Main";
import { getMovieBySearch } from "@/_libs/service";
import Image from "next/image";
import { AllMovieFetchPagination } from "@/_components/AllMovieFetchPagination";
import { Suspense } from "react";
import { type } from "os";
import { SkeletonAllMovieFetchPaginationList } from "../../../_components/SkeletonAllMovieFetchPaginationList";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string };
};

export default async function page({ searchParams }: Props) {
  const { value, page } = searchParams;
  const dataList = await getMovieBySearch(value);

  const { poster_url, name: nameMovie } = dataList.items[0];
  return (
    <Main>
      <section className="mb-8">
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden">
          <Image
            alt={nameMovie}
            src={poster_url}
            priority
            fill
            className="object-cover absolute"
          />
        </div>
        <h1 className="text-center sm:text-3xl text-2xl font-bold mt-8">
          Các bộ phim theo kết quả tìm kiếm của bạn
        </h1>
      </section>
      <Suspense
        fallback={<SkeletonAllMovieFetchPaginationList />}
        key={page + value}
      >
        <AllMovieFetchPagination
          currentPage={page}
          type={"search"}
          name={value}
        />
      </Suspense>
    </Main>
  );
}
