import { LoginPage } from "../../page-objects/login.page";
import { Product } from "../../page-objects/product.page";
import { test, expect } from "@playwright/test";

test("add all items to cart", async ({ page }) => {
   await page.goto("https://www.saucedemo.com/inventory.html");
  // const loginPage = new LoginPage(page);
  // await loginPage.signIn(page, "standard_user", "secret_sauce");

  const productPage = new Product(page);
  const products = await page.getByRole('button').filter({ hasText: 'Add to cart' }).all();

  for (let i = 0; i < products.length; i++) {
    await products[0].click();
  }

  await expect(productPage.shoppingCartButton).toHaveText((products.length).toString());

});
