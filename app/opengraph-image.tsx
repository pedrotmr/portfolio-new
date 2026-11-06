import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const alt =
  'Pedro Ramos, frontend developer, with a portrait framed by a colorful orbital ring.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  // Load fonts and local assets directly from filesystem in Node runtime
  const avantFontPath = path.join(process.cwd(), 'public/fonts/avant-garde.ttf');
  const geistRegularPath = path.join(process.cwd(), 'public/fonts/geist-regular.ttf');
  const geistBoldPath = path.join(process.cwd(), 'public/fonts/geist.otf');
  const portraitPath = path.join(process.cwd(), 'public/images/pedro-about-og.jpg');

  const avantData = fs.readFileSync(avantFontPath);
  const geistRegularData = fs.readFileSync(geistRegularPath);
  const geistBoldData = fs.readFileSync(geistBoldPath);
  const portraitBuf = fs.readFileSync(portraitPath);
  const portraitBase64 = `data:image/jpeg;base64,${portraitBuf.toString('base64')}`;

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
            left: 48,
            right: 48,
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
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 4,
              fontSize: 16,
              color: 'rgba(238, 233, 219, 0.55)',
              fontFamily: 'Geist, monospace',
            }}
          >
            <span style={{ color: 'rgba(238, 233, 219, 0.65)' }}>UI · Motion · WebGL</span>
            <span style={{ fontSize: 14 }}>Brazil / Remote</span>
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
            {/* Orbital coordinate node on the exposed top arc */}
            <circle cx="240" cy="26" r="6" fill="#F58529" />
          </svg>
        </div>

        {/* Portrait framed over the orbital ring */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 127,
            width: 386,
            height: 514,
            display: 'flex',
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            borderTop: '1px solid rgba(238, 233, 219, 0.22)',
            borderLeft: '1px solid rgba(238, 233, 219, 0.14)',
            backgroundColor: 'rgba(8, 9, 13, 0.16)',
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
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 170,
              backgroundImage:
                'linear-gradient(to bottom, rgba(8, 9, 13, 0) 0%, rgba(8, 9, 13, 0.94) 100%)',
            }}
          />
        </div>

        {/* Left Column Content: Giant Name, Inverted Role Pill, Deliberate Craft */}
        <div
          style={{
            position: 'absolute',
            top: 122,
            left: 48,
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
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
              <span>RAMOS</span>
              <span style={{ color: '#DD2A7B', fontSize: 108, marginLeft: -5 }}>.</span>
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
                padding: '12px 22px',
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
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: '0.01em',
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
                padding: '8px 12px',
                borderRadius: 999,
                backgroundColor: 'rgba(221, 42, 123, 0.16)',
                border: '1px solid rgba(221, 42, 123, 0.38)',
                fontSize: 15,
                fontWeight: 600,
                color: '#FFA2C7',
              }}
            >
              <span>UI + Motion Craft</span>
            </div>
          </div>

          {/* Hand-drawn annotation echoes the portfolio's motion language. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 6,
              marginTop: 22,
              marginLeft: 8,
            }}
          >
            <svg
              viewBox="-3 -8 32 37"
              width="46"
              height="54"
              style={{ transform: 'scaleX(-1) rotate(-10deg)' }}
            >
              {/* Reverse the curl, then stretch around the tip to keep both endpoints in place. */}
              <g transform="translate(0 27) scale(1 1.38) translate(0 -27)">
                <g transform="matrix(0 -1 -1 0 27 27)">
                  <path
                    fill="#F58529"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m12.849 7.741 1.668-1.968a7.6 7.6 0 0 0-1.668 1.968m-4.672 3.183c.723-.678 1.415-1.374 2.204-1.963-.93.439-1.591 1.182-2.204 1.963m3.561 1.381c.186.333.376.168.555.027.606-.477.652-1.183.689-1.859.027-.493-.007-1.008-.262-1.463-.097-.173-.222-.284-.374-.032-.414.687-.726 1.411-.784 2.221-.028.386.018.766.176 1.105m-1.134-2.952c-.553.284-.984.731-1.424 1.159-1.9 1.852-3.092 4.12-3.919 6.614-.552 1.666-.941 3.368-1.27 5.087-.03.157-.055.317-.163.443-.122.142-.237.192-.283-.053-.011-.061.031-.148-.081-.122-.387.089-.436-.202-.504-.454-.127-.472-.039-.952.001-1.423.113-1.319.277-2.635.611-3.918.311-1.191.791-2.323 1.302-3.442.325-.712.666-1.432 1.214-1.985.364-.367.56-.833.912-1.196.675-.697 1.355-1.383 2.172-1.918.673-.44 1.409-.681 2.213-.684a.72.72 0 0 0 .611-.301 45 45 0 0 1 1.288-1.584c.712-.842 1.554-1.567 2.419-2.254 1.38-1.097 2.85-2.041 4.533-2.613.989-.336 1.986-.604 3.041-.316.278.076.521.196.665.464.062.115.076.222-.008.334-.099.132-.164.045-.274-.005-.752-.344-1.457-.039-2.16.195-1.938.643-3.566 1.801-5.111 3.094a21.4 21.4 0 0 0-3.202 3.304c-.075.097-.212.172-.024.31.658.481.994 1.169 1.133 1.946.215 1.199.096 2.34-.798 3.266-.48.498-.972.532-1.594.236-1.582-.752-1.887-2.371-1.37-3.743l.139-.368z"
                  />
                  <path
                    fill="#F58529"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.496 24.376c-.552.601-1.01 1.264-1.331 2.014zm-3.028-2.027c.397.725.664 1.505.96 2.272.044.115.036.272.221.288.178.015.224-.132.277-.238.291-.579.736-1.039 1.124-1.546.246-.32.432-.689.695-1.009.404-.494.771-1.019 1.14-1.541.187-.264.49-.429.583-.78.091-.345.365-.415.843-.205.244.108.443.323.313.634a4.3 4.3 0 0 1-.391.737c-1.025 1.518-2.063 3.027-3.09 4.544-.231.34-.438.697-.653 1.048-.389.639-.678.695-1.314.294-.494-.311-.767-.741-.883-1.308-.224-1.092-.479-2.178-.906-3.214-.086-.208-.2-.403-.294-.607-.109-.236-.037-.355.232-.334.596.046.69.124 1.144.964"
                  />
                </g>
              </g>
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
                  fontSize: 17,
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
            left: 48,
            right: 48,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 16,
            fontWeight: 400,
            fontFamily: 'Geist, monospace',
            color: 'rgba(238, 233, 219, 0.65)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 18,
              borderTop: '1px solid rgba(238, 233, 219, 0.12)',
              paddingTop: 16,
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
              position: 'absolute',
              left: 639,
              width: 386,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#EEE9DB' }}>@pedrotmr</span>
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
          data: geistRegularData,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Geist',
          data: geistBoldData,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  );
}
