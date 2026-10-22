
import { test, expect } from '@playwright/test';

test('TC001 - Verify ParaBank homepage', async ({ page }) => {
  // Step 1: Open ParaBank
  await page.goto(
    'https://parabank.parasoft.com/parabank/index.htm'
  );

  // Step 2: Verify the page title
  await expect(page).toHaveTitle(/ParaBank/);

  // Step 3: Verify the Register link is visible
  await expect(
    page.getByRole('link', { name: 'Register' })
  ).toBeVisible();
});
