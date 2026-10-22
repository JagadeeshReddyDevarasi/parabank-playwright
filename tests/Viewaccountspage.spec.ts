
import { test, expect } from '@playwright/test';

test('TC003 - Verify account details after login', async ({ page }) => {

  // Step 1: Open ParaBank
  await page.goto(
    'https://parabank.parasoft.com/parabank/index.htm'
  );

  // Step 2: Login with valid credentials
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();

  // Step 3: Verify successful login
  await expect(
    page.getByRole('heading', { name: 'Accounts Overview' })
  ).toBeVisible();

  // Step 4: Click account number 13344
  const accountLink = page.locator(
    "//table[@id='accountTable']//a[normalize-space()='13344']"
  );

  await expect(accountLink).toBeVisible();
  await accountLink.click();

  // Step 5: Verify Account Details page
  await expect(
    page.getByRole('heading', { name: 'Account Details' })
  ).toBeVisible();

  // Step 6: Verify account number
  await expect(
    page.locator('#accountId')
  ).toHaveText('13344');

  // Step 7: Verify account type and balance are displayed
  await expect(page.locator('#accountType')).toBeVisible();
  await expect(page.locator('#balance')).toBeVisible();

  console.log('Account details verified successfully!');
});
