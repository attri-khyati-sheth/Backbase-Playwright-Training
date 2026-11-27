const { test, expect } = require('@playwright/test');

test('inspect SauceDemo login elements', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');
  const password = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginButton).toBeVisible();

  console.log('Username matches:', await username.count());
  console.log('Password matches:', await password.count());
  console.log('Login button matches:', await loginButton.count());
});