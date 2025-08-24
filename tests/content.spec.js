const { test, expect } = require('@playwright/test');

test.describe('Content Pages', () => {
  test.describe('AI Playbook', () => {
    test('should display AI Playbook content correctly', async ({ page }) => {
      await page.goto('/ai-playbook-noir-solidity');
      
      // Check main sections
      await expect(page.getByRole('heading', { name: 'AI Playbook - Noir/Solidity' })).toBeVisible();
      await expect(page.getByText('¿Por qué necesitas este playbook?')).toBeVisible();
      await expect(page.getByText('96% de los bugs documentados en sistemas SNARK')).toBeVisible();
      
      // Check the 6 rules section
      await expect(page.getByText('Las 6 reglas de oro para ZK development')).toBeVisible();
      await expect(page.getByText('1. Contexto primero - Siempre')).toBeVisible();
      await expect(page.getByText('2. Código ejecutable completo')).toBeVisible();
      
      // Check professional template section
      await expect(page.getByText('Plantilla de prompt profesional')).toBeVisible();
      
      // Check debugging patterns
      await expect(page.getByText('Patrones avanzados de debugging')).toBeVisible();
    });
  });

  test.describe('UML Layers', () => {
    test('should display UML Layers content and Mermaid diagram', async ({ page }) => {
      await page.goto('/uml-layers');
      
      // Check main content
      await expect(page.getByRole('heading', { name: 'UML Layers - Arquitectura ZK' })).toBeVisible();
      await expect(page.getByText('¿Qué es y para qué sirve?')).toBeVisible();
      
      // Check layer descriptions
      await expect(page.getByText('UI Layer')).toBeVisible();
      await expect(page.getByText('Gateway Layer (Verifier)')).toBeVisible();
      await expect(page.getByText('Services Layer')).toBeVisible();
      await expect(page.getByText('Providers Layer')).toBeVisible();
      await expect(page.getByText('Contracts Layer')).toBeVisible();
      
      // Check if Mermaid diagram is rendered
      await expect(page.locator('.mermaid')).toBeVisible();
      
      // Check patterns section
      await expect(page.getByText('Patrones comunes')).toBeVisible();
      await expect(page.getByText('Batch Verification')).toBeVisible();
      await expect(page.getByText('Proof Delegation')).toBeVisible();
      
      // Check security considerations
      await expect(page.getByText('Consideraciones de seguridad')).toBeVisible();
    });
  });

  test.describe('Connect Page', () => {
    test('should display Connect page content', async ({ page }) => {
      await page.goto('/connect');
      
      // Check main sections
      await expect(page.getByRole('heading', { name: 'Connect - Office Hours' })).toBeVisible();
      await expect(page.getByText('Office Hours 1:1')).toBeVisible();
      await expect(page.getByText('Reserva 30min gratis para desbloquear problemas específicos')).toBeVisible();
      
      // Check what to expect section
      await expect(page.getByText('Qué esperar')).toBeVisible();
      await expect(page.getByText('30min vía Google Meet')).toBeVisible();
      
      // Check topics section
      await expect(page.getByText('Temas típicos')).toBeVisible();
      await expect(page.getByText('Circuit design y optimization')).toBeVisible();
      
      // Check social links
      await expect(page.getByText('Redes sociales')).toBeVisible();
      await expect(page.getByText('X')).toBeVisible();
      
      // Check the tip box
      await expect(page.getByText('Expectativas claras')).toBeVisible();
      await expect(page.getByText('Traé un bloqueo; salís con 3 pasos claros.')).toBeVisible();
    });
  });

  test.describe('Documentation Pages', () => {
    test('should display Cheatsheet Solidity 2025', async ({ page }) => {
      await page.goto('/docs/cheatsheet-solidity-2025');
      
      await expect(page.getByRole('heading', { name: 'Cheatsheet Solidity 2025' })).toBeVisible();
      await expect(page.getByText('Patrones esenciales')).toBeVisible();
    });

    test('should display Checklist Pre-Demo', async ({ page }) => {
      await page.goto('/docs/checklist-pre-demo');
      
      await expect(page.getByRole('heading', { name: 'Checklist Pre-Demo' })).toBeVisible();
    });

    test('should display Gas 90/10', async ({ page }) => {
      await page.goto('/docs/gas-90-10');
      
      await expect(page.getByRole('heading', { name: 'Gas 90/10' })).toBeVisible();
    });

    test('should display ZK-Lite (5Q)', async ({ page }) => {
      await page.goto('/docs/zk-lite-5q');
      
      await expect(page.getByRole('heading', { name: 'ZK-Lite (5Q)' })).toBeVisible();
    });
  });
});