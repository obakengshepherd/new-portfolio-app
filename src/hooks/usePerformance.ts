"use client";

import { useEffect } from "react";

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals if available
    if ("PerformanceObserver" in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          console.log("LCP:", lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

        // First Input Delay (FID) / Interaction to Next Paint (INP)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as any;
            console.log(
              "FID:",
              fidEntry.processingDuration || fidEntry.duration,
            );
          }
        });
        fidObserver.observe({ entryTypes: ["first-input"] });

        // Cumulative Layout Shift (CLS)
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsScore += (entry as any).value;
              console.log("CLS:", clsScore);
            }
          }
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.log("Performance monitoring not available");
      }
    }
  }, []);
}

export function useIdleCallback(
  callback: () => void,
  options?: IdleRequestOptions,
) {
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(callback, options);
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(callback, 0);
      return () => clearTimeout(id);
    }
  }, [callback, options]);
}

export function useLazyLoad(
  elementRef: React.RefObject<HTMLElement>,
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, callback, options]);
}
