import helper from "../utils/helper";

const user_email = '#userid';
const user_password = `//input[@id='password']`;
const signInBtn = '#btnActive';
const burgerMenu = `//a[@id='pt1:_UISmmLink']`;
const goToMyClient = `//div[@title='My Client Groups']`;
const newPerson = `(//a[@title='New Person'])[2]`;

class LoginPage{

  async login(userName, password) {
    await page.waitForTimeout(2500);
    await helper.waitAndClick(user_email)
    await helper.waitAndType(user_email, userName);
    await helper.waitForXPathAndClick(user_password)
    await helper.waitForXPathAndType(user_password, password);
    await helper.waitAndClick(signInBtn);
    await page.waitForTimeout(5500);
  }

  async clickMenuOptions() {
    await page.waitForTimeout(5500);
    await helper.waitForXPathAndClick(burgerMenu); 

    
  }
}
export default new LoginPage;
