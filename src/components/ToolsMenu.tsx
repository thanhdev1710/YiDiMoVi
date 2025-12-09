/* eslint-disable @next/next/no-img-element */
import ButtonToggleTheme from "./ButtonToggleTheme";
import { Button } from "./ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import { Session } from "next-auth";

export default async function ToolsMenu({
  session,
}: {
  session: Session | null;
}) {
  return (
    <div className="flex items-center gap-6">
      <Button asChild variant="ghost" size="icon">
        <Link aria-label="Search" href="/timKiem">
          <Search className="w-5 h-5" />
        </Link>
      </Button>
      <ButtonToggleTheme />
      {session?.user?.email && session?.user?.image ? (
        <Link aria-label="User" href="/taiKhoan/thongTinCaNhan">
          <img
            className="w-8 h-8 rounded-full"
            alt={`Ảnh người dùng ${session.user.name}`}
            src={session.user.image}
          />
        </Link>
      ) : (
        <Link aria-label="login" href="/dangNhap">
          <Button aria-label="User" variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
}
