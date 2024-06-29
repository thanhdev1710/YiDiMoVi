"use client";
import Link from "next/link";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import { usePathname } from "next/navigation";

export function NavigationItem({ linkItem }: { linkItem: NavLinkProps }) {
  const pathName = usePathname();
  const urlCur =
    pathName.split("/")[1] === "trang"
      ? "/" + pathName.split("/")[2]
      : "/" + pathName.split("/")[1];
  return (
    <li className="font-semibold text-lg">
      <Link
        className={`${
          urlCur === linkItem.href ||
          (urlCur !== "/" && linkItem.href.includes(urlCur))
            ? "text-blue-default font-bold"
            : ""
        }`}
        href={linkItem.href}
      >
        {linkItem.name}
      </Link>
    </li>
  );
}
