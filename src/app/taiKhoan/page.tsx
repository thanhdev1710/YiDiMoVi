import { auth } from "@/_libs/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user) {
    return redirect("/taiKhoan/thongTinCaNhan");
  }
}
