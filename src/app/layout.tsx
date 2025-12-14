import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dao Math App Simple",
  description: "A simple math puzzle app created by Daniel Dao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.className} ${outfitSans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
