import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './LanguageContext';

/**
 * SiteFooter — shared footer component used across all pages.
 * Single source of truth for footer layout and translation wiring.
 *
 * Layout variants:
 *   - Default: standard padding with max-width constraint
 *   - Override via className for page-specific adjustments
 */

interface SiteFooterProps {
  /** Extra classes applied to the <footer> element for layout tweaks */
  className?: string;
  /** Whether to show the top border (default: true) */
  showBorder?: boolean;
}

export const SiteFooter = ({ className = '', showBorder = true }: SiteFooterProps) => {
  const { t } = useTranslation();

  return (
    <footer
      className={`bg-[#0a0a0a] px-5 sm:px-12 lg:px-24 pt-10 md:pt-20 pb-10 md:pb-16
        ${showBorder ? 'border-t border-[#27272a]' : ''}
        ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-[1147px]">
        <div>
            <p className="font-['Arial',sans-serif] text-xs uppercase tracking-[2px] text-[#99a1af] mb-6">
              {t('footer.contact')}
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-['Arial',sans-serif] text-xl text-white">
                Black Trail Collective
              </p>
              <p className="font-['Arial',sans-serif] text-xl text-white/60">
                {t('footer.location')}
              </p>
              <a
                href="mailto:studio@carterbenoitmyer.com"
                className="font-['Arial',sans-serif] text-xl text-white mt-6 inline-flex min-h-11 items-center"
              >
                studio@carterbenoitmyer.com
              </a>
            </div>
        </div>

        <div>
            <p className="font-['Arial',sans-serif] text-xs uppercase tracking-[2px] text-[#99a1af] mb-6">
              {t('footer.social')}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/blacktrailcollective"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Arial',sans-serif] text-xl text-white hover:text-white/70 transition-colors inline-flex min-h-11 items-center"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/carterbenoitmyer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Arial',sans-serif] text-xl text-white hover:text-white/70 transition-colors inline-flex min-h-11 items-center"
              >
                LinkedIn
              </a>
            </div>
        </div>

        <div>
            <p className="font-['Arial',sans-serif] text-xs uppercase tracking-[2px] text-[#99a1af] mb-6">
              {t('footer.studio')}
            </p>
            <div className="flex flex-col gap-2">
            <Link
              to="/about"
              className="font-['Arial',sans-serif] text-xl text-white hover:text-white/70 transition-colors inline-flex min-h-11 items-center"
            >
              {t('footer.about')}
            </Link>
            <Link
              to="/studio"
              className="font-['Arial',sans-serif] text-xl text-white hover:text-white/70 transition-colors inline-flex min-h-11 items-center"
            >
              {t('footer.services')}
            </Link>
            <Link
              to="/studio-shop"
              className="font-['Arial',sans-serif] text-xl text-white hover:text-white/70 transition-colors inline-flex min-h-11 items-center"
            >
              {t('footer.shop')}
            </Link>
            </div>
        </div>

        <div className="flex items-end">
          <p className="font-['Arial',sans-serif] text-xs uppercase tracking-[0.6px] text-[#52525b]">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};