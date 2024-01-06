import { test, expect } from '@playwright/test';
//Exercise Playwright 1
test('has title', async ({ page }) => {
  await page.goto('https://www.guru99.com/xpath-selenium.html');

  await expect(page).toHaveTitle(/XPath in Selenium/);
});
////Exercise Playwright 2
test('get started link', async ({ page }) => {

  await page.goto('https://www.guru99.com/');

  await page.getByRole('link', { name: 'Selenium' }).first().click();

  await expect(page.getByRole('heading', { name: 'Selenium Tutorial Syllabus' })).toBeVisible();
});
