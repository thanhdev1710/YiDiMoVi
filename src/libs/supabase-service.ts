/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "./supabase";

interface PropsMovieFavorite {
  userId: number;
  name: string;
  slug: string;
  image: string;
}

export async function getUser(email: string) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newUser: any) {
  const { error } = await supabase.from("users").insert([newUser]);
  if (error) throw new Error("Tạo tài khoản không thành công");
}

export async function createMovieViewingHistory(
  userId: number,
  name: string,
  slug: string,
  image: string
) {
  const newMovieHistory = {
    userId,
    name,
    slug,
    image,
  };
  const { error } = await supabase
    .from("movieViewingHistory")
    .insert([newMovieHistory]);

  return error;
}

export async function getMovieViewingHistory(
  userId: number
): Promise<PropsMovieFavorite[]> {
  const { data, error } = await supabase
    .from("movieViewingHistory")
    .select("userId,name,slug,image")
    .eq("userId", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Lấy dữ liệu lịch sử xem thất bại");

  return data;
}

export async function getMovieFavorite(
  userId: number
): Promise<PropsMovieFavorite[]> {
  const { data, error } = await supabase
    .from("listMovieFavorite")
    .select("userId,name,slug,image")
    .eq("userId", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Lấy dữ liệu danh sách yêu thích thất bại");

  return data;
}

export async function getMovieRating(
  slug: string,
  userId: number | null | undefined
) {
  const { data, error } = await supabase
    .from("movieRating")
    .select("*")
    .eq("slug", slug);

  if (error) throw new Error("Lấy dữ liệu đánh giá phim thất bại");

  let ratingUser = 0;
  if (userId) {
    ratingUser = data.filter((item) => item.userId === userId)[0]?.rating || 0;
  }
  const length = data.length;
  const avg = data.reduce((prev, cur) => (prev += cur.rating), 0) / length;

  return { length, avg, ratingUser };
}

export async function getCommentMovie(slug: string) {
  const { data, error } = await supabase
    .from("movieComment")
    .select(
      `
    id, comment, slug, created_at,updated_at, 
    users (name,image,email)
  `
    )
    .eq("slug", slug)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Lấy dữ liệu đánh giá phim thất bại");

  return data;
}
