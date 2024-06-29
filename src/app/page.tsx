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
