import { FormDelete } from "@/components/FormDelete";
import { MovieItem } from "@/components/MovieItem";
import { EpisodeMenu } from "@/components/EpisodeMenu";
import { auth } from "@/libs/auth";
import {
  getMovieViewingHistory,
  type PropsMovieFavorite,
} from "@/libs/supabase-service";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

/* ===================== UTILS ===================== */
function groupByMovie(list: PropsMovieFavorite[]) {
  return list.reduce<Record<string, PropsMovieFavorite[]>>((acc, item) => {
    if (!acc[item.slug]) {
      acc[item.slug] = [];
    }

    acc[item.slug]!.push(item);
    return acc;
  }, {});
}

/* ===================== PAGE ===================== */
export default async function Page() {
  const session = await auth();
  if (!session?.user?.userId) redirect("/dangNhap");

  const listMovieHistory = await getMovieViewingHistory(session.user.userId);

  if (listMovieHistory.length === 0) {
    return (
      <section>
        <h1 className="text-3xl font-bold mb-4">Lịch sử xem</h1>
        <p>
          Bạn chưa có lịch sử xem nào{" "}
          <Link className="underline text-[#38B6FF]" href="/">
            Nhấn vào đây
          </Link>{" "}
          để về trang chủ và xem phim
        </p>
      </section>
    );
  }

  const groupedMovies = groupByMovie(listMovieHistory);
  const movies = Object.values(groupedMovies);

  return (
    <section className="py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Lịch sử xem</h1>
        <p className="text-sm text-muted-foreground">
          Tổng số phim đã xem:{" "}
          <span className="font-semibold text-foreground">{movies.length}</span>
        </p>
      </div>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
        {movies.map((movieGroup) => {
          const movie = movieGroup[0]; // info chung của phim
          const episodes = movieGroup.map((item) => Number(item.tap)); // các tập đã xem

          if (!movie) return null;

          return (
            <li key={movie.slug} className="group">
              <div className="relative h-full flex flex-col">
                {/* XÓA LỊCH SỬ PHIM */}
                <FormDelete type="movieHistory" item={movie} />

                {/* MOVIE CARD */}
                <MovieItem
                  className="w-full mb-4"
                  name={movie.name}
                  poster_url={movie.image}
                  slug={movie.slug}
                />

                {episodes.length > 1 ? (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      Chọn tập đã xem
                    </label>

                    <EpisodeMenu episodes={episodes} slug={movie.slug} />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      Phim này không có tập để chọn
                    </label>
                    <Button variant="outline" className="w-full">
                      <Link href={`/xemPhim/${movie.slug}?tap=${episodes[0]}`}>
                        Xem tiếp tục
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
