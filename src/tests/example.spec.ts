import { test, expect } from '../base/BaseTest';
import { HomePage } from '../pages/HomePage';

test('homepage loads successfully', async ({ basePage }) => {
  const homePage = new HomePage(basePage.page);
  await homePage.goto('/');
  await homePage.verifyHeading('Example');
  await expect(basePage.page).toHaveTitle(/Example/);
});
