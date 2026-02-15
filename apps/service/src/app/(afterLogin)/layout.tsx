import React from "react";

import { Header, NavBar } from "@shared";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background-base flex h-screen w-full flex-col overflow-hidden">
      <div className="z-50 w-full flex-none">
        <Header />
      </div>

      <main className="scrollbar-hide relative w-full flex-1 overflow-y-auto">
        {children}
      </main>

      <div className="z-50 w-full flex-none">
        <NavBar />
      </div>
    </div>
  );
}
