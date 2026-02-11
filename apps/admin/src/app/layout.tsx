import "@repo/shared/src/styles/globals.css";
import "../../globals.css";
import Sidebar from "@admin/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
