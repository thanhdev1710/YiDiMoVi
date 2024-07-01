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
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
    throw error;
  }
}

export async function getMovieByFilm(slug: string): Promise<RootApiFilmByFilm> {
  try {
    const res = await fetch(`${URL}/film/${slug}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
    throw error;
  }
}

export async function getMovieBySearch(
  search: string,
  page: string
): Promise<RootApiFilmBySearch> {
  try {
    const res = await fetch(
      `${URL}/films/search?keyword=${search}&page=${page}`
    );
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
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
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
    throw error;
  }
}

export async function getMovieByCat(
  slug: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/danh-sach/${slug}?page=${page}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
    throw error;
  }
}

export async function getMovieByNational(
  national: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/quoc-gia/${national}?page=${page}`);
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data) throw new Error("Not found data");
    if (data.items?.length <= 0) throw new Error("Not found data");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Not found data")
      notFound();
    throw error;
  }
}

export async function getTinhThanhVN() {
  try {
    const res = await fetch("https://esgoo.net/api-tinhthanh/1/0.htm");
    if (!res.ok) throw new Error("Fetching data error");
    const data = await res.json();
    if (!data) throw new Error("Not found data");
    return data;
  } catch (error) {
    throw new Error("Lỗi lấy dữ liệu các tỉnh thành phố ở Việt Nam");
  }
}
