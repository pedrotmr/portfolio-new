import '@/styles/global.css';
import { interFont } from '@/utils';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import ReactGA from 'react-ga4';

export const metadata: Metadata = {
  title: 'Pedro Ramos ⋅ Frontend Developer',
  description: "Pedro Ramos' Personal Porfolio",
};

ReactGA.initialize('G-4YSBBYPLQZ');

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
