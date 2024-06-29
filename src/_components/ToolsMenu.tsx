import ButtonToggleTheme from "./ButtonToggleTheme";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ToolsMenu() {
  return (
    <div className="flex items-center gap-6">
      <Link href="/timKiem">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
      </Link>
      <Button variant="ghost" size="icon">
        <BellIcon className="w-5 h-5" />
      </Button>
      <ButtonToggleTheme />
    </div>
  );
}
