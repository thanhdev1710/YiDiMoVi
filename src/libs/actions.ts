"use server";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { updateTag } from "next/cache";
import { getMovieFavorite } from "./supabase-service";

/* SIGN IN / SIGN OUT */
export async function signInAction() {
  await signIn("google", { redirectTo: "/taiKhoan/thongTinCaNhan" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/dangNhap" });
}

/* UPDATE USER */
export async function updateUserAction(formData: FormData) {
  const user = await auth();
  const id = user?.user.userId;
  const email = user?.user.email;

  const update = {
    gender: formData.get("gender"),
    birthday: formData.get("birthday"),
    area: formData.get("area"),
  };

  try {
    const { error } = await supabase.from("users").update(update).eq("id", id);
    if (error) throw new Error(error.message);
  } catch (error) {
    throw error;
  } finally {
    if (email) updateTag(`user-${email}`); // 🔥 invalidate user cache
    redirect("/taiKhoan");
  }
}

/* FAVORITE */
export async function createMovieFavorite(
  userId: number,
  name: string,
  slug: string,
  image: string
) {
  try {
    const listMovie = await getMovieFavorite(userId);
    const isExist = listMovie.find((item) => item.name === name);

    let type;

    if (isExist) {
      await deleteMovieFavorite(userId, name);
      type = "delete";
    } else {
      const { error } = await supabase
        .from("listMovieFavorite")
        .insert([{ userId, name, slug, image }]);

      if (error) throw new Error(error.message);

      type = "insert";
    }

    return { type };
  } catch (error) {
    throw error;
  } finally {
    updateTag(`favorite-${userId}`);
  }
}

export async function deleteMovieFavorite(userId: number, name: string) {
  try {
    const { error } = await supabase
      .from("listMovieFavorite")
      .delete()
      .eq("userId", userId)
      .eq("name", name)
      .single();

    if (error) throw new Error(error.message);
  } catch (error) {
    throw error;
  } finally {
    updateTag(`favorite-${userId}`);
  }
}

/* HISTORY */
export async function deleteMovieHistory(
  userId: number,
  name: string,
  tap?: number | undefined
) {
  try {
    const { error } = await supabase
      .from("movieViewingHistory")
      .delete()
      .eq("userId", userId)
      .eq("name", name)
      .eq("tap", tap)
      .single();

    if (error) throw new Error(error.message);
  } catch (error) {
    throw error;
  } finally {
    updateTag(`history-${userId}`);
  }
}

/* RATING */
export async function updateOrInsertRating(
  slug: string,
  userId: number | null | undefined,
  rating: number
) {
  try {
    const { error, count } = await supabase
      .from("movieRating")
      .select("*", { count: "exact" })
      .eq("userId", userId)
      .eq("slug", slug);

    if (error) throw new Error("Lấy dữ liệu đánh giá phim thất bại");

    if (count === 0) {
      await supabase.from("movieRating").insert([{ userId, slug, rating }]);
    } else {
      await supabase
        .from("movieRating")
        .update({ rating })
        .eq("userId", userId)
        .eq("slug", slug);
    }
  } catch (error) {
    throw error;
  } finally {
    updateTag(`rating-${slug}`);
  }
}

/* COMMENT */
export async function insertCommentMovie(
  slug: string,
  userId: number,
  formData: FormData
) {
  try {
    const comment = formData.get("comment");
    const newComment = { slug, userId, comment };

    const { error } = await supabase.from("movieComment").insert([newComment]);
    if (error) throw new Error("Thêm bình luận thất bại");
  } catch (error) {
    throw error;
  } finally {
    updateTag(`comment-${slug}`);
  }
}
