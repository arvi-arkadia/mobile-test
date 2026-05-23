import { test, expect } from '@playwright/test';
import BasePage from 'pages/BasePage';
import LoginPage from 'pages/pageLogin/LoginPage';
import ProductMenu from 'pages/pageProduct/ProductMenu';
import { createDriver } from 'utils/driver';


test('Package Filter', async () => {

    const driver = await createDriver();
    
    const basePage = new BasePage(driver);
  
    const loginPage = new LoginPage(driver);
  
    const productMenu = new ProductMenu(driver);
  
    console.log('Start Test')
    await productMenu.verifyProductMenu();
    await productMenu.clickFilter('name-asc');
    await productMenu.validateSortAscending();
    await productMenu.clickFilter('name-desc');
    await productMenu.validateSortAscending();

    // await driver.terminateApp('com.saucelabs.mydemoapp.android');
    await basePage.closeApp()
  });