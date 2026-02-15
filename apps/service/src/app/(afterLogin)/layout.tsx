import React from "react";
import { Header, NavBar } from "@shared";

export default function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background-base">
      <div className="flex-none w-full z-50">
        <Header />
      </div>

      <main className="relative flex-1 w-full overflow-y-auto scrollbar-hide">
        {children}
        
        {modal}
      </main>

      <div className="flex-none w-full z-50">
        <NavBar />
      </div>
    </div>
  );
}