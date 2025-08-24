const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test('should navigate to AI Playbook page', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to AI Playbook
    await page.getByRole('link', { name: 'AI Playbook' }).first().click();
    
    // Check we're on the right page
    await expect(page).toHaveURL('/ai-playbook-noir-solidity');
    await expect(page.getByRole('heading', { name: 'AI Playbook - Noir/Solidity' })).toBeVisible();
    await expect(page.getByText('¿Por qué necesitas este playbook?')).toBeVisible();
  });

  test('should navigate to UML Layers page', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to UML Layers
    await page.getByRole('link', { name: 'UML Layers' }).click();
    
    // Check we're on the right page
    await expect(page).toHaveURL('/uml-layers');
    await expect(page.getByRole('heading', { name: 'UML Layers - Arquitectura ZK' })).toBeVisible();
    await expect(page.getByText('¿Qué es y para qué sirve?')).toBeVisible();
  });

  test('should navigate to Connect page', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Connect
    await page.getByRole('link', { name: 'Connect' }).click();
    
    // Check we're on the right page
    await expect(page).toHaveURL('/connect');
    await expect(page.getByRole('heading', { name: 'Connect - Office Hours' })).toBeVisible();
    await expect(page.getByText('Office Hours 1:1')).toBeVisible();
  });

  test('should navigate to documentation pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to documentation
    await page.getByRole('link', { name: 'Docs' }).click();
    await page.waitForURL('/docs/**');
    
    // Should redirect to first doc
    await expect(page).toHaveURL('/docs/cheatsheet-solidity-2025');
    await expect(page.getByRole('heading', { name: 'Cheatsheet Solidity 2025' })).toBeVisible();
  });

  test('should maintain correct URL patterns', async ({ page }) => {
    const urls = [
      { path: '/', title: /Mentoría ZK.*Hub ZK/ },
      { path: '/ai-playbook-noir-solidity', title: /AI Playbook - Noir\/Solidity/ },
      { path: '/uml-layers', title: /UML Layers - Arquitectura ZK/ },
      { path: '/connect', title: /Connect - Office Hours y Contacto/ },
      { path: '/docs/cheatsheet-solidity-2025', title: /Cheatsheet Solidity 2025/ }
    ];

    for (const url of urls) {
      await page.goto(url.path);
      await expect(page).toHaveTitle(url.title);
      await expect(page).toHaveURL(url.path);
    }
  });
});