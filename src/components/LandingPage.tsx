import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { StickyNavigation } from './StickyNavigation';
import { PROJECTS, sortProjects } from '../data/cms';
import { PageHero } from './PageHero';
import { ScrollTriggeredNewsletterMarquee } from './ScrollTriggeredNewsletterMarquee';
import { useTranslation } from './LanguageContext';
import { useSEO } from './useSEO';

// Cover images now sourced from cms.ts (single source of truth)

// ═══ Desktop inner/overlay images ═══
import imgAampScreenshot from "figma:asset/2e5a9e5589f617814a005bd70feb129382ca73eb.png";
import imgRoamPhoto from "figma:asset/13935800951653a5cae2bda85373e6073b24647d.png";
import imgFlavienPoster from "figma:asset/1a7c10aa8de24cbacf72344ed0b2ed5d33be952c.png";
import imgBasquiatInner from "figma:asset/0fcac5110e733ab89fbc05dbbe220f841f3a63f3.png";
import imgKonaInner from "figma:asset/e3e797514fbf211940697131f6fd7b221f2d3e81.png";
import imgCymaticFrame from "figma:asset/e0d14c19364de823fbf45e4e03a204c54e59e957.png";
import imgCymaticInnerPhoto from "figma:asset/f981bd1fb16a92b0c4361ebfcb165153fc1fb9f1.png";

// ═══ Mobile-specific inner images ═══
const imgAamp2024Cover = '/projects/aamp-rebrand/mockups/aamp-2024-cover.webp';
import imgSafeVideo from "figma:asset/01cf8910843310aba94c1ac3673a449c0c5acf16.png";
import imgImage20 from "figma:asset/bd7998211af3de495b5362334be78e85d9fbda76.png";
import imgKonaPackaging from "figma:asset/2003015e183208c593196efd6d4d16ac76601375.png";

const VESPER_VIDEO_FALLBACK = 'https://images.unsplash.com/photo-1633638627750-9408a33d3d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBjcmV3JTIwYm9hdCUyMHdhdGVyJTIwYXV0dW1ufGVufDF8fHx8MTc3Mzg1Nzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

/**
 * MutedVideo — workaround for React's known bug where the `muted` JSX attribute
 * doesn't get applied to the DOM element, causing autoplay to silently fail.
 * Uses a ref to programmatically set muted + trigger play().
 */
const MutedVideo = ({ src, className = '' }: { src: string; className?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      loop
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

// ═══════════════════════════════════════════
//  BACKGROUND EFFECTS — 3 gradient orbs + 20 star particles
// ═══════════════════════════════════════════

const ORBS = [
  { left: '43.7%', top: '9.2%', size: 613, gradient: 'linear-gradient(135deg, rgba(152,16,250,0.2) 0%, rgba(21,93,252,0.1) 50%, rgba(0,0,0,0) 100%)' },
  { left: '3.6%', top: '71.7%', size: 640, gradient: 'linear-gradient(45deg, rgba(0,146,184,0.2) 0%, rgba(0,150,137,0.1) 50%, rgba(0,0,0,0) 100%)' },
  { left: '34.6%', top: '45.9%', size: 468, gradient: 'linear-gradient(135deg, rgba(230,0,118,0.15) 0%, rgba(152,16,250,0.1) 50%, rgba(0,0,0,0) 100%)' },
];

const STARS = [
  { left: '43.3%', top: '26.2%', size: 5.945, opacity: 0.70 },
  { left: '88.7%', top: '92.6%', size: 4.442, opacity: 0.35 },
  { left: '20.6%', top: '35.5%', size: 5.98, opacity: 0.74 },
  { left: '69.2%', top: '82.0%', size: 5.825, opacity: 0.63 },
  { left: '14.9%', top: '35.0%', size: 4.117, opacity: 0.31 },
  { left: '57.6%', top: '96.3%', size: 5.328, opacity: 0.49 },
  { left: '1.3%', top: '7.7%', size: 4.147, opacity: 0.32 },
  { left: '62.0%', top: '62.6%', size: 5.948, opacity: 0.70 },
  { left: '2.6%', top: '93.4%', size: 4.205, opacity: 0.33 },
  { left: '8.2%', top: '1.2%', size: 4.311, opacity: 0.34 },
  { left: '33.4%', top: '9.7%', size: 5.864, opacity: 0.65 },
  { left: '65.6%', top: '34.2%', size: 4.218, opacity: 0.33 },
  { left: '41.3%', top: '40.5%', size: 4.006, opacity: 0.30 },
  { left: '34.0%', top: '17.0%', size: 5.731, opacity: 0.59 },
  { left: '39.0%', top: '4.2%', size: 4.558, opacity: 0.37 },
  { left: '73.6%', top: '73.3%', size: 4.635, opacity: 0.38 },
  { left: '13.9%', top: '12.3%', size: 5.513, opacity: 0.53 },
  { left: '43.4%', top: '75.4%', size: 4.76, opacity: 0.39 },
  { left: '30.0%', top: '57.2%', size: 4.871, opacity: 0.41 },
  { left: '53.3%', top: '30.1%', size: 5.38, opacity: 0.50 },
];

const BackgroundEffects = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {ORBS.map((orb, i) => (
      <div
        key={`orb-${i}`}
        className="absolute rounded-full blur-[64px]"
        style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, backgroundImage: orb.gradient }}
      />
    ))}
    {STARS.map((s, i) => (
      <div
        key={`star-${i}`}
        className="absolute rounded-full bg-[rgba(255,255,255,0.3)]"
        style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.opacity }}
      />
    ))}
  </div>
);


// ═══════════════════════════════════════════
//  FIGMA CARD SHELL — glass border + shadow (desktop only)
// ═══════════════════════════════════════════

const FigmaCardShell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-[rgba(24,24,27,0.9)] border border-[rgba(255,255,255,0.1)] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.5)] ${className}`}>
    {children}
  </div>
);


// ═══════════════════════════════════════════
//  CARD DATA
// ═══════════════════════════════════════════

interface CardDef {
  title: string;
  slug: string;
  cover: string;
}

// Derive ALL_CARDS from CMS — single source of truth
// Uses cover (Figma asset) when available, falls back to src
const ALL_CARDS: CardDef[] = sortProjects(PROJECTS).map(p => ({
  title: p.title,
  slug: p.slug,
  cover: p.cover || p.src,
}));


// ═══════════════════════════════════════════════════════════
//  MOBILE CARDS (< 394px) — Figma-faithful with inner compositions
//  393.456 × 425.973 aspect, title at left=48 bottom area
//  Each card has specific inner overlay treatments
// ═══════════════════════════════════════════════════════════

/** Mobile inner overlays per project — matches Figma mobile frame */
const MobileInnerOverlay = ({ slug }: { slug: string }) => {
  switch (slug) {
    case 'drexel-showcase-web':
      // Drexel: iframe bg + centered video placeholder
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ top: '-10%', bottom: '-10%', left: '-2%', right: '-2%' }}
          >
            <div className="w-full h-full bg-[#eee] opacity-10" />
          </div>
        </div>
      );
    case 'aamp-rebrand':
      // AAMP mobile: bg-[#c9c9c7] container with centered AAMP_2024_COVER
      // Figma: aspect-[1804/1247], left=-89 right=-89, top=calc(50%-0.5px), -translate-y-1/2
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div
            className="absolute bg-[#c9c9c7] overflow-hidden"
            style={{ inset: '-24px -41px -24px -40px' }}
          >
            <div
              className="absolute -translate-y-1/2"
              style={{ aspectRatio: '1804 / 1247', left: '-89px', right: '-89px', top: 'calc(50% - 0.5px)' }}
            >
              <img
                src={imgAamp2024Cover}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      );
    case 'vesper-global-rebrand':
      // Vesper mobile: SafeVideo bg + white container with rowing image (video fallback)
      return (
        <div className="absolute inset-0 overflow-hidden">
          <img src={imgSafeVideo} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 overflow-hidden">
            <div
              className="absolute bg-white overflow-hidden"
              style={{ inset: '-29px -45px -29px -45px' }}
            >
              {/* Figma: video at aspect-[432/695], left=26 right=26 top=calc(50%+69.5px) -translate-y-1/2 */}
              <div
                className="absolute -translate-y-1/2"
                style={{ aspectRatio: '432 / 695', left: '26px', right: '26px', top: 'calc(50% + 69.5px)' }}
              >
                <img
                  src={VESPER_VIDEO_FALLBACK}
                  alt="Vesper rowing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      );
    case 'roam-media-brand':
      // ROAM mobile: white bg with imgRoamPhoto (IMG_2060) — Figma: aspect-[1072/715], left=-232 right=28
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div
            className="absolute bg-white overflow-hidden"
            style={{ inset: '-98px -50px -136px -49px' }}
          >
            <div
              className="absolute -translate-y-1/2"
              style={{ aspectRatio: '1072 / 715', left: '-232px', right: '28px', top: 'calc(50% - 0.5px)' }}
            >
              <img
                src={imgRoamPhoto}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      );
    case 'basquiat-catalogue':
      // BASQUIAT mobile: offset base (527×570 at left=-67 top=-101) + CarterBenoit2 overlay cropped
      return (
        <div className="absolute inset-0 overflow-hidden">
          {/* Offset base catalogue image — Figma: 527×570 at left=-67, top=-100.61 */}
          <div className="absolute" style={{ left: '-67px', top: '-101px', width: '527px', height: '570px' }}>
            <img src={imgBasquiatInner} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </div>
          {/* Overlay with CarterBenoit2 cropped — Figma: inset-[-79px_-419px_-148px_-140px], img at 202.96% width */}
          <div className="absolute inset-0 bg-black/20 overflow-hidden">
            <div className="absolute overflow-hidden" style={{ inset: '-79px -419px -148px -140px' }}>
              <div
                className="absolute"
                style={{ aspectRatio: '513 / 695', left: '90px', top: '-83px', bottom: '41px' }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={imgBasquiatInner}
                    alt=""
                    className="absolute max-w-none h-full"
                    style={{ left: '-0.02%', top: 0, width: '202.96%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'kona-estate-provenance':
      // Kona mobile: bg-[#c9cac9] with image 20 centered
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div
            className="absolute bg-[#c9cac9] overflow-hidden"
            style={{ inset: '-31px -19px -30px -19px' }}
          >
            <img
              src={imgImage20}
              alt=""
              className="absolute object-cover"
              style={{ left: 0, right: '1px', top: '50%', transform: 'translateY(-50%)', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      );
    case 'flavien-sound':
      // Flavien mobile: oversized poster
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div
            className="absolute overflow-hidden"
            style={{ inset: '-51px -67px -52px -67px' }}
          >
            <img
              src={imgFlavienPoster}
              alt=""
              className="absolute object-cover"
              style={{ left: '56px', right: '56px', top: '50%', transform: 'translateY(-50%)', width: 'calc(100% - 112px)', height: 'auto' }}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const MobileProjectCard = ({ card, index }: { card: CardDef; index: number }) => (
  <Link to={`/studio/${card.slug}`} className="block">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index < 3 ? index * 0.08 : 0 }}
      className="relative w-full overflow-hidden bg-[#111827]"
      style={{ aspectRatio: '393.456 / 425.973' }}
    >
      {/* Base bg */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <img
          src={card.cover}
          alt={card.title}
          loading={index < 2 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Mobile inner overlay */}
      <MobileInnerOverlay slug={card.slug} />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Title — Figma: left=48, top=345.98 (~80% down) */}
      <div
        className="absolute z-10"
        style={{ left: '48px', bottom: '48px', textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}
      >
        <p className="font-medium text-[24px] leading-[32px] text-white whitespace-nowrap">
          {card.title}
        </p>
      </div>
    </motion.div>
  </Link>
);

const MobileWorkGrid = () => (
  <div className="flex flex-col">
    {ALL_CARDS.map((c, i) => <MobileProjectCard key={c.slug} card={c} index={i} />)}
  </div>
);


// ═══════════════════════════════════════════════════════════
//  TABLET CARDS (394–800px) — simple cover + overlay, no inner compositions
//  Full-width stacked, ~785×851 aspect (≈ 1:1.08), title at bottom
//  Figma tablet frame: 784.67px canvas
// ═══════════════════════════════════════════════════════════

const TabletProjectCard = ({ card, index }: { card: CardDef; index: number }) => (
  <Link to={`/studio/${card.slug}`} className="block">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index < 3 ? index * 0.08 : 0 }}
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: '784.67 / 850.55' }}
    >
      <img
        src={card.cover}
        alt={card.title}
        loading={index < 2 ? 'eager' : 'lazy'}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <TabletInnerOverlay slug={card.slug} />
      <div className="absolute inset-0 bg-black/20" />
      {/* Title — Figma tablet: left=48, top=770.56 (~90% down) */}
      <div
        className="absolute z-10"
        style={{ left: '48px', bottom: '48px', textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}
      >
        <p className="font-medium text-[24px] leading-[32px] text-white whitespace-nowrap">
          {card.title}
        </p>
      </div>
    </motion.div>
  </Link>
);

/** Tablet inner overlays — matches Figma tablet frame (784.67px canvas) */
const TabletInnerOverlay = ({ slug }: { slug: string }) => {
  switch (slug) {
    case 'aamp-rebrand':
      // AAMP tablet: oversized screenshot shifted up
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div className="absolute inset-[-2%_0_2%_0] overflow-hidden">
            <img src={imgAampScreenshot} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      );
    case 'vesper-global-rebrand':
      // Vesper tablet: white bg with centered rowing image (video fallback)
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '109%', aspectRatio: '852 / 1371' }}>
              <img
                src={VESPER_VIDEO_FALLBACK}
                alt="Vesper rowing"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      );
    case 'basquiat-catalogue':
      // BASQUIAT tablet: oversized catalogue centered
      return (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '228%', aspectRatio: '1790 / 900' }}>
            <img src={imgBasquiatInner} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      );
    case 'kona-estate-provenance':
      // Kona tablet: #121212 container with packaging bg + imgImage20 centered
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div className="absolute overflow-hidden bg-[#121212]" style={{ inset: '-12% -10% -12% -10%' }}>
            <div className="absolute inset-0 bg-[#f5f4ec] overflow-hidden">
              <img src={imgKonaPackaging} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '89%', aspectRatio: '834 / 943' }}>
              <img src={imgImage20} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      );
    case 'flavien-sound':
      // Flavien tablet: oversized poster centered
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div className="absolute flex items-center justify-center" style={{ inset: '-5% -10% -5% -8%' }}>
            <img src={imgFlavienPoster} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      );
    case 'cymatic-studies':
      // Cymatic tablet: oversized frame with rotated photo
      return (
        <div className="absolute inset-0 bg-black/20 overflow-hidden">
          <div className="absolute overflow-hidden" style={{ inset: '-7% -12% -3% -12%' }}>
            <div className="relative w-full h-full">
              <img src={imgCymaticFrame} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#e4e4e4] overflow-hidden">
                <div className="absolute flex items-center justify-center" style={{ left: '3%', right: '3%', top: '3%', aspectRatio: '915 / 902' }}>
                  <div className="rotate-[0.74deg] skew-x-[-0.11deg]" style={{ width: '100%', aspectRatio: '901 / 890' }}>
                    <div className="relative w-full h-full overflow-hidden">
                      <img src={imgCymaticInnerPhoto} alt="" className="absolute w-full h-[135%] max-w-none object-cover" style={{ top: '-5.14%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const TabletWorkGrid = () => (
  <div className="flex flex-col">
    {ALL_CARDS.map((c, i) => <TabletProjectCard key={c.slug} card={c} index={i} />)}
  </div>
);


// ═══════════════════════════════════════════════════════════
//  DESKTOP CARDS (≥ 800px) — Figma glass shell, asymmetric grid, hover
// ═══════════════════════════════════════════════════════════

const DesktopCard = ({
  card,
  innerContent,
  aspectRatio = '1400 / 704',
  delay = 0,
}: {
  card: CardDef;
  innerContent?: React.ReactNode;
  aspectRatio?: string;
  delay?: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const project = PROJECTS.find(p => p.slug === card.slug);

  return (
    <Link to={`/studio/${card.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FigmaCardShell>
          <div className="relative w-full overflow-hidden bg-black cursor-pointer group" style={{ aspectRatio }}>
            <img src={card.cover} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            {innerContent}
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/35" />

            {/* Hover: category + year */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="absolute left-[48px] top-[48px]"
            >
              {project && (
                <p className="text-xs uppercase tracking-[2px] text-white/70">
                  {project.category_primary} — {project.year}
                </p>
              )}
            </motion.div>

            {/* Title */}
            <div className="absolute left-[48px] bottom-[48px] z-10">
              <p className="font-medium text-[24px] leading-[32px] text-white" style={{ textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}>
                {card.title}
              </p>
            </div>

            {/* Hover: one-liner */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="absolute left-[48px] bottom-[88px] max-w-[400px]"
            >
              {project && (
                <p className="font-light text-sm text-white/80 leading-relaxed">
                  {project.one_liner.replace(/\*\*/g, '')}
                </p>
              )}
            </motion.div>
          </div>
        </FigmaCardShell>
      </motion.div>
    </Link>
  );
};


// ═══ Desktop inner content compositions ═══

/** AAMP: bg-[#383131] container, screenshot oversized vertically (130% height, offset -15% top) */
const AampInner = () => (
  <div className="absolute inset-0 bg-black/20 overflow-hidden">
    <div className="absolute inset-0 bg-[#383131] overflow-hidden" style={{ top: '-15%', height: '130%' }}>
      <img src={imgAampScreenshot} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </div>
);

/** ROAM: centered white box ~60% width with photo */
const RoamInner = () => (
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center overflow-hidden">
    <div className="bg-white relative" style={{ width: '60%', aspectRatio: '419 / 458' }}>
      <img src={imgRoamPhoto} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </div>
);

/** BASQUIAT: oversized image centered (107% width) */
const BasquiatInner = () => (
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center overflow-hidden">
    <img src={imgBasquiatInner} alt="" className="w-[107%] max-w-none object-cover" style={{ aspectRatio: '1498 / 1006' }} />
  </div>
);

/** Kona: full fill with #fcfcfd bg behind inner image */
const KonaInner = () => (
  <div className="absolute inset-0 bg-black/20 overflow-hidden">
    <div className="absolute inset-0 bg-[#fcfcfd] overflow-hidden">
      <img src={imgKonaInner} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </div>
);

/** Flavien: oversized poster centered (120% width) */
const FlavienInner = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    <img src={imgFlavienPoster} alt="" className="w-[120%] max-w-none object-cover" style={{ aspectRatio: '839 / 916' }} />
  </div>
);

/** Vesper: bg-[#c9cac9] container with oversized photo */
const VesperInner = () => (
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] overflow-hidden">
    {/* White frame with rowing image — video fallback since Figma video URL is internal */}
    <div className="absolute inset-[0px_-8px_-3px_0] bg-white overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '105%', aspectRatio: '737 / 1185' }}>
        <img
          src={VESPER_VIDEO_FALLBACK}
          alt="Vesper rowing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

/** Cymatic: centered frame image with rotated photo inside on #e4e4e4 bg */
const CymaticInner = () => (
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] overflow-hidden">
    {/* Centered MediaRenderer container — Figma: 821×817, centered */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden" style={{ width: '117%', aspectRatio: '821 / 817' }}>
      {/* Frame image */}
      <img src={imgCymaticFrame} alt="" className="absolute inset-0 w-full h-full object-cover" />
      {/* Inner #e4e4e4 container with rotated photo */}
      <div className="absolute inset-[0px] bg-[#e4e4e4] overflow-hidden">
        <div className="absolute flex items-center justify-center" style={{ left: '1.3%', right: '1.5%', top: '1.6%', aspectRatio: '798 / 787' }}>
          <div className="rotate-[0.74deg] skew-x-[-0.11deg]" style={{ width: '100%', aspectRatio: '787 / 777' }}>
            <img src={imgCymaticInnerPhoto} alt="" className="w-full h-[135%] max-w-none object-cover" style={{ marginTop: '-5.14%' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);


// ═══ Desktop grid — Figma asymmetric offsets ═══

const DesktopWorkGrid = () => {
  const card = (slug: string) => ALL_CARDS.find(c => c.slug === slug)!;

  return (
    <div className="flex flex-col">
      {/* Row 1: Drexel — full width */}
      <DesktopCard card={card('drexel-showcase-web')} />

      {/* Row 2: AAMP — offset right ~9% (126/1402) */}
      <div className="w-[91%] ml-auto">
        <DesktopCard card={card('aamp-rebrand')} innerContent={<AampInner />} />
      </div>

      {/* Row 3: Vesper + ROAM — two halves */}
      <div className="flex flex-row">
        <div className="w-1/2">
          <DesktopCard card={card('vesper-global-rebrand')} aspectRatio="699 / 704" innerContent={<VesperInner />} />
        </div>
        <div className="w-1/2">
          <DesktopCard card={card('roam-media-brand')} innerContent={<RoamInner />} aspectRatio="699 / 704" delay={0.1} />
        </div>
      </div>

      {/* Row 4: BASQUIAT — full width */}
      <DesktopCard card={card('basquiat-catalogue')} innerContent={<BasquiatInner />} />

      {/* Row 5: Black Trail — offset ~13% (182/1402) */}
      <div className="w-[87%] ml-[13%]">
        <DesktopCard card={card('anansi-snowboard')} />
      </div>

      {/* Row 6: Kona — full width */}
      <DesktopCard card={card('kona-estate-provenance')} innerContent={<KonaInner />} />

      {/* Row 7: Flavien + Cymatic — two halves */}
      <div className="flex flex-row">
        <div className="w-1/2">
          <DesktopCard card={card('flavien-sound')} innerContent={<FlavienInner />} aspectRatio="699 / 704" />
        </div>
        <div className="w-1/2">
          <DesktopCard card={card('cymatic-studies')} aspectRatio="699 / 704" innerContent={<CymaticInner />} delay={0.1} />
        </div>
      </div>
    </div>
  );
};


// ═══════════════════════════════════════════
//  LANDING PAGE (WORK PAGE) — EXPORT
//  3-tier responsive:
//    Mobile  (< 394px):  cards with inner compositions, 393/426 aspect
//    Tablet  (394–800px): simple cover cards, 785/851 aspect
//    Desktop (≥ 800px):   glass grid with asymmetric offsets + hover
// ═══════════════════════════════════════════

export const LandingPage = () => {
  const { t } = useTranslation();

  useSEO({
    title: 'Work',
    description: 'Selected projects by Carter Benoît-Myer — brand identity, visual systems, editorial design, and creative direction.',
    path: '/work',
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-white relative">
      <BackgroundEffects />

      <div className="relative z-10">
        <StickyNavigation variant="dark" showLogo={true} />

        <PageHero
          title="Work"
          subtitle="A selection of commissioned projects ranging from brand identity to spatial activations and archival research."
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Work' },
          ]}
        />

        {/* Project Grid — 3-tier responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Mobile: < 394px — inner compositions */}
          <div className="block tablet:hidden">
            <MobileWorkGrid />
          </div>
          {/* Tablet: 394–800px — simple cover cards */}
          <div className="hidden tablet:block laptop:hidden">
            <TabletWorkGrid />
          </div>
          {/* Desktop: ≥ 800px — glass grid */}
          <div className="hidden laptop:block">
            <DesktopWorkGrid />
          </div>
        </motion.div>
      </div>

      <div className="hidden laptop:block">
        <ScrollTriggeredNewsletterMarquee />
      </div>
    </div>
  );
};