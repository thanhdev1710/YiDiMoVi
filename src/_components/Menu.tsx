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
  { href: "/trang/phimBo", name: "Phim bộ" },
  { href: "/trang/phimLe", name: "Phim lẻ" },
  { href: "/block/highlight/Hoạt hình?type=Movie Genre", name: "Hoạt hình" },
  { href: "/block/highlight/Hành động?type=Movie Genre", name: "Hành động" },
  { href: "/block/highlight/Kinh dị?type=Movie Genre", name: "Kinh dị" },
  { href: "/block/highlight/Hài hước?type=Movie Genre", name: "Hài hước" },
  { href: "/block/highlight/Tâm lý?type=Movie Genre", name: "Tâm lý" },
  { href: "/block/highlight/Tình cảm?type=Movie Genre", name: "Tình cảm" },
  { href: "/block/highlight/Xã hội?type=Movie Genre", name: "Xã hội" },
];

export default function Menu({ className }: { className?: string }) {
  const [isMenu, setIsMenu] = useState(false);
  const pathName = decodeURIComponent(usePathname());
  const urlCur =
    pathName.split("/")[1] === "block"
      ? "/" + pathName.split("/")[3]
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
