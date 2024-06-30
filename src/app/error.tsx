"use client";
import Link from "next/link";
import Main from "@/_components/Main";

export default function Error() {
  return (
    <Main>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Đã xảy ra lỗi.
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Xin lỗi bạn, có vẻ như đã xảy ra một lỗi.
        </p>
        <Link href="/">Quay lại trang chủ</Link>
      </section>
    </Main>
  );
}
