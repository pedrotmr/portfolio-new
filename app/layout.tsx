import '@/styles/global.css';
import { interFont } from '@/utils';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Pedro Ramos ⋅ Frontend Developer',
  description: "Pedro Ramos' Personal Porfolio",
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
