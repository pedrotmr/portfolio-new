export default function GradientRing() {
  return (
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
  );
}
