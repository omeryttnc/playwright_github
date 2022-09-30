import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demoqa.com/text-box
  await page.goto('https://demoqa.com/text-box');

  // Click [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').click();

  // Fill [placeholder="Full Name"]
  await page.locator('[placeholder="Full Name"]').fill('merhaba');

  // Click [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').click();

  // Fill [placeholder="name\@example\.com"]
  await page.locator('[placeholder="name\\@example\\.com"]').fill('email@gmail.com');

  // Press Tab
  await page.locator('[placeholder="name\\@example\\.com"]').press('Tab');

  // Fill #currentAddress
  await page.locator('#currentAddress').fill('adress');

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Click text=Name:merhaba
  await page.locator('text=Name:merhaba').click();

  // Click text=Email:email@gmail.com
  await page.locator('text=Email:email@gmail.com').click();

  // Click text=Current Address :adress
  await page.locator('text=Current Address :adress').click();

});