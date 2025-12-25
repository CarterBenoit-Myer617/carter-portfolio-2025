export interface SiteInfo {
  name: string;
  title: string;
  hero: string;
  about: {
    heading: string;
    body: string;
  };
  navigation: {
    work: string;
    about: string;
    contact: string;
  };
  cta: string;
}

export interface Lens {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  year: number;
  category: string;
  tier: number;
  status: string;
  verdict: string;
  lenses: {
    primary: string;
    secondary: string;
    scores: {
      systems: number;
      culture: number;
      clarity: number;
      total: number;
    };
  };
  content: {
    abstract: string;
    systemLogic: string;
    culturalContext: string;
    outcomeProof: string;
  };
  meta: {
    roles: string;
    tools: string;
    keywords: string;
  };
  copyStatus: string;
}

export interface SelectedWork {
  slot: number;
  projectId: string;
  thumbnailId: string;
  reason: string;
  tone: string;
  visualTag: string;
  ctaLabel: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  siteInfo: SiteInfo;
  taxonomy: {
    lenses: Lens[];
  };
  studioPage: {
    heading: string;
    subheading: string;
    filters: string[];
    displayMode: string;
  };
  aboutPage: {
    sections: Array<{
      id: string;
      heading: string;
      content?: string;
      items?: string[];
      mediaType?: string;
      mediaId?: string;
    }>;
  };
  processPage: {
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  contactPage: {
    heading: string;
    email: string;
    social: Array<{
      platform: string;
      url: string;
    }>;
  };
  selectedWork: SelectedWork[];
  projects: Project[];
}
