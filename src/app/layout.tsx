import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandeep Guttula",
  description: "An enthusiastic designer & developer based in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me.jpeg" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a]`}>{children}</body>
    </html>
  );
}
