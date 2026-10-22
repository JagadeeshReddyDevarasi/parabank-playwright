
import { test, expect } from '@playwright/test';

test('TC002 - Verify for valid login', async ({ page }) => {
  await page.goto(
    'https://parabank.parasoft.com/parabank/index.htm'
  );

  await page.locator('input[name="username"]')
    .fill('john');

  await page.locator('input[name="password"]')
    .fill('demo');

  await page.getByRole('button', { name: 'Log In' }).click();

  await expect(
    page.getByText(
      'The username and password could not be found.'
    )
  )
});
