"use client";
import { Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
import { createMovieFavorite } from "@/_libs/actions";

export function FavoriteAndShare({
  userId,
  name,
  slug,
  image,
  listFavoriteAlready,
}: {
  userId: number | null | undefined;
  name: string;
  slug: string;
  image: string;
  listFavoriteAlready: any[];
}) {
  const handleCopyLink = () => {
    const linkToCopy = window.location.href;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        toast.success("Link đã được sao chép vào clipboard!");
      })
      .catch((err) => {
        toast.error("Đã xảy ra lỗi. Không thể sao chép link!");
      });
  };

  return (
    <>
      <Button
        onClick={async () => {
          if (userId) {
            const status = await createMovieFavorite(userId, name, slug, image);
            if (status.error) {
              toast.error("Thêm vào danh sách yêu thích thất bại");
            } else {
              if (status.type === "insert") {
                toast.success("Đã thêm vào danh sách yêu thích");
              } else {
                toast("Đã xoá khỏi danh sách yêu thích", {
                  icon: "😓",
                });
              }
            }
          } else {
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể thêm vào danh sách yêu thích</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          }
        }}
        className="rounded-full w-10 h-10 !p-[10px]"
        variant="secondary"
      >
        <Heart
          className={`${
            listFavoriteAlready.includes(name)
              ? "fill-blue-default text-blue-default"
              : ""
          }`}
        />
      </Button>
      <Button
        onClick={handleCopyLink}
        className="rounded-full w-10 h-10 !p-[10px]"
        variant="secondary"
      >
        <Share2 />
      </Button>
    </>
  );
}
