# Base

A reusable foundation for static-first websites.

## What it includes

- Next.js App Router with TypeScript
- Static export for GitHub Pages
- Theme system (light, dark, sepia)
- Accessibility preferences (text size, spacing, contrast, font, motion)
- Reading mode for detail pages
- Skip-to-content link and focus indicators
- Responsive layout with configurable navigation
- SEO, sitemap, and robots.txt
- Client-side search foundation
- GitHub Pages deployment workflow

## Getting started

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## Configuration

All site identity lives in `lib/site.ts`. Edit this file to change the site name, description, accent color, navigation, and footer.

## Deployment

Push to `main`. The GitHub Actions workflow builds the site and deploys to GitHub Pages automatically.

## License

MIT
