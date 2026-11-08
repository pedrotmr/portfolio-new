export default function CraftBar() {
  return (
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
          right: 79,
          bottom: 0,
          width: 386,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 16,
          fontSize: 16,
          color: '#EEE9DB',
        }}
      >
        @pedrotmr
      </div>
    </div>
  );
}
