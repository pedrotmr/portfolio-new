import '@/styles/global.css';
import { interFont } from '@/utils';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

const title = 'Pedro Ramos ⋅ Frontend Developer';
const description = "Pedro Ramos' personal portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-new-one-eosin.vercel.app'),
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: '/opengraph-image/portrait',
        width: 1200,
        height: 630,
        alt: 'Pedro Ramos, frontend developer, with his portrait.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      {
        url: '/opengraph-image/portrait',
        alt: 'Pedro Ramos, frontend developer, with his portrait.',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  viewportFit: 'cover',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} relative bg-beige leading-relaxed text-slate-400 selection:bg-pinkLight
          selection:text-beige`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
