import { test, expect } from '@playwright/test';

import { createDriver } from '../../utils/driver';

import LoginPage from '../../pages/pageLogin/LoginPage';

import ProductMenu from 'pages/pageProduct/ProductMenu';
import BasePage from 'pages/BasePage';
import DetailPage from 'pages/pageDetail/DetailPage';
import CartPage from 'pages/cartPage/CartPage';

test('Quota Details, Detail Product is validated', async () => {

  const driver = await createDriver();

  const basePage = new BasePage(driver);

  const loginPage = new LoginPage(driver);

  const productMenu = new ProductMenu(driver);
  const detailPage = new DetailPage(driver);
  const cartPage = new CartPage(driver);

  const data = {
    title : 'Sauce Labs Backpack',
    color : 'Gray color',
    qty : 3
  }
  console.log('Start Test')
  await productMenu.verifyProductMenu();
  const found =  await productMenu.scrollUntilProductFound(data.title);
  expect(found).toBe(true);

  await detailPage.verifyDetailScreen();
  const dataProduct = await detailPage.getDataDetailProduct();
  console.log(dataProduct);

  expect(dataProduct.title).toEqual(data.title);
  expect(dataProduct.price).not.toBe('');
  expect(dataProduct.qty).not.toBe('');
  
  // await driver.terminateApp('com.saucelabs.mydemoapp.android');
  await basePage.closeApp()
});