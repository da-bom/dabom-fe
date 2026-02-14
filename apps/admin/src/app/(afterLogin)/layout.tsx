import "@globalstyles";

import Header from "@admin/components/Header";
import Sidebar from "@admin/components/Sidebar";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex w-full flex-col gap-5 p-5">
        <Header />
        {children}
      </div>
    </div>
  );
}
