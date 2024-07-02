import { MovieItem } from "@/_components/MovieItem";
import { auth } from "@/_libs/auth";
import { getMovieFavorite } from "@/_libs/supabase-service";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session?.user.userId) redirect("/dangNhap");
  const listMovieHistory = await getMovieFavorite(session?.user.userId);
  const length = listMovieHistory.length;
  return length <= 0 ? (
    <section>
      <h1 className="text-3xl font-bold mb-4">Danh sách yêu thích</h1>
      <p>
        Bạn chưa có danh sách yêu thích nào{" "}
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
      <h1 className="text-3xl font-bold mb-4">Danh sách yêu thích</h1>
      <p className="text-sm text-gray-400 mb-8">
        Tổng danh sách yêu thích: {length}
      </p>
      <div>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[36px_18px]">
          {listMovieHistory.map((item) => (
            <li key={item.slug}>
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
