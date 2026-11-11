/**
 * Image Optimization Utilities
 * 
 * Provides srcset generation, WebP/AVIF format conversion at the CDN level,
 * and responsive sizing helpers for Unsplash and Cloudinary URLs.
 * 
 * figma:asset URLs are bundled at build time and cannot be optimized here —
 * they remain as-is.
 */

// Standard responsive breakpoints for srcset
const SRCSET_WIDTHS = [480, 768, 1080, 1440, 1920];

/**
 * Detect URL type for applying the right optimization strategy
 */
type ImageSource = 'unsplash' | 'cloudinary' | 'static';

function detectSource(src: string): ImageSource {
  if (src.includes('unsplash.com')) return 'unsplash';
  if (src.includes('cloudinary.com') || src.includes('res.cloudinary')) return 'cloudinary';
  return 'static';
}

/**
 * Generate an optimized Unsplash URL with next-gen format and specific width
 */
function optimizeUnsplash(src: string, width: number, format: 'webp' | 'avif' = 'webp'): string {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('fm', format);
  url.searchParams.set('q', '80');
  url.searchParams.set('fit', 'max');
  return url.toString();
}

/**
 * Generate an optimized Cloudinary URL with auto-format and specific width
 * Cloudinary's f_auto automatically serves WebP/AVIF based on browser support
 */
function optimizeCloudinary(src: string, width: number): string {
  // Insert width transform into existing Cloudinary URL
  // Pattern: /upload/[transforms]/filename → /upload/w_{width},f_auto,q_auto/filename
  return src.replace(
    /\/upload\//,
    `/upload/w_${width},f_auto,q_auto:good/`
  );
}

/**
 * Generate a srcset string for responsive images
 * 
 * @param src - Original image URL
 * @param widths - Array of pixel widths (defaults to standard breakpoints)
 * @returns srcset string, or empty string if source can't be optimized
 */
export function generateSrcSet(src: string, widths: number[] = SRCSET_WIDTHS): string {
  const source = detectSource(src);

  if (source === 'static') return ''; // Can't optimize bundled assets

  return widths
    .map(w => {
      const optimized = source === 'unsplash'
        ? optimizeUnsplash(src, w)
        : optimizeCloudinary(src, w);
      return `${optimized} ${w}w`;
    })
    .join(', ');
}

/**
 * Generate a sizes attribute for common responsive layouts
 */
export function generateSizes(layout: 'hero' | 'card' | 'full' = 'hero'): string {
  switch (layout) {
    case 'hero':
      // Hero: full width on mobile, half on desktop (split-screen)
      return '(max-width: 768px) 100vw, 50vw';
    case 'card':
      // Section cards: full width mobile, max 1015px desktop
      return '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1015px';
    case 'full':
      return '100vw';
    default:
      return '100vw';
  }
}

/**
 * Get the best single-source optimized URL for a given image
 * Applies WebP format and appropriate width for the viewport context
 */
export function getOptimizedSrc(src: string, targetWidth: number = 1080): string {
  const source = detectSource(src);

  switch (source) {
    case 'unsplash':
      return optimizeUnsplash(src, targetWidth);
    case 'cloudinary':
      return optimizeCloudinary(src, targetWidth);
    default:
      return src; // Static/bundled — return as-is
  }
}

/**
 * Props helper — returns src, srcSet, and sizes for an <img> element
 */
export function responsiveImageProps(
  src: string,
  layout: 'hero' | 'card' | 'full' = 'hero'
): { src: string; srcSet?: string; sizes?: string } {
  const srcSet = generateSrcSet(src);
  const sizes = generateSizes(layout);
  const optimizedSrc = getOptimizedSrc(src);

  return {
    src: optimizedSrc,
    ...(srcSet ? { srcSet, sizes } : {}),
  };
}
