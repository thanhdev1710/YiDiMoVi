"use server";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import image from "next/image";

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
  id: Number,
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

  const { error } = await supabase
    .from("listMovieFavorite")
    .insert([newMovieFavorite]);
  if (error) {
    console.error(error);
  }
  return error;
}

export async function deleteMovieFavorite(id: number, name: string) {
  const { error } = await supabase
    .from("listMovieFavorite")
    .delete()
    .eq("id", id)
    .eq("name", name)
    .single();
  if (error) {
    console.error(error);
  }
  return error;
}
