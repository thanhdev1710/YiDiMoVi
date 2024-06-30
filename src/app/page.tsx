import Main from "@/_components/Main";
import { Hero } from "../_components/Hero";
import { getMovieByPage } from "@/_libs/service";
import { ListMovie } from "../_components/ListMovie";
import { SkeletonHightLightBlock } from "../_components/SkeletonHightLightBlock";
import { Suspense } from "react";

const DataBlockHighLight = [
  {
    name: "Việt Nam",
    type: "national",
  },
  {
    name: "Hàn Quốc",
    type: "national",
  },
  {
    name: "Trung Quốc",
    type: "national",
  },
  {
    name: "Âu Mỹ",
    type: "national",
  },
  {
    name: "Hoạt hình",
    type: "movie-genre",
  },
  {
    name: "Hành động",
    type: "movie-genre",
  },
  {
    name: "Kinh dị",
    type: "movie-genre",
  },
  {
    name: "Tình cảm",
    type: "movie-genre",
  },
  {
    name: "Khoa học viễn tưởng",
    type: "movie-genre",
  },
  {
    name: "Ấn Độ",
    type: "national",
  },
  {
    name: "Pháp",
    type: "national",
  },
];

export const revalidate = 86400;

export default async function page() {
  const popularFilm = await getMovieByPage("1");

  return (
    <Main>
      <Hero slideList={popularFilm} />
      <section className="mt-6 space-y-2 pb-10 border-b-2">
        <h1 className="text-2xl font-bold">
          YiDiMoVi - Trang web xem phim trực tuyến chất lượng cao
        </h1>
        <p className="text-sm">
          YiDiMoVi là địa chỉ tin cậy dành cho những người đam mê điện ảnh, mang
          đến cho bạn trải nghiệm xem phim trực tuyến tuyệt vời nhất. Với một bộ
          sưu tập phong phú gồm các bộ phim từ các thể loại đa dạng như hành
          động, kinh dị, và các sản phẩm điện ảnh nổi bật của Việt Nam và Hàn
          Quốc, YiDiMoVi cam kết mang đến cho bạn những giây phút giải trí chất
          lượng. Hãy khám phá và chia sẻ niềm đam mê điện ảnh với YiDiMoVi ngay
          hôm nay!
        </p>
      </section>
      {DataBlockHighLight.map((item) => (
        <Suspense
          key={item.name + item.type}
          fallback={<SkeletonHightLightBlock name={item.name} />}
        >
          <ListMovie name={item.name} type={item.type} />
        </Suspense>
      ))}
    </Main>
  );
}
