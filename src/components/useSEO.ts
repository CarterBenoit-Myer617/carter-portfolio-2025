import { useEffect } from 'react';
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '../data/seo';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

function upsertMeta(selector: string, attrs: Record<string, string>, content: string) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  let created = false;
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => tag!.setAttribute(k, v));
    document.head.appendChild(tag);
    created = true;
  }
  const prev = tag.getAttribute('content') || '';
  tag.setAttribute('content', content);
  return { tag, created, prev };
}

export function useSEO({ title, description, path = '', image }: SEOProps) {
  useEffect(() => {
    const pageTitle = path === '/' ? title : `${title} — ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;
    const prevTitle = document.title;
    document.title = pageTitle;

    const applied = [
      upsertMeta('meta[name="description"]', { name: 'description' }, description),
      upsertMeta('meta[property="og:title"]', { property: 'og:title' }, pageTitle),
      upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description),
      upsertMeta('meta[property="og:url"]', { property: 'og:url' }, url),
      upsertMeta('meta[property="og:image"]', { property: 'og:image' }, ogImage),
      upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website'),
      upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME),
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, pageTitle),
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description),
      upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url' }, url),
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, ogImage),
      upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image'),
    ];

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    let createdCanonical = false;
    const prevCanonical = canonical?.href || '';
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
      createdCanonical = true;
    }
    canonical.href = url;

    return () => {
      document.title = prevTitle;
      applied.forEach(({ tag, created, prev }) => {
        if (created) tag.remove();
        else tag.setAttribute('content', prev);
      });
      if (canonical) {
        if (createdCanonical) canonical.remove();
        else canonical.href = prevCanonical;
      }
    };
  }, [title, description, path, image]);
}
