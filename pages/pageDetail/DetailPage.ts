import BasePage from "pages/BasePage";
import { remote, Browser } from 'webdriverio';

export default class DetailPage extends BasePage{
    //
    txtTitle = 'id:com.saucelabs.mydemoapp.android:id/productTV';
    txtPrice = 'id:com.saucelabs.mydemoapp.android:id/priceTV';
    rating = 'id:com.saucelabs.mydemoapp.android:id/rattingV';
    txtTotalQty = 'id:com.saucelabs.mydemoapp.android:id/noTV';
    txtProductTitle = 'id:com.saucelabs.mydemoapp.android:id/productHeightLightsTV';
    txtProductDesc = 'id:com.saucelabs.mydemoapp.android:id/descTV';
    //
    btnPlus = 'id:com.saucelabs.mydemoapp.android:id/plusIV';
    btnMin = 'id:com.saucelabs.mydemoapp.android:id/minusIV';
    btnAddToCart = 'id:com.saucelabs.mydemoapp.android:id/cartBt';
    //
    colorRecyclerView = 'id:com.saucelabs.mydemoapp.android:id/colorRV';

    async verifyDetailScreen(){
        await this.isPresent(this.txtTitle);
        await this.isPresent(this.txtPrice);
        await this.isPresent(this.rating);
        await this.isPresent(this.txtTotalQty);
        await this.isPresent(this.txtProductTitle);
        await this.isPresent(this.txtProductDesc);
        await this.isPresent(this.btnPlus);
        await this.isPresent(this.btnMin);
        await this.isPresent(this.btnAddToCart);

        await this.isDisplayed(this.txtTitle);
        await this.isDisplayed(this.txtPrice);
        await this.isDisplayed(this.rating);
        await this.isDisplayed(this.txtTotalQty);
        await this.isDisplayed(this.txtProductTitle);
        await this.isDisplayed(this.txtProductDesc);
        await this.isDisplayed(this.btnPlus);
        await this.isDisplayed(this.btnMin);
        await this.isDisplayed(this.btnAddToCart);
    }
    async getDataDetailProduct() {

        const txtTitle = await this.getDataTxt(this.txtTitle);
      
        const txtPrice = await this.getDataTxt(this.txtPrice);
      
        const txtQty = await this.getDataTxt(this.txtTotalQty);
        
        // convert qty
        const qty = parseInt(txtQty);

        // remove currency symbol and spaces
        const price = parseFloat(
            txtPrice.replace('$', '').replace(/\s/g, '')
        );

        // calculate total
        const totalPrice = qty * price;

        return {
          title: txtTitle,
          price: txtPrice,
          qty: txtQty,
          totalPrice : totalPrice
        };
      }
    /**
     * Select product color by color name
     * Example:
     * Black color
     * Blue color
     * Gray color
     */
    async selectProductColor(
        expectedColor: string
    ): Promise<boolean> {

        // get all color containers
        const colorContainers = await this.driver.$$(
        '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.saucelabs.mydemoapp.android:id/colorRV"]/android.view.ViewGroup'
        );

        for (const container of colorContainers) {

        try {

            // get color image
            const colorImage = await container.$(
            'id:com.saucelabs.mydemoapp.android:id/colorIV'
            );

            // get color description
            const colorName = await colorImage.getAttribute(
            'content-desc'
            );

            console.log(`AVAILABLE COLOR : ${colorName}`);

            // validate expected color
            if (
            colorName.trim().toLowerCase() ===
            expectedColor.trim().toLowerCase()
            ) {

            console.log(`SELECT COLOR : ${colorName}`);

            // click color container
            await container.click();

            return true;
            }

        } catch (error) {

            console.log('INVALID COLOR ITEM');
        }
        }

        return false;
    }

    /**
   * Set product quantity
   * then validate quantity
   * then add to cart
   */
  async addProductToCart(
    expectedQty: number
  ): Promise<boolean> {

    const plusButton = await this.driver.$(
      this.btnPlus
    );

    const minusButton = await this.driver.$(
      this.btnMin
    );

    const qtyText = await this.driver.$(
      this.txtTotalQty
    );

    const addToCartButton = await this.driver.$(
      this.btnAddToCart
    );

    // get current qty
    let currentQty = parseInt(
      await qtyText.getText()
    );

    console.log(`CURRENT QTY : ${currentQty}`);

    /**
     * increase qty
     */
    while (currentQty < expectedQty) {

      await plusButton.click();

      await this.driver.pause(500);

      currentQty = parseInt(
        await qtyText.getText()
      );

      console.log(`INCREASE QTY : ${currentQty}`);
    }

    /**
     * decrease qty
     */
    while (currentQty > expectedQty) {

      await minusButton.click();

      await this.driver.pause(500);

      currentQty = parseInt(
        await qtyText.getText()
      );

      console.log(`DECREASE QTY : ${currentQty}`);
    }

    // validate qty
    const finalQty = parseInt(
      await qtyText.getText()
    );

    console.log(`FINAL QTY : ${finalQty}`);

    if (finalQty !== expectedQty) {

      console.log('QTY VALIDATION FAILED');

      return false;
    }

    console.log('QTY VALIDATION SUCCESS');

    // add to cart
    await addToCartButton.click();

    console.log('PRODUCT ADDED TO CART');

    return true;
  }
}