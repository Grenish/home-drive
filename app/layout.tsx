import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Home Drive | Open-Source Self-Hosted Cloud Storage",
  description:
    "Home Drive is a free, open-source, self-hosted cloud storage platform that lets you securely store, sync, and manage files across devices. Build your own private alternative to Google Drive with full data ownership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
