import CraftAnnotation from './CraftAnnotation';
import Identity from './Identity';

export default function TextContent() {
  return (
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
      {/* Left Column Content: Giant Name, Inverted Role Pill, Deliberate Craft */}
      <Identity />
      <CraftAnnotation />
    </div>
  );
}
