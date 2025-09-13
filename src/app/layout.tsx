import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`${ptSans.className} antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
