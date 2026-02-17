import { Providers } from "../providers";

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <Providers>{children}</Providers>;
}
