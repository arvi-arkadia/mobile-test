import BasePage from '../BasePage';

export default class LoginPage extends BasePage {

  username = 'id:com.saucelabs.mydemoapp.android:id/nameET';

  password = 'id:com.saucelabs.mydemoapp.android:id/passwordET';

  btnLogin = 'id:com.saucelabs.mydemoapp.android:id/loginBtn';
  // logout
  modalTitle = 'id:com.saucelabs.mydemoapp.android:id/title_template';
  modalDesc = 'xpath://android.widget.TextView[@resource-id="android:id/message"]';
  btnCancel = 'xpath://android.widget.Button[@resource-id="android:id/button2"]';
  btnLogout = 'xpath://android.widget.Button[@resource-id="android:id/button1"]';

  async login(user: string, pass: string) {

    await this.type(this.username, user);

    await this.type(this.password, pass);

    await this.click(this.btnLogin);
  }
  async clickLogout(){
    await this.click(this.btnLogout)
  }
  async clickCancel(){
    await this.click(this.btnCancel)
  }
  async verifyModalLogout(){
    await this.isDisplayed(this.modalTitle)
    await this.isDisplayed(this.modalDesc)
    await this.isDisplayed(this.btnCancel)
    await this.isDisplayed(this.btnLogout)

    await this.isTextEqual(this.modalDesc,'Are you sure you want to logout')
  }
  async verifyLoginPage(){
    await this.isDisplayed(this.username)
    await this.isDisplayed(this.password)
    await this.isDisplayed(this.btnLogin)
  }
}
