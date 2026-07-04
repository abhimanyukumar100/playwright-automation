import { test, expect } from '../base/BaseTest';
import { HomePage } from '../pages/HomePage';
import { GooglePage } from '../pages/GooglePage';

test('homepage loads successfully', async ({ basePage }) => {
  const homePage = new HomePage(basePage.page);
  await homePage.goto('/');
  await homePage.verifyHeading('Example');
  await expect(basePage.page).toHaveTitle(/Example/);
});

test('google search field is visible', async ({ basePage }) => {
  const googlePage = new GooglePage(basePage.page);
  await googlePage.goto();
  await googlePage.acceptCookiesIfVisible();
  await googlePage.verifySearchFieldVisible();
});
