import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import { NavigationItem } from "./NavigationItem";

export default function Navigation({ linkList }: { linkList: NavLinkProps[] }) {
  return (
    <nav>
      <ul className="lg:flex hidden gap-8">
        {linkList.map((item) => (
          <NavigationItem linkItem={item} key={item.href} />
        ))}
      </ul>
    </nav>
  );
}
