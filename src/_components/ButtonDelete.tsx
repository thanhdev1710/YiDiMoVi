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
      onClick={() => {
        if (type === "listFavorite") {
          toast.promise(
            deleteMovieFavorite(item.userId, item.name, item.slug).catch(
              (err) => {
                console.error("Failed to delete favorite movie:", err);
              }
            ),
            {
              error: "Xoá khỏi danh sách yêu thích thất bại",
              loading: "Đang thực hiện xoá",
              success: "Xoá khỏi danh sách yêu thích thành công",
            }
          );
        } else {
          toast.promise(
            deleteMovieHistory(item.userId, item.name, item.slug).catch(
              (err) => {
                console.error("Failed to delete favorite movie:", err);
              }
            ),
            {
              error: "Xoá khỏi danh sách yêu thích thất bại",
              loading: "Đang thực hiện xoá",
              success: "Xoá khỏi danh sách yêu thích thành công",
            }
          );
        }
      }}
      className="w-full mb-2"
      variant="destructive"
    >
      <p className="text-xs">Xoá {item.name} ra khỏi danh sách</p>
    </Button>
  );
}
