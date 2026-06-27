import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_NAME = 'Carter Benoît-Myer';
const BASE_URL = 'https://carterbenoitmyer.com';
const DEFAULT_IMAGE = ''; // Add your OG image URL here

/**
 * Lightweight per-route SEO hook.
 * Sets <title>, <meta name="description">, and Open Graph tags.
 * Non-destructive: cleans up on unmount / route change.
 */
export function useSEO({ title, description, path = '', image }: SEOProps) {
  useEffect(() => {
    // 1. Document title
    const prevTitle = document.title;
    document.title = `${title} — ${SITE_NAME}`;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const hadMetaDesc = !!metaDesc;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content = description;

    // 3. Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': `${title} — ${SITE_NAME}`,
      'og:description': description,
      'og:url': `${BASE_URL}${path}`,
      'og:type': 'website',
      'og:site_name': SITE_NAME,
      ...(image || DEFAULT_IMAGE ? { 'og:image': image || DEFAULT_IMAGE } : {}),
    };

    const createdOgTags: HTMLMetaElement[] = [];
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
        createdOgTags.push(tag);
      }
      tag.content = content;
    });

    // Cleanup
    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.content = prevDesc;
      if (!hadMetaDesc && metaDesc) metaDesc.remove();
      createdOgTags.forEach(tag => tag.remove());
    };
  }, [title, description, path, image]);
}
