import { test, expect } from '@playwright/test';

import { createDriver } from '../../utils/driver';

import LoginPage from '../../pages/pageLogin/LoginPage';

import ProductMenu from 'pages/pageProduct/ProductMenu';
import BasePage from 'pages/BasePage';

test('Home Screen After Login', async () => {

  const driver = await createDriver();
  
  const basePage = new BasePage(driver);

  const loginPage = new LoginPage(driver);

  const productMenu = new ProductMenu(driver);

  console.log('Start Test')
  await productMenu.verifyProductMenu();
  await productMenu.clickDrawerMenu();
  await productMenu.verifyDrawerMenuBeforeLogin();
  await productMenu.clickLogin();
  await loginPage.login('visual@example.com','10203040');
  await productMenu.clickDrawerMenu();
  await productMenu.verifyDrawerMenuAfterLogin();
  await productMenu.clickCatalog();
 
  // await driver.terminateApp('com.saucelabs.mydemoapp.android');
  await basePage.closeApp()
});