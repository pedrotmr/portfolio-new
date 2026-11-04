import { useCallback, useSyncExternalStore } from 'react';

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
export const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
// Desktop keeps the original scroll scenes; narrower screens use compact layouts.
export const STAGE_QUERY = '(min-width: 1024px)';

export const useMediaMatch = (query: string, serverValue = false) => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
};

const useMotionCapabilities = () => {
  const reduced = useMediaMatch(REDUCED_MOTION_QUERY);
  const finePointer = useMediaMatch(FINE_POINTER_QUERY);
  const stage = useMediaMatch(STAGE_QUERY);

  return { reduced, finePointer, stage };
};

export default useMotionCapabilities;
