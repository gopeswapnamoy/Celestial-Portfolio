"use client";

import { RefObject, useEffect, useMemo, useState } from "react";

export function useInViewReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = { threshold: 0.24 },
) {
  const [isInView, setIsInView] = useState(false);
  const stableOptions = useMemo(
    () => ({
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? "0px",
      threshold: options.threshold ?? 0.24,
    }),
    [options.root, options.rootMargin, options.threshold],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, stableOptions);

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, ref, stableOptions]);

  return isInView;
}
