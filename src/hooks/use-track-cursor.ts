import { useMotionValue } from "framer-motion";

const useTrackCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return { mouseX, mouseY, handleMouseMove };
};

export default useTrackCursor;
