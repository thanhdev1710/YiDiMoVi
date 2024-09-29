"use client";
import { signOutAction } from "@/_libs/actions";
import Loading from "@/app/loading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface dataListProps {
  name: string;
  href: string;
  type?: string;
}
export const dataList: dataListProps[] = [
  {
    name: "Thông tin cá nhân",
    href: "/taiKhoan/thongTinCaNhan",
  },
  {
    name: "Danh sách yêu thích",
    href: "/taiKhoan/danhSachYeuThich",
  },
  {
    name: "Lịch sử xem",
    href: "/taiKhoan/lichSuXem",
  },
  {
    name: "Đăng xuất tài khoản",
    href: "",
    type: "button",
  },
];

export function NavigationAccount() {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <nav className="mb-8">
        <ul className="flex lg:flex-col flex-row overflow-x-auto w-full py-4">
          {dataList.map((item) => (
            <li
              className={`flex-shrink-0 px-6 py-2 border-l-2 ${
                item.href === pathName
                  ? "border-blue-default font-bold text-blue-default"
                  : "border-transparent"
              }`}
              key={item.name}
            >
              {item.type === "button" ? (
                <button
                  className="hover:text-blue-default"
                  onClick={async () => {
                    try {
                      setIsLoading(true);
                      await signOutAction();
                    } catch {
                      throw new Error("Đăng xuất thất bại");
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  aria-label={item.name}
                  className="hover:text-blue-default"
                  href={item.href}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {isLoading && <Loading />}
    </>
  );
}
