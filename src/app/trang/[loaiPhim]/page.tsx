import Main from "@/_components/Main";
import { Metadata } from "next";

type Props = {
  params: { loaiPhim: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { loaiPhim } = params;

  return {
    title: `Phim ${loaiPhim} - YidiMovi`,
    keywords: `phim ${loaiPhim}, phim bom tấn, phim chiếu rạp, xem phim online`,
    description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
    openGraph: {
      title: `Phim ${loaiPhim} - YidiMovi`,
      description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      url: `${process.env.NEXT_APP_DOMAIN}/trang/${loaiPhim}`,
      type: "website",
      images: "website.png",
    },
    twitter: {
      card: "summary_large_image",
      title: `Phim ${loaiPhim} - YidiMovi`,
      description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      images: "website.png",
    },
    robots: "index, follow",
  };
}

export default function page() {
  return <Main>page</Main>;
}
