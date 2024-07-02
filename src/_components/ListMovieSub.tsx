import { Hero } from "../_components/Hero";
import { getMovieByPage } from "@/_libs/service";

export async function ListMovieSub({
  i,
  id,
  listFavorite,
}: {
  i: string;
  id: number | null | undefined;
  listFavorite: any;
}) {
  const dataList = await getMovieByPage(i);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-default capitalize">
        Các bộ phim nổi bật ngày hôm nay
      </h2>
      <Hero listFavorite={listFavorite} id={id} slideList={dataList} />
    </div>
  );
}
