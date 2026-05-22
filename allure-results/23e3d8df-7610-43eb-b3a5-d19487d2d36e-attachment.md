# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-001.spec.ts >> Home Screen After Login
- Location: tests\android\TC-001.spec.ts:10:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { createDriver } from '../../utils/driver';
  4  | 
  5  | import LoginPage from '../../pages/pageLogin/LoginPage';
  6  | 
  7  | import ProductMenu from 'pages/pageProduct/ProductMenu';
  8  | import BasePage from 'pages/BasePage';
  9  | 
  10 | test('Home Screen After Login', async () => {
  11 | 
  12 |   const driver = await createDriver();
  13 |   
  14 |   const basePage = new BasePage(driver);
  15 | 
  16 |   const loginPage = new LoginPage(driver);
  17 | 
  18 |   const productMenu = new ProductMenu(driver);
  19 | 
  20 |   console.log('Start Test')
  21 |   await productMenu.verifyProductMenu();
  22 |   await productMenu.clickDrawerMenu();
  23 |   await productMenu.verifyDrawerMenuBeforeLogin();
  24 |   await productMenu.clickLogin();
  25 |   await loginPage.login('visual@example.com','10203040');
  26 |   await productMenu.clickDrawerMenu();
  27 |   await productMenu.verifyDrawerMenuAfterLogin();
  28 |   await productMenu.clickCatalog();
  29 |   const items = await productMenu.getAllProductItems();
  30 |   console.log(items);
  31 |   if (items instanceof Object) {
  32 |     if (Array.isArray(items) && items.length > 0) {
  33 |       expect(true).toEqual(true);
  34 |     }
  35 |   }
  36 |   expect(Array.isArray(items)).toBeTruthy();
> 37 |   expect(items.length).toBeGreaterThan(0);
     |                        ^ Error: expect(received).toBeGreaterThan(expected)
  38 |   // await driver.terminateApp('com.saucelabs.mydemoapp.android');
  39 |   await basePage.closeApp()
  40 | });
```