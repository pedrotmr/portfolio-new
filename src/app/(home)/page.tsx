"use client";

import CursorShadow from "@/components/cursor-shadow";
import useTrackCursor from "@/hooks/use-track-cursor";
import Header from "./components/header";
import GifToLife from "@/components/gif-to-life";

const Home = () => {
  const { mouseX, mouseY, handleMouseMove } = useTrackCursor();

  return (
    <main onMouseMove={handleMouseMove}>
      <CursorShadow mouseX={mouseX} mouseY={mouseY} />
      <Header />
      <GifToLife url="https://media.giphy.com/media/U8mf1vmVzEMmOqU4D8/giphy.gif" />
      <GifToLife url="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif" />
    </main>
  );
};

export default Home;
