const { test, expect } = require('@playwright/test');

test('inspect SauceDemo login elements', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');
  const password = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });
  const loginLogo = page.locator('div.login_logo');
  const loginCredentials = page.locator('div.login_credentials');

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginButton).toBeVisible();
  await expect(loginLogo).toBeVisible();
  await expect(loginCredentials).toBeVisible();

  console.log('Username matches:', await username.count());
  console.log('Password matches:', await password.count());
  console.log('Login button matches:', await loginButton.count());
  console.log('Login logo matches:', await loginLogo.count());
  console.log('Login credentials matches:', await loginCredentials.count());
});