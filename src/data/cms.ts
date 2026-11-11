// Project cover images - using actual Figma imports where available
import IMG_ROAM_COVER from "figma:asset/b119114a2287ab8aba30ce069b6c318251fc8425.png";
import IMG_BASQUIAT_COVER from "figma:asset/992105c41f8e07186c19360509164c9e89d382a9.png";
import IMG_CYMATIC_COVER from "figma:asset/b54d6b35cbfbdffae5d7f34dfad29887df31e765.png";
import IMG_ANANSI from "figma:asset/c960e1e08c4726671b8e924d6681e8260a83a650.png";
import IMG_FLAVIEN from "figma:asset/4aefb8f4b7f310171b67b9e7680be37a6352769d.png";
import IMG_KONA from "figma:asset/45f830df02a08627021e2c45cf0bb83122fcb872.png";
import IMG_KONA_SLIDE from "figma:asset/fc22f3a16680f5dd6ad5b4228e744d1b005a6061.png";

// Work page cover images (Figma-faithful)
import IMG_DREXEL_COVER_SM from "figma:asset/0952adc2a294ca3fe5826c32a6c842890eca2745.png";
import IMG_DREXEL_COVER from "figma:asset/3d22c680e7f293997abdc55a4f71f18d7a8fc1b6.png";
import IMG_AAMP_COVER from "figma:asset/3b62af53baebff0990f478c6d1c08c7900c9fd78.png";
import IMG_VESPER_COVER from "figma:asset/c7be2e95acab629fe1651960c2a0396036e31df5.png";

// Kona packaging gallery - Figma assets
import IMG_KONA_PACKAGING_1 from "figma:asset/50ccf0f3dbb32d3d1915e7adce0706d899bf3711.png";
import IMG_KONA_PACKAGING_2 from "figma:asset/2003015e183208c593196efd6d4d16ac76601375.png";
import IMG_KONA_PACKAGING_3 from "figma:asset/67030c0578ad0694778550a5826182658be772b2.png";
import IMG_KONA_PACKAGING_4 from "figma:asset/422252db1c2217fe52e56f65926040ae2670ba0f.png";
import IMG_KONA_PACKAGING_5 from "figma:asset/32eab4c00f473a55081e52dc1caaa444ea41ba4d.png";
import IMG_KONA_POUROVER from "figma:asset/9bca574bcd34089be9d9d037c11090da61de8b68.png";
import IMG_KONA_DETAIL from "figma:asset/731161f332f8f113902b395d6dd35b081f35f8ea.png";
import IMG_KONA_FILTERS from "figma:asset/de0b7c606224130fbd0df6359381a22dca2a4b70.png";
import IMG_KONA_OVERHEAD from "figma:asset/d55573a8070a2e98c4a3571e03a1d8d0e29208e9.png";
import IMG_KONA_CLOSEUP from "figma:asset/38fbd3e73ce89f5cd1780c5b1676bf3272988366.png";
import IMG_KONA_BOX from "figma:asset/18e32714d39d76d4ebf4f27ed5658c94012d01c2.png";
import IMG_KONA_DISPLAY from "figma:asset/a186bb1ed01076acdbe38f991da168b1be471250.png";

// Black Trail Collective gallery assets
import IMG_BTC_BOARD_DETAIL from "figma:asset/4c14ef3355a59f33dac67e627fecd7a8e1823e02.png";
import IMG_BTC_BOARD_ALT from "figma:asset/a5972eaaa2ba3a27118aa70bd6cf3cac7bd610b7.png";
import IMG_BTC_DARK from "figma:asset/51656855530b47bfa45eb6c2fd90defb6e55654b.png";
import IMG_BTC_GRAPHIC from "figma:asset/5d8a3a1befcc847295ed3afd0914e341b530bb25.png";
import IMG_BTC_BINDING from "figma:asset/f15fe0b596985bf134b5e819c7ff85a9a2daadd9.png";
import IMG_BTC_FULL_BOARD from "figma:asset/3aaeb25d4305d61716ed246211292c3d87b02f3e.png";

// Flavien Sound gallery assets
import IMG_FLAVIEN_OCEAN_POSTERS from "figma:asset/92e6b70c39982e5342a449c5dc26b9803b02dc66.png";
import IMG_FLAVIEN_POSTER_DETAIL from "figma:asset/5f735d6ab219b11dc088f4a2152ac67d5dfa828b.png";
import IMG_FLAVIEN_WALL_WIDE from "figma:asset/8dd641bb82dfe40cb27bbaa835c9a72ac356675f.png";
import IMG_FLAVIEN_CRUMPLED_WALL from "figma:asset/c628ecb8ddb42a887fc431524d64d361ad9119c2.png";
import IMG_FLAVIEN_3POSTERS from "figma:asset/81b7414fc00caaee2167818e3e2da6b9dbbe857b.png";
import IMG_FLAVIEN_CAR from "figma:asset/c42b714fceb4310f94832daa2a8b8425f373f38e.png";
import IMG_FLAVIEN_PATTERN from "figma:asset/7aa3495f74423626a5c4bec077eb4e82b787d475.png";
import IMG_FLAVIEN_VIDEO_BG from "figma:asset/eb87026fed8aa05a60a65e1186c8614c7e7177ea.png";
import IMG_FLAVIEN_DIVER from "figma:asset/327b5c7b0355ba0a288a5ba2a0ee55d8ce4459be.png";
import IMG_FLAVIEN_FINAL_OCEAN from "figma:asset/6b55c49ac796df9dd1dd09f45f27366573530e8b.png";

// IMG_BTC_COVER reuses the same asset as IMG_ANANSI
const IMG_BTC_COVER = IMG_ANANSI;

export const DREXEL_COVER_SRCSET = `${IMG_DREXEL_COVER_SM} 320w, ${IMG_DREXEL_COVER} 1280w`;

// Mock CMS Data

export interface CaseBlock {
  id: string;
  type: 'text' | 'image' | 'video' | 'mixed';
  headline?: string;
  body?: string;
  mediaSrc?: string;
  mediaCaption?: string;
  order: number;
  layoutHint?: 'full' | 'narrow' | 'wide';  // Gallery layout control
  bgColor?: string;  // Accent background color (e.g. '#83459e')
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category_primary: string;
  tags: string[];
  year: number;
  featured: boolean;
  tier: number; // 1 = High Importance, 2 = Standard, 3 = Low
  categoryPriority: number; // 1=Web, 2=Identity, 3=Publication, 4=Product, 5=Motion
  type: 'video' | 'image';
  src: string;
  size: 'large' | 'wide' | 'tall' | 'small';
  one_liner: string;
  role?: string;
  tools?: string;
  deliverables?: string;
  cover?: string;  // Figma cover image for work page gallery & carousel
  blocks?: CaseBlock[];
  accentColor?: string;  // Project-level accent color
  hidden?: boolean;  // Hide from site without deleting
}

// Assets
const VID_WALKING = "https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4";
const VID_TURTLE = "https://res.cloudinary.com/demo/video/upload/c_scale,w_500/sea_turtle.mp4";
const VID_ELEPHANTS = "https://res.cloudinary.com/demo/video/upload/elephants.mp4";
const VID_DOG = "https://res.cloudinary.com/demo/video/upload/dog.mp4";

// Kona Video - PLACEHOLDER
const VID_KONA = "https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4";

// Vesper Video - Using a placeholder since backend is removed
const VID_VESPER = "https://res.cloudinary.com/demo/video/upload/v1687296068/samples/sea-turtle.mp4"; // Placeholder

const IMG_POSTER_1 = "https://images.unsplash.com/photo-1761156254622-7b66649b1f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_TYPO = "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_FASHION = "https://images.unsplash.com/photo-1738247999939-de1b5d41626e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_NEON = "https://images.unsplash.com/photo-1763053971009-fafe015de3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_VINYL = "https://images.unsplash.com/photo-1628065747479-6477cf609eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_BRUTALIST = "https://images.unsplash.com/photo-1759661030523-6e376ca6a34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_PORTRAIT = "https://images.unsplash.com/photo-1666469039660-cd77131fde3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_FURNITURE = "https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_SKATE = "https://images.unsplash.com/photo-1520045892732-304bc3a76129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_COFFEE = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_WELLESLEY = "https://images.unsplash.com/photo-1669826571046-b52a50a67e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_ROWING = "https://images.unsplash.com/photo-1678380051649-4a393ef35e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// Projects Collection
export const PROJECTS: Project[] = [
  {
    id: 'wellesley-fresh',
    slug: 'wellesley-fresh-ecosystem',
    title: 'Wellesley Fresh Ecosystem',
    hidden: true,
    cover: IMG_DREXEL_COVER_SM, // placeholder — hidden project
    category_primary: 'Identity',
    tags: ['institutional', 'systems', 'wayfinding'],
    year: 2024,
    featured: true,
    tier: 1,
    categoryPriority: 2,
    type: 'image',
    src: IMG_WELLESLEY,
    size: 'large',
    one_liner: 'A scalable design ecosystem for the **150th Anniversary**.',
    role: 'Lead Designer',
    tools: 'Figma, Adobe CC',
    deliverables: 'Brand System, Wayfinding, Asset Library',
    blocks: [
      {
        id: 'wellesley-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'Wellesley College needed a unified brand voice capable of flexing between **high-end alumni galas** and **daily student dining**. The challenge was creating a comprehensive system that championed **sustainability** and **inclusivity** without losing the prestige of the institution\'s 150-year legacy.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'wellesley-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'The existing identity couldn\'t flex between **donor galas** and **student dining** without losing prestige. Every touchpoint felt disconnected.',
        mediaSrc: 'https://images.unsplash.com/photo-1764605445821-c971ea0b89ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlJTIwY29sdW1uc3xlbnwxfHx8fDE3NzI1ODk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'wellesley-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Strict institutional guidelines, multiple stakeholder groups, **sustainability mandates**, and a decentralized decision-making structure.',
        mediaSrc: 'https://images.unsplash.com/photo-1755606159507-a98b20d06578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwxfHx8fDE3NzAxMTQ5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'wellesley-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Design an **elastic architecture** that expands for high-fidelity moments and contracts for utility—same DNA, different expressions.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'wellesley-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Audited existing assets, mapped all touchpoints across the institution, developed modular components with **scalable typography** and adaptive color modes.',
        mediaSrc: 'https://images.unsplash.com/photo-1768387214888-784c5e7e2e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXlmaW5kaW5nJTIwc2lnbmFnZSUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc3MjU4OTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'wellesley-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A unified visual system with **adaptive color modes**, flexible lockups, and seamless wayfinding integration that spans digital and physical environments.',
        mediaSrc: 'https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZ3VpZGVsaW5lcyUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1OTI1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'wellesley-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'The framework now powers **digital menus, print signage, and campus navigation** institution-wide. One system, infinite applications.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'wellesley-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Created a visual framework capable of **expanding** for formal events and **contracting** for casual, daily applications.\n• Delivered a flexible asset library currently in use across **digital menus, print signage, and wayfinding**.\n• Reduced design request turnaround by **60%**.',
        mediaSrc: 'https://images.unsplash.com/photo-1764605445821-c971ea0b89ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlJTIwY29sdW1uc3xlbnwxfHx8fDE3NzI1ODk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'wellesley-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would explore **motion principles** for digital signage and develop an animation system for future iterations.',
        mediaSrc: 'https://images.unsplash.com/photo-1731887110259-ef68416e32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBkaWdpdGFsJTIwc2lnbmFnZSUyMG1vZGVybiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcyNTkyNTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'drexel-showcase',
    slug: 'drexel-showcase-web',
    title: 'Drexel Senior Showcase',
    category_primary: 'Web',
    tags: ['education', 'ux', 'frontend'],
    year: 2024,
    featured: true,
    tier: 1,
    categoryPriority: 1,
    type: 'video',
    src: "https://youtu.be/oLRDqjx3zJY",
    cover: IMG_DREXEL_COVER,
    size: 'large',
    one_liner: 'Website and digital platform for Drexel\'s **Class of 2023** senior exhibition.',
    role: 'Lead Designer',
    tools: 'Figma, Webflow',
    deliverables: 'Website, UI System',
    blocks: [
      {
        id: 'drexel-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'A masterclass in **collaborative design**. Working as part of the **Senior Showcase Committee**, I operated within a cross-functional team (Brand, Web, Curation) to bring the cohort\'s work online. It was an introduction to "Enterprise-Level" thinking—learning how to take a Brand Team\'s visual language and apply it strictly to a **functional web environment**.',
        mediaSrc: 'https://youtu.be/oLRDqjx3zJY',
      },
      {
        id: 'drexel-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'Translate a **print-based brand identity** into a dynamic, CMS-driven web environment that could showcase 100+ graduating designers consistently.',
        mediaSrc: 'https://images.unsplash.com/photo-1763905180930-892ee8d37ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWUlMjBkZXNrdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MjU4OTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'drexel-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Strict brand guidelines, **CMS limitations**, tight deadline, 100+ content contributors with varying levels of technical proficiency.',
        mediaSrc: 'https://images.unsplash.com/photo-1706426622953-deb20641984c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMGNvbXBvbmVudCUyMGxpYnJhcnklMjBmaWdtYXxlbnwxfHx8fDE3NzI1ODk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'drexel-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Design a **\"neutral vessel\"** that prioritizes content discoverability over decorative UI. The student work is the hero, not the interface.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'drexel-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Component library development, **CMS schema design**, responsive testing across devices, and coordination with student contributors.',
        mediaSrc: 'https://images.unsplash.com/photo-1702479744031-2bf1f4bdfd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2Vic2l0ZSUyMG1vY2t1cCUyMGRldmljZXN8ZW58MXx8fHwxNzcyNTg5ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'drexel-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A modular UI system that maintains brand consistency while allowing **individual portfolio expression**. The \"Silent Frame\" approach.',
        mediaSrc: 'https://images.unsplash.com/photo-1587881729951-693725bdaed1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBncmlkJTIwbGF5b3V0JTIwZGFya3xlbnwxfHx8fDE3NzI1OTI1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'drexel-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Reusable components, **templated layouts**, automated image optimization. Built to scale for future cohorts.',
        mediaSrc: 'https://youtu.be/oLRDqjx3zJY',
      },
      {
        id: 'drexel-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Collaborated to translate static brand assets into a **responsive web system**, ensuring visual consistency across hundreds of student portfolios.\n• Gained critical hands-on experience in **backend logic** and data organization, understanding how CMS structures dictate front-end design.\n• Helped architect a **\"neutral vessel\" interface**, prioritizing the discoverability of student work over decorative UI.\n• Launched on time; **5,000+ unique visitors** in first month.',
        mediaSrc: 'https://images.unsplash.com/photo-1702479744031-2bf1f4bdfd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMTQzMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'drexel-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would push for more **filtering/search functionality** in initial scope and develop better onboarding for student contributors.',
        mediaSrc: 'https://images.unsplash.com/photo-1571573680328-f20cbb17e7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBkb2N1bWVudGF0aW9uJTIwdWl8ZW58MXx8fHwxNzcyNTkyNTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'aamp-rebrand',
    slug: 'aamp-rebrand',
    title: 'AAMP Rebrand',
    category_primary: 'Identity',
    tags: ['culture', 'branding', 'environmental'],
    year: 2024,
    featured: true,
    tier: 1,
    categoryPriority: 2,
    type: 'image',
    src: IMG_POSTER_1,
    cover: IMG_AAMP_COVER,
    size: 'tall',
    one_liner: 'A visual identity bridging **ancestral heritage** and **modern architecture**.',
    role: 'Brand Designer, Strategist',
    tools: 'Figma, Adobe CC',
    deliverables: 'Logo, Type System, Environmental Graphics',
    blocks: [
      {
        id: 'aamp-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'As the African American Museum of Philadelphia prepared for a **brand evolution**. The goal was to move beyond generic cultural tropes and create a **distinct visual language** that balances the weight of history with the forward-thinking perspective of the institution.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'aamp-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'Existing identity relied on **generic cultural tropes** that didn\'t reflect the museum\'s scholarly depth or architectural significance.',
        mediaSrc: 'https://images.unsplash.com/photo-1616035955774-322ff2b4b1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBtdXNldW0lMjBwaGlsYWRlbHBoaWElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNTg5ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'aamp-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Must honor history while signaling **architectural modernity**; strict accessibility requirements; identity must work across all touchpoints.',
        mediaSrc: 'https://images.unsplash.com/photo-1769905226777-120d21c5a569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwY3VsdHVyYWwlMjBleGhpYml0aW9ufGVufDF8fHx8MTc3MjU4OTgyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'aamp-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Ground the visual language in **specific historical motifs** rather than generalized patterns. Authenticity beats abstraction.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'aamp-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Deep archival research, motif extraction from the collection, **building scale**, and environmental mockups.',
        mediaSrc: 'https://images.unsplash.com/photo-1600845111826-941dc1f5e92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjB0eXBvZ3JhcGh5JTIwc2lnbmFnZSUyMG1vbnVtZW50YWx8ZW58MXx8fHwxNzcyNTg5ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'aamp-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A typographic system that reads as **institutional yet authentic**, scalable from facade to mobile. Research-driven graphical elements with historical significance.',
        mediaSrc: 'https://images.unsplash.com/photo-1760133024870-360068ca0536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwYnJhbmRpbmclMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzcyNTg5ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'aamp-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Templates for social, signage, print—all derived from a **core type hierarchy**. The system expands as the museum grows.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'aamp-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Grounded the visuals in **specific historical motifs** rather than generic patterns, creating a system that works on **large-scale building facades** while remaining legible on mobile screens.\n• Approved for implementation on the new **building facade** in 2025.',
        mediaSrc: 'https://images.unsplash.com/photo-1651342489764-d0fa36fdc58a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBmYWNhZGV8ZW58MXx8fHwxNzcwMTU0MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'aamp-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would prototype **environmental wayfinding** earlier in the process and test signage in actual museum conditions.',
        mediaSrc: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjB3YXlmaW5kaW5nJTIwZW52aXJvbm1lbnRhbCUyMHNpZ25hZ2V8ZW58MXx8fHwxNzcyNTkyNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'vesper-boat-club',
    slug: 'vesper-global-rebrand',
    title: 'Vesper Boat Club',
    category_primary: 'Identity',
    tags: ['sports', 'logistics', 'apparel'],
    year: 2023,
    featured: false,
    tier: 1,
    categoryPriority: 2,
    type: 'video',
    src: VID_VESPER,
    cover: IMG_VESPER_COVER,
    size: 'small',
    one_liner: 'Orchestrating a **high-performance rebrand** for the international stage.',
    role: 'Brand Designer',
    tools: 'Illustrator, Figma',
    deliverables: 'Logo, Apparel System, Brand Guidelines',
    blocks: [
      {
        id: 'vesper-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'Vesper isn\'t just a local club; it is a globally competitive program racing at **Henley, Monaco, and across Italy**. The rebrand required more than a logo update—it required a complete **operational overhaul** of their apparel system. I worked directly with **776BC (Australia)** to manufacture and deploy performance gear, managing time-zone logistics and strict international regulations to ensure the team was race-ready for the European season.',
        mediaSrc: VID_VESPER,
      },
      {
        id: 'vesper-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'Existing identity lacked **global presence**; apparel didn\'t meet international racing regulations. The brand needed to compete on the world stage.',
        mediaSrc: 'https://images.unsplash.com/photo-1742316796874-d7f3cb507938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBjcmV3JTIwYm9hdCUyMHJhY2UlMjByZWdhdHRhfGVufDF8fHx8MTc3MjU4OTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'vesper-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: '**Three-continent coordination** (US design, Australian manufacturing, European racing), tight shipping deadlines, strict governing body regulations.',
        mediaSrc: 'https://images.unsplash.com/photo-1765791277994-33e886a83a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0cyUyMGFwcGFyZWwlMjBqZXJzZXklMjBkZXNpZ258ZW58MXx8fHwxNzcyNTg5ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'vesper-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Treat the rebrand as an **operational overhaul**, not just a visual refresh. The logistics ARE the project.',
        mediaSrc: VID_VESPER,
      },
      {
        id: 'vesper-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Regulatory research, **vendor coordination** with 776BC, material testing for performance requirements, lockup development for various applications.',
        mediaSrc: 'https://images.unsplash.com/photo-1713212789424-c796554f9082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMHNwb3J0c3dlYXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MjU4OTgyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'vesper-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A performance-focused identity with **regulation-compliant apparel** ready for the world stage. Design that works at race speed.',
        mediaSrc: 'https://images.unsplash.com/photo-1764427825742-549538872859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjB0ZWFtJTIwYm9hdCUyMG9hcnMlMjB3YXRlcnxlbnwxfHx8fDE3NzI1ODk4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'vesper-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Size-inclusive templates, **reorder workflows**, brand guidelines built for future seasons and new team members.',
        mediaSrc: VID_VESPER,
      },
      {
        id: 'vesper-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Managed the end-to-end production cycle with **Australian manufacturers**, coordinating cross-time-zone communication to hit hard shipping deadlines for European regattas.\n• Designed technical apparel that adhered to strict **racing regulations** while maintaining legibility and brand prestige on the world stage.\n• Team raced at **Henley and Monaco** in new kit; zero regulatory issues.',
        mediaSrc: 'https://images.unsplash.com/photo-1678380051649-4a393ef35e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBjcmV3JTIwYm9hdHxlbnwxfHx8fDE3NzAxMjc2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'vesper-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would establish **vendor relationships** earlier to reduce time-zone friction and build in more buffer for international shipping.',
        mediaSrc: 'https://images.unsplash.com/photo-1755450655573-cc9c7ccfbdcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBib2F0aG91c2UlMjBvYXJzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MjU5MjU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'roam-publication',
    slug: 'roam-media-brand',
    title: 'ROAM Media',
    category_primary: 'Publication',
    tags: ['Social Impact Strategy', 'Profit-for-Purpose Model', 'Visual Anthropology'],
    year: 2024,
    featured: false,
    tier: 2,
    categoryPriority: 3,
    type: 'image',
    src: IMG_ROAM_COVER,
    cover: IMG_ROAM_COVER,
    size: 'wide',
    one_liner: 'Subculture as **Humanitarian Aid**: A non-profit subscription ecosystem.',
    role: 'Designer, Strategist',
    tools: 'InDesign, Photoshop, Figma',
    deliverables: 'Editorial System, Subscription Model',
    blocks: [
      {
        id: 'roam-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'ROAM is a **subscription-based media brand** with a singular mission: redirecting capital to conflict zones. While it operates with the gloss of a high-end publication, the business model is purely **philanthropic**. It uses the shared language of skateboarding to bridge political divides, while the subscription revenue provides tangible **financial support** to the communities documented within.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'roam-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'How to generate **sustainable funding** for conflict zone communities through media without feeling like charity or activism.',
        mediaSrc: 'https://images.unsplash.com/photo-1763044938426-17fd51e9d21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkaW5nJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHklMjB1cmJhbnxlbnwxfHx8fDE3NzI1ODk4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'roam-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Must feel like a **premium publication**, not charity; navigate sensitive geopolitics; balance editorial quality with humanitarian mission.',
        mediaSrc: 'https://images.unsplash.com/photo-1763408635057-01b43ce0374a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mbGljdCUyMHpvbmUlMjBkb2N1bWVudGFyeXxlbnwxfHx8fDE3NzAxNTQyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'roam-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Use skateboarding as **universal language** that bypasses political rhetoric. The shared rituals of youth culture transcend borders.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'roam-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Archival curation from conflict zones, **subscription model design**, editorial system development, and partnership framework.',
        mediaSrc: 'https://images.unsplash.com/photo-1525813428023-215a7186c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGxheW91dCUyMHByaW50JTIwc3ByZWFkfGVufDF8fHx8MTc3MjU4OTgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'roam-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A high-end publication where **100% of subscription revenue** supports documented communities. Profit-for-purpose at scale.',
        mediaSrc: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWNhdGlvbiUyMGRlc2lnbiUyMGJvb2slMjBwcmludGluZyUyMHByZXNzfGVufDF8fHx8MTc3MjU4OTgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'roam-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Modular layout system, **repeatable issue templates**, scalable to new regions and communities as the publication grows.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'roam-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Structured the subscription model so that revenue streams are directly allocated to **grassroots humanitarian aid**, turning the audience from passive consumers into active supporters.\n• Curated archival footage to construct a **visual essay** that bypasses political rhetoric, letting the **shared rituals** of global youth culture speak for themselves.\n• Pilot issue funded; **direct aid disbursement** model validated.',
        mediaSrc: 'https://images.unsplash.com/photo-1714143537333-bb86d8907a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwMTU0Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'roam-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would develop **digital subscription tier** for broader reach and explore video/documentary extensions.',
        mediaSrc: 'https://images.unsplash.com/photo-1766239303199-b45e6bcdc901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGxheW91dHxlbnwxfHx8fDE3NzAxNTQzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'basquiat-catalogue',
    slug: 'basquiat-catalogue',
    title: 'BASQUIAT Catalogue',
    category_primary: 'Publication',
    tags: ['Editorial Strategy', 'Grid Systems', 'Art Direction'],
    year: 2024,
    featured: false,
    tier: 2,
    categoryPriority: 3,
    type: 'image',
    src: IMG_BASQUIAT_COVER,
    cover: IMG_BASQUIAT_COVER,
    size: 'tall',
    one_liner: 'An **anthropological study** of Double Consciousness in layout.',
    role: 'Designer',
    tools: 'InDesign, Photoshop',
    deliverables: 'Art Catalogue, Grid System',
    blocks: [
      {
        id: 'basquiat-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'This project uses design as a **critical framework**, exploring the tension of Langston Hughes\' "Racial Mountain." It juxtaposes the **raw, unfiltered expression** of the artist against a clinical, **Swiss-style grid**, representing the "gallery gaze" trying to contain him.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'basquiat-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'How to honor Basquiat\'s work while critiquing **how institutions frame Black art**. The design must be the argument.',
        mediaSrc: 'https://images.unsplash.com/photo-1565495296896-0a2b8081086e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjYXRhbG9nJTIwdHlwb2dyYXBoeXxlbnwxfHx8fDE3NzAxNTQyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'basquiat-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Must function as **legitimate catalogue** while embedding critical commentary. Balance scholarly rigor with artistic expression.',
        mediaSrc: 'https://images.unsplash.com/photo-1735989647891-b05b35b8caff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBib29rfGVufDF8fHx8MTc3MDE1NDMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'basquiat-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Let the **tension between grid and chaos** become the visual argument. The design IS the critique.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'basquiat-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Research on **Double Consciousness** and W.E.B. Du Bois, grid experimentation, typographic studies exploring containment and freedom.',
        mediaSrc: 'https://images.unsplash.com/photo-1743119638006-a01d4625745d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwZXhoaWJpdGlvbiUyMGNhdGFsb2d8ZW58MXx8fHwxNzcwMTU0MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'basquiat-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A Swiss-style grid that visually "imprisons" the artwork—**the design IS the critique**. The structure becomes the commentary.',
        mediaSrc: 'https://images.unsplash.com/photo-1766128867459-064fcbfa8781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeSUyMHdoaXRlJTIwd2FsbHMlMjBwYWludGluZ3xlbnwxfHx8fDE3NzI1OTI1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'basquiat-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Repeatable spread templates for **future critical catalogues**. A methodology for design-as-intellectual-practice.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'basquiat-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Used the rigid grid to "contain" the chaotic artwork, visually representing the pressure to perform within **institutional boundaries**.\n• Portfolio piece demonstrating **design as intellectual practice**.',
        mediaSrc: 'https://images.unsplash.com/photo-1529119835860-ce3d90485424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwZGVzaWduJTIwc3ByZWFkJTIwbGF5b3V0JTIwcHJpbnQlMjBwcmVzc3xlbnwxfHx8fDE3NzI1OTI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'basquiat-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would explore **binding/material choices** as additional commentary layer and develop motion/interactive extensions.',
        mediaSrc: 'https://images.unsplash.com/photo-1719563014708-85b38508ee52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBib29rJTIwYmluZGluZyUyMG1hdGVyaWFscyUyMGNyYWZ0fGVufDF8fHx8MTc3MjU5MjU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    id: 'kona-coffee',
    slug: 'kona-estate-provenance',
    title: 'Kona Estate Provenance',
    category_primary: 'Brand Strategy / Packaging Systems',
    tags: ['luxury-cpg', 'provenance', 'packaging-architecture'],
    year: 2024,
    featured: false,
    tier: 3,
    categoryPriority: 4,
    type: 'image',
    src: IMG_KONA_SLIDE,
    cover: IMG_KONA_SLIDE,
    size: 'small',
    one_liner: 'Repositioning an agricultural commodity as a **luxury asset class** through design-led brand strategy.',
    role: 'Brand Strategist & Designer',
    tools: 'Illustrator, Photoshop, InDesign',
    deliverables: 'Brand Strategy, Packaging Architecture, Gift Set System, Partnership Framework',
    blocks: [
      {
        id: 'kona-b1',
        type: 'image',
        order: 1,
        headline: 'THE PROBLEM',
        body: 'Genuine Kona coffee suffers from asymmetric information—it\'s frequently counterfeited or diluted, eroding consumer trust and suppressing prices for legitimate producers. The market treats a rare, single-origin product like a grocery commodity. The design challenge: move Kona out of the coffee aisle and into the luxury tier alongside fine wine and single malt.',
        mediaSrc: IMG_KONA_POUROVER,
      },
      {
        id: 'kona-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'The commodity coffee market obscures **origin and quality**. Counterfeiting runs rampant, consumers can\'t distinguish authentic Kona from blends, and legitimate farmers are undercut by fraudulent labeling.',
        mediaSrc: IMG_KONA_DISPLAY,
      },
      {
        id: 'kona-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Must compete with **fine wine and single malt** positioning; honor Hawaiian cultural heritage without appropriation; packaging must justify an $85/lb price point through tactile experience alone.',
        mediaSrc: IMG_KONA_PACKAGING_5,
      },
      {
        id: 'kona-b4',
        type: 'image',
        order: 4,
        headline: 'STRATEGIC INSIGHT',
        body: 'Luxury isn\'t communicated through tropical clichés—it\'s communicated through **proof of scarcity and origin**. I shifted the visual narrative from \'flavor notes\' to \'geological fingerprint,\' using the estate\'s specific position on Hualalai\'s volcanic slopes as the brand\'s core asset.',
        mediaSrc: IMG_KONA_FILTERS,
      },
      {
        id: 'kona-b5',
        type: 'image',
        order: 5,
        headline: 'THE SYSTEM',
        body: 'Built a K-O-N-A lettermark arranged as a compass/diamond—evoking both navigation heritage and volcanic topography. This mark becomes the brand\'s **authentication signature**, scalable from single-serve pouches to rigid gift boxes to Conservation International partnership materials.',
        mediaSrc: IMG_KONA_PACKAGING_3,
      },
      {
        id: 'kona-b6',
        type: 'image',
        order: 6,
        headline: 'DESIGN DECISIONS',
        body: '• **Tactile price justification**: Engineered an unboxing experience (rigid structure, foil stamping, texture-mapped embossing) that psychologically validates the $85/lb price point\n• **Terroir over flavor**: Replaced generic tasting notes with topographical data proving the coffee\'s 10-mile-radius provenance\n• **Cultural bridge**: Adapted traditional lauhala weaving patterns into contemporary packaging structure—honoring Hawaiian craft without appropriating it',
        mediaSrc: IMG_KONA_BOX,
      },
      {
        id: 'kona-b7',
        type: 'image',
        order: 7,
        headline: 'System Thinking',
        body: 'The packaging architecture scales across **single-serve pouches, retail bags, and rigid gift boxes**—each SKU inheriting the same provenance DNA while adapting to its retail context.',
        mediaSrc: IMG_KONA_PACKAGING_2,
      },
      {
        id: 'kona-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Created a provenance system that functions as **anti-counterfeiting design**\n• Established visual framework for Conservation International \'Mother Our Nature\' partnership\n• Designed packaging architecture that scales across SKUs while maintaining **luxury positioning**\n• Shifted brand perception from commodity to collectible origin product',
        mediaSrc: IMG_KONA_OVERHEAD,
      },
      {
        id: 'kona-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Next iteration would integrate **blockchain provenance tracking** into the packaging QR system and develop motion content for e-commerce unboxing storytelling.',
        mediaSrc: IMG_KONA_CLOSEUP,
      },
    ],
  },
  {
    id: 'anansi-snowboard',
    slug: 'anansi-snowboard',
    title: 'Black Trail Collective',
    category_primary: 'Product',
    tags: ['social-enterprise', 'product', 'outdoor'],
    year: 2025,
    featured: false,
    tier: 3,
    categoryPriority: 4,
    type: 'image',
    src: IMG_ANANSI,
    cover: IMG_ANANSI,
    size: 'wide',
    one_liner: 'The **first snowboard** designed for the Black outdoor community.',
    role: 'Product Designer',
    tools: 'SolidWorks, Illustrator',
    deliverables: 'Snowboard Deck, Binding System',
    accentColor: '#83459e',
    blocks: [
      {
        id: 'anansi-b1',
        type: 'image',
        order: 1,
        layoutHint: 'full',
        headline: 'Anansi — The Deck',
        body: 'The outdoor industry has historically excluded Black participants. This project isn\'t just about a graphic on a board; it\'s about **ergonomics and cultural representation**. The "Anansi" model is designed with a specific flex pattern and width profile to accommodate different riding styles often overlooked by mainstream manufacturers.',
        mediaSrc: IMG_BTC_COVER,
      },
      {
        id: 'anansi-b2',
        type: 'image',
        order: 2,
        layoutHint: 'narrow',
        headline: 'The Challenge',
        body: 'Create a snowboard that speaks to an **underserved demographic** without falling into "shrink it and pink it" tokenism.',
        mediaSrc: IMG_BTC_BOARD_DETAIL,
      },
      {
        id: 'anansi-b3',
        type: 'image',
        order: 3,
        layoutHint: 'wide',
        headline: 'Design Constraints',
        body: 'Manufacturing limitations of pressed wood cores; needing to balance **performance metrics** (flex, torsion) with strong visual storytelling.',
        mediaSrc: IMG_BTC_BOARD_ALT,
      },
      {
        id: 'anansi-b4',
        type: 'image',
        order: 4,
        layoutHint: 'full',
        headline: 'Key Insight',
        body: 'Use the **Anansi spider myth** (a trickster spirit of resistance) as the central visual motif. Riding as a form of joyful resistance.',
        mediaSrc: IMG_BTC_COVER,
      },
      {
        id: 'anansi-b5',
        type: 'image',
        order: 5,
        layoutHint: 'wide',
        headline: 'Design Process',
        body: 'Rider surveys, **material testing**, graphic development using West African textile patterns remixed for snow.',
        mediaSrc: IMG_BTC_DARK,
      },
      {
        id: 'anansi-b6',
        type: 'image',
        order: 6,
        layoutHint: 'narrow',
        bgColor: '#83459e',
        headline: 'Cultural Motif',
        body: 'The Anansi spider—a **trickster spirit of resistance** from West African folklore—becomes the board\'s central visual identity.',
        mediaSrc: IMG_BTC_GRAPHIC,
      },
      {
        id: 'anansi-b7',
        type: 'image',
        order: 7,
        layoutHint: 'full',
        headline: 'System Thinking',
        body: 'The graphic language extends to **bindings and soft goods**, creating a complete ecosystem for the rider.',
        mediaSrc: IMG_BTC_COVER,
      },
      {
        id: 'anansi-b8',
        type: 'image',
        order: 8,
        layoutHint: 'narrow',
        bgColor: '#83459e',
        headline: 'Binding System',
        body: 'Custom binding graphics that extend the **Anansi visual language** across the full riding setup.',
        mediaSrc: IMG_BTC_BINDING,
      },
      {
        id: 'anansi-b9',
        type: 'image',
        order: 9,
        layoutHint: 'wide',
        bgColor: '#83459e',
        headline: 'Final Solution',
        body: 'A high-performance all-mountain board with a graphic system that celebrates **Black folklore**. A product that says "you belong here."',
        mediaSrc: IMG_BTC_FULL_BOARD,
      },
    ],
  },
  {
    id: 'flavien-sound',
    slug: 'flavien-sound',
    title: 'Flavien Sound',
    category_primary: 'Motion',
    tags: ['experimental', 'audio-visual', 'generative'],
    year: 2023,
    featured: false,
    tier: 3,
    categoryPriority: 5,
    type: 'image',
    src: IMG_FLAVIEN,
    cover: IMG_FLAVIEN,
    size: 'small',
    one_liner: 'Visualizing **sound frequencies** through generative design.',
    role: 'Motion Designer',
    tools: 'After Effects, TouchDesigner',
    deliverables: 'Visualizer Series, Live Set Assets',
    accentColor: '#48e9ff',
    blocks: [
      // Row 1: Full-width — Ocean poster scene with cyan background
      {
        id: 'flavien-b1',
        type: 'image',
        order: 1,
        layoutHint: 'full',
        bgColor: '#48e9ff',
        headline: 'Poster Series',
        body: 'Large-format posters designed for outdoor installation, combining **hand-drawn typography** with photographic elements. The yellow and cyan palette creates maximum visual impact against natural environments.',
        mediaSrc: IMG_FLAVIEN_OCEAN_POSTERS,
      },
      // Row 2: Split 30/70 — Poster detail (narrow) | Wall installation (wide)
      {
        id: 'flavien-b2',
        type: 'image',
        order: 2,
        layoutHint: 'narrow',
        headline: 'Poster Detail',
        body: 'Close-up of the **flavien berger** typographic lockup with hand-illustrated car motif—a recurring visual element across the campaign.',
        mediaSrc: IMG_FLAVIEN_POSTER_DETAIL,
      },
      {
        id: 'flavien-b3',
        type: 'image',
        order: 3,
        layoutHint: 'wide',
        headline: 'Wall Installation',
        body: 'Street-level poster installations creating an **immersive visual takeover**, blending organic textures with bold graphic design.',
        mediaSrc: IMG_FLAVIEN_WALL_WIDE,
      },
      // Row 3: Full-width — Crumpled wall posters
      {
        id: 'flavien-b4',
        type: 'image',
        order: 4,
        layoutHint: 'full',
        headline: 'Wheat-Paste Campaign',
        body: 'Guerrilla-style wheat-paste installations across urban surfaces. The **crumpled, weathered aesthetic** adds authenticity and raw energy to the visual campaign.',
        mediaSrc: IMG_FLAVIEN_CRUMPLED_WALL,
      },
      // Row 4: Split 60/40 — 3 posters on wall (wide) | Car illustration (narrow)
      {
        id: 'flavien-b5',
        type: 'image',
        order: 5,
        layoutHint: 'wide',
        headline: 'Trio Installation',
        body: 'Three-poster arrangement showcasing the **modular poster system**—each piece works independently while forming a cohesive visual statement when grouped.',
        mediaSrc: IMG_FLAVIEN_3POSTERS,
      },
      {
        id: 'flavien-b6',
        type: 'image',
        order: 6,
        layoutHint: 'narrow',
        headline: 'Generative Illustration',
        body: 'The signature **car illustration** rendered in a continuous line style, bridging the gap between analog drawing and digital generative processes.',
        mediaSrc: IMG_FLAVIEN_CAR,
      },
      // Row 5: Split 30/70 — Cyan pattern (narrow) | Video background (wide)
      {
        id: 'flavien-b7',
        type: 'image',
        order: 7,
        layoutHint: 'narrow',
        bgColor: '#48e9ff',
        headline: 'Pattern System',
        body: 'A generative pattern language derived from the **sound frequency data**, applied as a repeatable background system across all campaign materials.',
        mediaSrc: IMG_FLAVIEN_PATTERN,
      },
      {
        id: 'flavien-b8',
        type: 'image',
        order: 8,
        layoutHint: 'wide',
        headline: 'Motion Assets',
        body: 'Live performance visuals created using **TouchDesigner**—reactive systems that respond to audio input in real-time, creating a unique visual identity for each set.',
        mediaSrc: IMG_FLAVIEN_VIDEO_BG,
      },
      // Row 6: Full-width — Final ocean scene
      {
        id: 'flavien-b9',
        type: 'image',
        order: 9,
        layoutHint: 'full',
        headline: 'Campaign Overview',
        body: 'The complete visual system in context—posters, illustrations, and generative patterns working together to create an **immersive brand world** for the artist.',
        mediaSrc: IMG_FLAVIEN_FINAL_OCEAN,
      },
    ],
  },
  {
    id: 'cymatic-studies',
    slug: 'cymatic-studies',
    title: 'Cymatic Studies',
    category_primary: 'Motion',
    tags: ['R&D', 'physics', 'typography'],
    year: 2023,
    featured: false,
    tier: 3,
    categoryPriority: 5,
    type: 'image',
    src: IMG_CYMATIC_COVER,
    cover: IMG_CYMATIC_COVER,
    size: 'small',
    one_liner: 'Type in **motion**, governed by physics.',
    role: 'Creative Director',
    tools: 'Cinema 4D, Redshift',
    deliverables: 'Motion Sketches, R&D',
    blocks: [
      {
        id: 'cymatic-b1',
        type: 'video',
        order: 1,
        headline: 'Project Overview',
        body: 'A purely **experimental series** investigating how typography behaves under physical stress. Gravity, wind, and collision dynamics applied to letterforms. This is "design fitness"—exercising the muscles of **simulation and rendering**.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'cymatic-b2',
        type: 'image',
        order: 2,
        headline: 'The Challenge',
        body: 'Push the limits of **legibility vs. abstraction**. How much can you distort a letter before it loses meaning?',
        mediaSrc: 'https://images.unsplash.com/photo-1700048585552-287a0409d374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHR5cG9ncmFwaHklMjBsZXR0ZXIlMjBhYnN0cmFjdCUyMHJlbmRlcnxlbnwxfHx8fDE3NzI1OTI1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'cymatic-b3',
        type: 'image',
        order: 3,
        headline: 'Design Constraints',
        body: 'Render times; maintaining **typographic integrity** while applying chaos forces.',
        mediaSrc: 'https://images.unsplash.com/photo-1771599940657-f9f151abed45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjA0ZCUyMHJlbmRlciUyMG1ldGFsbGljJTIwc2hhcGVzfGVufDF8fHx8MTc3MjU5MjU5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'cymatic-b4',
        type: 'video',
        order: 4,
        headline: 'Key Insight',
        body: 'Typography isn\'t static; it has **mass and velocity**. Treat letters as physical objects.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'cymatic-b5',
        type: 'image',
        order: 5,
        headline: 'Design Process',
        body: 'Soft body simulations, **cloth dynamics**, lighting studies to emphasize texture and volume.',
        mediaSrc: 'https://images.unsplash.com/photo-1623948113415-db1409977ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYm9keSUyMHBoeXNpY3MlMjBibG9iJTIwc2ltdWxhdGlvbnxlbnwxfHx8fDE3NzI1OTI1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'cymatic-b6',
        type: 'image',
        order: 6,
        headline: 'Final Solution',
        body: 'A collection of **motion posters** that explore the physicality of language. Digital type that feels like it has weight.',
        mediaSrc: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBwb3N0ZXIlMjBraW5ldGljJTIwZGVzaWduJTIwbmVvbnxlbnwxfHx8fDE3NzI1OTI1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'cymatic-b7',
        type: 'video',
        order: 7,
        headline: 'System Thinking',
        body: 'Developed a **library of simulation presets** that can be applied to any typeface for rapid iteration.',
        mediaSrc: 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4',
      },
      {
        id: 'cymatic-b8',
        type: 'image',
        order: 8,
        headline: 'Results & Impact',
        body: '• Sharpened skills in **3D simulation** and rendering pipeline.\n• Assets used in personal showreel and social media campaigns.',
        mediaSrc: 'https://images.unsplash.com/photo-1762258344624-52d8c3b74c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwcmVuZGVyJTIwZGFyayUyMGdlb21ldHJpY3xlbnwxfHx8fDE3NzI1OTI2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        id: 'cymatic-b9',
        type: 'image',
        order: 9,
        headline: 'Reflection',
        body: 'Would apply these techniques to a **full branding project**, using motion behavior as a brand identifier.',
        mediaSrc: 'https://images.unsplash.com/photo-1677504212080-16fae3e78fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGJyYW5kaW5nJTIwYW5pbWF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcyNTkyNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
];

export const sortProjects = (projects: Project[]) => {
  return projects.filter(p => !p.hidden).sort((a, b) => {
    // Primary Sort: Tier (1 first)
    if (a.tier !== b.tier) {
      return a.tier - b.tier;
    }
    // Secondary Sort: Category Priority (1 first)
    if (a.categoryPriority !== b.categoryPriority) {
      return a.categoryPriority - b.categoryPriority;
    }
    // Tertiary Sort: Year (Newest first)
    return b.year - a.year;
  });
};