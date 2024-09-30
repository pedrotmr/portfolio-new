'use client';

import {
  AboutMe,
  ClipTextExperience,
  CommandMenu,
  FooterCopyright,
  GradientCursorArea,
  Header,
  InitialLoadingScreen,
  Projects,
  ScrollPathBar,
  SocialMediaSection,
  StarsBackgroundArea,
  Timeline,
} from '@/ui';
import HorizontalScrollCarousel from '@/ui/timeline/HorizontalScroller';
import { ReactLenis } from 'lenis/react';
import ReactGA from 'react-ga4';

const Home = () => {
  ReactGA.send({ hitType: 'pageview', page: '/' });

  return (
    <ReactLenis root>
      <InitialLoadingScreen />
      <ScrollPathBar />
      <CommandMenu />
      <GradientCursorArea>
        <Header />
        <StarsBackgroundArea>
          <AboutMe />
          <ClipTextExperience />
          {/* <HorizontalScrollCarousel /> */}
          <Timeline />
          <Projects />
        </StarsBackgroundArea>
      </GradientCursorArea>
      <SocialMediaSection />
      <FooterCopyright />
    </ReactLenis>
  );
};

export default Home;
