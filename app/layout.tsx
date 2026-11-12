
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master Zeks | Web3 Creator & Community Builder",
  description:
    "Master Zeks is a Web3 content creator, community builder, and AI automation enthusiast. Explore selected work, experience, and projects.",
  openGraph: {
    title: "Master Zeks | Web3 Creator",
    description:
      "Web3 storytelling, community growth, and AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
