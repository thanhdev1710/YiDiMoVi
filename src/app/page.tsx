import Main from "@/_components/Main";
import { Hero } from "../_components/Hero";
import { getMovieByPage } from "@/_libs/service";

export default async function page() {
  const popularFilm = await getMovieByPage("1");

  return (
    <Main>
      <Hero slideList={popularFilm} />
    </Main>
  );
}
