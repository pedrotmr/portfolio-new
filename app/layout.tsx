import '@/styles/global.css';
import { InitialLoadingScreen } from '@/ui';
import { interFont } from '@/utils';
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
        className={`${interFont.className} relative bg-beige leading-relaxed text-slate-400 selection:bg-pinkLight
          selection:text-beige`}
      >
        <InitialLoadingScreen />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
