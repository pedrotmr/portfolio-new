import { HEADER_ANIMATION_COLOR } from "@/constants";
import { motion } from "framer-motion";

const TileGrid = ({ borderRadius }: { borderRadius: number }) => {
  return (
    <div
      className="absolute grid h-screen w-full overflow-hidden"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(70px, 1fr))",
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
      }}
    >
      {Array(500)
        .fill(null)
        .map((_, i) => (
          <Tile key={i} />
        ))}
    </div>
  );
};

const Tile = () => {
  return (
    <motion.div
      className="bg-slate-900"
      whileHover={{
        zIndex: 1,
        opacity: 0,
        backgroundColor: HEADER_ANIMATION_COLOR,
      }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage:
          "linear-gradient(currentcolor 1px, transparent 1px), linear-gradient(to right, currentcolor 1px, transparent 1px)",
        color: "rgba(113, 113, 113, 0.04)",
      }}
    />
  );
};

export default TileGrid;
