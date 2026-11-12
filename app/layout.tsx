
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Master Zeks | Web3 Creator & Growth Strategist',
  description:
    'Web3 content, community growth, and AI-powered creative work by Master Zeks.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
