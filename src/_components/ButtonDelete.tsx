"use client";
import { Button } from "@/_components/ui/button";
import { deleteMovieFavorite, deleteMovieHistory } from "@/_libs/actions";
import toast from "react-hot-toast";

export function ButtonDelete({
  item,
  type,
}: {
  item: {
    userId: number;
    name: string;
    slug: string;
    image: string;
  };
  type: string;
}) {
  return (
    <Button
      onClick={async () => {
        if (type === "listFavorite") {
          const error = await deleteMovieFavorite(
            item.userId,
            item.name,
            item.slug
          );
          if (error) {
            toast.error("Xoá khỏi danh sách yêu thích thất bại");
          } else {
            toast.success("Xoá khỏi danh sách yêu thích thành công");
          }
        } else {
          const error = await deleteMovieHistory(
            item.userId,
            item.name,
            item.slug
          );
          if (error) {
            toast.error("Xoá khỏi lịch sử xem thất bại");
          } else {
            toast.success("Xoá khỏi lịch sử xem thành công");
          }
        }
      }}
      className="w-full mb-2"
      variant="destructive"
    >
      <p className="text-xs">Xoá {item.name} ra khỏi danh sách</p>
    </Button>
  );
}
