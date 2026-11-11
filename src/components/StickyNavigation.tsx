import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from './ui/sheet';
import { ChevronDown, Menu, X } from 'lucide-react';
import { RotatingLogo } from './RotatingLogo';
import { useLanguage, LANG_CONFIG } from './LanguageContext';
import imgImageBlackTrailCollectiveLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

interface NavigationProps {
  variant?: 'light' | 'dark';
  showLogo?: boolean;
}

// Globe SVG icon — 24x24, dashed stroke, matches Figma dropdown nav
const GlobeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray="1.2 1.2"
  >
    <path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47716 17.5229 2 12 2C6.47716 2 2 6.47716 2 12C2 17.5229 6.47716 22 12 22Z" />
    <path d="M2 12H22" />
    <path d="M12 2C14.5013 4.73836 15.9228 8.29204 16 12C15.9228 15.708 14.5013 19.2617 12 22C9.49872 19.2617 8.07725 15.708 8 12C8.07725 8.29204 9.49872 4.73836 12 2Z" />
  </svg>
);

// Language codes in display order
const LANG_CODES = ['en', 'fr', 'es', 'de', 'da', 'nl', 'ja', 'ar'] as const;

export const StickyNavigation: React.FC<NavigationProps> = ({ 
  variant = 'light',
  showLogo = true 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const { currentLang, config: langConfig, setLanguage } = useLanguage();
  
  const location = useLocation();
  const navigate = useNavigate();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const langOptionsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Translation helper — inline for nav labels
  const navLabels: Record<string, Record<string, string>> = {
    en: { work: 'Work', about: 'About', studio: 'Studio', contact: 'Contact' },
    fr: { work: 'Travaux', about: 'À propos', studio: 'Studio', contact: 'Contact' },
    es: { work: 'Trabajos', about: 'Acerca de', studio: 'Estudio', contact: 'Contacto' },
    de: { work: 'Arbeiten', about: 'Über uns', studio: 'Studio', contact: 'Kontakt' },
    da: { work: 'Arbejde', about: 'Om os', studio: 'Studio', contact: 'Kontakt' },
    nl: { work: 'Werk', about: 'Over ons', studio: 'Studio', contact: 'Contact' },
    ja: { work: '作品', about: '概要', studio: 'スタジオ', contact: 'お問い合わせ' },
    ar: { work: 'أعمال', about: 'حول', studio: 'الاستوديو', contact: 'اتصل بنا' },
  };
  const nav = navLabels[currentLang] || navLabels.en;

  // Strict viewport detection
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Strict scroll detection with threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target as Node)) {
        setIsDesktopLangOpen(false);
      }
    };
    if (isDesktopLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktopLangOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle language selection
  const handleSelectLanguage = useCallback((langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
    setIsDesktopLangOpen(false);
    setFocusedIndex(-1);
    // Reload the page so all translated copy re-renders cleanly
    window.location.reload();
  }, [setLanguage]);

  // Keyboard navigation for dropdown
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsLangDropdownOpen(false);
      setIsDesktopLangOpen(false);
      setFocusedIndex(-1);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => {
        const next = prev < LANG_CODES.length - 1 ? prev + 1 : 0;
        langOptionsRef.current[next]?.focus();
        return next;
      });
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => {
        const next = prev > 0 ? prev - 1 : LANG_CODES.length - 1;
        langOptionsRef.current[next]?.focus();
        return next;
      });
    }
  }, []);

  // Dynamic text color based on variant and scroll state
  const getTextColor = () => {
    if (variant === 'light') return 'text-white';
    return 'text-black';
  };

  const getBorderColor = () => {
    if (variant === 'light') return 'border-white';
    return 'border-black';
  };

  return (
    <>
      {/* Fixed/Sticky Navigation Bar - ALWAYS visible */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ mixBlendMode: 'difference' }}
      >
        <div className="max-w-[1920px] mx-auto px-[27px] md:px-[32px] py-[32px] pointer-events-none">
          <div className="flex justify-between items-start">
            
            {/* Logo - Left Side */}
            <div 
              className="relative z-50 flex items-center hover:opacity-80 transition-opacity text-white/60 pointer-events-auto"
            >
              <RotatingLogo scale={0.65} className="size-[79.988px]" />
            </div>

            {/* Menu Controls - End Side (Stacked Vertically) — flips in RTL */}
            <div className="flex flex-col items-end justify-center gap-[16px] text-white/60 min-w-11 relative z-[1] ms-auto pointer-events-auto">
              
              {/* Hamburger Menu Button - ALWAYS VISIBLE */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button 
                    className="cursor-pointer hover:opacity-80 transition-opacity relative shrink-0 min-h-11 min-w-11 inline-flex items-center justify-center"
                    aria-label="Toggle menu"
                  >
                    <div className="flex flex-col gap-[11px] items-start p-[4px] w-[47.99px] h-[38.98px] pointer-events-none">
                      <div className="h-[2.99px] w-[39.99px] bg-white/60 shrink-0"></div>
                      <div className="h-[2.99px] w-[39.99px] bg-white/60 shrink-0"></div>
                      <div className="h-[2.99px] w-[39.99px] bg-white/60 shrink-0"></div>
                    </div>
                  </button>
                </SheetTrigger>
                
                <SheetContent 
                  side="top" 
                  className="w-full h-screen flex flex-col bg-[#09090b] text-white border-none overflow-hidden"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Site navigation links</SheetDescription>

                  {/* ═══ Motion Graphics Background ═══ */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Gradient orbs */}
                    <MotionOrb
                      gradient="linear-gradient(135deg, rgba(152, 16, 250, 0.1) 0%, rgba(21, 93, 252, 0.05) 50%, rgba(0, 0, 0, 0) 100%)"
                      size={646}
                      x="43%"
                      y="4%"
                      delay={0}
                    />
                    <MotionOrb
                      gradient="linear-gradient(45deg, rgba(0, 146, 184, 0.08) 0%, rgba(0, 150, 137, 0.04) 50%, rgba(0, 0, 0, 0) 100%)"
                      size={586}
                      x="5%"
                      y="32%"
                      delay={3}
                    />
                    <MotionOrb
                      gradient="linear-gradient(135deg, rgba(230, 0, 118, 0.06) 0%, rgba(152, 16, 250, 0.04) 50%, rgba(0, 0, 0, 0) 100%)"
                      size={451}
                      x="35%"
                      y="26%"
                      delay={6}
                    />

                    {/* Star particles */}
                    {PARTICLES.map((p, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/15"
                        style={{
                          width: p.size,
                          height: p.size,
                          left: p.x,
                          top: p.y,
                          opacity: p.opacity * 0.5,
                        }}
                        animate={{
                          opacity: [p.opacity, p.opacity * 0.3, p.opacity],
                          scale: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: Math.random() * 3,
                        }}
                      />
                    ))}
                  </div>

                  {/* ═══ Logo — upper-left corner ═══ */}
                  <div className="absolute top-[32px] start-[27px] md:start-[32px] z-[60]">
                    <SheetClose asChild>
                      <div className="hover:opacity-80 transition-opacity cursor-pointer">
                        <div className="size-[100px] relative">
                          <img
                            alt="Black Trail Collective"
                            className="absolute inset-0 w-full h-full object-contain pointer-events-none hidden"
                            src={imgImageBlackTrailCollectiveLogo}
                            style={{
                              filter: 'drop-shadow(0px 0px 29.625px rgba(255,255,255,0.15))',
                            }}
                          />
                        </div>
                      </div>
                    </SheetClose>
                  </div>

                  {/* ═══ Close button — upper-right, dashed X ═══ */}
                  <div className="absolute top-[32px] end-[27px] md:end-[32px] z-[60]">
                    <SheetClose asChild>
                      <button
                        className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer relative min-h-11 min-w-11 inline-flex items-center justify-center"
                        aria-label="Close menu"
                      >
                        <svg
                          className="size-8 pointer-events-none"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <g clipPath="url(#clip-nav-close)">
                            <path
                              d="M29.7142 2.2857L2.2857 29.7142"
                              stroke="white"
                              strokeDasharray="1.71 1.71"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="4.57143"
                            />
                            <path
                              d="M2.2857 2.2857L29.7142 29.7142"
                              stroke="white"
                              strokeDasharray="1.71 1.71"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="4.57143"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip-nav-close">
                              <rect fill="white" height="32" width="32" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </SheetClose>
                  </div>

                  {/* ═══ Centered Nav Links ═══ */}
                  <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                    <nav className="flex flex-col items-center gap-[60px] md:gap-[64px]">
                      {[
                        { label: nav.work, to: '/work' },
                        { label: nav.about, to: '/about' },
                        { label: nav.studio, to: '/studio/process' },
                        { label: nav.contact, to: '/contact' },
                      ].map((item, i) => (
                        <motion.div
                          key={item.to}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <SheetClose asChild>
                            <Link
                              to={item.to}
                              className="inline-flex items-center justify-center min-h-11 px-4 text-center text-[36px] md:text-[60px] font-light uppercase tracking-[7.26px] text-white/80 hover:text-white/40 transition-colors duration-300 whitespace-nowrap"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* ═══ Bottom Section: Divider + Lang Selector + Copyright ═══ */}
                  <div className="relative z-10 flex flex-col items-center pb-[40px] md:pb-[60px] gap-[24px]">
                    {/* Gradient divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="w-[280px] md:w-[352px] h-px overflow-hidden"
                    >
                      <div
                        className="w-full h-px"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.3) 50%, rgba(0,0,0,0) 100%)',
                        }}
                      />
                    </motion.div>

                    {/* Language Selector */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="w-full max-w-[320px]"
                      onKeyDown={handleDropdownKeyDown}
                    >
                      <button
                        onClick={() => {
                          setIsLangDropdownOpen(prev => !prev);
                          if (!isLangDropdownOpen) {
                            setFocusedIndex(-1);
                          }
                        }}
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded={isLangDropdownOpen}
                        aria-label={`Language selector, current language: ${langConfig.label}`}
                        className="flex items-center justify-center gap-[16px] w-full py-3 hover:text-gray-400 transition-colors cursor-pointer"
                      >
                        <GlobeIcon />
                        <span
                          className="text-[16px] md:text-[20px] font-light uppercase tracking-[3px] lang-selector-label"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {langConfig.label} ({langConfig.abbr})
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-200 ${
                            isLangDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Accordion dropdown — expands inline */}
                      <div
                        className="overflow-hidden transition-all duration-200 ease-in-out"
                        style={{
                          maxHeight: isLangDropdownOpen ? `${LANG_CODES.length * 52}px` : '0px',
                        }}
                        role="listbox"
                        aria-label="Select language"
                      >
                        {LANG_CODES.map((code, index) => {
                          const cfg = LANG_CONFIG[code];
                          const isActive = currentLang === code;
                          return (
                            <button
                              key={code}
                              ref={el => { langOptionsRef.current[index] = el; }}
                              role="option"
                              aria-selected={isActive}
                              data-lang={code}
                              onClick={() => handleSelectLanguage(code)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleSelectLanguage(code);
                                }
                              }}
                              className={`
                                flex items-center w-full px-[24px] min-h-11 py-[12px]
                                text-start transition-colors duration-150 cursor-pointer
                                hover:bg-white/5
                                ${isActive ? 'text-white' : 'text-gray-400'}
                              `}
                              style={{
                                fontFamily: cfg.fontImport
                                  ? code === 'ja'
                                    ? '"Noto Sans JP", "Hiragino Sans", sans-serif'
                                    : '"Noto Sans Arabic", "Cairo", sans-serif'
                                  : "'Inter', sans-serif",
                              }}
                            >
                              {isActive && (
                                <span className="me-[8px] text-white">&#10003;</span>
                              )}
                              <span className="text-[16px] tracking-[1px]">
                                {cfg.label} ({cfg.abbr})
                              </span>
                              {isActive && (
                                <span className="ms-auto w-[2px] h-[20px] bg-white rounded-full" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="text-[14px] text-[#6a7282] tracking-[0.55px] text-center"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      © Carter Benoît-Myer 2025
                    </motion.p>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Language Selector Box - BELOW the hamburger - ALWAYS VISIBLE */}
              <div className="relative shrink-0 min-h-11 min-w-11 flex items-center justify-center" ref={desktopDropdownRef}>
                <div className="relative w-[47.14px] h-[38px] pointer-events-none">
                <div aria-hidden="true" className="absolute border-[1.836px] border-solid border-white/60 inset-0 pointer-events-none" />
                </div>
                  <button 
                    className="absolute inset-0 hover:opacity-70 transition-opacity cursor-pointer min-h-11 min-w-11 inline-flex items-center justify-center"
                    aria-label={`Change language, current: ${langConfig.label}`}
                    aria-haspopup="listbox"
                    aria-expanded={isDesktopLangOpen}
                    onClick={() => setIsDesktopLangOpen(prev => !prev)}
                  >
                    <p className="font-['Inter',sans-serif] font-normal leading-[18px] not-italic text-[18px] text-nowrap text-white/60 tracking-[1.56055px] uppercase">
                      {langConfig.abbr}
                    </p>
                  </button>

                {/* Desktop floating dropdown */}
                <AnimatePresence>
                  {isDesktopLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full end-0 mt-2 w-[200px] bg-[#121212] border border-white/10 backdrop-blur-sm z-[100]"
                      style={{ mixBlendMode: 'normal' }}
                      role="listbox"
                      aria-label="Select language"
                      onKeyDown={handleDropdownKeyDown}
                    >
                      {LANG_CODES.map((code, index) => {
                        const cfg = LANG_CONFIG[code];
                        const isActive = currentLang === code;
                        return (
                          <button
                            key={code}
                            ref={el => { langOptionsRef.current[index] = el; }}
                            role="option"
                            aria-selected={isActive}
                            data-lang={code}
                            onClick={() => handleSelectLanguage(code)}
                            className={`
                              flex items-center w-full px-4 min-h-11 py-2
                              text-start transition-colors duration-150 cursor-pointer
                              hover:bg-white/5
                              ${isActive ? 'text-white' : 'text-gray-400'}
                            `}
                            style={{
                              fontFamily: cfg.fontImport
                                ? code === 'ja'
                                  ? '"Noto Sans JP", "Hiragino Sans", sans-serif'
                                  : '"Noto Sans Arabic", "Cairo", sans-serif'
                                : "'Inter', sans-serif",
                            }}
                          >
                            {isActive && (
                              <span className="me-2 text-white">&#10003;</span>
                            )}
                            <span className="text-[14px] tracking-[0.5px]">
                              {cfg.label} ({cfg.abbr})
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// ═══ Animated Background Particles for dropdown nav ═══
const PARTICLES = [
  { x: '46%', y: '39%', size: 4, opacity: 0.3 },
  { x: '45%', y: '39.5%', size: 6, opacity: 0.78 },
  { x: '80%', y: '38%', size: 5.3, opacity: 0.49 },
  { x: '6%', y: '-0.3%', size: 5, opacity: 0.44 },
  { x: '31%', y: '95%', size: 4.1, opacity: 0.32 },
  { x: '59%', y: '18%', size: 4.7, opacity: 0.38 },
  { x: '15%', y: '34%', size: 4.2, opacity: 0.32 },
  { x: '94%', y: '42%', size: 4.6, opacity: 0.37 },
  { x: '17%', y: '6%', size: 4.2, opacity: 0.32 },
  { x: '40%', y: '47%', size: 6, opacity: 0.8 },
  { x: '76%', y: '48%', size: 5.9, opacity: 0.68 },
  { x: '45%', y: '73%', size: 5.9, opacity: 0.69 },
  { x: '60%', y: '66%', size: 5.9, opacity: 0.68 },
  { x: '1%', y: '19%', size: 6, opacity: 0.73 },
  { x: '55%', y: '57%', size: 5.7, opacity: 0.58 },
  { x: '32%', y: '22%', size: 5.8, opacity: 0.62 },
  { x: '90%', y: '42%', size: 5.8, opacity: 0.62 },
  { x: '56%', y: '40%', size: 4.3, opacity: 0.33 },
  { x: '46%', y: '58%', size: 5.9, opacity: 0.69 },
  { x: '2%', y: '35%', size: 4, opacity: 0.31 },
];

/** Floating gradient orb background */
const MotionOrb = ({ gradient, size, x, y, delay = 0 }: {
  gradient: string; size: number; x: string; y: string; delay?: number;
}) => (
  <motion.div
    className="absolute rounded-full blur-[64px] pointer-events-none"
    style={{
      backgroundImage: gradient,
      width: size,
      height: size,
      left: x,
      top: y,
    }}
    animate={{
      x: [0, 20, -15, 0],
      y: [0, -25, 10, 0],
      scale: [1, 1.08, 0.95, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);