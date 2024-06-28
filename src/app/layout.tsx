import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { ThemeProvider } from "@/_components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The YiDi-MoVi",
  description: "Welcome to YiDi-MoVi's movie viewing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-blue-950 dark:text-blue-100 relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen space-default">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
