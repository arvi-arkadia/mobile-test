# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-007.spec.ts >> Package Filter
- Location: tests\android\TC-007.spec.ts:8:5

# Error details

```
Error: element ("id:com.saucelabs.mydemoapp.android:id/menuNameAscIV") still not displayed after 10000ms
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export default class BasePage {
  4  | 
  5  |     driver: any;
  6  |   
  7  |     constructor(driver: any) {
  8  |       this.driver = driver;
  9  |     }
  10 |     
  11 |     async getDataTxt(locator: string): Promise<string> {
  12 | 
  13 |       const element = await this.driver.$(locator);
  14 |     
  15 |       return await element.getText();
  16 |     }
  17 | 
  18 |     async click(locator: string) {
  19 |   
  20 |       const element = await this.driver.$(locator);
  21 |   
> 22 |       await element.waitForDisplayed({
     |       ^ Error: element ("id:com.saucelabs.mydemoapp.android:id/menuNameAscIV") still not displayed after 10000ms
  23 |         timeout: 10000
  24 |       });
  25 |   
  26 |       await element.click();
  27 |     }
  28 |   
  29 |     async type(locator: string, text: string) {
  30 |   
  31 |       const element = await this.driver.$(locator);
  32 |   
  33 |       await element.waitForDisplayed({
  34 |         timeout: 10000
  35 |       });
  36 |   
  37 |       await element.setValue(text);
  38 |     }
  39 |     
  40 |     async isPresent(locator: string){
  41 |       const element = await this.driver.$(locator);
  42 |       await element.waitForDisplayed({
  43 |         timeout: 15000
  44 |       });
  45 |     }
  46 | 
  47 |     async isDisplayed(locator: string) {
  48 |   
  49 |       const element = await this.driver.$(locator);
  50 |   
  51 |       return await element.isDisplayed();
  52 |     }
  53 | 
  54 |     async isTextEqual(locator: string, text: string){
  55 |       const element = await this.driver.$(locator);
  56 |       await element.waitForDisplayed({
  57 |         timeout: 10000
  58 |       });
  59 |       // await element.getText();
  60 |       expect(await element.getText()).toBe(text);
  61 |     }
  62 | 
  63 |     async closeApp() {
  64 | 
  65 |       const currentPackage = await this.driver.getCurrentPackage();
  66 |       // await this.driver.deleteSession();
  67 |       await this.driver.terminateApp(currentPackage);
  68 |     }
  69 |     
  70 |   }
```