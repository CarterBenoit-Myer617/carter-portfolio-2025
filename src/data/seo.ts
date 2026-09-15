export const SITE_NAME = 'Carter Benoît-Myer';
export const BASE_URL = 'https://carterbenoitmyer.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/_assets/v11/4a60760d8510c301299c868a298536579f05fb84.png`;

export interface RouteSEO {
  title: string;
  description: string;
  path: string;
  image: string;
}

const ogImage = (hashPng: string) => `${BASE_URL}/_assets/v11/${hashPng}`;

/** Nine live case studies — copy from existing one-liners, no invented claims. */
export const CASE_STUDY_SEO: Record<string, RouteSEO> = {
  'drexel-showcase-web': {
    title: 'Drexel Senior Showcase',
    description:
      "Website and digital platform for Drexel's Class of 2023 senior exhibition.",
    path: '/studio/drexel-showcase-web',
    image: ogImage('3d22c680e7f293997abdc55a4f71f18d7a8fc1b6.png'),
  },
  'aamp-rebrand': {
    title: 'AAMP Rebrand',
    description:
      'A visual identity bridging ancestral heritage and modern architecture.',
    path: '/studio/aamp-rebrand',
    image: ogImage('3b62af53baebff0990f478c6d1c08c7900c9fd78.png'),
  },
  'vesper-global-rebrand': {
    title: 'Vesper Boat Club',
    description:
      'A high-performance rebrand for an international rowing club.',
    path: '/studio/vesper-global-rebrand',
    image: ogImage('c7be2e95acab629fe1651960c2a0396036e31df5.png'),
  },
  'roam-media-brand': {
    title: 'ROAM Media',
    description: 'Subculture as humanitarian aid: a non-profit subscription ecosystem.',
    path: '/studio/roam-media-brand',
    image: ogImage('b119114a2287ab8aba30ce069b6c318251fc8425.png'),
  },
  'basquiat-catalogue': {
    title: 'BASQUIAT Catalogue',
    description: 'An anthropological study of Double Consciousness in layout.',
    path: '/studio/basquiat-catalogue',
    image: ogImage('992105c41f8e07186c19360509164c9e89d382a9.png'),
  },
  'kona-estate-provenance': {
    title: 'Kona Estate Provenance',
    description:
      'Repositioning an agricultural commodity as a luxury asset class through design-led brand strategy.',
    path: '/studio/kona-estate-provenance',
    image: ogImage('fc22f3a16680f5dd6ad5b4228e744d1b005a6061.png'),
  },
  'anansi-snowboard': {
    title: 'Black Trail Collective',
    description: 'The first snowboard designed for the Black outdoor community.',
    path: '/studio/anansi-snowboard',
    image: ogImage('c960e1e08c4726671b8e924d6681e8260a83a650.png'),
  },
  'flavien-sound': {
    title: 'Flavien Sound',
    description: 'Visualizing sound frequencies through generative design.',
    path: '/studio/flavien-sound',
    image: ogImage('4aefb8f4b7f310171b67b9e7680be37a6352769d.png'),
  },
  'cymatic-studies': {
    title: 'Cymatic Studies',
    description: 'Type in motion, governed by physics.',
    path: '/studio/cymatic-studies',
    image: ogImage('b54d6b35cbfbdffae5d7f34dfad29887df31e765.png'),
  },
};

export const PAGE_SEO: Record<string, RouteSEO> = {
  home: {
    title: 'Carter Benoît-Myer',
    description:
      'Brand and product designer. Visual identity systems for outdoor and athletic brands.',
    path: '/',
    image: DEFAULT_OG_IMAGE,
  },
  work: {
    title: 'Work',
    description:
      'Selected projects by Carter Benoît-Myer — brand identity, visual systems, editorial design, and creative direction.',
    path: '/work',
    image: DEFAULT_OG_IMAGE,
  },
  studio: {
    title: 'Work',
    description:
      'Selected projects by Carter Benoît-Myer — brand identity, visual systems, editorial design, and creative direction.',
    path: '/studio',
    image: DEFAULT_OG_IMAGE,
  },
};
