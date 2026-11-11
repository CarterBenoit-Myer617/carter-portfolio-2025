import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePreloader } from './PreloaderContext';
import imgBlkTrailLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

/**
 * GlobalPreloader — Figma-faithful
 *
 * - #09090b background with 3 subtle gradient orbs + 20 star particles
 * - Centered logo with white glow shadow, smooth CSS rotation
 * - Gradient name text (purple → silver → teal)
 * - CSS transition fade-out, no JS animation libraries
 */

// Star particles — exact Figma positions converted to viewport %
const PARTICLES = [
  { left: '6.17%', top: '27.84%', size: 4.094, opacity: 0.31 },
  { left: '83.94%', top: '81.86%', size: 5.951, opacity: 0.71 },
  { left: '9.15%', top: '82.89%', size: 6, opacity: 0.80 },
  { left: '77.91%', top: '50.09%', size: 5.666, opacity: 0.57 },
  { left: '38.01%', top: '21.47%', size: 5.716, opacity: 0.58 },
  { left: '95.47%', top: '75.38%', size: 4.845, opacity: 0.41 },
  { left: '89.40%', top: '40.90%', size: 4.046, opacity: 0.31 },
  { left: '61.93%', top: '-1.33%', size: 5.982, opacity: 0.74 },
  { left: '32.70%', top: '-0.24%', size: 5.832, opacity: 0.63 },
  { left: '19.22%', top: '87.63%', size: 5.93, opacity: 0.69 },
  { left: '87.62%', top: '10.93%', size: 5.465, opacity: 0.52 },
  { left: '80.25%', top: '95.47%', size: 4.065, opacity: 0.31 },
  { left: '38.51%', top: '83.47%', size: 5.529, opacity: 0.53 },
  { left: '16.37%', top: '5.53%', size: 4.008, opacity: 0.30 },
  { left: '98.50%', top: '0.13%', size: 4.006, opacity: 0.30 },
  { left: '81.71%', top: '82.81%', size: 5.59, opacity: 0.55 },
  { left: '75.69%', top: '2.32%', size: 5.778, opacity: 0.61 },
  { left: '57.41%', top: '50.36%', size: 4.545, opacity: 0.37 },
  { left: '36.47%', top: '7.87%', size: 5.922, opacity: 0.68 },
  { left: '27.66%', top: '96.40%', size: 4.373, opacity: 0.35 },
];

export const GlobalPreloader = () => {
  const {
    isPreloaderActive,
    isExiting,
    completePreloader,
    beginExit,
    isInitialLoad,
  } = usePreloader();

  const navigate = useNavigate();
  const location = useLocation();

  const [showName, setShowName] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const completeRef = useRef(completePreloader);
  completeRef.current = completePreloader;
  const beginExitRef = useRef(beginExit);
  beginExitRef.current = beginExit;
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;
  const locationRef = useRef(location);
  locationRef.current = location;

  // Eagerly decode + cache the logo image
  useEffect(() => {
    const img = new Image();
    img.decoding = 'sync';
    img.src = imgBlkTrailLogo;
  }, []);

  // Reset name visibility when preloader re-activates
  useEffect(() => {
    if (isPreloaderActive) setShowName(false);
  }, [isPreloaderActive]);

  // Initial load: show name text after 1s
  useEffect(() => {
    if (!isPreloaderActive || !isInitialLoad) return;
    const timer = setTimeout(() => setShowName(true), 1000);
    return () => clearTimeout(timer);
  }, [isPreloaderActive, isInitialLoad]);

  // Logo-triggered mode: auto-exit after 1.4s
  useEffect(() => {
    if (!isPreloaderActive || isInitialLoad) return;
    const timer = setTimeout(() => beginExitRef.current(), 1400);
    return () => clearTimeout(timer);
  }, [isPreloaderActive, isInitialLoad]);

  // Navigate home when exiting
  useEffect(() => {
    if (!isExiting) return;
    if (locationRef.current.pathname !== '/') navigateRef.current('/');
  }, [isExiting]);

  // CSS transition end → unmount
  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.propertyName === 'opacity' && isExiting) {
        fadeTimerRef.current = setTimeout(() => completeRef.current(), 50);
      }
    },
    [isExiting]
  );

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
    };
  }, []);

  if (!isPreloaderActive) return null;

  return (
    <div
      ref={overlayRef}
      className={`preloader-overlay ${isExiting ? 'is-exiting' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      aria-live="polite"
      role="status"
    >
      {/* Background layer — gradient orbs + particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple orb */}
        <div
          className="absolute rounded-full blur-[64px]"
          style={{
            width: 717, height: 717,
            left: '41.05%', top: '-0.46%',
            backgroundImage: 'linear-gradient(135deg, rgba(152,16,250,0.08) 0%, rgba(21,93,252,0.04) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Teal orb */}
        <div
          className="absolute rounded-full blur-[64px]"
          style={{
            width: 620, height: 620,
            left: '3.80%', top: '29.08%',
            backgroundImage: 'linear-gradient(45deg, rgba(0,146,184,0.08) 0%, rgba(0,150,137,0.04) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Pink orb */}
        <div
          className="absolute rounded-full blur-[64px]"
          style={{
            width: 513, height: 513,
            left: '33.43%', top: '22.11%',
            backgroundImage: 'linear-gradient(135deg, rgba(230,0,118,0.06) 0%, rgba(152,16,250,0.03) 50%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Star particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[rgba(255,255,255,0.15)]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity }}
          />
        ))}
      </div>

      {/* Centered content */}
      <div className="preloader-content relative z-10">
        <div className="preloader-logo-container preloader-spinner">
          <img
            src={imgBlkTrailLogo}
            alt=""
            draggable={false}
            decoding="sync"
          />
        </div>

        {isInitialLoad && (
          <p className={`preloader-name ${showName ? 'is-visible' : ''}`}>
            Carter Benoît-Myer
          </p>
        )}
      </div>
    </div>
  );
};