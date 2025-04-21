/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateOrInsertRating } from "@/libs/actions";
import { StarFilledIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export function StarRate({
  userId,
  ratingUser,
  slug,
}: {
  userId: number | null | undefined;
  ratingUser: number;
  slug: string;
}) {
  const [numStarClick, setNumStarClick] = useState(ratingUser);
  const [numStarHover, setNumStarHover] = useState(0);

  function handleClick(num: number) {
    if (!userId)
      toast((t: any) => (
        <div className="flex flex-col gap-2">
          <p>Bạn cần đăng nhập mới có thể đánh giá</p>
          <Link
            aria-label="login"
            href="/dangNhap"
            className="px-4 py-2 rounded text-center bg-[#38B6FF] text-white"
            onClick={() => toast.dismiss(t.id)}
          >
            Đăng nhập
          </Link>
        </div>
      ));
    else {
      toast.promise(updateOrInsertRating(slug, userId, num), {
        error: "Đánh giá thất bại",
        loading: "Đang thực hiện",
        success: "Thành công",
      });

      setNumStarClick(num);
    }
  }

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarFilledIcon
          key={i}
          onMouseOver={() => setNumStarHover(i + 1)}
          onMouseOut={() => setNumStarHover(0)}
          onClick={() => handleClick(i + 1)}
          className={` h-5 w-5 cursor-pointer ${
            numStarHover === 0
              ? numStarClick >= i + 1
                ? "text-[#38B6FF]"
                : "text-gray-700"
              : numStarHover >= i + 1
              ? "text-[#38B6FF]"
              : "text-gray-700"
          }`}
        />
      ))}
      <p className="font-semibold text-[#38B6FF] ml-2">
        {numStarHover === 0 ? numStarClick : numStarHover} sao
      </p>
    </div>
  );
}
