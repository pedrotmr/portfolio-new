import CursorShadow from "@/components/cursor-shadow";
import InitialLoading from "@/components/initial-loading";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Ramos",
  description: "Pedro Ramos' Personal Porfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased`}
      >
        <InitialLoading />
        <CursorShadow />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
