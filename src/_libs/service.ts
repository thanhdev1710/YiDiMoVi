import RootApiFilmByFilm from "@/_interfaces/DataFilmByFilm";
import { RootApiFilmBySearch } from "@/_interfaces/DataFilmBySearch";
import RootApiFilmBySlug from "@/_interfaces/DataFilmBySlug";
import RootApiFilmNewUpdate from "@/_interfaces/DataFilmNewUpdateProps";
import { notFound } from "next/navigation";
const URL = process.env.NEXT_PUBLIC_APP_API_FILM;

export async function getMovieByPage(
  page: string
): Promise<RootApiFilmNewUpdate> {
  try {
    const res = await fetch(`${URL}/films/phim-moi-cap-nhat?page=${page}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data.items) notFound();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMovieBySlugAndPage(
  slug: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/the-loai/${slug}?page=${page}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMovieByFilm(slug: string): Promise<RootApiFilmByFilm> {
  try {
    const res = await fetch(`${URL}/film/${slug}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMovieBySearch(
  search: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/search?keyword=${search}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMovieByNational(
  national: string,
  page: string
): Promise<RootApiFilmBySearch> {
  try {
    const res = await fetch(`${URL}/films/quoc-gia/${national}?page=${page}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
