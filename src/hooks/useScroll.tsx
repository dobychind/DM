import { useCallback, RefObject } from 'react';

const useSmoothScrollToRef = (ref: RefObject<HTMLElement | null>) => {
  const scrollToRef = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [ref]);

  return scrollToRef;
};

export default useSmoothScrollToRef;
