import Main from "@/_components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng Nhập - YidiMovi",
  keywords:
    "YidiMovi, đăng nhập, phim trực tuyến, xem phim, bộ sưu tập phim, chương trình truyền hình",
  description:
    "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
  openGraph: {
    title: "Đăng Nhập - YidiMovi",
    description:
      "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
    url: `${process.env.NEXT_APP_DOMAIN}/dangNhap`,
    type: "website",
  },
  twitter: {
    title: "Đăng Nhập - YidiMovi",
    description:
      "Đăng nhập vào YidiMovi để truy cập vào bộ sưu tập phim và chương trình yêu thích của bạn. Xem ngay các bộ phim mới nhất và các tập phim hấp dẫn trên YidiMovi.",
  },
  robots: "index, follow",
};

export default function page() {
  return <Main>page</Main>;
}
