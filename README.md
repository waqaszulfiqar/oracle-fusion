# TrustedForm-QA 

## _Test Framework designed to test TrustedForm_

TrsutedFrom-QA is a testing framework for automated testing of API and UI features of the TrustedForm application. 
Writtien in Javascript 
 
## Dependencies  
- @babel/core: 7.14.6
- babel-jest: 27.0.6
- dotenv: 10.0.0
- jest-html-reporter: 3.4.1
- jest-puppeteer: 5.0.4
- chromium: 3.0.
- gherkin: 9.0.0
- puppeteer-core: 9.1.1
- puppeteer-har: 1.1.2
## Dev Dependencies
- @babel/preset-env: 7.14.7
- @cucumber/cucumber: 7.3.0
- cucumber-html-reporter: 5.4.0
- jest: 27.0.5
- jest-cucumber: 3.0.1
- jest-cucumber-fusion: 0.8.1
- puppeteer: 9.1.1

## Features

- Create executable specifications using Gerkin DSL
- Automate UI features including performance, screenshots and video 
- Run tests using Jest test runner
- Run in headless or headful mode
- Execute Github Action Manually or by Trigger-TODO
- Report Steps with Cucumber HTML Reporter- TODO
- Report coverage with Jest reporter

## Test Execution 
- TODO

## Local Installation 
- TODO 

## UI Tests for Trusted Form Project ##


### [About](#about) **|** [Getting Started](#tech-stack) **|** [Installation](#pre-requisites) **|** [Writing Tests](#writing-tests) **|** [Page Objects](#page-objects) **|** [Finding Elements](#finding-elements) **|** [Reports](#reports) **|** [CI/CD](#ci/cd) ###

### About ###

Currently this framework has been developed to run scripts for **WEB** platform.

The tests run Chromium/Chrome browser is configured currently for running browser tests.

### Tech-stack ###

* [Node.js](https://nodejs.org/en/docs/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser
* [Puppeteer](https://github.com/puppeteer/puppeteer) - Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.
* [Jest](https://jestjs.io/docs/getting-started) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### Pre-requisites ###

1. NodeJS installed globally in the system. https://nodejs.org/en/download/
2. Jest
3. Puppeteer
5. Set **NodeJS** paths correctly in the system.
6. Chromium browser installed while installing the puppeteer
7. Text Editor/IDE (Optional) installed-->Sublime/VIM/Visual Studio Code/Brackets. your own choice

### Setup Scripts ###

* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json would be installed in node_modules folder.

**Tip:** Install `npm install -g` globally on your system and run it from the command-line which checks if your node path is set correctly or not.

### Run Tests ###

* First step is to install `node` and it will automatically install all the required libraries/dependencies in the node.js folder. And make sure you have node version >= 15.0.0

```
npm install 
```

* Next step is to execute the testcases.

The node command to run tests of project 
* To Run UI Tests
```
npm run uitest
```
* To Run API Tests
```
npm test 
```
These commands are set in `package.json` internally

### Writing Tests ###

Puppeteer framework has been integrated with this project.

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
});
```

### Page Objects ###

This framework is strictly written using page-object design pattern. https://martinfowler.com/bliki/PageObject.html

## Page class 
```
export default class LoginPage extends BasePage {
async isLoginFormDisplayed() {
    await page.waitForSelector("#login-form");
    await page.waitForSelector("#user_email");
    await page.waitForSelector("#user_password");
    await page.waitForSelector("#user_remember_me");
    await page.waitForSelector("#sign-in-button");
  }
)}

```
## Test class 
```
describe("Login Page testcases", () => {
  it("Should verify the Logo form ", async () => {
    await loginPage.isLoginFormDisplayed();
  });
)};
```
## Overview of POM(Page Object Model)

So, "Page" will handle all the selectors and methods, "test" will have all the test for each page. 

* Builder class has all the configuration setting for running scripts on Desktop, Tabs, or Mobile browsers

* To run tests on different device, update before Hook with the Device type
```
page = await Page.build("Desktop");
page = await Page.build("Tablet");
page = await Page.build("Mobile");
```
### Finding-Elements ###

Finding elements in browser could be tricky sometimes.

* The best way to find the elements in browser, go to console Crt+f and start finding your req element on DOM "//span[contains(text(),'BatchRobot')]" or you can use "ChroPath" extension. I personally find it lot easier & hassle free.

### Reports ###

* Allure Report is integrated
* To open the Allure Report there are few things which needs to be done, All browsers block some reports consider them as spam 
* You can install the Allure Commandline ``` npm i -g allure-commandline ``` and open terminal on the Allure Report folder and run ``` allure open ```

* **OR** - you can use simple commands to disable browser security

* **Mac-OSX** - Open Terminal and enter this command. It will open a seperate chrome instace and you will be able to view the report
* ``` open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security ```

* **Windows** - Right click on desktop, add new shortcut
* Add the target as ``` C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp ```
* Click OK.

### CI/CD ###
* Github Action has been implemented for both API and UI Test's
