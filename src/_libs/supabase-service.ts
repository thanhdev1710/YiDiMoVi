import { supabase } from "./supabase";

interface PropsMovieFavorite {
  id: number;
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
  id: Number,
  name: string,
  slug: string,
  image: string
) {
  const newMovieHistory = {
    id,
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
  id: number
): Promise<PropsMovieFavorite[]> {
  const { data, error } = await supabase
    .from("movieViewingHistory")
    .select("id,name,slug,image")
    .eq("id", id)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Lấy dữ liệu lịch sử xem thất bại");

  return data;
}

export async function getMovieFavorite(
  id: number
): Promise<PropsMovieFavorite[]> {
  const { data, error } = await supabase
    .from("listMovieFavorite")
    .select("id,name,slug,image")
    .eq("id", id)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Lấy dữ liệu danh sách yêu thích thất bại");

  return data;
}
