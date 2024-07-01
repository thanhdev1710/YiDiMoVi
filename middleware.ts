import { auth } from "@/_libs/auth";

export const middleware = auth;

export const config = {
  matcher: ["/taiKhoan"],
};
