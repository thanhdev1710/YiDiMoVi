import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./supabase-service";

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      if (!user || !user.email) throw new Error("Email not found");
      const existingUser = await getUser(user.email);

      if (!existingUser) {
        await createUser({
          image: user.image,
          name: user.name,
          email: user.email,
        });
      }

      return true;
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      if (user) {
        session.user.userId = user.id;
        session.user.gender = user.gender;
        session.user.phone = user.phone;
        session.user.birthday = user.birthday;
        session.user.area = user.area;
      } else {
        session.user.userId = null;
        session.user.gender = null;
        session.user.phone = null;
        session.user.birthday = null;
        session.user.area = null;
      }
      return session;
    },
  },
  pages: {
    signIn: "/dangNhap",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
