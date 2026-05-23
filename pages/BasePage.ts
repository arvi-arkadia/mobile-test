import { expect } from '@playwright/test';

export default class BasePage {

    driver: any;
  
    constructor(driver: any) {
      this.driver = driver;
    }
    
    async getDataTxt(locator: string): Promise<string> {

      const element = await this.driver.$(locator);
    
      return await element.getText();
    }

    async click(locator: string) {
  
      const element = await this.driver.$(locator);
  
      await element.waitForDisplayed({
        timeout: 10000
      });
  
      await element.click();
    }
  
    async type(locator: string, text: string) {
  
      const element = await this.driver.$(locator);
  
      await element.waitForDisplayed({
        timeout: 10000
      });
  
      await element.setValue(text);
    }
    
    async isPresent(locator: string){
      const element = await this.driver.$(locator);
      await element.waitForDisplayed({
        timeout: 35000
      });
    }

    async isDisplayed(locator: string) {
  
      const element = await this.driver.$(locator);
  
      return await element.isDisplayed();
    }

    async isTextEqual(locator: string, text: string){
      const element = await this.driver.$(locator);
      await element.waitForDisplayed({
        timeout: 10000
      });
      // await element.getText();
      expect(await element.getText()).toBe(text);
    }

    async closeApp() {

      const currentPackage = await this.driver.getCurrentPackage();
      await this.driver.terminateApp(currentPackage);
      await this.driver.deleteSession();
    }
    
  }