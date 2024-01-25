import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jeremy La",
  description: "Jeremy La's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 leading-relaxed antialiased`}>{children}</body>
    </html>
  );
}
