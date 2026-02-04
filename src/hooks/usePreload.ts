"use client";

import { useState, useEffect, useCallback } from "react";

export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    // Use requestIdleCallback for non-blocking preload
    const preloadImage = () => {
      const img = new Image();
      img.onload = () => {
        // Request animation frame to avoid jank
        requestAnimationFrame(() => {
          setIsLoaded(true);
        });
      };
      img.onerror = () => {
        requestAnimationFrame(() => {
          setIsLoaded(false);
        });
      };
      img.src = src;
    };

    // Prefer requestIdleCallback, fallback to setTimeout
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadImage, { timeout: 2000 });
    } else {
      setTimeout(preloadImage, 100);
    }
  }, [src]);

  return isLoaded;
}

export function usePreloadResources(resources: string[]) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (resources.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    let loaded = 0;

    const preloadBatch = () => {
      resources.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          requestAnimationFrame(() => {
            setLoadedCount(loaded);
            if (loaded === resources.length) {
              setIsAllLoaded(true);
            }
          });
        };
        img.onerror = () => {
          loaded++;
          requestAnimationFrame(() => {
            setLoadedCount(loaded);
            if (loaded === resources.length) {
              setIsAllLoaded(true);
            }
          });
        };
        img.src = src;
      });
    };

    // Use requestIdleCallback for batch preloading
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadBatch, { timeout: 3000 });
    } else {
      setTimeout(preloadBatch, 200);
    }
  }, [resources]);

  return { isAllLoaded, progress: (loadedCount / resources.length) * 100 };
}

export function useScrollPreload(threshold = 0.7) {
  const [elementsInView, setElementsInView] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          const newSet = new Set(elementsInView);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newSet.add(entry.target.id);
            }
          });
          setElementsInView(newSet);
        });
      },
      {
        threshold,
        // Reduce memory usage by using a small root margin
        rootMargin: "50px",
      },
    );

    // Observe all elements with data-preload attribute
    const elements = document.querySelectorAll("[data-preload]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [elementsInView, threshold]);

  return elementsInView;
}

// High-performance scroll listener with debouncing
export function useScrollOptimization() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolling(true);
          ticking = false;
        });
        ticking = true;
      }

      // Clear the timeout and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return { isScrolling };
}

// Prefetch strategy for links
export function useLinkPrefetch() {
  useEffect(() => {
    // Prefetch links on hover or focus
    const handleMouseEnter = (e: MouseEvent) => {
      const link = e.target as HTMLAnchorElement;
      if (link.tagName === "A" && link.href) {
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, {
      capture: true,
    });

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, {
        capture: true,
      });
    };
  }, []);
}

// Detect low-end devices and reduce animations
export function usePerformanceMode() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device memory if available (Chrome)
    if ((navigator as any).deviceMemory) {
      setIsLowPerformance((navigator as any).deviceMemory < 4);
    }

    // Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsLowPerformance(motionQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLowPerformance(e.matches);
    };

    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  return { isLowPerformance };
}
