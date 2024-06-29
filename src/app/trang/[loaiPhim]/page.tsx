import Main from "@/_components/Main";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { loaiPhim: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { loaiPhim } = params;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Phim ${loaiPhim} - YidiMovi`,
    keywords: `phim ${loaiPhim}, phim bom tấn, phim chiếu rạp, xem phim online`,
    description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
    openGraph: {
      title: `Phim ${loaiPhim} - YidiMovi`,
      description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/trang/${loaiPhim}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_APP_DOMAIN || ""}/images/website.png`,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Phim ${loaiPhim} - YidiMovi`,
      description: `Khám phá các bộ phim ${loaiPhim} hấp dẫn nhất trên YidiMovi. Xem ngay các bộ phim chiếu rạp mới nhất và các tập phim bom tấn.`,
      images: [
        {
          url: `${process.env.NEXT_APP_DOMAIN || ""}/images/website.png`,
          width: 1200,
          height: 630,
          alt: "YiDiMoVi Website",
        },
        ...previousImages,
      ],
    },
    robots: "index, follow",
  };
}

export default function page() {
  return <Main>page</Main>;
}
