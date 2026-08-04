# Portfolio Engineering Rules

## Critical Implementation Rules

These rules preserve the engineering decisions made during initial implementation.

### Technology Stack
- **Astro 7.x** with strict TypeScript
- **Tailwind CSS v4** via `@tailwindcss/vite` (CSS-first configuration, NO tailwind.config.js)
- **Content Layer API** with `glob` loader for content collections
- **Biome** for linting and formatting (NOT ESLint/Prettier)
- **Playwright** for browser smoke tests
- **System font stack** — no external font loading

### Architecture
- Content collections are defined in `src/content.config.ts` using `glob` loader
- Central site data lives in `src/data/site.ts` — all personal info editable from one file
- Projects are MDX files in `src/content/projects/`
- Notes are MD files in `src/content/notes/`
- Design tokens are in `src/styles/tokens.css` using `@theme` blocks and CSS custom properties
- Dark theme is applied via `[data-theme='dark']` CSS selector

### Content Rules
- All placeholder data uses `REPLACE_ME` or `[DUMMY — REPLACE]` markers
- Never present dummy data as verified facts
- Draft content is excluded from production builds
- `hasDummyData: true` in frontmatter triggers dev-mode notice badges
- No Lorem Ipsum anywhere

### Component Patterns
- Astro components with typed `Props` interfaces
- No React/Vue/Svelte unless absolutely necessary
- Minimal client-side JavaScript (only for theme toggle and mobile menu)
- Use `is:inline` for critical theme boot script
- Use `astro:after-swap` event for component reinitialization

### Styling Rules
- Use Tailwind utility classes with CSS custom properties: `text-[var(--color-text-primary)]`
- No inline styles except runtime-computed values
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`
- Mobile-first responsive design

### SEO
- Every page has unique title and meta description
- Canonical URLs on all pages
- Open Graph and Twitter card metadata
- JSON-LD Person schema on every page
- Sitemap and RSS feed generated automatically

### Accessibility
- Skip-to-content link
- Semantic HTML landmarks (header, nav, main, footer)
- Visible focus states using `--color-focus-ring`
- Mobile menu: Escape to close, focus management
- Theme toggle has dynamic aria-label
- All images require alt text
- External links have `rel="noopener noreferrer"`

### Media
- Local SVG placeholders for all project media
- Images use `width` and `height` attributes to prevent layout shift
- Lazy loading for below-fold images
- Video embeds loaded on user interaction (privacy-enhanced)
- No autoplay on any media

### Quality Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Astro type checking
npm run lint         # Biome lint
npm run format       # Biome format
npm run test:e2e     # Playwright tests
npm run verify       # Full verification pipeline
```

### Deployment
- Static output, deploy to Vercel
- Site URL configured in `astro.config.mjs`
- No server-side rendering needed
