import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';
import { PROJECTS, DREXEL_COVER_SRCSET } from '../data/cms';
import { useTranslation } from './LanguageContext';
import { useSEO } from './useSEO';
import { VIDEO_DREXEL_FIGMA, VIDEO_DREXEL_LOCAL, VIDEO_VESPER_FIGMA, VIDEO_VESPER_LOCAL } from '../data/media';
import { PAGE_SEO } from '../data/seo';

// ═══ Figma project cover images (desktop) ═══
import imgImageDrexelSeniorShowcase from "figma:asset/3d22c680e7f293997abdc55a4f71f18d7a8fc1b6.png";
import imgImageAampRebrand from "figma:asset/3b62af53baebff0990f478c6d1c08c7900c9fd78.png";
import imgVesperCover from "figma:asset/c7be2e95acab629fe1651960c2a0396036e31df5.png";
import imgImageRoamMedia from "figma:asset/b119114a2287ab8aba30ce069b6c318251fc8425.png";
import imgImageBasquiatCatalogue from "figma:asset/992105c41f8e07186c19360509164c9e89d382a9.png";
import imgImageBlackTrailCollective from "figma:asset/c960e1e08c4726671b8e924d6681e8260a83a650.png";
import imgImageKonaEstateProvenance from "figma:asset/fc22f3a16680f5dd6ad5b4228e744d1b005a6061.png";
import imgImageFlavienSound from "figma:asset/4aefb8f4b7f310171b67b9e7680be37a6352769d.png";
import imgImageCymaticStudies from "figma:asset/b54d6b35cbfbdffae5d7f34dfad29887df31e765.png";

// ═══ Mobile-specific cover images (Figma mobile frame uses different crops) ═══
import imgDrexelMobile from "figma:asset/0952adc2a294ca3fe5826c32a6c842890eca2745.png";
import imgVesperMobile from "figma:asset/01cf8910843310aba94c1ac3673a449c0c5acf16.png";

// ═══ Overlay images (Figma card inner content) ═══
import imgScreenshotAamp from "figma:asset/2e5a9e5589f617814a005bd70feb129382ca73eb.png";
import imgAamp2024Cover from "figma:asset/f57093133625582c8bba285886966ed9d33b94c1.png";
import imgSafeVideo from "figma:asset/79771067dc4b1d2180731a8740d181e1c7407a16.png";
import imgImg2060 from "figma:asset/13935800951653a5cae2bda85373e6073b24647d.png";
import imgCarterBenoit2 from "figma:asset/0fcac5110e733ab89fbc05dbbe220f841f3a63f3.png";
import imgImage24 from "figma:asset/e3e797514fbf211940697131f6fd7b221f2d3e81.png";
import imgImage20 from "figma:asset/bd7998211af3de495b5362334be78e85d9fbda76.png";
import imgTwoWhiteCrumpledPostersGrungeWall22 from "figma:asset/1a7c10aa8de24cbacf72344ed0b2ed5d33be952c.png";

// ═══ Video sources (from Figma frames) ═══
const VIDEO_DREXEL = VIDEO_DREXEL_LOCAL;
const VIDEO_VESPER = VIDEO_VESPER_LOCAL;
const VIDEO_CYMATIC_BTC = "/_videos/v1/aebb6e13cfadb7f93d79486a523aa5c1becbb983";

// ═══════════════════════════════════════════
//  PROJECT GRID DATA — matches Figma layout
// ═══════════════════════════════════════════

interface WorkGridItem {
  title: string;
  slug: string;
  image: string;
  layout: 'full' | 'wide-left' | 'wide-right' | 'half-left' | 'half-right';
}

const WORK_GRID: WorkGridItem[][] = [
  // Row 1: Full width
  [{ title: 'Drexel Senior Showcase', slug: 'drexel-showcase-web', image: imgImageDrexelSeniorShowcase, layout: 'full' }],
  // Row 2: Wide right
  [{ title: 'AAMP Rebrand', slug: 'aamp-rebrand', image: imgImageAampRebrand, layout: 'wide-right' }],
  // Row 3: Two half-width cards
  [
    { title: 'Vesper Boat Club', slug: 'vesper-global-rebrand', image: imgVesperCover, layout: 'half-left' },
    { title: 'ROAM Media', slug: 'roam-media-brand', image: imgImageRoamMedia, layout: 'half-right' },
  ],
  // Row 4: Full width
  [{ title: 'BASQUIAT Catalogue', slug: 'basquiat-catalogue', image: imgImageBasquiatCatalogue, layout: 'full' }],
  // Row 5: Wide right
  [{ title: 'Black Trail Collective', slug: 'anansi-snowboard', image: imgImageBlackTrailCollective, layout: 'wide-right' }],
  // Row 6: Full width
  [{ title: 'Kona Estate Provenance', slug: 'kona-estate-provenance', image: imgImageKonaEstateProvenance, layout: 'full' }],
  // Row 7: Two half-width cards
  [
    { title: 'Flavien Sound', slug: 'flavien-sound', image: imgImageFlavienSound, layout: 'half-left' },
    { title: 'Cymatic Studies', slug: 'cymatic-studies', image: imgImageCymaticStudies, layout: 'half-right' },
  ],
];


// ═══════════════════════════════════════════
//  DESKTOP OVERLAY CONTENT — per-card Figma-faithful
//  Each card has a unique inner treatment from the Figma frame
// ═══════════════════════════════════════════

/** Desktop overlay content rendered on top of the cover image + dark overlay */
const DesktopCardOverlay: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    // Drexel: centered vertical video on top of cover
    case 'drexel-showcase-web':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover"
              style={{ aspectRatio: '1080/1350' }}
            >
              <source src={VIDEO_DREXEL} type="video/mp4" />
              <source src={VIDEO_DREXEL_FIGMA} type="video/mp4" />
            </video>
          </div>
        </div>
      );

    // AAMP: screenshot inside a brownish/grey frame, centered
    case 'aamp-rebrand':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="absolute overflow-hidden bg-[#383131]"
            style={{
              left: '-8%',
              right: '-8%',
              top: '-14%',
              bottom: '-14%',
            }}
          >
            <img
              alt=""
              src={imgScreenshotAamp}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                left: '2.5%',
                top: '-19%',
                width: '95%',
                height: '100%',
              }}
            />
          </div>
        </div>
      );

    // Vesper: white inset with video inside
    case 'vesper-global-rebrand':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-white overflow-hidden"
            style={{
              top: '0.08%',
              left: '0',
              right: '-5.6%',
              bottom: '-5%',
            }}
          >
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(calc(-50% - 10px), calc(-50% + 90px))',
                width: '737px',
                aspectRatio: '737/1185',
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controlsList="nodownload"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={VIDEO_VESPER} type="video/mp4" />
                <source src={VIDEO_VESPER_FIGMA} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      );

    // ROAM: nested white container with IMG_2060
    case 'roam-media-brand':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-white overflow-hidden"
            style={{
              top: '-46%',
              left: '-5.6%',
              right: '-5.7%',
              bottom: '-47%',
            }}
          >
            <img
              alt=""
              src={imgImg2060}
              className="absolute top-1/2 -translate-y-1/2 object-cover"
              style={{
                left: '-34.6%',
                right: '4.2%',
                aspectRatio: '1072/715',
              }}
            />
          </div>
        </div>
      );

    // BASQUIAT: centered Carter Benoit image on top
    case 'basquiat-catalogue':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(calc(-50% + 0.5px), calc(-50% - 0.12px))',
              width: '107.5%',
              aspectRatio: '1440/961',
            }}
          >
            <img
              alt=""
              src={imgCarterBenoit2}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      );

    // Black Trail Collective: video at far right (mostly clipped)
    case 'anansi-snowboard':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute"
            style={{
              top: '98%',
              left: '99%',
              width: '252%',
              aspectRatio: '2938/1787',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={VIDEO_CYMATIC_BTC} type="video/mp4" />
            </video>
          </div>
        </div>
      );

    // Kona: white/light container with image 24 on top
    case 'kona-estate-provenance':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-[#fcfcfd] overflow-hidden"
            style={{
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
            }}
          >
            <img
              alt=""
              src={imgImage24}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
          </div>
        </div>
      );

    // Flavien: crumpled poster overlay
    case 'flavien-sound':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute overflow-hidden"
            style={{
              top: '-6.65%',
              left: '-7%',
              right: '-7.1%',
              bottom: '-6.7%',
            }}
          >
            <div
              className="absolute"
              style={{
                top: '-4.3%',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '-12.9%',
                aspectRatio: '1164.15/1478.23',
              }}
            >
              <img
                alt=""
                src={imgTwoWhiteCrumpledPostersGrungeWall22}
                className="absolute object-cover"
                style={{
                  height: '133.05%',
                  width: '225.26%',
                  left: '-29.14%',
                  top: '-11.94%',
                }}
              />
            </div>
          </div>
        </div>
      );

    // Cymatic: centered video
    case 'cymatic-studies':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(calc(-50% - 0.25px), calc(-50% - 0.4px))',
              width: '180%',
              aspectRatio: '1204/733',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={VIDEO_CYMATIC_BTC} type="video/mp4" />
            </video>
          </div>
        </div>
      );

    default:
      return null;
  }
};


// ═══════════════════════════════════════════
//  MOBILE OVERLAY CONTENT — per-card Figma-faithful
//  Matches Figma mobile frame 1130-4605
// ═══════════════════════════════════════════

const MobileCardOverlay: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    // Drexel: centered vertical video
    case 'drexel-showcase-web':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '-1.8%',
              right: '-1.9%',
              transform: 'translateY(calc(-50% + 0.27px))',
              aspectRatio: '1080/1350',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={VIDEO_DREXEL} type="video/mp4" />
              <source src={VIDEO_DREXEL_FIGMA} type="video/mp4" />
            </video>
          </div>
        </div>
      );

    // AAMP: AAMP_2024_COVER inside grey container
    case 'aamp-rebrand':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-[#c9c9c7] overflow-hidden"
            style={{
              top: '-5.6%',
              left: '-10.2%',
              right: '-10.3%',
              bottom: '-5.7%',
            }}
          >
            <img
              alt=""
              src={imgAamp2024Cover}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              style={{
                left: '50%',
                right: '-22.6%',
                width: '145%',
                aspectRatio: '1804.31/1247.27',
              }}
            />
          </div>
        </div>
      );

    // Vesper: white container with video
    case 'vesper-global-rebrand':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-white overflow-hidden"
            style={{
              top: '-6.7%',
              left: '-11.4%',
              right: '-11.6%',
              bottom: '-6.9%',
            }}
          >
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '6%',
                right: '6%',
                transform: 'translateY(calc(-50% + 69.5px))',
                aspectRatio: '432/695',
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controlsList="nodownload"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={VIDEO_VESPER} type="video/mp4" />
                <source src={VIDEO_VESPER_FIGMA} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      );

    // ROAM: white container with IMG_2060
    case 'roam-media-brand':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-white overflow-hidden"
            style={{
              top: '-22.9%',
              left: '-12.5%',
              right: '-12.6%',
              bottom: '-32%',
            }}
          >
            <img
              alt=""
              src={imgImg2060}
              className="absolute top-1/2 -translate-y-1/2 object-cover"
              style={{
                left: '-47.4%',
                right: '5.7%',
                aspectRatio: '1072/715',
              }}
            />
          </div>
        </div>
      );

    // Kona: grey container with image 20
    case 'kona-estate-provenance':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-[#c9cac9] overflow-hidden"
            style={{
              top: '-7.2%',
              left: '-4.8%',
              right: '-4.7%',
              bottom: '-7.2%',
            }}
          >
            <img
              alt=""
              src={imgImage20}
              className="absolute top-1/2 left-0 -translate-y-1/2 object-cover"
              style={{
                width: '100%',
                aspectRatio: '984.41/1112.58',
              }}
            />
          </div>
        </div>
      );

    // Flavien: crumpled poster overlay
    case 'flavien-sound':
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute overflow-hidden"
            style={{
              top: '-11.9%',
              left: '-17%',
              right: '-17.2%',
              bottom: '-12.1%',
            }}
          >
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '10.6%',
                right: '10.6%',
                transform: 'translateY(-50%)',
                aspectRatio: '1164.15/1478.23',
              }}
            >
              <img
                alt=""
                src={imgTwoWhiteCrumpledPostersGrungeWall22}
                className="absolute object-cover"
                style={{
                  height: '133.05%',
                  width: '225.26%',
                  left: '-29.14%',
                  top: '-11.94%',
                }}
              />
            </div>
          </div>
        </div>
      );

    // Cymatic: centered video
    case 'cymatic-studies':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '-58.7%',
              right: '-58.8%',
              transform: 'translateY(calc(-50% + 0.02px))',
              aspectRatio: '480/292',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={VIDEO_CYMATIC_BTC} type="video/mp4" />
            </video>
          </div>
        </div>
      );

    default:
      return null;
  }
};


// ═══════════════════════════════════════════
//  PROJECT CARD (Desktop)
// ═══════════════════════════════════════════

const ProjectCard = ({ item, delay = 0 }: { item: WorkGridItem; delay?: number }) => {
  const [hovered, setHovered] = useState(false);

  // Find project in CMS for category data
  const project = PROJECTS.find(p => p.slug === item.slug);

  return (
    <Link to={`/studio/${item.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden bg-[#111827] cursor-pointer group"
        style={{ aspectRatio: '1339/674' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Project cover image */}
        <img
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] max-w-full"
          src={item.image}
          srcSet={item.slug === 'drexel-showcase-web' ? DREXEL_COVER_SRCSET : undefined}
          sizes={item.slug === 'drexel-showcase-web' ? '100vw' : undefined}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/35" />

        {/* ═══ Per-card overlay content (videos, images) ═══ */}
        <DesktopCardOverlay slug={item.slug} />

        {/* Hover: category label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="absolute left-8 sm:left-16 top-8 sm:top-16 z-20"
        >
          {project && (
            <p className="text-xs uppercase tracking-[2px] text-white/70">
              {project.category_primary} — {project.year}
            </p>
          )}
        </motion.div>

        {/* Title — always visible at bottom-left */}
        <div className="absolute left-8 sm:left-16 bottom-8 sm:bottom-16 z-20">
          <p
            className="font-medium text-xl sm:text-2xl text-white"
            style={{ textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}
          >
            {item.title}
          </p>
        </div>

        {/* Hover: one-liner description */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="absolute left-8 sm:left-16 bottom-[72px] sm:bottom-[80px] max-w-[400px] z-20"
        >
          {project && (
            <p className="font-light text-sm text-white/80 leading-relaxed">
              {project.one_liner.replace(/\*\*/g, '')}
            </p>
          )}
        </motion.div>
      </motion.div>
    </Link>
  );
};


// ═══════════════════════════════════════════
//  MOBILE PROJECT CARD — Figma-faithful
//  Each card: full-width, ~393:426 aspect ratio,
//  bg-[#111827], cover image + overlay content
//  Matches Figma mobile frame 1130-4605
// ═══════════════════════════════════════════

/** Mobile-specific image overrides — some projects use different crops on mobile */
const MOBILE_IMAGE_OVERRIDES: Record<string, string> = {
  'drexel-showcase-web': imgDrexelMobile,
  'vesper-global-rebrand': imgVesperMobile,
};

/** Mobile card — cover image + dark overlay + per-card content, matching Figma mobile frame */
const MobileProjectCard = ({ item, delay = 0 }: { item: WorkGridItem; delay?: number }) => {
  const mobileImage = MOBILE_IMAGE_OVERRIDES[item.slug] || item.image;

  return (
    <Link to={`/studio/${item.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden bg-[#111827]"
        style={{ aspectRatio: '393/426' }}
      >
        {/* Cover image */}
        <img
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          src={mobileImage}
          srcSet={item.slug === 'drexel-showcase-web' ? DREXEL_COVER_SRCSET : undefined}
          sizes={item.slug === 'drexel-showcase-web' ? '100vw' : undefined}
        />

        {/* Dark overlay — Figma: bg-[rgba(0,0,0,0.2)] */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ═══ Per-card overlay content (videos, images) ═══ */}
        <MobileCardOverlay slug={item.slug} />

        {/* Title — bottom-left, Figma: left-[48px] bottom-[48px] shadow text */}
        <p
          className="absolute left-[24px] bottom-[24px] z-20 font-medium text-lg text-white"
          style={{ textShadow: '0px 3px 6px rgba(0,0,0,0.12)' }}
        >
          {item.title}
        </p>
      </motion.div>
    </Link>
  );
};


// ═══════════════════════════════════════════
//  WORK GRID — Figma-matched staggered layout
//  Mobile: full-width stacked cards (MobileProjectCard)
//  Desktop: staggered widths (ProjectCard)
// ═══════════════════════════════════════════

const WORK_GRID_FLAT = WORK_GRID.flat();

const WorkGrid = () => (
  <>
    {/* -- MOBILE: full-width stacked -- */}
    <div className="flex flex-col md:hidden">
      {WORK_GRID_FLAT.map((item, idx) => (
        <MobileProjectCard key={item.slug} item={item} delay={idx * 0.05} />
      ))}
    </div>

    {/* -- DESKTOP: staggered layout -- */}
    <div className="hidden md:flex md:flex-col">
      {WORK_GRID.map((row, rowIdx) => {
        if (row.length === 2) {
          return (
            <div key={rowIdx} className="flex flex-row">
              {row.map((item, i) => (
                <div key={item.slug} className="w-1/2">
                  <ProjectCard item={item} delay={i * 0.1} />
                </div>
              ))}
            </div>
          );
        }

        const item = row[0];
        const layoutClasses: Record<string, string> = {
          full: 'w-full',
          'wide-left': 'w-[90%]',
          'wide-right': 'w-[91%] ml-auto',
        };

        return (
          <div key={rowIdx} className={layoutClasses[item.layout] || 'w-full'}>
            <ProjectCard item={item} />
          </div>
        );
      })}
    </div>
  </>
);


// ═══════════════════════════════════════════
//  STUDIO PAGE (WORK GRID) — EXPORT
// ═══════════════════════════════════════════

export const StudioPage = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const seo = pathname === '/work' ? PAGE_SEO.work : PAGE_SEO.studio;

  useSEO({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    image: seo.image,
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Radial gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1F2937 0%, #151C28 50%, #0B0F19 100%)',
        }}
      />

      <div className="relative z-10">
        <StickyNavigation variant="dark" showLogo={true} />

        {/* Hero — Work heading + subtitle */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-5 sm:px-12 md:px-24 pt-24 sm:pt-24 pb-8 sm:pb-16"
        >
          <div className="pt-16 sm:pt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-normal text-[48px] sm:text-[96px] md:text-[128px] leading-[1] tracking-[-1.2px] sm:tracking-[-3.2px] text-white"
            >
              {t('studio.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="font-normal text-base sm:text-2xl leading-7 sm:leading-8 text-[#d1d5db] max-w-[575px] mt-6 sm:mt-10"
            >
              {t('studio.subtitle')}
            </motion.p>
          </div>
        </motion.section>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <WorkGrid />
        </motion.div>
      </div>
    </div>
  );
};