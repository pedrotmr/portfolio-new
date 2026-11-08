import {
  AmbientGlow,
  BackgroundGrid,
  CornerRegistrationMark,
} from './OpenGraphImageGraphic/BackgroundDecorations';
import CraftBar from './OpenGraphImageGraphic/CraftBar';
import GradientRing from './OpenGraphImageGraphic/GradientRing';
import Header from './OpenGraphImageGraphic/Header';
import LiveCursor from './OpenGraphImageGraphic/LiveCursor';
import Portrait from './OpenGraphImageGraphic/Portrait';
import TextContent from './OpenGraphImageGraphic/TextContent';

interface OpenGraphImageGraphicProps {
  portraitBase64: string;
}

export default function OpenGraphImageGraphic({ portraitBase64 }: OpenGraphImageGraphicProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: '#08090d',
        overflow: 'hidden',
        color: '#EEE9DB',
        fontFamily: 'Geist, sans-serif',
      }}
    >
      <BackgroundGrid />
      <AmbientGlow />
      <CornerRegistrationMark corner="top-left" />
      <CornerRegistrationMark corner="top-right" />
      <CornerRegistrationMark corner="bottom-left" />
      <CornerRegistrationMark corner="bottom-right" />
      <Header />
      <GradientRing />
      <Portrait portraitBase64={portraitBase64} />
      <TextContent />
      <LiveCursor />
      <CraftBar />
    </div>
  );
}
