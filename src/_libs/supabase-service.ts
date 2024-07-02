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
  userId: Number,
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
