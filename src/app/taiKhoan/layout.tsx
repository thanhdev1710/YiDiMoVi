import Main from "@/components/Main";
import { NavigationAccount } from "@/components/NavigationAccount";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) {
    return redirect("/dangNhap");
  }

  return (
    <Main>
      <h1 className="text-2xl font-bold mb-4">Tài khoản và dịch vụ</h1>
      <section className="grid lg:grid-cols-4 grid-cols-1">
        <NavigationAccount />
        <div className="lg:col-span-3 lg:ml-20">{children}</div>
      </section>
    </Main>
  );
}
