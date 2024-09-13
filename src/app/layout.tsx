import TransitionProvider from "@/components/TransitionProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Lucas Bastos",
  description: "The best animated portfolio you've ever seen.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider children={children}/>
      </body>
    </html>
  );
}
