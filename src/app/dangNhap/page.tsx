import Main from "@/_components/Main";
import SignInButton from "@/_components/SignInButton";
import { auth } from "@/_libs/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Đăng Nhập - YidiMovi",
  alternates: {
    canonical: "/dangNhap",
    languages: {
      vi: "/vi-VN",
    },
  },
  keywords:
    "YidiMovi, đăng nhập, phim trực tuyến, xem phim, bộ sưu tập phim, chương trình truyền hình",
  description:
    "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
  openGraph: {
    title: "Đăng Nhập - YidiMovi",
    description:
      "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/dangNhap`,
    type: "website",
    images: {
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Đăng Nhập - YidiMovi",
    description:
      "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
    images: {
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  robots: "index, follow",
};

export default async function page() {
  const session = await auth();
  if (!session?.user.email) redirect("/taiKhoan/thongTinCaNhan");
  return (
    <Main>
      <div className="flex flex-col gap-10 mt-10 items-center">
        <h2 className="text-3xl font-semibold">
          Sign in to access your guest area
        </h2>
        <SignInButton />
      </div>
    </Main>
  );
}
