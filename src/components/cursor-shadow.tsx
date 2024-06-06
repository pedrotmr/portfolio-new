"use client";

import { useEffect, useState } from "react";

const CursorShadow = () => {
  const [display, setDisplay] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) =>
      setCursorPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", moveCursor);
    const timeoutId = setTimeout(() => setDisplay(true), 2500);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeoutId);
    };
  }, []);

  const cursorShadowStyle = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)`,
  };

  if (!display) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={cursorShadowStyle}
    ></div>
  );
};

export default CursorShadow;
