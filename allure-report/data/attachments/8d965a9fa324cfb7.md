# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-001.spec.ts >> Login Android App
- Location: tests\android\TC-001.spec.ts:11:5

# Error details

```
invalid session id: WebDriverError: A session is either terminated or not started when running "appium/device/terminate_app" with method "POST"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { createDriver } from '../../utils/driver';
  4  | 
  5  | import LoginPage from '../../pages/LoginPage';
  6  | 
  7  | import HomePage from '../../pages/HomePage';
  8  | 
  9  | import ProductMenu from 'pages/productMenu/ProductMenu';
  10 | 
  11 | test('Login Android App', async () => {
  12 | 
  13 |   const driver = await createDriver();
  14 | 
  15 |   const loginPage = new LoginPage(driver);
  16 | 
  17 |   const homePage = new HomePage(driver);
  18 | 
  19 |   const productMenu = new ProductMenu(driver);
  20 | 
  21 |   console.log('Start Test')
  22 |   await productMenu.verifyProductMenu();
  23 |   await productMenu.clickLogin();
  24 | 
  25 |   // await loginPage.login(
  26 |   //   'admin',
  27 |   //   'admin123'
  28 |   // );
  29 | 
  30 |   // expect(
  31 |   //   await homePage.verifyHomePage()
  32 |   // ).toBeTruthy();
  33 | 
  34 |   await driver.deleteSession();
> 35 |   await driver.terminateApp();
     |   ^ invalid session id: WebDriverError: A session is either terminated or not started when running "appium/device/terminate_app" with method "POST"
  36 |   
  37 | });
```