import { Page } from 'playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
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
}
