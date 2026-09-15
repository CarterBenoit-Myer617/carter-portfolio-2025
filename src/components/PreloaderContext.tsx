import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

/**
 * PreloaderContext
 * 
 * Manages the preloader lifecycle with two modes:
 *   1. Initial load — waits for critical assets + min display, then exits
 *   2. Logo-triggered — shorter brand flash, navigates home
 * 
 * Safety: 5-second hard timeout prevents infinite loading if a script hangs.
 * Asset detection: listens for document.readyState === 'complete' to confirm
 * the core DOM and critical above-the-fold resources are painted.
 */

interface PreloaderContextType {
  /** Whether the preloader overlay is currently mounted */
  isPreloaderActive: boolean;
  /** Whether the preloader is in its CSS fade-out phase */
  isExiting: boolean;
  /** Trigger preloader from logo click (shorter animation) */
  triggerPreloader: () => void;
  /** Called when CSS fade-out transition ends — fully unmounts */
  completePreloader: () => void;
  /** Signal that assets are loaded and minimum time has passed — begin exit */
  beginExit: () => void;
  /** Whether this is the initial page load (longer) vs logo-triggered (shorter) */
  isInitialLoad: boolean;
  /** Whether critical above-the-fold assets are ready */
  assetsReady: boolean;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isPreloaderActive: false,
  isExiting: false,
  triggerPreloader: () => {},
  completePreloader: () => {},
  beginExit: () => {},
  isInitialLoad: true,
  assetsReady: false,
});

export const usePreloader = () => useContext(PreloaderContext);

const FALLBACK_TIMEOUT = 5000; // 5s hard ceiling
const MIN_DISPLAY_MS   = 3500; // Minimum time to show the brand spinner + name

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [assetsReady, setAssetsReady] = useState(false);

  const hasBegunExit = useRef(false);
  const mountTime = useRef(Date.now());

  // ── Asset-ready detection ──
  // Waits for document.readyState === 'complete' (all sub-resources loaded)
  // OR the 5s fallback timeout, whichever comes first.
  useEffect(() => {
    if (!isPreloaderActive || !isInitialLoad) return;

    let fallbackTimer: ReturnType<typeof setTimeout>;

    const markReady = () => {
      setAssetsReady(true);
      clearTimeout(fallbackTimer);
    };

    // Already complete (cached page / fast connection)
    if (document.readyState === 'complete') {
      markReady();
    } else {
      const onLoad = () => markReady();
      window.addEventListener('load', onLoad, { once: true });

      // Fallback: force ready after 5s no matter what
      fallbackTimer = setTimeout(() => {
        window.removeEventListener('load', onLoad);
        markReady();
      }, FALLBACK_TIMEOUT);

      return () => {
        window.removeEventListener('load', onLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, [isPreloaderActive, isInitialLoad]);

  // ── Auto-begin exit when assets ready + min display time passed ──
  useEffect(() => {
    if (!isPreloaderActive || !isInitialLoad || !assetsReady || hasBegunExit.current) return;

    const elapsed = Date.now() - mountTime.current;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    const timer = setTimeout(() => {
      beginExit();
    }, remaining);

    return () => clearTimeout(timer);
  }, [assetsReady, isPreloaderActive, isInitialLoad]);

  const beginExit = useCallback(() => {
    if (hasBegunExit.current) return;
    hasBegunExit.current = true;
    setIsExiting(true);
  }, []);

  const completePreloader = useCallback(() => {
    setIsPreloaderActive(false);
    setIsExiting(false);
  }, []);

  const triggerPreloader = useCallback(() => {
    hasBegunExit.current = false;
    mountTime.current = Date.now();
    setIsInitialLoad(false);
    setIsExiting(false);
    setAssetsReady(false);
    setIsPreloaderActive(true);
  }, []);

  return (
    <PreloaderContext.Provider
      value={{
        isPreloaderActive,
        isExiting,
        triggerPreloader,
        completePreloader,
        beginExit,
        isInitialLoad,
        assetsReady,
      }}
    >
      {children}
    </PreloaderContext.Provider>
  );
};