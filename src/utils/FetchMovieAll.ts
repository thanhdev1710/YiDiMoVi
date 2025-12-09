import {
  getMovieByCat,
  getMovieByNational,
  getMovieBySearch,
  getMovieBySlugAndPage,
} from "@/libs/service";
import removeAccents from "@/utils/removeAccents";
import { cacheLife, cacheTag } from "next/cache";

export async function FetchMovieAll(
  type: string = "national",
  name: string = "Việt Nam",
  page: string = "1"
) {
  "use cache";
  cacheLife("hours");
  cacheTag("movie-data");
  const nameFormat = removeAccents(name);
  const dataList =
    type.toLowerCase() === "national"
      ? await getMovieByNational(nameFormat, page)
      : type.toLowerCase() === "movie-genre"
      ? await getMovieBySlugAndPage(nameFormat, page)
      : type.toLowerCase() === "category"
      ? await getMovieByCat(nameFormat, page)
      : await getMovieBySearch(nameFormat, page);
  return dataList;
}
