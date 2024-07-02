import ButtonToggleTheme from "./ButtonToggleTheme";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import { auth } from "@/_libs/auth";

export default async function ToolsMenu() {
  const session = await auth();
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
      {session?.user?.email && session?.user?.image ? (
        <Link href="/taiKhoan/thongTinCaNhan">
          <img
            className="w-8 h-8 rounded-full"
            alt={`Ảnh người dùng ${session.user.name}`}
            src={session.user.image}
          />
        </Link>
      ) : (
        <Link href="/dangNhap">
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
}
