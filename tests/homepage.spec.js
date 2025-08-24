const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load homepage with correct title and content', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Mentoría ZK.*Hub ZK/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Mentoría ZK · @crypto_dev_1' })).toBeVisible();
    
    // Check subtitle
    await expect(page.getByText('Atajos reales para llegar a demo: Noir, Solidity, backend y privacy.')).toBeVisible();
    
    // Check main action buttons
    await expect(page.getByRole('link', { name: '🚀 AI Playbook' })).toBeVisible();
    await expect(page.getByRole('link', { name: '📚 Documentación' })).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check navbar links
    await expect(page.getByRole('link', { name: 'AI Playbook' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'UML Layers' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Connect' })).toBeVisible();
  });

  test('should display feature cards correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check feature cards
    await expect(page.getByText('🤖 AI Playbook')).toBeVisible();
    await expect(page.getByText('📚 Documentación')).toBeVisible();
    await expect(page.getByText('💬 Office Hours')).toBeVisible();
    
    // Check feature descriptions
    await expect(page.getByText('Prompts específicos y reglas para acelerar desarrollo con IA')).toBeVisible();
    await expect(page.getByText('Cheatsheets, checklists y patrones esenciales')).toBeVisible();
    await expect(page.getByText('Sesiones 1:1 para desbloquear problemas específicos')).toBeVisible();
  });

  test('should show UML Layers section and tip box', async ({ page }) => {
    await page.goto('/');
    
    // Check UML section
    await expect(page.getByRole('heading', { name: 'Arquitectura y flujo' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'UML Layers' })).toBeVisible();
    
    // Check tip box
    await expect(page.getByText('💡 Todo es gratis y sin registro')).toBeVisible();
    await expect(page.getByText('Si te sirve, compartilo con tu equipo.')).toBeVisible();
  });
});