import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloggy",
  description: "Free short post sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="flex flex-col justify-center h-screen w-screen">
          <Navbar />
          <div className="overflow-auto mx-2 md:mx-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
