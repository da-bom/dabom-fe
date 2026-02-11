import "@repo/shared/src/styles/globals.css";
import "../../globals.css";
import Sidebar from "@admin/components/Sidebar";
import Header from "@admin/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        <div className="flex w-full flex-col gap-8 p-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
