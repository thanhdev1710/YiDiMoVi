import Main from "@/_components/Main";
import { Hero } from "../_components/Hero";
import { getMovieByPage } from "@/_libs/service";
import { ListMovie } from "../_components/ListMovie";
import { Suspense } from "react";
import { SkeletonHightLightBlock } from "@/_components/Skeleton/SkeletonHightLightBlock";

const DataBlockHighLight = [
  {
    value: "Phim Đang Chiếu",
    type: "category",
  },
  {
    value: "Việt Nam",
    type: "national",
  },
  {
    value: "Hàn Quốc",
    type: "national",
  },
  {
    value: "Trung Quốc",
    type: "national",
  },
  {
    value: "Âu Mỹ",
    type: "national",
  },
  {
    value: "Hoạt hình",
    type: "movie-genre",
  },
  {
    value: "Hành động",
    type: "movie-genre",
  },
  {
    value: "Kinh dị",
    type: "movie-genre",
  },
  {
    value: "Siêu Anh Hùng",
    type: "search",
  },
  {
    value: "Tình cảm",
    type: "movie-genre",
  },
  {
    value: "Khoa học viễn tưởng",
    type: "movie-genre",
  },
  {
    value: "Lịch sử",
    type: "movie-genre",
  },
  {
    value: "Ấn Độ",
    type: "national",
  },
  {
    value: "Pháp",
    type: "national",
  },
  {
    value: "Anh",
    type: "national",
  },
  {
    value: "Thái Lan",
    type: "national",
  },
];

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
      {DataBlockHighLight.map((item, i) => (
        <section key={item.value + item.type}>
          <Suspense
            fallback={<SkeletonHightLightBlock name={item.value} />}
            key={item.value + item.type}
          >
            <ListMovie value={item.value} type={item.type} />
          </Suspense>
          <Suspense
            fallback={<SkeletonHightLightBlock name={item.value} />}
            key={item.value + item.type + i}
          >
            {(i + 1) % 3 === 0 && <ListMovieSub i={i.toString()} />}
          </Suspense>
        </section>
      ))}
    </Main>
  );
}

async function ListMovieSub({ i }: { i: string }) {
  const dataList = await getMovieByPage(i);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-default capitalize">
        Các bộ phim nổi bật ngày hôm nay
      </h2>
      <Hero slideList={dataList} />
    </div>
  );
}
