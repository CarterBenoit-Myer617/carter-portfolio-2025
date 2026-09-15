import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';
import { usePreloader } from './PreloaderContext';
import { PROJECTS, DREXEL_COVER_SRCSET } from '../data/cms';
import { responsiveImageProps } from '../utils/imageOptimizer';
import { ScrollTriggeredNewsletterMarquee } from './ScrollTriggeredNewsletterMarquee';
import { useTranslation } from './LanguageContext';
import { useSEO } from './useSEO';
import { VIDEO_VESPER_FIGMA, VIDEO_VESPER_LOCAL } from '../data/media';
import { PAGE_SEO } from '../data/seo';

// ═══ Assets ═══
import imgImage552 from "figma:asset/63e94ba2a7f62ccecca06302d6df66400dc6f836.png";
import imgAampMobile5 from "figma:asset/0029a253717af8170539e22f0af21a075a281540.png";


// ═══════════════════════════════════════════
//  CAROUSEL PROJECTS — filtered from CMS
// ═══════════════════════════════════════════

const CAROUSEL_PROJECTS = PROJECTS.filter(p => !p.hidden);

/**
 * Get a carousel-safe image source for a project.
 * Video projects with YouTube URLs can't be used as <video> src,
 * so we fall back to the first image block's mediaSrc.
 */
const getCarouselSrc = (project: typeof PROJECTS[0]): { type: 'image' | 'video'; src: string } => {
  // Prefer cover image (Figma asset) — always a static image, always reliable
  if (project.cover) {
    return { type: 'image', src: project.cover };
  }

  const isYouTube = project.src.includes('youtu');
  if (project.type === 'video' && isYouTube) {
    const imageBlock = project.blocks?.find(b => b.type === 'image' && b.mediaSrc);
    return { type: 'image', src: imageBlock?.mediaSrc || project.src };
  }

  return { type: project.type, src: project.src };
};


// ═══════════════════════════════════════════
//  GLASS CTA BUTTONS
// ═══════════════════════════════════════════

/** Mobile: rectangular bordered button — Figma-faithful */
const GlassButton = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="flex-1 flex items-center justify-center h-[44px] bg-black/10 text-xs uppercase tracking-[2px] text-white border border-white hover:bg-white/10 transition-all duration-300"
    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
  >
    {children}
  </Link>
);

/** Desktop: pill-shaped glass button (Figma-faithful) */
const GlassPillButton = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center h-[48px] px-8 rounded-full bg-white/10 text-sm uppercase tracking-[0.55px] text-white font-light hover:bg-white/20 transition-all duration-300"
    style={{ border: '1px solid rgba(255,255,255,0.3)', boxShadow: '0px 10px 15px rgba(0,0,0,0.1), 0px 4px 6px rgba(0,0,0,0.1)' }}
  >
    {children}
  </Link>
);


// ═══════════════════════════════════════════
//  SECTION CARD — Figma-faithful glass card
//  Desktop: 1015/672 aspect, 100px title, #6a7282 desc, purple glow
//  Mobile: 355/440 aspect, 60px title, #d1d5db desc, 50px inset
// ═══════════════════════════════════════════

interface SectionCardProps {
  number: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
  bgOpacity?: number;
  align?: 'left' | 'right';
  video?: string;
  imageOpacity?: number;
  videoOpacity?: number;
  customBg?: React.ReactNode;
}

const SectionCard = ({ number, title, description, buttonText, buttonLink, bgImage, bgOpacity = 1, align = 'left', video, imageOpacity, videoOpacity, customBg }: SectionCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link to={buttonLink} className="block group">
      <div
        className="relative w-full overflow-hidden bg-[rgba(24,24,27,0.9)] border border-solid border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.5),0px_0px_80px_0px_rgba(139,92,246,0.2)] md:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      >
        {/* Aspect ratio: mobile ~346/433, laptop 1015/672 */}
        <div className="aspect-[346/433] md:aspect-[1015/672]" />

        {/* Background */}
        {customBg ? customBg : (
          imageOpacity !== undefined && video ? (
            <>
              <div className="absolute inset-0 overflow-hidden" style={{ opacity: imageOpacity }}>
                <img
                  src={bgImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 overflow-hidden" style={{ opacity: videoOpacity ?? 0.68 }}>
                <video autoPlay loop muted playsInline preload="auto" controlsList="nodownload" className="absolute inset-0 w-full h-full object-cover">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 overflow-hidden" style={{ opacity: bgOpacity }}>
              <img
                src={bgImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />
              {video && (
                <video autoPlay loop muted playsInline preload="auto" controlsList="nodownload" className="absolute inset-0 w-full h-full object-cover">
                  <source src={video} type="video/mp4" />
                </video>
              )}
            </div>
          )
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content — mobile: Figma 32px inset, md: vertically centered */}
        <div
          className={`absolute inset-0 flex flex-col
            justify-start pt-[88px] px-[32px] pb-[40px]
            md:justify-center md:pt-0 md:pb-0 md:px-[60px]
            ${align === 'right'
              ? 'md:items-end md:text-right items-start text-left'
              : 'items-start text-left'
            }`}
        >
          {/* Number */}
          <p className={`font-['Inter',sans-serif] text-[16px] tracking-[0.55px] text-[#6a7282] md:text-sm md:tracking-[2px] mb-2 ${align === 'right' ? 'md:text-right' : ''}`}>
            {number}
          </p>

          {/* Title */}
          <h2 className={`font-['Inter',sans-serif]
            font-normal text-[32px] leading-[36px] tracking-[2px]
            md:font-normal md:text-[48px] md:leading-[48px] md:tracking-[4px]
            uppercase text-white mb-[16px] md:mb-6 ${align === 'right' ? 'md:text-right' : ''}`}>
            {title}
          </h2>

          {/* Description */}
          <p className={`font-['Inter',sans-serif] font-normal
            text-[16px] leading-[24px] tracking-[0.14px] text-[#d1d5db]
            md:text-sm md:leading-[21px] md:tracking-[0.55px] md:text-[#6a7282]
            max-w-[253px] md:max-w-[486px] ${align === 'right' ? 'md:text-right md:max-w-[489px]' : ''}`}>
            {description}
          </p>

          {/* Link — pinned toward bottom on mobile via mt-auto, underline per Figma */}
          <span className={`font-['Arial',sans-serif] font-normal text-[12px] uppercase tracking-[2px] text-white/80 mt-auto md:mt-8 md:text-sm md:font-['Inter',sans-serif] md:tracking-[0.55px] border-b border-transparent hover:border-white/40 transition-colors pb-[5px] ${align === 'right' ? 'md:text-right' : ''}`}>
            {buttonText}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);


// ═══════════════════════════════════════════
//  HOME PAGE
// ═══════════════════════════════════════════

export const HomePage = () => {
  const { isPreloaderActive, isInitialLoad } = usePreloader();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useSEO({
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    path: PAGE_SEO.home.path,
    image: PAGE_SEO.home.image,
  });

  // Delay hero animations when preloader is active (initial load only)
  const d = isPreloaderActive && isInitialLoad ? 2.5 : 0;

  // Carousel auto-advance — 5s interval, paused during preloader
  useEffect(() => {
    if (isPreloaderActive) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % CAROUSEL_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPreloaderActive]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <StickyNavigation variant="dark" showLogo={true} />

      {/* ═══ HERO — Full-bleed carousel background (Figma-faithful) ═══ */}
      <section className="relative h-screen overflow-hidden bg-[#18181b]">
        {/* Cross-fading carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: d + 0.1 }}
          className="absolute inset-0"
        >
          {CAROUSEL_PROJECTS.map((project, i) => {
            const { type, src } = getCarouselSrc(project);
            const imgProps = type === 'image' ? responsiveImageProps(src, 'hero') : {};
            const isActive = i === currentSlide;
            return (
              <div
                key={project.id}
                className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                {type === 'image' ? (
                  <img
                    {...imgProps}
                    src={src}
                    srcSet={
                      project.slug === 'drexel-showcase-web'
                        ? DREXEL_COVER_SRCSET
                        : imgProps.srcSet
                    }
                    sizes={
                      project.slug === 'drexel-showcase-web'
                        ? '100vw'
                        : imgProps.sizes
                    }
                    alt={project.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding={i === 0 ? 'auto' : 'async'}
                    className="absolute inset-0 w-full h-full object-cover max-w-full"
                    style={{
                      transform: isActive ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 5s ease-out',
                    }}
                  />
                ) : (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controlsList="nodownload"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transform: isActive ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 5s ease-out',
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Gradient overlay — Figma-faithful */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.3) 100%)',
          }}
        />

        {/* Hero text — bottom-aligned (Figma-faithful) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: d + 0.3 }}
          className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-start px-5 pb-8 md:items-center md:px-[141px] md:pb-[164px]"
        >
          <div className="flex flex-col items-start gap-4 md:items-start md:gap-8 w-full max-w-full md:max-w-[726px]">
            {/* Name — mobile: 26px light, desktop: 48px light tracking-[12px] */}
            <div className="md:hidden">
              <h1
                className="font-['Inter',sans-serif] font-normal text-[36px] leading-[40px] tracking-[1px] text-white/90"
              >
                Carter<br />Benoît Myer
              </h1>
            </div>
            <h1
              className="hidden md:block font-['Inter',sans-serif] font-normal text-[56px] leading-[56px] tracking-[8px] text-white/80 uppercase w-full"
              style={{ textShadow: '0px 4px 8px rgba(0,0,0,0.15)' }}
            >
              {t('home.hero.name')}
            </h1>

            {/* Tagline — mobile: 13px white/70, desktop: 14px #6a7282 */}
            <p
              className="font-['Inter',sans-serif] font-normal
                text-[13px] leading-[20px] tracking-[0.3px] text-white/60
                md:text-sm md:leading-[21px] md:tracking-[0.55px] md:text-[#6a7282]
                max-w-[280px] md:max-w-[399px]"
              style={{ textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}
            >
              {t('home.hero.tagline')}
            </p>

            {/* CTA Buttons — mobile: bordered rectangles with 24px gap, desktop: pill buttons */}
            <div className="w-full md:w-auto">
              {/* Mobile buttons */}
              <div className="flex flex-row gap-[12px] md:hidden">
                <GlassButton to="/contact">{t('home.hero.contact')}</GlassButton>
                <GlassButton to="/work">{t('home.hero.viewWork')}</GlassButton>
              </div>
              {/* Desktop buttons */}
              <div className="hidden md:flex md:gap-4">
                <GlassPillButton to="/contact">{t('home.hero.contact')}</GlassPillButton>
                <GlassPillButton to="/work">{t('home.hero.viewWork')}</GlassPillButton>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ SECTION CARDS ═══ */}
      {/* Work — left-aligned */}
      <section className="px-[16px] sm:px-12 md:px-24 pt-[64px] pb-0 md:pt-24 md:pb-12">
        <div className="max-w-[1015px]">
          <SectionCard
            number={t('home.section.work.num')}
            title={t('home.section.work.title')}
            description={t('home.section.work.desc')}
            buttonText={t('home.section.work.btn')}
            buttonLink="/work"
            bgImage={imgImage552}
          />
        </div>
      </section>

      {/* About — right-aligned on desktop */}
      <section className="px-[16px] sm:px-12 md:px-24 pt-[64px] pb-0 md:pt-12 md:pb-12">
        <div className="max-w-[1015px] md:ml-auto">
          <SectionCard
            number={t('home.section.about.num')}
            title={t('home.section.about.title')}
            description={t('home.section.about.desc')}
            buttonText={t('home.section.about.btn')}
            buttonLink="/about"
            bgImage=""
            align="right"
            customBg={
              <div className="absolute inset-0 overflow-hidden opacity-60">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={VIDEO_VESPER_LOCAL} type="video/mp4" />
                  <source src={VIDEO_VESPER_FIGMA} type="video/mp4" />
                </video>
              </div>
            }
          />
        </div>
      </section>

      {/* Studio — left-aligned */}
      <section className="px-[16px] sm:px-12 md:px-24 pt-[64px] pb-[64px] md:pt-12 md:pb-24">
        <div className="max-w-[1015px]">
          <SectionCard
            number={t('home.section.studio.num')}
            title={t('home.section.studio.title')}
            description={t('home.section.studio.desc')}
            buttonText={t('home.section.studio.btn')}
            buttonLink="/studio/process"
            bgImage={imgAampMobile5}
            bgOpacity={0.6}
            customBg={
              <div className="absolute inset-0 overflow-hidden opacity-60">
                <div className="absolute inset-0 bg-[#4a4040]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={imgAampMobile5}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ═══ NEWSLETTER MARQUEE ═══ */}
      <ScrollTriggeredNewsletterMarquee />
    </div>
  );
};