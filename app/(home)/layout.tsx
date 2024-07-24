import '@/styles/global.css';
import { LoadingScreenRoot } from '@/ui';
import { avantGarde } from '@/utils/fonts';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Pedro Ramos ⋅ Frontend Developer',
  description: "Pedro Ramos' Personal Porfolio",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${avantGarde.className} relative overflow-x-hidden bg-beige leading-relaxed text-slate-400 antialiased`}
      >
        {/* <LoadingScreenRoot /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
