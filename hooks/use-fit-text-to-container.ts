import { useEffect, useRef } from 'react';

const useFitTextToContainer = (trackContainerWidth = true) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    let frame = 0;
    // Measuring the live heading changes document height and makes scroll anchoring fight the frame animation.
    const measure = document.createElement('span');
    measure.setAttribute('aria-hidden', 'true');
    Object.assign(measure.style, {
      position: 'fixed',
      left: '-100000px',
      top: '0',
      visibility: 'hidden',
      pointerEvents: 'none',
      whiteSpace: 'pre',
      width: 'max-content',
    });
    document.body.append(measure);

    const resizeText = () => {
      const styles = getComputedStyle(container);
      const available =
        container.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      if (available <= 0) return;

      const textStyles = getComputedStyle(text);
      measure.textContent = text.textContent;
      measure.style.font = textStyles.font;
      measure.style.letterSpacing = textStyles.letterSpacing;
      measure.style.fontFeatureSettings = textStyles.fontFeatureSettings;
      measure.style.textTransform = textStyles.textTransform;

      let min = 1;
      let max = 2500;
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        measure.style.fontSize = mid + 'px';

        if (Math.ceil(measure.getBoundingClientRect().width) <= available) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
      text.style.fontSize = max + 'px';
    };

    const scheduleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(resizeText);
    };

    resizeText();
    // The display fonts load after the first measure, so measure again once they are ready.
    document.fonts?.ready.then(scheduleResize);

    let lastWidth = container.clientWidth;
    let lastRootFont = getComputedStyle(document.documentElement).fontSize;
    const observer = new ResizeObserver(() => {
      const rootFont = getComputedStyle(document.documentElement).fontSize;
      if ((!trackContainerWidth || container.clientWidth === lastWidth) && rootFont === lastRootFont) return;
      lastWidth = container.clientWidth;
      lastRootFont = rootFont;
      scheduleResize();
    });
    if (trackContainerWidth) observer.observe(container);
    observer.observe(document.documentElement);
    if (!trackContainerWidth) window.addEventListener('resize', scheduleResize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', scheduleResize);
      measure.remove();
    };
  }, [trackContainerWidth]);

  return { containerRef, textRef };
};

export default useFitTextToContainer;
