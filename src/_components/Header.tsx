import { Menu } from "./Menu";
import { LogoMain } from "./LogoMain";

export function Header() {
  return (
    <header className="flex justify-between items-center space-default">
      <LogoMain />
      <Menu />
    </header>
  );
}
