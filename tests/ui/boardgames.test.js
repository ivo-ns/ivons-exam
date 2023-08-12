const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://ivons-exam.onrender.com/collection');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  