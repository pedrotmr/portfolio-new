export default function Identity() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
    </div>
  );
}
