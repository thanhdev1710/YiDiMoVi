import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: number | null;
      gender: string | null;
      phone: string | null;
      birthday: string | null;
      area: string | null;
    } & DefaultSession["user"];
  }
}
