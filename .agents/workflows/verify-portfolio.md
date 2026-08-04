# Portfolio Verification Workflow

Run this workflow to verify the portfolio project is production-ready.

## Steps

### 1. Install Dependencies
```bash
npm ci
```

### 2. Format Check
```bash
npm run format:check
```
If formatting issues found, run `npm run format` to fix.

### 3. Type Check
```bash
npm run check
```
Must pass with zero errors.

### 4. Lint
```bash
npm run lint
```
Must pass with zero errors.

### 5. Production Build
```bash
npm run build
```
Must complete without errors. Check `dist/` output.

### 6. Playwright Smoke Tests
```bash
npx playwright install --with-deps chromium
npm run test:e2e
```
All smoke tests must pass.

### 7. Browser Visual Inspection

Start preview server:
```bash
npm run preview
```

Check these routes at **390px mobile** and **1440px desktop** viewports:
- [ ] `/` — Homepage loads, hero visible, featured projects show
- [ ] `/about` — All sections render, experience timeline visible
- [ ] `/projects` — Project grid shows 3 projects
- [ ] `/projects/ackermann-adaptive-cruise-control` — Case study renders fully
- [ ] `/projects/wearable-drone-control-interface` — Case study renders fully
- [ ] `/projects/dvr-reader-board-stm32` — Case study renders fully
- [ ] `/notes` — Notes listing shows 3 notes
- [ ] `/notes/[any-slug]` — Note detail renders
- [ ] `/contact` — Contact info and links present
- [ ] `/nonexistent` — 404 page with recovery navigation

### 8. Interactive Testing
- [ ] Navigation links work on all pages
- [ ] Mobile menu opens/closes, Escape key works
- [ ] Theme toggle switches themes, persists on reload
- [ ] Project links navigate to case studies
- [ ] Contact email/LinkedIn/GitHub links have correct targets
- [ ] CV download link works (placeholder)
- [ ] Video component shows poster fallback (no autoplay)
- [ ] No horizontal overflow at any viewport
- [ ] No browser console errors

### 9. Accessibility Quick Check
- [ ] Tab through all pages — focus visible on interactive elements
- [ ] Skip link visible on Tab from top of page
- [ ] All images have alt text
- [ ] Mobile menu manages focus correctly
- [ ] Theme toggle has descriptive aria-label

### 10. Fix and Repeat
If any check fails:
1. Fix the issue
2. Re-run the failing check
3. Re-verify affected routes

## Full Verification Command
```bash
npm run verify
```
This runs: type check → lint → build → Playwright tests
