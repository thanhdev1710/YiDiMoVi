import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN || ""),
  alternates: {
    canonical: "/",
    languages: {
      vi: "/vi-VN",
    },
  },
  title: {
    template: "%s | YiDiMoVi - Trang web xem phim trực tuyến",
    default: "YiDiMoVi | YiDiMoVi - Trang web xem phim trực tuyến",
  },
  description:
    "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
  openGraph: {
    title: "YiDiMoVi - Trang web xem phim trực tuyến",
    description:
      "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
    url: process.env.NEXT_PUBLIC_APP_DOMAIN,
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
    title: "YiDiMoVi - Trang web xem phim trực tuyến",
    description:
      "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với các bộ phim siêu đỉnh cùng YiDiMoVi!",
    images: {
      url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/website.png`,
      width: 1200,
      height: 630,
      alt: "YiDiMoVi Website",
    },
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="vi">
      <body className={`${inter.className} bg-white dark:bg-black relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
