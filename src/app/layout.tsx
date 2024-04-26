import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/ui/header/Header";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Shop",
  description: "Pizza Shop created with Next.js By Rabotyaga1155",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
