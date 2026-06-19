import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Jaiswal Photography — Midtown Manhattan, NYC",
  description: "Boutique photography studio in Midtown Manhattan. Weddings, headshots, corporate events, portraits, and commercial photography. You work with me — not an agency.",
  keywords: "NYC photographer, Manhattan photographer, wedding photographer NYC, headshots NYC, corporate photographer Manhattan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1a1a] text-[#a0a0a0] min-h-screen`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
