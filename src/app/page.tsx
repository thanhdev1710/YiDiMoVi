import Main from "@/_components/Main";
import { Hero } from "../_components/Hero";
import { getMovieByPage } from "@/_libs/service";
import { ListMovie } from "../_components/ListMovie";
import { SkeletonHightLightBlock } from "../_components/SkeletonHightLightBlock";
import { Suspense } from "react";

export const revalidate = 86400;

export default async function page() {
  const popularFilm = await getMovieByPage("1");

  return (
    <Main>
      <Hero slideList={popularFilm} />
      <section className="mt-6 space-y-2 pb-4 border-b-2">
        <h1 className="text-2xl font-bold">
          YiDiMoVi - Trang web xem phim trực tuyến chất lượng cao
        </h1>
        <p className="text-sm ">
          YiDiMoVi là địa chỉ tin cậy dành cho những người đam mê điện ảnh, mang
          đến cho bạn trải nghiệm xem phim trực tuyến tuyệt vời nhất. Với một bộ
          sưu tập phong phú gồm các bộ phim từ các thể loại đa dạng như hành
          động, kinh dị, và các sản phẩm điện ảnh nổi bật của Việt Nam và Hàn
          Quốc, YiDiMoVi cam kết mang đến cho bạn những giây phút giải trí chất
          lượng. Hãy khám phá và chia sẻ niềm đam mê điện ảnh với YiDiMoVi ngay
          hôm nay!
        </p>
      </section>
      <Suspense fallback={<SkeletonHightLightBlock name="Việt Nam" />}>
        <ListMovie slug="Việt Nam%National" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Hàn Quốc" />}>
        <ListMovie slug="Hàn Quốc%National" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Trung Quốc" />}>
        <ListMovie slug="Trung Quốc%National" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Âu Mỹ" />}>
        <ListMovie slug="Âu Mỹ%National" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Hoạt hình" />}>
        <ListMovie slug="Hoạt hình%Movie Genre" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Hành động" />}>
        <ListMovie slug="Hành động%Movie Genre" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Kinh dị" />}>
        <ListMovie slug="Kinh dị%Movie Genre" />
      </Suspense>
      <Suspense fallback={<SkeletonHightLightBlock name="Tình cảm" />}>
        <ListMovie slug="Tình cảm%Movie Genre" />
      </Suspense>
    </Main>
  );
}
