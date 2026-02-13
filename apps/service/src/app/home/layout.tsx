import React from "react";
import { Header, NavBar,  } from "@shared";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NavBar />
    </>
  );
}