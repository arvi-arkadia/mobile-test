import { test, expect } from '@playwright/test';

import { createDriver } from '../../utils/driver';

import LoginPage from '../../pages/pageLogin/LoginPage';

import ProductMenu from 'pages/pageProduct/ProductMenu';
import { assert } from 'console';
import { equal } from 'assert';

test('Home Screen After Login', async () => {

  const driver = await createDriver();

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
  const items = await productMenu.getAllProductItems();
  console.log(items);
  if (items instanceof Object) {
    if (Array.isArray(items) && items.length > 0) {
      expect(true).toEqual(true);
    }
  }
  expect(Array.isArray(items)).toBeTruthy();
  expect(items.length).toBeGreaterThan(0);
  await driver.terminateApp('com.saucelabs.mydemoapp.android');
});