import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masterzeks.vercel.app"),
  title: "Master Zeks | Web3 Creator & Community Builder",
  description:
    "Master Zeks is a Web3 writer and community builder. Selected work, communities he has helped grow, and how to reach him.",
  openGraph: {
    title: "Master Zeks | Web3 Creator",
    description: "Web3 writing, community growth, and AI-assisted storytelling.",
    type: "website",
    url: "https://masterzeks.vercel.app",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Master Zeks — I turn complex ideas into stories people care about." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Zeks | Web3 Creator",
    description: "Web3 writing, community growth, and AI-assisted storytelling.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
