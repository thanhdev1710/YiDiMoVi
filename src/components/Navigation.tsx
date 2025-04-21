import { NavLinkProps } from "@/interfaces/NavLinkProps";
import { NavigationItem } from "./NavigationItem";
import { Suspense } from "react";

export default function Navigation({ linkList }: { linkList: NavLinkProps[] }) {
  return (
    <nav>
      <ul className="lg:flex hidden gap-8">
        {linkList.map((item) => (
          <Suspense key={item.href}>
            <NavigationItem linkItem={item} />
          </Suspense>
        ))}
      </ul>
    </nav>
  );
}
