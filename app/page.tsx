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
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import 'lenis/dist/lenis.css';
import ReactGA from 'react-ga4';

const Home = () => {
  const { finePointer, reduced } = useMotionCapabilities();
  useEffect(() => {
    ReactGA.initialize('G-4YSBBYPLQZ');
    ReactGA.send({ hitType: 'pageview', page: '/' });
  }, []);

  return (
    <ReactLenis root options={{ smoothWheel: finePointer && !reduced, syncTouch: false }}>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <InitialLoadingScreen />
      <ScrollPathBar />
      <CommandMenu />
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
