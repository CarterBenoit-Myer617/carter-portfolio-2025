# Carter Benoît-Myer Portfolio

A Next.js 14 portfolio site for Carter Benoît-Myer, Systems Designer & Brand Architect.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Data-driven architecture** (JSON-based content)

## Features

- ✅ Homepage with hero and selected works
- ✅ /studio - Full portfolio with category filters
- ✅ /about - Bio, methodology, Three Lenses framework
- ✅ /studio/process - 4-step design process
- ✅ /contact - Contact information
- ✅ /projects/[slug] - Dynamic project pages
- ✅ Three Lenses badge component (Systems/Culture/Clarity scores)
- ✅ Fully responsive design
- ✅ Type-safe with TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
carter-portfolio-2025/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with navigation
│   ├── studio/
│   │   ├── page.tsx                # Studio/work page with filters
│   │   └── process/
│   │       └── page.tsx            # Process page
│   ├── about/
│   │   └── page.tsx                # About page
│   ├── contact/
│   │   └── page.tsx                # Contact page
│   └── projects/
│       └── [slug]/
│           └── page.tsx            # Dynamic project pages
├── components/
│   ├── Navigation.tsx              # Global navigation
│   ├── ProjectCard.tsx             # Project display component
│   └── ThreeLensesBadge.tsx        # Three Lenses score indicator
├── data/
│   └── portfolio-data.json         # All site content
├── lib/
│   ├── types.ts                    # TypeScript interfaces
│   └── utils.ts                    # Helper functions
└── public/
    └── images/                     # Add your project images here
```

## Content Management

All content is managed through `/data/portfolio-data.json`. To update:

1. **Site Information** - Edit `siteInfo` object
2. **Projects** - Edit `projects` array
3. **Selected Work** - Edit `selectedWork` array (homepage features)
4. **About/Process/Contact** - Edit respective page objects

## Adding Images

1. Place images in `/public/images/`
2. Reference them in your components as `/images/filename.jpg`
3. Update project data with image URLs

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy

### Environment Variables (if needed)

Create `.env.local` for any environment variables:

```
NEXT_PUBLIC_SITE_URL=https://carterbenoitmyer.com
```

## TODO: Before Launch

- [ ] Add actual project images to `/public/images/`
- [ ] Update email in `contactPage` (portfolio-data.json)
- [ ] Add social media URLs (LinkedIn, Instagram)
- [ ] Replace placeholder image references in ProjectCard
- [ ] Set up custom domain in Vercel
- [ ] Add meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test all routes and links
- [ ] Optimize images (use next/image)

## Design System

Colors:
- Background: #FFFFFF
- Primary Text: #111111
- Muted Text: #555555
- Accent: #000000
- Card/Pill Background: #F2F2F2

Typography:
- Font: Inter (Google Fonts)
- Hierarchy: Uses Tailwind's responsive text classes

## License

© 2025 Carter Benoît-Myer. All rights reserved.
