import { test as setup, expect, chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from "./page-objects/login.page";
import { Product } from './page-objects/product.page';



async function globalSetup(){
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://www.saucedemo.com/')
    const loginPage = new LoginPage(page);
    await loginPage.signIn(page, 'standard_user', 'secret_sauce')
    const productPage = new Product(page);
    await expect(productPage.swagBackPack).toBeVisible();


    await page.context().storageState({ path: './LoginAuth.json' });
    await browser.close();
};

export default globalSetup;