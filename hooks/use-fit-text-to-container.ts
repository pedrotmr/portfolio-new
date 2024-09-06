import { useEffect, useRef } from 'react';

const useFitTextToContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) return;

      let min = 1;
      let max = 2500;
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + 'px';

        if (text.offsetWidth <= container.offsetWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
      text.style.fontSize = max + 'px';
    };

    resizeText();

    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, []);

  return { containerRef, textRef };
};

export default useFitTextToContainer;
