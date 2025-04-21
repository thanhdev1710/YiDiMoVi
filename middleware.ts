import { auth } from "@/libs/auth";

export const middleware = auth;

export const config = {
  matcher: ["/taiKhoan"],
};
