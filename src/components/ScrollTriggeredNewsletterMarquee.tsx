import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HomepageNewsletterDropdown } from './HomepageNewsletterDropdown';
import { useTranslation } from './LanguageContext';

// ═══════════════════════════════════════════
//  SCROLL-TRIGGERED NEWSLETTER MARQUEE
//  Shows when user scrolls past hero section
//  Click to open dropdown overlay
// ═══════════════════════════════════════════

export const ScrollTriggeredNewsletterMarquee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show marquee when user has scrolled past 70% of viewport height
      const scrollTriggerPoint = window.innerHeight * 0.7;
      const scrolled = window.scrollY > scrollTriggerPoint;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMarqueeClick = () => {
    setIsDropdownOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={marqueeRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-black border-b border-[#27272a] overflow-hidden py-12 md:py-16 cursor-pointer group"
            onClick={handleMarqueeClick}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="font-['Inter',sans-serif] font-light text-[36px] sm:text-[48px] md:text-[72px] leading-none tracking-[7.3px] uppercase text-white mx-12 md:mx-24 shrink-0 transition-colors group-hover:text-white/70"
                >
                  {t('newsletter.marquee')}
                </span>
              ))}
            </div>

            {/* Click indicator */}
            <div className="absolute bottom-4 right-6 md:right-12">
              <span className="font-['Inter',sans-serif] text-[10px] tracking-[1.5px] uppercase text-white/40 group-hover:text-white/60 transition-colors">
                {t('newsletter.marquee.cta')}
              </span>
            </div>

            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .group:hover .animate-marquee {
                animation-play-state: paused;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown overlay */}
      <HomepageNewsletterDropdown
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </>
  );
};