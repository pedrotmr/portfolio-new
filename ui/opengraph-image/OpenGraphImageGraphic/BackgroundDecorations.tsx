type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const cornerPositions: Record<Corner, { top?: number; right?: number; bottom?: number; left?: number }> = {
  'top-left': { top: 24, left: 24 },
  'top-right': { top: 24, right: 24 },
  'bottom-left': { bottom: 24, left: 24 },
  'bottom-right': { bottom: 24, right: 24 },
};

export function BackgroundGrid() {
  return (
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
  );
}

export function AmbientGlow() {
  return (
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
  );
}

interface CornerRegistrationMarkProps {
  corner: Corner;
}

export function CornerRegistrationMark({ corner }: CornerRegistrationMarkProps) {
  return (
    <div
      style={{
        position: 'absolute',
        ...cornerPositions[corner],
        color: 'rgba(238, 233, 219, 0.25)',
        fontSize: 16,
        fontFamily: 'Geist, monospace',
      }}
    >
      +
    </div>
  );
}
