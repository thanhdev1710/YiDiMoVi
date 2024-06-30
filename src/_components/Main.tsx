import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen space-default my-20">
      {children}
    </main>
  );
}
