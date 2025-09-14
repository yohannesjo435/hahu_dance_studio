import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const ptSans = PT_Sans({
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Hahu Dance Studio",
  description: "We are Hahu dance studio company based in ethiopia addis ababa",
  icons: {
    icon: "favicon.ico",
  },
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
        <div className="fab">
          <Link href="#main" className="btn btn-lg btn-circle ">
            <ArrowUp />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
