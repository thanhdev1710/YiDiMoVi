import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user) {
    return redirect("/taiKhoan/thongTinCaNhan");
  }
}
