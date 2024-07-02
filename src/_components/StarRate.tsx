"use client";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export function StarRate({ userId }: { userId: number | null | undefined }) {
  const [numStarClick, setNumStarClick] = useState(0);
  const [numStarHover, setNumStarHover] = useState(0);
  return (
    <div className="flex gap-1">
      <StarFilledIcon
        onMouseOver={() => setNumStarHover(1)}
        onMouseOut={() => setNumStarHover(0)}
        onClick={() => {
          if (!userId)
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể đánh giá</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          else setNumStarClick(1);
        }}
        className={`h-5 w-5 cursor-pointer ${
          numStarHover === 0
            ? numStarClick >= 1
              ? "text-blue-default"
              : "text-gray-700"
            : numStarHover >= 1
            ? "text-blue-default"
            : "text-gray-700"
        }`}
      />
      <StarFilledIcon
        onMouseOver={() => setNumStarHover(2)}
        onMouseOut={() => setNumStarHover(0)}
        onClick={() => {
          if (!userId)
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể đánh giá</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          else setNumStarClick(2);
        }}
        className={` h-5 w-5 cursor-pointer ${
          numStarHover === 0
            ? numStarClick >= 2
              ? "text-blue-default"
              : "text-gray-700"
            : numStarHover >= 2
            ? "text-blue-default"
            : "text-gray-700"
        }`}
      />
      <StarFilledIcon
        onMouseOver={() => setNumStarHover(3)}
        onMouseOut={() => setNumStarHover(0)}
        onClick={() => {
          if (!userId)
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể đánh giá</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          else setNumStarClick(3);
        }}
        className={` h-5 w-5 cursor-pointer ${
          numStarHover === 0
            ? numStarClick >= 3
              ? "text-blue-default"
              : "text-gray-700"
            : numStarHover >= 3
            ? "text-blue-default"
            : "text-gray-700"
        }`}
      />
      <StarFilledIcon
        onMouseOver={() => setNumStarHover(4)}
        onMouseOut={() => setNumStarHover(0)}
        onClick={() => {
          if (!userId)
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể đánh giá</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          else setNumStarClick(4);
        }}
        className={` h-5 w-5 cursor-pointer ${
          numStarHover === 0
            ? numStarClick >= 4
              ? "text-blue-default"
              : "text-gray-700"
            : numStarHover >= 4
            ? "text-blue-default"
            : "text-gray-700"
        }`}
      />
      <StarFilledIcon
        onMouseOver={() => setNumStarHover(5)}
        onMouseOut={() => setNumStarHover(0)}
        onClick={() => {
          if (!userId)
            toast((t) => (
              <div className="flex flex-col gap-2">
                <p>Bạn cần đăng nhập mới có thể đánh giá</p>
                <Link
                  href="/dangNhap"
                  className="px-4 py-2 rounded text-center bg-blue-default text-white"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Đăng nhập
                </Link>
              </div>
            ));
          else setNumStarClick(5);
        }}
        className={` h-5 w-5 cursor-pointer ${
          numStarHover === 0
            ? numStarClick >= 5
              ? "text-blue-default"
              : "text-gray-700"
            : numStarHover >= 5
            ? "text-blue-default"
            : "text-gray-700"
        }`}
      />
      <p className="font-semibold text-blue-default ml-2">
        {numStarHover === 0 ? numStarClick : numStarHover} sao
      </p>
    </div>
  );
}
