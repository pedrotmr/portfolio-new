interface PortraitProps {
  portraitBase64: string;
}

export default function Portrait({ portraitBase64 }: PortraitProps) {
  return (
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
          backgroundImage: 'linear-gradient(to bottom, rgba(8, 9, 13, 0) 0%, rgba(8, 9, 13, 0.94) 100%)',
        }}
      />
    </div>
  );
}
