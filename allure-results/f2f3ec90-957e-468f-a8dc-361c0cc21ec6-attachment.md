# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-006.spec.ts >> Package Catalogue
- Location: tests\android\TC-006.spec.ts:8:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import BasePage from 'pages/BasePage';
  3  | import LoginPage from 'pages/pageLogin/LoginPage';
  4  | import ProductMenu from 'pages/pageProduct/ProductMenu';
  5  | import { createDriver } from 'utils/driver';
  6  | 
  7  | 
  8  | test('Package Catalogue', async () => {
  9  | 
  10 |     const driver = await createDriver();
  11 |     
  12 |     const basePage = new BasePage(driver);
  13 |   
  14 |     const loginPage = new LoginPage(driver);
  15 |   
  16 |     const productMenu = new ProductMenu(driver);
  17 |   
  18 |     console.log('Start Test')
  19 |     await productMenu.verifyProductMenu();
  20 | 
  21 |     const items = await productMenu.getAllProductItems();
  22 |     console.log(items);
  23 |     if (items instanceof Object) {
  24 |       if (Array.isArray(items) && items.length > 0) {
  25 |         expect(true).toEqual(true);
  26 |         items.forEach((item) => {
  27 |             expect(item['image']).not.toBe('');
> 28 |             expect(item['image']).toBeTruthy();
     |                                   ^ Error: expect(received).toBeTruthy()
  29 |           
  30 |             expect(item['title']).not.toBe('');
  31 |             expect(item['title']).toBeTruthy();
  32 |           
  33 |             expect(item['price']).not.toBe('');
  34 |             expect(item['price']).toBeTruthy();
  35 |           
  36 |             expect(item['rating']).toBeTruthy();
  37 |           });
  38 |       }
  39 |     }
  40 |     expect(Array.isArray(items)).toBeTruthy();
  41 |     expect(items.length).toBeGreaterThan(0);
  42 | 
  43 |     // const found =  await productMenu.scrollUntilProductFound('Sauce Labs Backpack');
  44 |     // expect(found).toBe(true);
  45 | 
  46 |     // await driver.terminateApp('com.saucelabs.mydemoapp.android');
  47 |     await basePage.closeApp()
  48 |   });
```