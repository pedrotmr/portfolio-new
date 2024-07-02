import useMediaQuery from "@/hooks/use-media-query";
import { clashFont, thunderFont } from "@/utils/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import IgProfilePicutre from "./ig-profile-picture";
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
      className="h-full bg-beige"
      style={{ paddingTop: margin }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 2.3 } }}
        ref={ref}
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-900 p-16"
        style={{
          borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
          marginLeft: margin,
          marginRight: margin,
        }}>
        <TileGrid borderRadius={borderRadius} />

        <div className="z-10 flex scale-110 flex-col gap-4 p-4 text-beige">
          <IgProfilePicutre />

          <h2 className={`mb-2 text-3xl text-beige ${clashFont.className}`}>
            Hey, I'm Pedro 👋
          </h2>

          <h1
            className={`upperscase text-9xl font-bold leading-none tracking-normal text-beige ${thunderFont.className}`}>
            Frontend Developer
          </h1>

          <h3 className={`mt-[-8px] max-w-3xl text-3xl ${clashFont.className}`}>
            I craft beautiful and engaging digital experiences, <br /> with a{" "}
            <span className="bg-transparent bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              user driven mindset
            </span>{" "}
            and a{" "}
            <span className="from-orangeLight bg-transparent bg-gradient-to-r to-orange-200 bg-clip-text text-transparent">
              big eye for design.
            </span>
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
