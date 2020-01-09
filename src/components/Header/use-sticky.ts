import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

interface ReactRefProps {
  current: HTMLElement;
}

/**
 * Returns a ref and a stateful value bound to the ref
 *
 * @returns [Any, Boolean]
 */
export function useSticky(stickyRef: ReactRefProps) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // observe when ref enters or leaves sticky state
    function observe() {
      if (!stickyRef.current) return;

      const stickyRefOffset = stickyRef.current.getBoundingClientRect().top;
      const pageOffset = window.pageYOffset;
      const stickyActive = pageOffset > stickyRefOffset;

      if (stickyActive && !sticky) {
        setSticky(true);
      } else if (!stickyActive && sticky) {
        setSticky(false);
      }
    }

    observe();

    // throttled function
    const throttled = throttle(observe, 200);

    // bind scroll event
    document.addEventListener('scroll', throttled);

    return () => {
      document.removeEventListener('scroll', throttled);
    };
  }, [sticky]);

  return [sticky];
}

export default useSticky;
