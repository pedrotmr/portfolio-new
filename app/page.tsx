'use client';

import {
  AboutMe,
  ClipTextExperience,
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
import { ReactLenis } from 'lenis/react';
import ReactGA from 'react-ga4';

const Home = () => {
  ReactGA.send({ hitType: 'pageview', page: '/' });

  return (
    <ReactLenis root>
      <InitialLoadingScreen />
      <ScrollPathBar />
      <GradientCursorArea>
        <Header />
        <StarsBackgroundArea>
          <AboutMe />
          <ClipTextExperience />
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
