class Helper {
  async waitAndClick(selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }

  async waitAndType(selector, text) {
    await page.waitForSelector(selector);
    await page.type(selector, text);
  }

  /* async getText(selector) {
		await page.waitForSelector(selector);
		const text = await page.$eval(selector, e => e.innerHTML);
		return text;
	} */
	async getText(selector) {
		await page.waitForSelector(selector);
		const text = await page.$eval(selector, e => e.textContent);
		return text;
	} 

	async getXpathText(xpath) {
		const [getXpath] = await page.$x(xpath);
		const getMsg = await page.evaluate(name => name.innerText, getXpath);
		return getMsg;
	}

	async getAttribute(selector, theAttr) {
		await page.waitForSelector(selector);
		const att = await page.$(selector)
		const attribute = await (await att.getProperty(theAttr)).jsonValue();
		return attribute;
	}

	async getCount(selector) {
		await page.waitForSelector(selector);
		const count = await page.$$eval(selector, items => items.length);
		return count;
	}
	async waitForXPathAndType(xpath, text) {
		await page.waitForXPath(xpath);
		const elements = await page.$x(xpath);
		await elements[0].type(text);
	}

	async waitForXPathAndClick(xpath) {
		await page.waitForXPath(xpath);
		const elements = await page.$x(xpath);
		if (elements.length > 1) {
			console.warn('waitForXPathAndClick returned more than one result');
		}
		await elements[0].click();
	}

	async isElementSelectorVisible(selector) {
		await page.waitForSelector(selector);
	}

	async isElementXpathVisible(xpath) {
		let visible = true;
		await page
			.waitForXPath(xpath, { visible: true, timeout: 3000 })
			.catch(() => {
				visible = false;
			});
		return visible;
	}

	async acceptDialog() {
		page.on('dialog', async dialog =>{
			await dialog.accept()
		})
	}

	async dismissDialog() {
		page.on('dialog', async dialog =>{
			await dialog.dismiss()
		})
	}

	async getDialogMessage() {
		page.on('dialog', async dialog =>{
			const dialogMessage = await dialog.message()
		})
	}

	async clickMultipleTimes(ele, times) {
		for(var i =1; i <=times; i++) {
			await this.waitAndClick(ele)
		}
		
	}

	async multipleBackspace(element) {
        let selector = `${element}`
        let selectorText = await this.getText(selector);
        let selectorLength = selectorText.length;
        await page.click(selector)
        for (var i = 0; i<selectorLength; i++) {
            await page.keyboard.press('Backspace')
        }
    }

  async isElementSelectorVisible(selector) {
    await page.waitForSelector(selector);
  }

  async isElementXpathVisible(xpath) {
    let visible = true;
    await page
      .waitForXPath(xpath, { visible: true, timeout: 3000 })
      .catch(() => {
        visible = false;
      });
    return visible;
  }

  async acceptDialog() {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async dismissDialog() {
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });
  }

  async getDialogMessage() {
    page.on("dialog", async (dialog) => {
      const dialogMessage = await dialog.message();
    });
  }

  async multipleBackspace(element) {
    let selector = `${element}`;
    let selectorText = await this.getText(selector);
    let selectorLength = selectorText.length;
    await page.click(selector);
    for (var i = 0; i < selectorLength; i++) {
      await page.keyboard.press("Backspace");
    }
  }

  async backspaceForNthTimes(n) {
    for (var i = 0; i < n; i++) {
      await page.keyboard.press("Backspace");
    }
    await elements[0].click();
  }

  async isElementSelectorVisible(selector) {
    await page.waitForSelector(selector);
  }

  async isElementXpathVisible(xpath) {
    let visible = true;
    await page
      .waitForXPath(xpath, { visible: true, timeout: 3000 })
      .catch(() => {
        visible = false;
      });
    return visible;
  }

  async acceptDialog() {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async dismissDialog() {
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });
  }

  async getDialogMessage() {
    page.on("dialog", async (dialog) => {
      const dialogMessage = await dialog.message();
    });
  }

  async multipleBackspace(element) {
    let selector = `${element}`;
    let selectorText = await this.getText(selector);
    let selectorLength = selectorText.length;
    await page.click(selector);
    for (var i = 0; i < selectorLength; i++) {
      await page.keyboard.press("Backspace");
    }
  }

  async backspaceForNthTimes(n) {
    for (var i = 0; i < n; i++) {
      await page.keyboard.press("Backspace");
    }
  }

  async forwardButtonForNthTimes(n) {
    for (var i = 0; i < n; i++) {
      await page.keyboard.press("ArrowRight");
    }
  }

  async shouldExist(selector) {
    try {
      await page.waitForSelector(selector, { visible: true, timeout: 3000 });
    } catch (error) {
      throw new Error(`Selector: ${selector} should exist but it does not`);
    }
  }

  async shouldExistByXPath(xpath) {
    try {
      await page.waitForXPath(xpath, { visible: true, timeout: 3000 });
    } catch (error) {
      throw new Error(`Selector: ${xpath} should exist but it does not`);
    }
  }

  async shouldNotExist(selector) {
    try {
      await page.waitForTimeout(() => !document.querySelector(selector));
    } catch (error) {
      throw new Error(`Selector: ${selector} should not exist but exist`);
    }
  }

  async shouldBeEnabled(selector) {
    let status = await page.$eval(`${selector}`, (element) =>
      element.getAttribute("disabled")
    );
    if (status === null) {
      console.log(`${status}: element is enabled`);
    } else {
      throw new Error(
        `Selector: ${selector} should be enabled but it is disabled`
      );
    }
  }

  async shouldBeDisabled(selector) {
    let status = await page.$eval(`${selector}`, (element) =>
      element.getAttribute("disabled")
    );
    if (status === "disabled") {
      console.log(`${status}: elment is disabled`);
    } else {
      throw new Error(
        `Selector: ${selector} should be enabled but it is disabled`
      );
    }
  }

  async selectByText(dropDownSelector, textXpath) {
    await page.waitForXPath(textXpath);
    const option = (await page.$x(textXpath))[0];
    const value = await (await option.getProperty("value")).jsonValue();
    await page.select(dropDownSelector, value);
  }

  async shouldHaveText(selector, text) {
    await page.waitForSelector(selector);
    const Text = await page.$eval(selector, (e) => e.textContent);
    const actualText = Text.trim();
    if (actualText === text) {
      return;
    } else {
      throw new Error(
        `Text does not match, Expected ${text} but got ${actualText}`
      );
    }
  }
}
export default new Helper();
