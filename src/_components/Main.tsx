import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return <main className="min-h-screen space-default mt-20">{children}</main>;
}
