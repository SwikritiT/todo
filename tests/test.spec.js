const { test, expect } = require('@playwright/test') ;

test('test', async ({ page }) => {
  
  // Go to https://www.jankaritech.com/
  await page.goto('https://www.jankaritech.com/');

  // Click text=Home
  await page.click('text=Home');
  await expect(page).toHaveURL('https://www.jankaritech.com/');

  // Click text=motivation
  await page.click('text=motivation');

  // Click text=Team
  await page.click('text=Team');

  // Click text=Contact
  await page.click('text=Contact');

  // Click text=Career
  await page.click('text=Career');

  // Click text=blog
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=blog')
  ]);

});
