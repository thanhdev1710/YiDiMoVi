import ToolsMenu from "./ToolsMenu";
import { LogoMain } from "./LogoMain";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import Navigation from "./Navigation";
import Menu from "./Menu";

const NavLinkHeader: NavLinkProps[] = [
  { href: "/", name: "Trang chủ" },
  { href: "/phimBo", name: "Phim bộ" },
  { href: "/phimLe", name: "Phim lẻ" },
  { href: "/block/highlight/hoat-hinh?type=Movie Genre", name: "Hoạt hình" },
];

export async function Header() {
  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-white dark:bg-black flex justify-between items-center space-default">
      <Menu className={"lg:hidden flex"} />
      <LogoMain className={"lg:flex hidden"} />
      <Navigation linkList={NavLinkHeader} />
      <ToolsMenu />
    </header>
  );
}
