import BasePage from "pages/BasePage";
import { remote, Browser } from 'webdriverio';

export default class CartPage extends BasePage{
    //
    btnCheckout = 'id:com.saucelabs.mydemoapp.android:id/cartBt';

    async clickCheckout(){
        await this.isPresent(this.btnCheckout);
        await this.click(this.btnCheckout);
    }
    async validateCartProduct(
        expectedData: {
          title: string;
          price: string;
          qty: number;
        },
        maxScroll: number = 10
      ): Promise<boolean> {
      
        let canScroll = true;
      
        for (let i = 0; i < maxScroll; i++) {
      
          // get all cart product containers
          const productContainers = await this.driver.$$(
            '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.saucelabs.mydemoapp.android:id/productRV"]/android.view.ViewGroup'
          );
      
          for (const container of productContainers) {
      
            try {
      
              // get product data
              const titleElement = await container.$(
                'id:com.saucelabs.mydemoapp.android:id/titleTV'
              );
      
              const priceElement = await container.$(
                'id:com.saucelabs.mydemoapp.android:id/priceTV'
              );
      
              const qtyElement = await container.$(
                'id:com.saucelabs.mydemoapp.android:id/noTV'
              );
      
              const actualTitle = await titleElement.getText();
      
              const actualPrice = await priceElement.getText();
      
              const actualQty = parseInt(
                await qtyElement.getText()
              );
      
              console.log({
                actualTitle,
                actualPrice,
                actualQty
              });
      
              // validate all data
              if (
                actualTitle.trim() === expectedData.title.trim() &&
                actualPrice.trim() === expectedData.price.trim() &&
                actualQty === expectedData.qty
              ) {
      
                console.log('PRODUCT VALIDATED SUCCESS');
      
                return true;
              }
      
            } catch (error) {
      
              console.log('INVALID PRODUCT ITEM');
            }
          }
      
          // scroll down
          try {
      
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
      
            await this.driver.pause(1000);
      
          } catch (error) {
      
            console.log('SCROLL FAILED');
      
            return false;
          }
      
          // stop if bottom
          if (!canScroll) {
      
            console.log('REACH BOTTOM');
      
            break;
          }
        }
      
        return false;
      }
}
