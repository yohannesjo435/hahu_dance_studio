import type { Metadata } from "next";
import { Fredoka, PT_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400"],
});
const ptSans = PT_Sans({
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Hahu Dance Studio",
  description: "We are Hahu dance studio company based in ethiopia addis ababa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${ptSans.className} antialiased`}>{children}</body>
    </html>
  );
}
