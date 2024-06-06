"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const InitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const timeoutId = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const svgCurvePath = {
    initial: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`,
    exit: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`,
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ top: 0 }}
          exit={{ top: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed z-10 flex h-screen w-screen items-center justify-center bg-white"
        >
          {dimension.width > 0 && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`${roboto_mono.className} align-center absolute z-10 flex text-4xl text-black`}
              >
                pedro.dev
              </motion.p>

              <svg
                className="absolute top-0 w-full"
                style={{ height: "calc(100dvh + 300px)" }}
              >
                <motion.path
                  initial={{ d: svgCurvePath.initial }}
                  exit={{ d: svgCurvePath.exit }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="fill-white"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoading;
