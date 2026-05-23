import { test, expect } from '@playwright/test';
import BasePage from 'pages/BasePage';
import LoginPage from 'pages/pageLogin/LoginPage';
import ProductMenu from 'pages/pageProduct/ProductMenu';
import { createDriver } from 'utils/driver';


test('Logout', async () => {

    const driver = await createDriver();
    
    const basePage = new BasePage(driver);
  
    const loginPage = new LoginPage(driver);
  
    const productMenu = new ProductMenu(driver);
  
    console.log('Start Test')
    await productMenu.clickDrawerMenu();
    await productMenu.clickLogin();
    await loginPage.login('visual@example.com','10203040');
    await productMenu.clickLogout();
    await loginPage.verifyModalLogout();
    await loginPage.clickLogout();
    await loginPage.verifyLoginPage();

    // const items = await productMenu.getAllProductItems();
    // console.log(items);
    // if (items instanceof Object) {
    //   if (Array.isArray(items) && items.length > 0) {
    //     expect(true).toEqual(true);
    //   }
    // }
    // expect(Array.isArray(items)).toBeTruthy();
    // expect(items.length).toBeGreaterThan(0);

    // await driver.terminateApp('com.saucelabs.mydemoapp.android');
    await basePage.closeApp()
  });