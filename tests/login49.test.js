import Page from '../builder';
import loginPage from '../pages/LoginPage';
import myClient from '../pages/ClientPage';

describe('Login Page testcases', () => {
	let userName = process.env.Dev_49_TEST_USER;
	let password = process.env.Dev_49__USER_PASSWORD;
    let env = "https://fa-euth-dev49-saasfademo1.ds-fa.oraclepdemos.com"

	beforeAll(async () => {
		page = await Page.build('Desktop');
	});
	afterAll(async function () {
		await page.close();
		await browser.close();
	});
	it('Should load the Login Page', async () => {
		await page.goto(env);
	});

	it('Should login successfully and verify the HomeScreen ', async () => {
		await loginPage.login(userName, password);
	});
	
	it('Should click burgermenu and go to My Client Group Page ', async () => {
		await loginPage.clickMenuOptions();
	});
	
	it('Should click burgermenu and go to My Client Group Page ', async () => {
		await myClient.goToMyCleintPage();
	});

	it('Should goto hire employee page and enter basic details', async () => {
		await myClient.goToHireEmployee();
		await myClient.enterBasicDetails();
	});

	it('Should goto hire employee page and enter basic details', async () => {
		await myClient.enterHomeAddress();
		
	});

	it('Should enter work relation details on the form', async () => {
		await myClient.enterWorkRelation();
	
	});
});
