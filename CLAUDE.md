# CLAUDE.md

## Rules

- CMS is `src/data/cms.ts` — NOT `data/portfolio-data.json`
- Dark theme (`#0A0A0A`) is mandatory
- Kebab-case for folders and files
- Do NOT use OpenAI tools on this project

## Architecture

Vite + React 18 deployed on Figma Sites

**Live:** https://carterbenoitmyer.com

| Stack | |
|-------|--|
| Framework | React 18 + Vite |
| Routing | React Router DOM |
| Animations | Framer Motion (`motion/react`) |
| Styling | Tailwind CSS |
| Components | shadcn/ui + Radix UI |
| Data | `src/data/cms.ts` |

## Routes

| Route | Component |
|-------|-----------|
| `/` | LandingPage |
| `/about` | AboutPage |
| `/studio` | StudioPage |
| `/studio/process` | StudioProcessPage |
| `/studio/:slug` | ProjectDetailPage |
| `/studio-shop` | StudioShopPage |
| `/contact` | ContactPage |

## Design Tokens

| Token | Value |
|-------|-------|
| `--background` | `#0A0A0A` |
| `--text-primary` | `#fff` |
| `--text-secondary` | `#a1a1aa` |
| `--text-muted` | `#6a7282` |
| `--border` | `#27272a` |

## Key Paths

| Path | Contents |
|------|----------|
| `src/components/` | 20 page components + 48 ui primitives |
| `src/assets/` | 63 Figma-exported PNGs (hash names) |
| `src/data/cms.ts` | Project CMS (10 projects) |
| `public/projects/{slug}/` | 308 project assets |
| `data/briefs/` | 12 project briefs (markdown) |
| `voice-memos/` | Voice notes + transcripts (gitignored) |
| `video/` | Portfolio videos (gitignored) |

## Projects

| Slug | Title | Category |
|------|-------|----------|
| `wellesley-fresh-ecosystem` | Wellesley Fresh Ecosystem | Identity |
| `drexel-showcase-web` | Drexel Senior Showcase | Web |
| `aamp-rebrand` | AAMP Rebrand | Identity |
| `vesper-global-rebrand` | Vesper Boat Club | Identity |
| `roam-media-brand` | ROAM Media | Publication |
| `basquiat-catalogue` | BASQUIAT Catalogue | Publication |
| `kona-estate-provenance` | Kona Estate Provenance | Brand Strategy |
| `anansi-snowboard` | Black Trail Collective | Product |
| `flavien-sound` | Flavien Sound | Motion |
| `cymatic-studies` | Cymatic Studies | Motion |

## Known Issues

1. **cms.ts uses zero local assets** — all `mediaSrc` values point to Unsplash/Cloudinary placeholders. 308 real assets in `public/projects/` are unused.
2. **Unsorted Figma Frame exports** — raw `Frame 2147242XXX.png` files in basquiat, roam, anansi, drexel, cymatic folders need renaming.
3. **Card thumbnails use Figma asset imports** — hash-named PNGs from `src/assets/`, not `public/`.
4. **data/portfolio-data.json is legacy** — from the Next.js era, not used by the live site.
