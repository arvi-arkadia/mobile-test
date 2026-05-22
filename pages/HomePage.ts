import BasePage from './BasePage';

export default class HomePage extends BasePage {

  homeTitle = 'id:home_title';

  async verifyHomePage() {

    return await this.isDisplayed(this.homeTitle);
  }
}