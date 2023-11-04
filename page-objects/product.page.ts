import { Locator, Page, expect } from "@playwright/test";

export class Product {
  page: Page;
  swagBackPack: Locator;
  addtoCartButton: Locator;
  removeFromCartButton: Locator;
  shoppingCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.swagBackPack = page.locator("#item_4_title_link");
    this.addtoCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.removeFromCartButton = page.locator("#remove-sauce-labs-backpack");
    this.shoppingCartButton = page.locator('.shopping_cart_badge');
  }
  async addBackPacktoCart(page) {
    const productPage = new Product(page);
    await productPage.swagBackPack.click();
    await productPage.addtoCartButton.click();
  }

  async validateItemAddedtoCart(page) {
    const productPage = new Product(page);
    await expect(productPage.removeFromCartButton).toBeVisible();
    await expect(productPage.shoppingCartButton).toHaveText('1');
  }
}
