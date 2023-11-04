import { LoginPage } from "../../page-objects/login.page";
import { Product } from "../../page-objects/product.page";
import { test, expect } from "@playwright/test";

test("userLogin", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const loginPage = new LoginPage(page);
  await loginPage.signIn(page, "standard_user", "secret_sauce");

  const productPage = new Product(page);
  await productPage.addBackPacktoCart(page);
  await productPage.validateItemAddedtoCart(page);
});
