import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const robotoFont = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const thunderFont = localFont({
  src: '../public/fonts/thunder.ttf',
});

export const clashFont = localFont({
  src: '../public/fonts/clash-display.ttf',
});

export const avantGarde = localFont({
  src: '../public/fonts/avant-garde.ttf',
});

export const geistFont = localFont({
  src: '../public/fonts/geist.otf',
});
