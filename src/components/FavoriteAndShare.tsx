/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
import { createMovieFavorite } from "@/libs/actions";

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
      .catch(() => {
        toast.error("Đã xảy ra lỗi. Không thể sao chép link!");
      });
  };

  return (
    <>
      <Button
        aria-label="Heart"
        onClick={() => {
          if (userId) {
            toast.promise(createMovieFavorite(userId, name, slug, image), {
              error: "Thực hiện thất bại",
              loading: "Đang thực hiện",
              success: (data: any) =>
                data.type === "insert"
                  ? "Đã thêm vào danh sách yêu thích"
                  : "Đã xoá khỏi danh sách yêu thích",
            });
          } else {
            toast((t: any) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể thêm vào danh sách yêu thích</p>
                <Link
                  aria-label="Login"
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-[#38B6FF] text-white"
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
              ? "fill-blue-default text-[#38B6FF]"
              : ""
          }`}
        />
      </Button>
      <Button
        aria-label="Share"
        onClick={handleCopyLink}
        className="rounded-full w-10 h-10 !p-[10px]"
        variant="secondary"
      >
        <Share2 />
      </Button>
    </>
  );
}
