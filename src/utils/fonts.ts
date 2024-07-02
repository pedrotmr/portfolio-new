import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const interFont = Inter({ subsets: ["latin"] });

export const robotoFont = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const thunderFont = localFont({
  src: "../../public/fonts/thunder.ttf",
});

export const clashFont = localFont({
  src: "../../public/fonts/clash-display.ttf",
});
