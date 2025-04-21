import { NavLinkItem } from "./NavLinkItem";
import { NavLinkProps } from "../interfaces/NavLinkProps";

export function NavLinkList({ linkList }: { linkList: NavLinkProps[] }) {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {linkList.map((item) => (
          <NavLinkItem linkItem={item} key={item.href} />
        ))}
      </ul>
    </nav>
  );
}
