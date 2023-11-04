import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('xpath=//input[@id="user-name"]');
    this.passwordField = page.locator('xpath=//input[@id="password"]');
    this.submitButton = page.locator('xpath=//input[@id="login-button"]');
  }
  async signIn(page, username, password) {
    const loginPage = new LoginPage(page);
    await loginPage.usernameField.fill(username);
    await loginPage.passwordField.fill(password);
    await loginPage.submitButton.click();
  }
}
