import { test as base, expect as baseExpect } from '@playwright/test';
import { BasePage } from './BasePage';

export type BaseFixtures = {
  basePage: BasePage;
};

export const test = base.extend<BaseFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export const expect = baseExpect;
