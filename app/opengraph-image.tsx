import { readFile } from 'fs/promises';
import { join } from 'path';
import { ImageResponse } from 'next/og';

export const alt =
  'Pedro Ramos, frontend developer — kinetic contact sheet of project screenshots from Juicy, Zims, News Aggregator, Crypto Tools, and React Shortcut Keys.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Frame = {
  src: string;
  mime: 'image/png';
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  objectPosition: string;
};

const frames: Frame[] = [
  {
    src: 'images/projects/juicy.png',
    mime: 'image/png',
    left: -90,
    top: -70,
    width: 580,
    height: 380,
    rotate: -9,
    objectPosition: 'center 32%',
  },
  {
    src: 'images/projects/zims.png',
    mime: 'image/png',
    left: 340,
    top: -90,
    width: 430,
    height: 280,
    rotate: 7,
    objectPosition: 'center 45%',
  },
  {
    src: 'images/projects/crypto-tools.png',
    mime: 'image/png',
    left: 740,
    top: -40,
    width: 560,
    height: 360,
    rotate: -5,
    objectPosition: 'center 15%',
  },
  {
    src: 'images/projects/news-aggregator.png',
    mime: 'image/png',
    left: -110,
    top: 300,
    width: 620,
    height: 400,
    rotate: 6,
    objectPosition: 'center top',
  },
  {
    src: 'images/projects/react-shortcut-keys.png',
    mime: 'image/png',
    left: 680,
    top: 310,
    width: 600,
    height: 400,
    rotate: -8,
    objectPosition: 'left top',
  },
];

async function loadDataUrl(relativePath: string, mime: string) {
  const bytes = await readFile(join(process.cwd(), 'public', relativePath));
  return `data:${mime};base64,${bytes.toString('base64')}`;
}

export default async function OpenGraphImage() {
  const images = await Promise.all(frames.map((frame) => loadDataUrl(frame.src, frame.mime)));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#080807',
          color: '#eee9db',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Contact-sheet collage — uneven crops, not a card grid */}
        {frames.map((frame, index) => (
          <div
            key={frame.src}
            style={{
              position: 'absolute',
              left: frame.left,
              top: frame.top,
              width: frame.width,
              height: frame.height,
              display: 'flex',
              overflow: 'hidden',
              transform: `rotate(${frame.rotate}deg)`,
              border: '3px solid #eee9db',
              boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
            }}
          >
            {/* Satori renders raw image elements in generated OG images. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt=""
              width={frame.width}
              height={frame.height}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: frame.objectPosition,
              }}
            />
          </div>
        ))}

        {/* Soft vignette so the name plate pops without a generic gradient wash */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundColor: 'rgba(8, 8, 7, 0.16)',
          }}
        />

        {/* Film-edge ticks — contact-sheet craft cue, not a tracked eyebrow */}
        <div
          style={{
            position: 'absolute',
            left: 18,
            top: 24,
            bottom: 24,
            width: 18,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={`l-${i}`}
              style={{
                width: 18,
                height: 28,
                backgroundColor: '#eee9db',
                opacity: 0.88,
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            right: 18,
            top: 24,
            bottom: 24,
            width: 18,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={`r-${i}`}
              style={{
                width: 18,
                height: 28,
                backgroundColor: '#eee9db',
                opacity: 0.88,
              }}
            />
          ))}
        </div>

        {/* Name plate — sharp, oversized, thumbnail-legible */}
        <div
          style={{
            position: 'absolute',
            left: 88,
            width: 760,
            top: 188,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '32px 44px 34px',
            backgroundColor: '#eee9db',
            border: '5px solid #080807',
            transform: 'rotate(-2deg)',
            boxShadow: '12px 18px 0 #cd486b',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: 24,
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -2.4,
              lineHeight: 0.92,
              color: '#080807',
            }}
          >
            <span>Pedro</span>
            <span style={{ color: '#cd486b' }}>Ramos</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 14,
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: -0.4,
              color: '#141516',
            }}
          >
            Frontend Developer
          </div>
        </div>

        {/* Frame index chip — print-shop delight */}
        <div
          style={{
            position: 'absolute',
            right: 64,
            bottom: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 16px',
            backgroundColor: '#cd486b',
            color: '#eee9db',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 0.5,
            transform: 'rotate(2deg)',
          }}
        >
          5 selects · @pedrotmr
        </div>
      </div>
    ),
    size,
  );
}
