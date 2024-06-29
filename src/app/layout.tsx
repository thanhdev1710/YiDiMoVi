import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { ThemeProvider } from "@/_components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YiDiMoVi - Trang web xem phim trực tuyến",
  description:
    "YiDiMoVi - Trang web xem phim trực tuyến với kho phim đa dạng và chất lượng cao. Tận hưởng giải trí đỉnh cao với YiDiMoVi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black relative max-w-[1286px] mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
