"use server";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getMovieFavorite } from "./supabase-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/taiKhoan/thongTinCaNhan" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/dangNhap" });
}

export async function updateUserAction(formData: FormData) {
  const user = await auth();
  const id = user?.user.userId;
  const gender = formData.get("gender");
  const birthday = formData.get("birthday");
  const area = formData.get("area");
  const update = {
    gender,
    birthday,
    area,
  };

  try {
    const { error } = await supabase.from("users").update(update).eq("id", id);

    if (error) throw new Error(error.message);

    redirect("/taiKhoan");
  } catch (error) {
    throw error;
  } finally {
    revalidatePath("/taiKhoan/thongTinCaNhan", "page");
    revalidatePath("/taiKhoan/thongTinCaNhan/thayDoi", "page");
  }
}

export async function createMovieFavorite(
  id: number,
  name: string,
  slug: string,
  image: string
) {
  const newMovieFavorite = {
    id,
    name,
    slug,
    image,
  };

  const listMovie = await getMovieFavorite(id);
  const isAlreadyExist = listMovie.find((item) => item.name === name);

  let type;
  let error;

  if (isAlreadyExist) {
    error = await deleteMovieFavorite(id, name, slug);
    type = "delete";
  } else {
    const { error: errorInsert } = await supabase
      .from("listMovieFavorite")
      .insert([newMovieFavorite]);
    error = errorInsert;
    type = "insert";
  }
  revalidatePath("/taiKhoan/danhSachYeuThich", "page");
  revalidatePath("/", "page");
  revalidatePath(`/xemPhim/${slug}`, "page");
  return { error, type };
}

export async function deleteMovieFavorite(
  id: number,
  name: string,
  slug: string
) {
  const { error } = await supabase
    .from("listMovieFavorite")
    .delete()
    .eq("id", id)
    .eq("name", name)
    .single();
  revalidatePath("/taiKhoan/danhSachYeuThich", "page");
  revalidatePath("/", "page");
  revalidatePath(`/xemPhim/${slug}`, "page");
  return error;
}

export async function deleteMovieHistory(
  id: number,
  name: string,
  slug: string
) {
  const { error } = await supabase
    .from("movieViewingHistory")
    .delete()
    .eq("id", id)
    .eq("name", name)
    .single();
  revalidatePath("/taiKhoan/danhSachYeuThich", "page");
  revalidatePath("/", "page");
  revalidatePath(`/xemPhim/${slug}`, "page");
  return error;
}
