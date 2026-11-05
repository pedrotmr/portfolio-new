import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const alt =
  'Pedro Ramos, frontend developer, with a portrait framed by a colorful orbital ring.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return [
    {
      id: 'about-portrait',
      alt: 'Pedro Ramos, frontend developer, with the portrait used in the About Me section.',
      size,
      contentType,
    },
    {
      id: 'old-portrait',
      alt: 'Pedro Ramos, frontend developer, with the previous outdoor portrait.',
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({ id }: { id: string }) {
  // Load fonts and local assets directly from filesystem in Node runtime
  const avantFontPath = path.join(process.cwd(), 'public/fonts/avant-garde.ttf');
  const geistFontPath = path.join(process.cwd(), 'public/fonts/geist.otf');
  const useOldPortrait = id === 'old-portrait';
  const portraitPath = path.join(
    process.cwd(),
    useOldPortrait ? 'public/images/pedro.png' : 'public/images/pedro-about-og.jpg',
  );

  const avantData = fs.readFileSync(avantFontPath);
  const geistData = fs.readFileSync(geistFontPath);
  const portraitBuf = fs.readFileSync(portraitPath);
  const portraitMime = useOldPortrait ? 'image/png' : 'image/jpeg';
  const portraitBase64 = `data:${portraitMime};base64,${portraitBuf.toString('base64')}`;

  return new ImageResponse(
    (
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
        {/* Technical background blueprint grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(238, 233, 219, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(238, 233, 219, 0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial ambient warmth behind the halo */}
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 50,
            width: 600,
            height: 600,
            borderRadius: 999,
            background:
              'radial-gradient(circle, rgba(221, 42, 123, 0.28) 0%, rgba(245, 133, 41, 0.16) 40%, transparent 70%)',
          }}
        />

        {/* Corner registration crosshairs for frontend precision craft */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            color: 'rgba(238, 233, 219, 0.25)',
            fontSize: 16,
            fontFamily: 'Geist, monospace',
          }}
        >
          +
        </div>
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            color: 'rgba(238, 233, 219, 0.25)',
            fontSize: 16,
            fontFamily: 'Geist, monospace',
          }}
        >
          +
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            color: 'rgba(238, 233, 219, 0.25)',
            fontSize: 16,
            fontFamily: 'Geist, monospace',
          }}
        >
          +
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            color: 'rgba(238, 233, 219, 0.25)',
            fontSize: 16,
            fontFamily: 'Geist, monospace',
          }}
        >
          +
        </div>

        {/* Top Header Bar */}
        <div
          style={{
            position: 'absolute',
            top: 36,
            left: 54,
            right: 54,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left: Live status tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 16px',
              borderRadius: 999,
              backgroundColor: 'rgba(238, 233, 219, 0.06)',
              border: '1px solid rgba(238, 233, 219, 0.14)',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#EEE9DB',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: '#F58529',
                boxShadow: '0 0 10px #F58529',
              }}
            />
            <span>@pedrotmr</span>
            <span style={{ opacity: 0.35 }}>·</span>
            <span style={{ color: '#F58529' }}>interactive portfolio</span>
          </div>

          {/* Right: Technical Viewport coordinates badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 15,
              color: 'rgba(238, 233, 219, 0.55)',
              fontFamily: 'Geist, monospace',
            }}
          >
            <span style={{ color: '#A9B388' }}>UI · Motion · WebGL</span>
          </div>
        </div>

        {/* Graphic Motif: The Oversized Instagram Story Gradient Ring */}
        <div
          style={{
            position: 'absolute',
            top: 75,
            right: 80,
            width: 480,
            height: 480,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
            <defs>
              <linearGradient id="ogRingGrad" x1="20" y1="20" x2="460" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F58529" />
                <stop offset="48%" stopColor="#DD2A7B" />
                <stop offset="100%" stopColor="#8134AF" />
              </linearGradient>
            </defs>
            {/* Outer dashed orbit */}
            <circle
              cx="240"
              cy="240"
              r="232"
              stroke="rgba(238, 233, 219, 0.12)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            {/* Main vibrant gradient halo */}
            <circle cx="240" cy="240" r="214" stroke="url(#ogRingGrad)" strokeWidth="10" />
            {/* Orbital coordinate node at 45 degrees */}
            <circle cx="404" cy="76" r="6" fill="#F58529" />
          </svg>
        </div>

        {/* Pedro's Cutout Portrait (breaking out and overlapping the ring) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 110,
            width: 420,
            height: 525,
            display: 'flex',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitBase64}
            alt="Pedro Ramos portrait"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
            }}
          />
        </div>

        {/* Left Column Content: Giant Name, Inverted Role Pill, Deliberate Craft */}
        <div
          style={{
            position: 'absolute',
            top: 122,
            left: 54,
            width: 660,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Name in massive bold AvantGarde display lettering */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'AvantGarde, sans-serif',
              fontWeight: 700,
              fontSize: 102,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              color: '#EEE9DB',
            }}
          >
            <div>PEDRO</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span>RAMOS</span>
              <span style={{ color: '#DD2A7B', fontSize: 108 }}>.</span>
            </div>
          </div>

          {/* Inverted High-Contrast Role Pill (Instantly readable at thumbnail scale) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 26,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '12px 28px',
                borderRadius: 999,
                backgroundColor: '#EEE9DB',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Code tag indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  backgroundColor: '#08090d',
                  color: '#F58529',
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'Geist, monospace',
                }}
              >
                {'</>'}
              </div>
              <span
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 27,
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#08090d',
                }}
              >
                FRONTEND DEVELOPER
              </span>
            </div>

            {/* Active Craft Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 999,
                backgroundColor: 'rgba(221, 42, 123, 0.16)',
                border: '1px solid rgba(221, 42, 123, 0.38)',
                fontSize: 16,
                fontWeight: 600,
                color: '#FFA2C7',
              }}
            >
              <span>UI + Motion Craft</span>
            </div>
          </div>

          {/* A precise branch marker echoes the portfolio's motion language. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              marginTop: 22,
              marginLeft: 24,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4v14h14m-5-5 5 5-5 5"
                stroke="#F58529"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 4,
              }}
            >
              <span
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#F58529',
                  letterSpacing: '0.01em',
                }}
              >
                blending technical engineering with serious design taste
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: 'rgba(238, 233, 219, 0.72)',
                  marginTop: 3,
                }}
              >
                physics-based interactions · ripple shaders · polished micro-details
              </span>
            </div>
          </div>
        </div>

        {/* Live Cursor Element hovering between text and portrait */}
        <div
          style={{
            position: 'absolute',
            top: 260,
            right: 485,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3l7 18 3-7 7-3L3 3z"
              fill="#EEE9DB"
              stroke="#08090d"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              backgroundColor: '#08090d',
              border: '1.5px solid #F58529',
              color: '#EEE9DB',
              fontSize: 13,
              fontWeight: 700,
              fontFamily: 'Geist, monospace',
            }}
          >
            {'<PedroRamos />'}
          </div>
        </div>

        {/* Bottom Craft Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 54,
            right: 54,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(238, 233, 219, 0.12)',
            paddingTop: 16,
            fontSize: 15,
            fontFamily: 'Geist, monospace',
            color: 'rgba(238, 233, 219, 0.65)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 18,
            }}
          >
            <span>React</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>TypeScript</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>Next.js</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>Framer Motion</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>Three.js / Shaders</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ color: '#EEE9DB' }}>@pedrotmr</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>Brazil / Remote</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'AvantGarde',
          data: avantData,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Geist',
          data: geistData,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
}
