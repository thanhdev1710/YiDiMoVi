import Link from "next/link";
import { NavLinkProps } from "../interfaces/NavLinkProps";

export function NavLinkItem({ linkItem }: { linkItem: NavLinkProps }) {
  return (
    <li className="first:font-semibold first:text-lg text-sm">
      <Link aria-label={linkItem.name} href={linkItem.href}>
        {linkItem.name}
      </Link>
    </li>
  );
}
