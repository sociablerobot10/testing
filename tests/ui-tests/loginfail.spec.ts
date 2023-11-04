import { LoginPage } from "../../page-objects/login.page";
import {test, expect} from '@playwright/test';

test('userLogin', async ({page}) => {
 await page.goto('https://www.saucedemo.com/')
   const loginPage = new LoginPage(page);
   await loginPage.signIn(page,'fake_user', 'secret_sauce')

});