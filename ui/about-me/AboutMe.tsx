import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import AboutMeCompact from './AboutMe/AboutMeCompact';
import AboutMeStage from './AboutMe/Stage/AboutMeStage';

export default function AboutMe() {
  const { stage, reduced, finePointer } = useMotionCapabilities();

  // Desktop keeps the original pinned scene; smaller screens and reduced motion use normal flow.
  return stage && !reduced ? (
    <AboutMeStage finePointer={finePointer} />
  ) : (
    <AboutMeCompact key={reduced ? 'still' : 'moving'} reduced={reduced} />
  );
}
