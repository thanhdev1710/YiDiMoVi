/* eslint-disable @typescript-eslint/no-explicit-any */
import { insertCommentMovie } from "@/libs/actions";
import { getCommentMovie } from "@/libs/supabase-service";
import formatDate from "@/utils/formatDate";
import { Clock, Dot, SendHorizontal } from "lucide-react";
import InputComment from "./InputComment";

export default async function CommentMovie({
  slug,
  userId,
}: {
  slug: string;
  userId: number | null | undefined;
}) {
  const data: any[] = await getCommentMovie(slug);

  const insertCommentWithSlugAndUserId = insertCommentMovie.bind(
    null,
    slug,
    userId || 123456789
  );

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Bình luận phim</h2>
      <form action={insertCommentWithSlugAndUserId}>
        <div className="flex flex-col gap-4">
          <label htmlFor="comment">Nhập bình luận của bạn</label>
          <InputComment />
        </div>
      </form>
      {data.length > 0 && (
        <div className="flex flex-col gap-4 mt-6 bg-slate-200 dark:bg-slate-800 rounded-md p-3">
          {data.map((item) => (
            <div
              className="bg-slate-100 dark:bg-slate-700 p-3 rounded-md"
              key={item.id}
            >
              <p className="text-xs flex gap-1 items-center">
                <Clock className="size-3" />
                {item.updated_at
                  ? formatDate(item.updated_at)
                  : formatDate(item.created_at)}
              </p>
              <p className="flex items-center flex-wrap">
                {item.users.name} <Dot />
                <span className="text-sm">{item.users.email}</span>
              </p>

              <p className="mt-2 flex gap-2 items-center">
                <SendHorizontal className="size-4" />
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
