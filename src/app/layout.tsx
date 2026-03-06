import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import PromoBanner from "@/components/PromoBanner";
import FloatingNav from "@/components/FloatingNav";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CentIQ — Financial Literacy for the Next Generation",
  description:
    "CentIQ brings modern, gamified financial education to schools, communities, and financial institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        <PromoBanner />
        <FloatingNav />
        <main>{children}</main>
      </body>
    </html>
  );
}