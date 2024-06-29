import ToolsMenu from "./ToolsMenu";
import { LogoMain } from "./LogoMain";
import { NavLinkProps } from "@/_interfaces/NavLinkProps";
import Navigation from "./Navigation";
import Menu from "./Menu";

const NavLinkHeader: NavLinkProps[] = [
  { href: "/", name: "Trang chủ" },
  { href: "/truyenHinh", name: "Truyền hình" },
  { href: "/phimBo", name: "Phim bộ" },
  { href: "/phimLe", name: "Phim lẻ" },
  { href: "/hoatHinh", name: "Hoạt hình" },
];

export async function Header() {
  return (
    <header className="flex justify-between items-center space-default">
      <Menu className={"lg:hidden flex"} />
      <LogoMain className={"lg:flex hidden"} />
      <Navigation linkList={NavLinkHeader} />
      <ToolsMenu />
    </header>
  );
}
