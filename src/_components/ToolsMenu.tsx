import ButtonToggleTheme from "./ButtonToggleTheme";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function ToolsMenu() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="ghost" size="icon">
        <Search className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <BellIcon className="w-5 h-5" />
      </Button>
      <ButtonToggleTheme />
    </div>
  );
}
