import BasePage from "pages/BasePage";
import { remote, Browser } from 'webdriverio';

export default class ProductMenu extends BasePage{
    // title
    logoMenu = 'id:com.saucelabs.mydemoapp.android:id/mTvTitle';
    txtProduct = 'id:com.saucelabs.mydemoapp.android:id/productTV';
    // buttuon
    btnBurgerMenu = 'id:com.saucelabs.mydemoapp.android:id/menuIV';
    btnCart = 'id:com.saucelabs.mydemoapp.android:id/cartRL';
    btnSort = 'id:com.saucelabs.mydemoapp.android:id/sortIV';
    //
    productList = "id:com.saucelabs.mydemoapp.android:id/productRV";
    itemCatalog = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Catalog']"
    itemWebView = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='WebView']"
    itemQRCode = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='QR Code Scanner']"
    itemGeoLoc = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Geo Location']"
    itemDrawing = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Drawing']"
    itemAbout = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='About']"
    itemResetApp = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Reset App State']"
    itemFingerPrint = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='FingerPrint']"
    itemVirtualUSB = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Virtual USB']"
    itemCrashApp = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Crash app (debug)']"
    itemLogIn = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Log In']"
    itemLogOut = "xpath://android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Log Out']"
    //
    scrollView = 'id:com.saucelabs.mydemoapp.android:id/scrollView';
    //
    fitlerNameAsc = 'id:com.saucelabs.mydemoapp.android:id/menuNameAscIV';
    filterNameDesc = 'id:com.saucelabs.mydemoapp.android:id/menuNameDesIV';
    filterPriceAsc = 'id:com.saucelabs.mydemoapp.android:id/menuPriceAscIV';
    filterPriceDesc = 'id:com.saucelabs.mydemoapp.android:id/menuPriceDscIV';

    async clickCart(){
      await this.isPresent(this.btnCart);
      await this.click(this.btnCart);
      console.log('Clicked btn cart')
    }
    async clickFilter(filter: string){
      await this.isPresent(this.btnSort);
      await this.click(this.btnSort);
      console.log('CLicked btn sort filter');
      this.verifyFilterSort();

      switch(filter){
        case "name-asc":
          await this.click(this.fitlerNameAsc);
          break;
          case "name-desc":
          await this.click(this.filterNameDesc);
          break;
          case "price-asc":
          await this.click(this.filterPriceAsc);
          break;
          case "price-asc":
          await this.click(this.filterPriceDesc);
          break;
        default:
          break;
    }
    }
    async clickDrawerMenu(){
        await this.isPresent(this.btnBurgerMenu)
        await this.click(this.btnBurgerMenu)
        console.log("Clicked btn drawer menu")
    }
    async clickCatalog(){
        await this.isDisplayed(this.itemCatalog);
        await this.click(this.itemCatalog)
        console.log("Clicked btn catalog")
    }
    async clickLogin(){
        await this.isDisplayed(this.itemLogIn);
        await this.click(this.itemLogIn)
        console.log("Clicked btn login")
    }
    async clickLogout(){
      await this.clickDrawerMenu()
      await this.isDisplayed(this.itemLogOut);
      await this.click(this.itemLogOut)
      console.log("Clicked btn catalog")
  }
  async verifyFilterSort(){
      await this.isPresent(this.fitlerNameAsc);
      await this.isPresent(this.filterNameDesc);
      await this.isPresent(this.filterPriceAsc);
      await this.isPresent(this.filterPriceDesc);

      await this.isDisplayed(this.fitlerNameAsc)
      await this.isDisplayed(this.filterNameDesc)
      await this.isDisplayed(this.filterPriceAsc)
      await this.isDisplayed(this.filterPriceDesc)
  }
    async verifyProductMenu(){
        await this.isPresent(this.logoMenu);
        await this.isPresent(this.txtProduct);
        await this.isPresent(this.btnBurgerMenu);
        await this.isPresent(this.btnCart);
        await this.isPresent(this.btnSort);
        await this.isPresent(this.productList);

        await this.isDisplayed(this.logoMenu);
        await this.isTextEqual(this.txtProduct,'Products')
        await this.isDisplayed(this.btnBurgerMenu)
        await this.isDisplayed(this.btnCart)
        await this.isDisplayed(this.btnSort)
        await this.isDisplayed(this.productList)
        console.log("All element all present on product screen")
    }

    async verifyDrawerMenuBeforeLogin(){
        await this.isPresent(this.itemCatalog);
        await this.isPresent(this.itemWebView);
        await this.isPresent(this.itemQRCode);
        await this.isPresent(this.itemGeoLoc);
        await this.isPresent(this.itemDrawing);
        await this.isPresent(this.itemAbout);
        await this.isPresent(this.itemResetApp);
        await this.isPresent(this.itemFingerPrint);
        await this.isPresent(this.itemVirtualUSB);
        await this.isPresent(this.itemCrashApp);
        await this.isPresent(this.itemLogIn);

        await this.isDisplayed(this.itemCatalog);
        await this.isDisplayed(this.itemWebView);
        await this.isDisplayed(this.itemQRCode);
        await this.isDisplayed(this.itemGeoLoc);
        await this.isDisplayed(this.itemDrawing);
        await this.isDisplayed(this.itemAbout);
        await this.isDisplayed(this.itemResetApp);
        await this.isDisplayed(this.itemFingerPrint);
        await this.isDisplayed(this.itemVirtualUSB);
        await this.isDisplayed(this.itemCrashApp);
        await this.isDisplayed(this.itemLogIn);
        console.log("All element all present on drawer screen")
    }
    async verifyDrawerMenuAfterLogin(){
        await this.isPresent(this.itemCatalog);
        await this.isPresent(this.itemWebView);
        await this.isPresent(this.itemQRCode);
        await this.isPresent(this.itemGeoLoc);
        await this.isPresent(this.itemDrawing);
        await this.isPresent(this.itemAbout);
        await this.isPresent(this.itemResetApp);
        await this.isPresent(this.itemFingerPrint);
        await this.isPresent(this.itemVirtualUSB);
        await this.isPresent(this.itemCrashApp);
        await this.isPresent(this.itemLogOut);

        await this.isDisplayed(this.itemCatalog);
        await this.isDisplayed(this.itemWebView);
        await this.isDisplayed(this.itemQRCode);
        await this.isDisplayed(this.itemGeoLoc);
        await this.isDisplayed(this.itemDrawing);
        await this.isDisplayed(this.itemAbout);
        await this.isDisplayed(this.itemResetApp);
        await this.isDisplayed(this.itemFingerPrint);
        await this.isDisplayed(this.itemVirtualUSB);
        await this.isDisplayed(this.itemCrashApp);
        await this.isDisplayed(this.itemLogOut);
        console.log("All element all present on drawer screen")
    }
   
    async getAllProductItems() {
        await this.isPresent(this.scrollView);
        
        const scrollView = await this.driver.$(this.scrollView);

        const productList: Map<string, any>[] = [];
        const visitedProducts = new Set<string>();
    
        let canScroll = true;
    
        while (canScroll) {
    
          // all product container
          const viewGroups = await scrollView.$$(
            'xpath:.//android.view.ViewGroup'
          );
    
          for (const group of viewGroups) {
    
            try {
    
              // validate product item exists
              const productImage = await group.$(
                'id:com.saucelabs.mydemoapp.android:id/productIV'
              );
    
              const productTitle = await group.$(
                'id:com.saucelabs.mydemoapp.android:id/titleTV'
              );
    
              const productPrice = await group.$(
                'id:com.saucelabs.mydemoapp.android:id/priceTV'
              );
    
              const ratingView = await group.$(
                'id:com.saucelabs.mydemoapp.android:id/rattingV'
              );
    
              // skip if structure not match
              if (
                !(await productImage.isExisting()) ||
                !(await productTitle.isExisting()) ||
                !(await productPrice.isExisting()) ||
                !(await ratingView.isExisting())
              ) {
                continue;
              }
    
              // get value
              const title = await productTitle.getText();
              const price = await productPrice.getText();
    
              // prevent duplicate after scrolling
              if (visitedProducts.has(title)) {
                continue;
              }
    
              visitedProducts.add(title);
    
              // create map
              const productMap = new Map<string, any>();
    
              productMap.set(
                'image',
                await productImage.getAttribute('content-desc')
              );
    
              productMap.set('title', title);
    
              productMap.set('price', price);
    
              productMap.set(
                'rating',
                await ratingView.isExisting()
              );
    
              productList.push(productMap);
    
            } catch (error) {
              // ignore invalid viewgroup
            }
          }
    
          // scroll down

            canScroll = await this.driver.execute(
              'mobile: scrollGesture',
              {
                left: 100,
                top: 300,
                width: 800,
                height: 1400,
                direction: 'down',
                percent: 0.7
              }
            );
            
            await this.driver.pause(1500);

        }
    
        return productList;
      }

      async scrollUntilProductFound(
        expectedTitle: string,
        maxScroll: number = 15
      ): Promise<boolean> {
      
        let direction: 'down' | 'up' = 'down';
      
        const scrollView = await this.driver.$(this.scrollView);
      
        for (let i = 0; i < maxScroll; i++) {
      
          // get all visible product containers
          const productContainers = await this.driver.$$(
            '//androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup'
          );
      
          // validate title
          for (const container of productContainers) {
      
            try {
      
              const title = await container.$(
                'id:com.saucelabs.mydemoapp.android:id/titleTV'
              );
      
              const text = await title.getText();
      
              console.log(`VISIBLE ITEM : ${text}`);
      
              if (text.trim() === expectedTitle.trim()) {
      
                console.log(`FOUND PRODUCT : ${text}`);
      
                // click product container
                await container.click();
      
                return true;
              }
      
            } catch (error) {
      
              console.log('INVALID PRODUCT CONTAINER');
            }
          }
      
          // scroll
          let canScroll = false;
      
          try {
      
            canScroll = await this.driver.execute(
              'mobile: scrollGesture',
              {
                elementId: scrollView.elementId,
                direction,
                percent: 0.7
              }
            );
      
            await this.driver.pause(1000);
      
          } catch (error) {
      
            console.log('Scroll Error : ', error);
      
            return false;
          }
      
          /**
           * if cannot scroll anymore:
           * bottom -> scroll up
           * top -> stop
           */
          if (!canScroll) {
      
            if (direction === 'down') {
      
              console.log('REACH BOTTOM -> SCROLL UP');
      
              direction = 'up';
      
            } else {
      
              console.log('REACH TOP -> STOP SEARCH');
      
              break;
            }
          }
        }
      
        return false;
      }

    txtTitle = 'id:com.saucelabs.mydemoapp.android:id/titleTV';

    /**
     * Get all visible product titles
     * without scrolling
     */
    async getVisibleTitles(): Promise<string[]> {

      const elements = await this.driver.$$(this.txtTitle);

      const titles: string[] = [];

      for (const item of elements) {

        const text = await item.getText();

        if (text.trim() !== '') {
          titles.push(text.trim());
        }
      }

      return titles;
    }

    /**
     * Validate ascending sort
     */
    async validateSortAscending(): Promise<boolean> {

      const actualTitles = await this.getVisibleTitles();

      const expectedTitles = [...actualTitles].sort(
        (a, b) => a.localeCompare(b)
      );

      console.log('ACTUAL : ', actualTitles);
      console.log('EXPECTED ASC : ', expectedTitles);

      return JSON.stringify(actualTitles) ===
        JSON.stringify(expectedTitles);
    }

    /**
     * Validate descending sort
     */
    async validateSortDescending(): Promise<boolean> {

      const actualTitles = await this.getVisibleTitles();

      const expectedTitles = [...actualTitles].sort(
        (a, b) => b.localeCompare(a)
      );

      console.log('ACTUAL : ', actualTitles);
      console.log('EXPECTED DESC : ', expectedTitles);

      return JSON.stringify(actualTitles) ===
        JSON.stringify(expectedTitles);
    }
}