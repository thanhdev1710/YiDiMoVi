import Main from "@/components/Main";
import SignInButton from "@/components/SignInButton";
import { auth } from "@/libs/auth";
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
    url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/dangNhap`,
    type: "website",
    images: {
      url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/images/website.png`,
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
      url: `${process.env["NEXT_PUBLIC_APP_DOMAIN"]}/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  robots: "index, follow",
};

export default async function page() {
  const session = await auth();
  if (session?.user?.email) redirect("/taiKhoan/thongTinCaNhan");
  return (
    <Main>
      <h1 className="text-center text-3xl font-bold mb-8">
        Đăng Ký / Đăng Nhập - YidiMovi
      </h1>
      <div className="flex flex-col gap-10 mb-10 items-center">
        <SignInButton />
      </div>
      <div className="space-y-2">
        <p>
          Chào mừng bạn đến với YidiMovi - trang web xem phim miễn phí hàng đầu!
          Đăng ký hoặc đăng nhập để trải nghiệm thế giới phim ảnh đa dạng và
          phong phú. Với tài khoản YidiMovi, bạn có thể:
        </p>
        <ul className="list-disc ml-4">
          <li>Xem phim không giới hạn với chất lượng cao</li>
          <li>Lưu lại danh sách phim yêu thích</li>
          <li>Nhận thông báo về các bộ phim mới nhất</li>
          <li>Tham gia cộng đồng yêu phim và chia sẻ cảm nhận</li>
        </ul>
        <p>
          Hãy tạo tài khoản ngay hôm nay để không bỏ lỡ những trải nghiệm tuyệt
          vời trên YidiMovi!
        </p>
      </div>
    </Main>
  );
}
