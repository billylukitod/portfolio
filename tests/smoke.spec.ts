import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
  test('homepage loads with primary heading', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(page).toHaveTitle(/Robotics/i);
  });

  test('main navigation opens correct routes', async ({ page }) => {
    await page.goto('/');

    // Test About link
    await page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test Projects link
    await page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test Notes link
    await page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: 'Notes' }).click();
    await expect(page).toHaveURL(/\/notes/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test Contact link
    await page.getByRole('navigation', { name: /main/i }).getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('mobile menu opens, closes, and navigates', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuButton = page.locator('#mobile-menu-button');
    const menu = page.locator('#mobile-menu');

    // Menu should be hidden initially
    await expect(menu).toBeHidden();

    // Open menu
    await menuButton.click();
    await expect(menu).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Close with Escape
    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open and navigate
    await menuButton.click();
    await expect(menu).toBeVisible();
    await menu.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('projects page shows featured projects', async ({ page }) => {
    await page.goto('/projects');
    const projectCards = page.locator('article');
    await expect(projectCards).toHaveCount(3);
  });

  test('project detail pages render title and content', async ({ page }) => {
    const projectSlugs = [
      'ackermann-adaptive-cruise-control',
      'wearable-drone-control-interface',
      'dvr-reader-board-stm32',
    ];

    for (const slug of projectSlugs) {
      await page.goto(`/projects/${slug}`);
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();
      // Check that main content sections exist
      const h2s = page.locator('h2');
      expect(await h2s.count()).toBeGreaterThan(2);
    }
  });

  test('notes page loads', async ({ page }) => {
    await page.goto('/notes');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    // Should have at least 2 notes
    const noteCards = page.locator('article');
    expect(await noteCards.count()).toBeGreaterThanOrEqual(2);
  });

  test('contact page has correct links', async ({ page }) => {
    await page.goto('/contact');

    // Check email link
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink.first()).toBeVisible();

    // Check LinkedIn link
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    await expect(linkedinLink.first()).toBeVisible();

    // Check GitHub link
    const githubLink = page.locator('a[href*="github.com"]');
    await expect(githubLink.first()).toBeVisible();
  });

  test('theme toggle changes theme and persists', async ({ page }) => {
    await page.goto('/');

    const toggle = page.locator('#theme-toggle').first();
    await expect(toggle).toBeVisible();

    // Get initial theme
    const initialTheme = await page.locator('html').getAttribute('data-theme');

    // Toggle theme
    await toggle.click();
    const newTheme = await page.locator('html').getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);

    // Reload and check persistence
    await page.reload();
    const persistedTheme = await page.locator('html').getAttribute('data-theme');
    expect(persistedTheme).toBe(newTheme);
  });

  test('404 page renders with navigation recovery', async ({ page }) => {
    await page.goto('/nonexistent-page-that-does-not-exist');

    // Should show 404 content
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();

    // Should have navigation to recover
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink.first()).toBeVisible();
  });

  test('no console errors on main routes', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    const routes = ['/', '/about', '/projects', '/notes', '/contact'];
    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
    }

    // Filter out known non-critical errors (e.g., favicon 404 in dev)
    const criticalErrors = errors.filter(
      (err) => !err.includes('favicon') && !err.includes('404') && !err.includes('ERR_CONNECTION_REFUSED'),
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
