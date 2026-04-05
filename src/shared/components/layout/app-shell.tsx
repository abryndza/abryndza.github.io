"use client";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-15 laptop:gap-20">
      <Navbar />
      <main className="px-5 laptop:px-20 grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};
