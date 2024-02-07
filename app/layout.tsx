import type { Metadata } from "next";
import {
  Inter,
  Comfortaa,
  Roboto_Flex,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apeteat",
  description: "Generated by CRLS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
        <h1 className="hidden">Footer</h1>
      </body>
    </html>
  );
}
