"use client";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import Link from "next/link";
import { LogoMain } from "./LogoMain";
import { usePathname } from "next/navigation";

const NavLinkHeader: NavLinkProps[] = [
  { href: "/dangNhap", name: "Đăng nhập/Đăng ký" },
  { href: "/", name: "Trang chủ" },
  { href: "/truyenHinh", name: "Truyền hình" },
  { href: "/trang/phimBo", name: "Phim bộ" },
  { href: "/trang/phimLe", name: "Phim lẻ" },
  { href: "/trang/hoatHinh", name: "Hoạt hình" },
  { href: "/trang/hanhDong", name: "Hành động" },
  { href: "/trang/kinhDi", name: "Kinh dị" },
  { href: "/trang/haiHuoc", name: "Hài hước" },
  { href: "/trang/anime", name: "Anime" },
  { href: "/trang/tamLy", name: "Tâm lý" },
  { href: "/trang/tinhCam", name: "Tình cảm" },
  { href: "/trang/xaHoi", name: "Xã hội" },
];

export default function Menu({ className }: { className?: string }) {
  const [isMenu, setIsMenu] = useState(false);
  const pathName = usePathname();
  const urlCur =
    pathName.split("/")[1] === "trang"
      ? "/" + pathName.split("/")[2]
      : "/" + pathName.split("/")[1];
  return (
    <>
      {isMenu ? (
        <div
          onClick={() => setIsMenu(false)}
          className="fixed top-0 left-0 bg-black/30 h-screen w-full z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 left-0 w-[260px] h-screen bg-zinc-800 text-zinc-400"
          >
            <ul className="space-y-4 space-default text-sm">
              <li className="flex justify-between items-end mb-8">
                <LogoMain />
                <Button className={`${className}`} variant="ghost" size="icon">
                  <X
                    onClick={() => setIsMenu((is) => !is)}
                    className={`${className}`}
                  />
                </Button>
              </li>
              {NavLinkHeader.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`${
                      urlCur === item.href ||
                      (urlCur !== "/" && item.href.includes(urlCur))
                        ? "text-blue-default font-bold"
                        : ""
                    }`}
                    href={item.href}
                    onClick={() => setIsMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Button className={`${className}`} variant="ghost" size="icon">
          <MenuIcon
            onClick={() => setIsMenu((is) => !is)}
            className={`${className}`}
          />
        </Button>
      )}
    </>
  );
}
