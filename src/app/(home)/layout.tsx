import InitialLoading from "@/app/(home)/components/initial-loading";
import "@/styles.css";
import { interFont } from "@/utils/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pedro Ramos ⋅ Frontend Developer",
  description: "Pedro Ramos' Personal Porfolio",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} cursor-beige bg-slate-900 leading-relaxed text-slate-400 antialiased`}>
        <InitialLoading />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
