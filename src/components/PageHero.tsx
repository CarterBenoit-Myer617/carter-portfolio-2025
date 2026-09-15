import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// ═══════════════════════════════════════════
//  PAGE HERO — Global Design System Component
//  Single source of truth for all page hero sections.
//  Tokens derived from Figma frame (Container-1081-1206)
//  and validated against the Work, About, Studio, Contact pages.
//
//  DESIGN TOKENS (edit here to update ALL pages):
//  ┌─────────────────────────────────────────────┐
//  │ Container     max-w-[1147px] mx-auto        │
//  │ Desktop pt    pt-32 (128px) — clears nav    │
//  │ Desktop px    px-12 (48px)                  │
//  │ Desktop pb    pb-16 (64px)                  │
//  │ Mobile pt     pt-[112px]                    │
//  │ Mobile px     px-[24px]                     │
//  │ Mobile pb     pb-[48px]                     │
//  │ Breadcrumb    14px Inter, tracking 1.4px    │
//  │ Crumb→Title   84px (desktop) / 40px (mob)   │
//  │ Title desktop 128px Inter, tracking -3.2px  │
//  │ Title mobile  48px Inter, tracking -1.2px   │
//  │ Title→Sub     64px (desktop) / 40px (mob)   │
//  │ Sub desktop   30px Inter Light, lh 37.5px   │
//  │ Sub mobile    20px Inter Light, lh 27.5px   │
//  │ Sub color     #d1d5db                       │
//  │ Sub max-w     720px (default)               │
//  └─────────────────────────────────────────────┘
// ═══════════════════════════════════════════

interface BreadcrumbItem {
  label: string;
  to?: string; // undefined = current page (rendered as plain text)
}

interface PageHeroProps {
  /** Page title — string or ReactNode for styled titles */
  title: React.ReactNode;
  /** Subtitle text below the title */
  subtitle?: string;
  /** Breadcrumb trail, e.g. [{ label: 'Home', to: '/' }, { label: 'Work' }] */
  breadcrumbs?: BreadcrumbItem[];
  /** Center-align text (used by Contact page) */
  centered?: boolean;
  /** Subtitle max-width — default '720px' */
  subtitleMaxWidth?: string;
  /** Page-specific content rendered inside the section, below the text block */
  children?: React.ReactNode;
  /** Additional classes on the outer <section> */
  className?: string;
  /** Animation delay for the text block entrance — default 0.2 */
  animationDelay?: number;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  centered = false,
  subtitleMaxWidth = '720px',
  children,
  className = '',
  animationDelay = 0.2,
}) => {
  const alignClass = centered ? 'text-center' : '';
  const subtitleAlignClass = centered ? 'mx-auto' : '';

  return (
    <section
      className={[
        'relative w-full bg-transparent overflow-hidden',
        // Padding — mobile-first with generous desktop whitespace
        'pt-[112px] px-[24px] pb-[48px]',
        'md:pt-[160px] md:pb-[120px] md:px-[96px]',
        className,
      ].join(' ')}
    >
      {/* Subtle radial gradient overlay for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.015) 0%, transparent 70%)',
        }}
      />

      <div className={`max-w-[1147px] mx-auto relative ${alignClass}`}>
        {/* ── Animated text block ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: animationDelay }}
        >
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className={`flex items-center gap-[12px] md:gap-[16px] mb-[32px] md:mb-[96px] ${centered ? 'justify-center' : ''}`}>
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="contents">
                  {i > 0 && (
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] md:text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[#9ca3af]">
                      /
                    </span>
                  )}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="font-['Inter',sans-serif] font-normal text-[12px] md:text-[14px] leading-[20px] tracking-[1.4px] uppercase text-white hover:text-white/70 transition-colors inline-flex items-center min-h-11"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] md:text-[14px] leading-[20px] tracking-[1.4px] uppercase text-white">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-['Inter',sans-serif] font-normal text-[48px] md:text-[128px] leading-[1.1] md:leading-[0.9] tracking-[-1.2px] md:tracking-[-3.2px] text-white">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`font-['Inter',sans-serif] font-light text-[20px] md:text-[30px] leading-[25px] md:leading-[37.5px] text-[#d1d5db] mt-[28px] md:mt-[72px] ${subtitleAlignClass}`}
              style={{ maxWidth: subtitleMaxWidth }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* ── Page-specific content below hero text ── */}
        {children}
      </div>

      {/* Decorative bottom separator — thin glass line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[24px] right-[24px] md:left-[96px] md:right-[96px] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent 100%)',
        }}
      />
    </section>
  );
};

export default PageHero;