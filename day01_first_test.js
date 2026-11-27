const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  console.log('Page title:', await page.title());
  console.log('Current URL:', page.url());

  const page2 = await browser.newPage();
  await page2.goto('https://www.google.com/');
  console.log('Page 2 title:', await page2.title());
  console.log('Page 2 URL:', page2.url());

  await browser.close();
})();