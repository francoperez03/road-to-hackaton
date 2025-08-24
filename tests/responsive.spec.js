const { test, expect } = require('@playwright/test');

test.describe('Responsive Design', () => {
  test('should display correctly on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
    await page.goto('/');
    
    // Check mobile navbar
    await expect(page.locator('.navbar')).toBeVisible();
    
    // Check hero section is responsive
    await expect(page.getByRole('heading', { name: 'Mentoría ZK · @crypto_dev_1' })).toBeVisible();
    
    // Check buttons stack on mobile
    const buttons = page.locator('.buttons');
    await expect(buttons).toBeVisible();
    
    // Check feature cards are readable
    await expect(page.getByText('🤖 AI Playbook')).toBeVisible();
    await expect(page.getByText('📚 Documentación')).toBeVisible();
    await expect(page.getByText('💬 Office Hours')).toBeVisible();
  });

  test('should display correctly on tablet devices', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad size
    await page.goto('/');
    
    // Check layout adapts to tablet
    await expect(page.getByRole('heading', { name: 'Mentoría ZK · @crypto_dev_1' })).toBeVisible();
    await expect(page.getByText('Atajos reales para llegar a demo')).toBeVisible();
    
    // Check navigation is accessible
    await expect(page.getByRole('link', { name: 'AI Playbook' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  });

  test('should have accessible navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Test mobile navigation
    const navbarToggle = page.locator('.navbar__toggle');
    if (await navbarToggle.isVisible()) {
      await navbarToggle.click();
      await expect(page.getByRole('link', { name: 'AI Playbook' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    }
  });

  test('should maintain functionality across different screen sizes', async ({ page }) => {
    const sizes = [
      { width: 320, height: 568 }, // Small mobile
      { width: 768, height: 1024 }, // Tablet
      { width: 1024, height: 768 }, // Tablet landscape
      { width: 1440, height: 900 }, // Desktop
    ];

    for (const size of sizes) {
      await page.setViewportSize(size);
      await page.goto('/');
      
      // Check basic functionality works
      await expect(page.getByRole('heading', { name: 'Mentoría ZK · @crypto_dev_1' })).toBeVisible();
      
      // Test navigation
      await page.getByRole('link', { name: 'AI Playbook' }).first().click();
      await expect(page).toHaveURL('/ai-playbook-noir-solidity');
      
      // Go back to test other pages
      await page.goto('/');
    }
  });
});