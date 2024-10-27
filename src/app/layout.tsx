import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trener Kacper",
  description: "Made by Daniel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <NavigationMenuDemo/>
          {children}
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            Made by → Daniel
          </footer>
        </div>
      </body>
    </html>
  );
}
