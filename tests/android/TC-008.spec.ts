import { test, expect } from '@playwright/test';
import BasePage from 'pages/BasePage';
import CartPage from 'pages/cartPage/CartPage';
import DetailPage from 'pages/pageDetail/DetailPage';
import LoginPage from 'pages/pageLogin/LoginPage';
import ProductMenu from 'pages/pageProduct/ProductMenu';
import { createDriver } from 'utils/driver';


test('Order Confirmation', async () => {

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

    await detailPage.selectProductColor(data.color);
    
    const resultDetail = await detailPage.addProductToCart(data.qty);
    expect(resultDetail).toBe(true);
    
    const dataProduct = await detailPage.getDataDetailProduct();
    console.log(dataProduct);

    await productMenu.clickCart();

    const resultCart = await cartPage.validateCartProduct({
      title: dataProduct.title,
      price: dataProduct.price,
      qty: parseInt(dataProduct.qty)
    });
    expect(resultCart).toBe(true);

    // await driver.terminateApp('com.saucelabs.mydemoapp.android');
    await basePage.closeApp()
  });