import { ButtonDelete } from "@/_components/ButtonDelete";
import { MovieItem } from "@/_components/MovieItem";
import { auth } from "@/_libs/auth";
import { getMovieViewingHistory } from "@/_libs/supabase-service";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session?.user?.userId) redirect("/dangNhap");
  const listMovieHistory = await getMovieViewingHistory(session?.user?.userId);
  const length = listMovieHistory.length;
  return length <= 0 ? (
    <section>
      <h1 className="text-3xl font-bold mb-4">Lịch sử xem</h1>
      <p>
        Bạn chưa có lịch sử xem nào{" "}
        <span>
          <Link className="underline text-blue-default" href="/">
            Nhấn vào đây
          </Link>{" "}
          để về trang chủ và xem phim
        </span>
      </p>
    </section>
  ) : (
    <section>
      <h1 className="text-3xl font-bold mb-4">Lịch sử xem</h1>
      <p className="text-sm text-gray-400 mb-8">Tổng lịch sử xem: {length}</p>
      <div>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[36px_18px]">
          {listMovieHistory.map((item) => (
            <li key={item.slug}>
              <ButtonDelete type="listHistory" item={item} />
              <MovieItem
                className="w-full"
                name={item.name}
                poster_url={item.image}
                slug={item.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
