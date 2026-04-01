import type { Metadata } from "next";
import { Asap } from "next/font/google";

const aspekta = Asap({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Clause",
  description: "Clause clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`aspekta.className`}>
      <body className="min-h-full flex flex-col p-0 m-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
