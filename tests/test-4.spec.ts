import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demoqa.com/text-box
  await page.goto('https://demoqa.com/text-box');

});