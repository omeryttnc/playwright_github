

// global-setup.js
const { chromium,test } = require('@playwright/test');






test('admin test', async ({ chromium }) => {
  // page is signed in as amin.
  const browser = await chromium.launch();
  const adminPage = await browser.newPage();
  // ... log in
  await adminPage.context().storageState({ path: 'therapist_premium.json' });

  adminPage.waitForTimeout(300000);

});