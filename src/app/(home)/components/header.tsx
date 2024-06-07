import useMediaQuery from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TileGrid from "./tile-grid";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { isMobile } = useMediaQuery();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end center"],
  });

  const marginSize = isMobile ? 18 : 40;
  const margin = useTransform(scrollYProgress, [0, 1], [marginSize, 0]);
  const borderRadius = isMobile ? 18 : 32;

  return (
    <motion.div
      className="h-full bg-black"
      style={{ paddingTop: margin }}
    >
      <motion.div
        ref={ref}
        className="relative flex h-screen flex-col items-center justify-center bg-slate-900 p-8"
        style={{
          borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
          marginLeft: margin,
          marginRight: margin,
        }}
      >
        <h1 className="z-10 text-6xl font-bold text-white">
          Hey, my name is Pedro
        </h1>

        <TileGrid borderRadius={borderRadius} />
      </motion.div>
    </motion.div>
  );
};

export default Header;
