import React from "react";

import { Header, NavBar } from "@shared";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <div className="flex-none w-full z-50">
        <Header />
      </div>
      <main className="relative flex-1 w-full overflow-y-auto scrollbar-hide">
        {children}
      </main>
      <div className="flex-none w-full z-50">
        <NavBar />
      </div>
    </div>
  );
}
