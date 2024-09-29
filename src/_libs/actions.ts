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
  userId: number,
  name: string,
  slug: string,
  image: string
) {
  const newMovieFavorite = {
    userId,
    name,
    slug,
    image,
  };

  const listMovie = await getMovieFavorite(userId);
  const isAlreadyExist = listMovie.find((item) => item.name === name);

  let type;
  let error;

  if (isAlreadyExist) {
    error = await deleteMovieFavorite(userId, name, slug);
    type = "delete";
  } else {
    const { error: errorInsert } = await supabase
      .from("listMovieFavorite")
      .insert([newMovieFavorite]);
    error = errorInsert;
    type = "insert";
  }
  revalidatePath("/taiKhoan/danhSachYeuThich", "page");
  revalidatePath(`/xemPhim/${slug}`, "page");
  return { error, type };
}

export async function deleteMovieFavorite(
  userId: number,
  name: string,
  slug: string
) {
  try {
    const { error } = await supabase
      .from("listMovieFavorite")
      .delete()
      .eq("userId", userId)
      .eq("name", name)
      .single();

    if (error) throw new Error(error.message);

    redirect("/taiKhoan/danhSachYeuThich");
  } catch (error) {
    throw error;
  } finally {
    revalidatePath(`/xemPhim/${slug}`, "page");
    revalidatePath("/taiKhoan/danhSachYeuThich", "page");
  }
}

export async function deleteMovieHistory(
  userId: number,
  name: string,
  slug: string
) {
  try {
    const { error } = await supabase
      .from("movieViewingHistory")
      .delete()
      .eq("userId", userId)
      .eq("name", name)
      .single();

    if (error) throw new Error(error.message);

    redirect("/taiKhoan/lichSuXem");
  } catch (error) {
    throw error;
  } finally {
    revalidatePath(`/xemPhim/${slug}`, "page");
    revalidatePath("/taiKhoan/lichSuXem", "page");
  }
}
