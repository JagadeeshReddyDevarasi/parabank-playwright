
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run only one test at a time
  workers: 1,

  // Do not run tests in parallel
  fullyParallel: false,

  // Run tests only once, without retries
  retries: 0,

  // Use one browser project only: Chrome/Chromium
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      },
    },
  ],

  reporter: 'html',
});
