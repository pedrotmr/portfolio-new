export default function LiveCursor() {
  return (
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
  );
}
