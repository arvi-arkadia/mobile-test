import BasePage from '../BasePage';

export default class LoginPage extends BasePage {

  username = 'id:com.saucelabs.mydemoapp.android:id/nameET';

  password = 'id:com.saucelabs.mydemoapp.android:id/passwordET';

  btnLogin = 'id:com.saucelabs.mydemoapp.android:id/loginBtn';

  async login(user: string, pass: string) {

    await this.type(this.username, user);

    await this.type(this.password, pass);

    await this.click(this.btnLogin);
  }
}
