import { expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class GooglePage extends BasePage {
  private readonly searchInput = 'input[name="q"]';
  private readonly acceptCookiesButton = 'button:has-text("I agree"), button:has-text("Accept all"), button:has-text("Accept")';

  async goto() {
    await this.page.goto('https://www.google.com/?hl=en');
  }

  async acceptCookiesIfVisible() {
    const button = this.page.locator(this.acceptCookiesButton);
    if (await button.count()) {
      await button.first().click();
    }
  }

  async verifySearchFieldVisible() {
    await this.waitForVisible(this.searchInput);
    await expect(this.page.locator(this.searchInput)).toBeVisible();
  }
}
