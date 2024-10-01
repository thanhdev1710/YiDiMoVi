"use client";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import Link from "next/link";
import { LogoMain } from "./LogoMain";
import { useSearchParams } from "next/navigation";

const NavLinkHeader: NavLinkProps[] = [
  { href: "/", name: "Trang chủ" },

  { href: "/block/highlight?type=category&value=Phim lẻ", name: "Phim lẻ" },
  { href: "/block/highlight?type=category&value=Phim bộ", name: "Phim bộ" },
  {
    href: "/block/highlight?type=movie-genre&value=Hoạt hình",
    name: "Hoạt hình",
  },
  {
    href: "/block/highlight?type=movie-genre&value=Hành động",
    name: "Hành động",
  },
  { href: "/block/highlight?type=movie-genre&value=Kinh dị", name: "Kinh dị" },
  {
    href: "/block/highlight?type=movie-genre&value=Tình cảm",
    name: "Tình cảm",
  },
  { href: "/block/highlight?type=movie-genre&value=Tâm lý", name: "Tâm lý" },
];

export default function Menu({ className }: { className?: string }) {
  const [isMenu, setIsMenu] = useState(false);
  const searchParams = useSearchParams().get("value") || "Trang chủ";

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
                <Button
                  aria-label="Close"
                  className={`${className}`}
                  variant="ghost"
                  size="icon"
                >
                  <X
                    onClick={() => setIsMenu((is) => !is)}
                    className={`${className}`}
                  />
                </Button>
              </li>
              {NavLinkHeader.map((item) => (
                <li key={item.href}>
                  <Link
                    aria-label="Menu"
                    className={`${
                      searchParams === item.name
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
        <Button
          aria-label="Menu"
          className={`${className}`}
          variant="ghost"
          size="icon"
        >
          <MenuIcon
            onClick={() => setIsMenu((is) => !is)}
            className={`${className}`}
          />
        </Button>
      )}
    </>
  );
}
