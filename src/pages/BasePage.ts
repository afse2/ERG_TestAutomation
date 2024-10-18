import { Page } from 'playwright';
import { expect } from 'playwright/test';

export class BasePage {
  protected page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector);
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  async waitForSelector(selector: string, timeout: number = 30000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path });
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async selectOption(selector: string, value: string) {
    await this.page.selectOption(selector, value);
  }

  async getAttribute(selector: string, attribute: string): Promise<string | null> {
    return await this.page.getAttribute(selector, attribute);
  }

  async waitForNavigation() {
    await this.page.waitForNavigation();
  }

  async waitForTimeout(timeout: number) {
    await this.page.waitForTimeout(timeout);
  }

  async goBack() {
    await this.page.goBack();
  }

  async checkButtonWithName(buttonName: string) {
    return await this.page.getByRole("button", { name: buttonName }).isVisible();
  }

  async clickWithCordinate(x: number, y: number) {
    await this.page.mouse.click(x, y);
  }

  async clickWithButtonName(navbarItems, buttonName: string) {
    const optionsCount = await navbarItems.count();
    for (let i = 0; i < optionsCount; i++) {

      if (await navbarItems.nth(i).textContent() == buttonName) {
        return await navbarItems.nth(i).click();
      }
    }
  }

  arrayToString(arr: Array<any>) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] + " ";
    }
    return result;
  }
}

module.exports = { BasePage };
