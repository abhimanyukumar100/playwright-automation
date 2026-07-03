import { expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class HomePage extends BasePage {
  private readonly heading = 'h1';
  private readonly link = 'a';

  async verifyHeading(text: string) {
    await this.waitForVisible(this.heading);
    await expect(this.page.locator(this.heading)).toContainText(text);
  }

  async clickFirstLink() {
    await this.click(this.link);
  }
}
