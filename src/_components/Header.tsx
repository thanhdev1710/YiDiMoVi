import ToolsMenu from "./ToolsMenu";
import { LogoMain } from "./LogoMain";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import Navigation from "./Navigation";
import Menu from "./Menu";
import { Suspense } from "react";

const NavLinkHeader: NavLinkProps[] = [
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
];

export async function Header() {
  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-white dark:bg-black flex justify-between items-center space-default">
      <Suspense>
        <Menu className={"lg:hidden flex"} />
      </Suspense>
      <LogoMain className={"lg:flex hidden"} />
      <Suspense>
        <Navigation linkList={NavLinkHeader} />
      </Suspense>
      <ToolsMenu />
    </header>
  );
}
