import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "A clone version of Notion",
  icons: {
    icon: [
      {
        media: "(preders-color-scheme: light)",
        url: "/logo.gif",
        href: "/logo.gif",
      },
      {
        media: "(preders-color-scheme: dark)",
        url: "/logo.gif",
        href: "/logo.gif",
      }
    ]
  }
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
