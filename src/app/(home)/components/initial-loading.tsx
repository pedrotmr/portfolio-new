"use client";

import { clashFont } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const moveUp = {
  visible: { y: 0 },
  hidden: {
    y: "-120vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.6 },
  },
};

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.75, transition: { duration: 1.2 } },
};

const InitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const timeoutId = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const bottomCurvesAnimation = {
    visible: {
      d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`,
    },
    hidden: {
      d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2 },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={moveUp}
          initial="visible"
          exit="hidden"
          className="fixed z-10 flex h-screen w-screen items-center justify-center bg-dark"
          style={{ filter: "drop-shadow(0px 30px 39px #000000)" }}>
          <motion.p
            variants={fadeInOut}
            initial="hidden"
            animate="visible"
            className={`${clashFont.className} align-center absolute z-10 flex text-4xl text-beige`}>
            pedro.software
          </motion.p>

          {dimension.width > 0 && (
            <svg
              className="absolute top-0 w-full"
              style={{ height: "calc(100dvh + 300px)" }}>
              <motion.path
                variants={bottomCurvesAnimation}
                initial="visible"
                exit="hidden"
                className="fill-dark"></motion.path>
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoading;
