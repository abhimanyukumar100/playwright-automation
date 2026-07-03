import { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(public readonly page: Page) {}

  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  async click(locator: string | Locator, options?: { timeout?: number }) {
    const target = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await target.click(options);
  }

  async type(locator: string | Locator, text: string) {
    const target = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await target.fill(text);
  }

  async waitForVisible(locator: string | Locator, timeout = 10000) {
    const target = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await target.waitFor({ state: 'visible', timeout });
  }

  async getTitle() {
    return this.page.title();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `artifacts/${name}.png`, fullPage: true });
  }
}
