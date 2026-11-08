export default function Header() {
  return (
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
  );
}
