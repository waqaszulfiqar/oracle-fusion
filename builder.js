/* eslint-disable no-case-declarations */
import puppeteer from 'puppeteer';
//import browser from "../setup";
export default class Builder {
	static async build(viewport) {
		const launchOptions = {
			headless: false,
			slowMo: 20,
			agrs: [
				'--start-fullscreen',
				'--no-sandbox',
				'--disable-setui-sandbox',
				'--disable-web-security',
				'--disable-features=IsolateOrigins,site-per-process',
				'--incognito',
			],
		};    
		const browser = await puppeteer.launch(launchOptions);
		//const context = await browser.createIncognitoBrowserContext();

		const page = await browser.newPage();
		//const page = await browser();
		const extendedPage = new Builder(page);
		await page.setDefaultTimeout(20000);

		switch (viewport) {
		case 'Mobile':
			const mobileViewPort = puppeteer.devices['iPhone X'];
			await page.emulate(mobileViewPort);
			break;

		case 'Tablet':
			const tabletViewPort = puppeteer.devices['iPad landscape'];
			await page.emulate(tabletViewPort);
			break;

		case 'Desktop':
			await page.setViewport({ width: 1180, height: 800 });
			break;
		default:
			throw new Error(
				'Supported devices are only desktop, mobiles and tablets'
			);
		}

		return new Proxy(extendedPage, {
			get: function (_target, property) {
				return extendedPage[property] || browser[property] || page[property];
			},
		});
	}
	constructor(page) {
		this.page = page;
	}
}