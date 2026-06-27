# Carter Benoît-Myer Portfolio

Portfolio site for Carter Benoît-Myer, Systems Designer & Brand Architect.

**Live:** [carterbenoitmyer.com](https://carterbenoitmyer.com)

## Tech Stack

- **Vite + React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **shadcn/ui + Radix UI**
- **Deployed on Figma Sites**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
carter-portfolio-2025/
├── src/
│   ├── App.tsx                   # Root + routes
│   ├── main.tsx                  # Entry point
│   ├── assets/                   # Figma-exported PNGs
│   ├── components/               # Page and UI components
│   └── data/cms.ts               # Project CMS (10 projects)
├── public/
│   └── projects/                 # Per-project assets
├── data/
│   └── briefs/                   # Project briefs (markdown)
├── docs/                         # Architecture docs
└── index.html
```

## Routes

| Route | Page |
|-------|------|
| `/` | Landing |
| `/about` | About |
| `/studio` | Studio |
| `/studio/process` | Process |
| `/studio/:slug` | Project Detail |
| `/studio-shop` | Studio Shop |
| `/contact` | Contact |

## Content Management

All project content is managed in `src/data/cms.ts`.

## License

© 2025 Carter Benoît-Myer. All rights reserved.
