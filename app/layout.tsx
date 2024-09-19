import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atikur Rahman SEO specialist",
  description:
    "I am an experienced eCommerce SEO Specialistin Shopify, Etsy, eBay",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="night" lang="en">
  
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}


