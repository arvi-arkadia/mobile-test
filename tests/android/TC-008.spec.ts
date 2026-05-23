import { test, expect } from '@playwright/test';
import BasePage from 'pages/BasePage';
import LoginPage from 'pages/pageLogin/LoginPage';
import ProductMenu from 'pages/pageProduct/ProductMenu';
import { createDriver } from 'utils/driver';


test('Order Confirmation', async () => {

    const driver = await createDriver();
    
    const basePage = new BasePage(driver);
  
    const loginPage = new LoginPage(driver);
  
    const productMenu = new ProductMenu(driver);
  
    console.log('Start Test')
    await productMenu.verifyProductMenu();
    const found =  await productMenu.scrollUntilProductFound('Sauce Labs Backpack');
    expect(found).toBe(true);

    // await driver.terminateApp('com.saucelabs.mydemoapp.android');
    // await basePage.closeApp()
  });