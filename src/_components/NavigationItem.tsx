"use client";
import Link from "next/link";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import { useSearchParams } from "next/navigation";

export function NavigationItem({ linkItem }: { linkItem: NavLinkProps }) {
  const urlCur = useSearchParams().get("value")?.toString() || "Undefine";
  return (
    <li className="font-semibold text-lg">
      <Link
        aria-label={linkItem.name}
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
