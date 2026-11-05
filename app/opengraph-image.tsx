import { ImageResponse } from 'next/og';

export const alt = 'Pedro Ramos, a frontend developer, in a navy and beige share card.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-new-one-eosin.vercel.app');

export function generateImageMetadata() {
  return [
    {
      id: 'portrait',
      alt: 'Pedro Ramos, frontend developer, with his portrait.',
      size,
      contentType,
    },
    {
      id: 'name-only',
      alt: 'Pedro Ramos, frontend developer, in a name-only share card.',
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({ id }: { id: string }) {
  const showPortrait = id === 'portrait';
  let portraitData: string | undefined;

  if (showPortrait) {
    const response = await fetch(new URL('/images/pedro-avatar-og.jpg', siteUrl));
    if (!response.ok) {
      throw new Error(`Could not load share card portrait: ${response.status}`);
    }
    const bytes = new Uint8Array(await response.arrayBuffer());
    const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');
    portraitData = `data:image/jpeg;base64,${btoa(binary)}`;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '72px',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 85% 18%, rgba(205, 72, 107, 0.32), transparent 30%), linear-gradient(135deg, #0f172a 0%, #111c34 100%)',
          color: '#eee9db',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 54,
            left: 54,
            width: 1092,
            height: 522,
            display: 'flex',
            border: '1px solid rgba(238, 233, 219, 0.16)',
            borderRadius: 24,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: showPortrait ? 'flex-start' : 'center',
            width: showPortrait ? 680 : 1000,
            height: '100%',
            zIndex: 1,
            textAlign: showPortrait ? 'left' : 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: '#cd486b',
              }}
            />
            <span
              style={{
                color: '#d7d2c5',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 5,
              }}
            >
              PORTFOLIO
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: showPortrait ? 'column' : 'row',
              gap: showPortrait ? 0 : 24,
              fontSize: showPortrait ? 92 : 104,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.04,
            }}
          >
            <span>Pedro</span>
            <span style={{ color: '#cd486b' }}>Ramos</span>
          </div>
          <div
            style={{
              display: 'flex',
              color: '#b8c3d4',
              fontSize: 32,
              fontWeight: 400,
              marginTop: 24,
            }}
          >
            Frontend Developer
          </div>
          <div
            style={{
              display: 'flex',
              width: 84,
              height: 4,
              borderRadius: 8,
              backgroundColor: '#cd486b',
              marginTop: 38,
            }}
          />
        </div>
        {showPortrait && portraitData ? (
          <div
            style={{
              display: 'flex',
              width: 316,
              height: 396,
              marginLeft: 24,
              border: '8px solid rgba(238, 233, 219, 0.9)',
              borderRadius: 22,
              overflow: 'hidden',
              transform: 'rotate(3deg)',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.28)',
            }}
          >
            {/* Satori renders raw image elements in generated OG images. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portraitData}
              alt="Portrait of Pedro Ramos"
              width="316"
              height="396"
              style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            />
          </div>
        ) : null}
        <div
          style={{
            position: 'absolute',
            right: 78,
            bottom: 72,
            display: 'flex',
            color: 'rgba(238, 233, 219, 0.66)',
            fontSize: 19,
            letterSpacing: 2,
          }}
        >
          @pedrotmr
        </div>
      </div>
    ),
    size,
  );
}
