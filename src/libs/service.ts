import RootApiFilmByFilm from "@/interfaces/DataFilmByFilm";
import { RootApiFilmBySearch } from "@/interfaces/DataFilmBySearch";
import RootApiFilmBySlug from "@/interfaces/DataFilmBySlug";
import RootApiFilmNewUpdate from "@/interfaces/DataFilmNewUpdateProps";
import { notFound } from "next/navigation";
const URL = process.env["NEXT_PUBLIC_APP_API_FILM"];

export async function getMovieByPage(
  page: string
): Promise<RootApiFilmNewUpdate> {
  try {
    const res = await fetch(`${URL}/films/phim-moi-cap-nhat?page=${page}`, {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ các phim mới cập nhật");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
      notFound();
    throw error;
  }
}

export async function getMovieByFilm(slug: string): Promise<RootApiFilmByFilm> {
  try {
    const res = await fetch(`${URL}/film/${slug}`, {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ phim");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
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
      `${URL}/films/search?keyword=${search}&page=${page}`,
      {
        next: { revalidate: 3600 },
        cache: "force-cache",
      }
    );
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ tìm kiếm theo tên phim");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
      notFound();
    throw error;
  }
}

export async function getMovieBySlugAndPage(
  slug: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/the-loai/${slug}?page=${page}`, {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ các thể loại phim");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
      notFound();
    throw error;
  }
}

export async function getMovieByCat(
  slug: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/danh-sach/${slug}?page=${page}`, {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ các danh sách");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
      notFound();
    throw error;
  }
}

export async function getMovieByNational(
  national: string,
  page: string
): Promise<RootApiFilmBySlug> {
  try {
    const res = await fetch(`${URL}/films/quoc-gia/${national}?page=${page}`, {
      next: { revalidate: 3600 },
      cache: "force-cache",
    });
    if (!res.ok)
      throw new Error("Lỗi lấy dữ liệu từ các phim lấy theo quốc gia");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    if (data.items?.length <= 0) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy dữ liệu")
      notFound();
    throw error;
  }
}

export async function getTinhThanhVN() {
  try {
    const res = await fetch("https://esgoo.net/api-tinhthanh/1/0.htm", {
      next: { revalidate: 15552000 },
      cache: "force-cache",
    });
    if (!res.ok) throw new Error("Lỗi lấy dữ liệu từ các tỉnh thành Việt Nam");
    const data = await res.json();
    if (!data) throw new Error("Không tìm thấy dữ liệu");
    return data;
  } catch {
    throw new Error("Lỗi lấy dữ liệu các tỉnh thành phố ở Việt Nam");
  }
}
