const { test, expect } = require('@playwright/test');



// @ts-check


test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://playwright.dev/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/");
  });
});


test('login testi', async ({ page }) => {
    await page.goto('https://demoqa.com/elements');

    await expect(page).toHaveTitle('ToolsQlA');
    await expect(page).toHaveURL('https://demoqa.com/elements');

    const sideBar_textbox = page.locator("(//li[@id='item-0'])[1]");

    await expect(sideBar_textbox).toContainText('Text')
    //  await expect(sideBar_textbox).toHaveAttribute()
    await sideBar_textbox.click();

    await expect(page).toHaveURL(/.*text-box/);

});