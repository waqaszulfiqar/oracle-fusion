import helper from "../../utils/helper";

const pageTitle = `//h2[contains(text(),'Meetings')]`;
const goToMyClient = `//div[@title='My Client Groups']`;
const talentReviewCTA = `//tbody/tr[1]/td[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[7]/div[1]/div[2]/div[1]/div[12]/a[1]/span[1]`;
const addCTA = `//div[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:fo1Upl:UPsp1:fo1Pce:PCEt1']`;
const talentReviewMeeting = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:it1::content']`;
const templateName = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:soc1::drop']`;
const templateNameDropDown = `//li[contains(text(),'GSE Matrix Mgr in Talent Review Meeting Template')]`;
const businessLeaderInputField = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:md1:md1is::content']`;
const businessLeaderDropDown = `//tr[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:md1:md1is::item0']`;
const dataSubmissionDeadLine = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:id2::content']`;
const meetingStatus = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr0:0:soc2::drop']`;

const continueCTA = `//button[@title="Continue"]`;
const searchAndAddPeople = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Rgn:0:GPmtfr2:1:ci01Sis:ci01Srh::content']`;
const submitCTA = `//div[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:SPsb2']`;
const saveAndClose =`//div[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:APscl2']`;
const acceptWarning1 = `//div[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc2Hm:PSEcil2']`;
const acceptWarning=  `//*[@id="_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:mc1Upl:UPsp1:mc1Hm:PSEcil2"]`;

const confirmationCTA = `//button[@id='_FOd1::msgDlg::cancel']`;

class talentAndReviewPage {
  async goToTalentReviewScreen() {
    await helper.waitForXPathAndClick(goToMyClient, { visible: true });
    await page.waitForTimeout(1500);
    page.on("dialog", async (dialog) => {
      console.log("here");
      await dialog.accept();
    });
    await helper.waitForXPathAndClick(talentReviewCTA, { visible: true });
    await page.waitForTimeout(2500);
  }
  async addNewMeeting() {
    await helper.waitForXPathAndClick(addCTA);
  }

  async fillMeetingInfoForm() {
    await page.waitForTimeout(2500);

    await page.waitForTimeout(5500);
    const timeout = 5000;
    let addCTAVisible = false;

    try {
      await page.waitForXPath(addCTA, { visible: true, timeout });
      addCTAVisible = true;
    } catch (error) {
      addCTAVisible = false;
    }

    if ((addCTAVisible = true)) {
      await helper.waitForXPathAndClick(addCTA);
    }

    await helper.waitForXPathAndType(talentReviewMeeting, "test tba");
    await helper.waitForXPathAndClick(templateName);
    await helper.waitForXPathAndClick(templateNameDropDown);
    await helper.waitForXPathAndType(businessLeaderInputField, "alex");
    await page.waitForTimeout(4500);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndClick(meetingStatus);
    await page.waitForTimeout(1500);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1500);

    // await helper.waitForXPathAndType(dataSubmissionDeadLine, "13/11/2026");
    await helper.waitForXPathAndClick(continueCTA);
    await page.waitForTimeout(3500);
  }

  async reviewContent() {
    await page.waitForTimeout(5500);
    const timeout = 5000;
    let continueCTAVisible = false;

    try {
      await page.waitForXPath(continueCTA, { visible: true, timeout });
      continueCTAVisible = true;
    } catch (error) {
      continueCTAVisible = false;
    }

    if ((continueCTAVisible = true)) {
      await helper.waitForXPathAndClick(continueCTA);
    }
  }

  async reviewParticipants() {
    await page.waitForTimeout(3500);
    await helper.waitForXPathAndType(searchAndAddPeople, "ban");
    await page.waitForTimeout(3500);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3500);
    await helper.waitForXPathAndType(searchAndAddPeople, "ban");
    await page.waitForTimeout(3500);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5500);

    await helper.waitForXPathAndClick(continueCTA);
  }

  async populationSection() {
    await page.waitForTimeout(5500);
    const timeout = 5000;
    let continueCTAVisible = false;

    try {
      await page.waitForXPath(continueCTA, { visible: true, timeout });
      continueCTAVisible = true;
    } catch (error) {
      continueCTAVisible = false;
    }

    if ((continueCTAVisible = true)) {
      await helper.waitForXPathAndClick(continueCTA);
    }
  }
  async submitForm() {
    await helper.waitForXPathAndClick(saveAndClose);
    await page.waitForTimeout(2500);
    // await helper.waitForXPathAndClick(acceptWarning);
    
    await page.waitForTimeout(5500);
    const timeout = 5000;
    let warningCTAVisible = false;

    try {
      await page.waitForXPath(acceptWarning, { visible: true, timeout });
      warningCTAVisible = true;
    } catch (error) {
      warningCTAVisible = false;
    }

    if ((warningCTAVisible = true)) {
      await helper.waitForXPathAndClick(acceptWarning);
    }
  }
  async submitForm1(){
    // await page.waitForTimeout(5500);
    // const timeout = 5000;
    // let CTAVisible = false;

    // try {
    //   await page.waitForXPath(acceptWarning1, { visible: true, timeout });
    //   CTAVisible = true;
    // } catch (error) {
    //     CTAVisible = false;
    // }

    // if ((CTAVisible = true)) {
    //   await helper.waitForXPathAndType(acceptWarning1);
    // }
    await page.waitForTimeout(2500);
    await helper.waitForXPathAndClick(confirmationCTA);
    await page.waitForTimeout(2500);

    await helper.isElementXpathVisible(pageTitle);
  }
}
export default new talentAndReviewPage();
