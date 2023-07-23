import Page from '../builder';
import loginPage from '../pages/LoginPage';
import talentAndReviewPage from '../pages/clientGroup/talentAndReviewPage'

describe('Login Page testcases', () => {
	let userName = process.env.Dev_58_TEST_USER;
	let password = process.env.Dev_58__USER_PASSWORD;
	let env = "https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/"

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
	
	it('Should go to Talent Review ', async () => {
		await talentAndReviewPage.goToTalentReviewScreen();
	});

	it('Should goto hire employee page and enter basic details', async () => {
		await talentAndReviewPage.addNewMeeting();
		await talentAndReviewPage.fillMeetingInfoForm();
	});

	it('Should goto hire employee page and enter basic details', async () => {
		await talentAndReviewPage.reviewContent();
		
	});

	it('should enter work relation details on the form', async () => {
		await talentAndReviewPage.reviewParticipants();
	
	});
	it('should enter work relation details on the form', async () => {
		await talentAndReviewPage.populationSection();
	
	});
	it('should enter work relation details on the form', async () => {
		await talentAndReviewPage.submitForm();
	
	});
	it('should enter work relation details on the form', async () => {
		await talentAndReviewPage.submitForm1();
	
	});
});
