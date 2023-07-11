import helper from "../utils/helper";

const goToMyClient = `//div[@title='My Client Groups']`;
const newPerson = `//a[@id='pt1:_UISnvr:0:nv_itemNode_workforce_management_new_person']`;
const changeHireTitle = `//input[@title='Change Hire ']`;
const hireAction = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:selectOneChoice1::drop']`;
const hireActionDropDown = `//tbody/tr[1]/td[1]/ul[1]/li[3]`;
const hireEmployee = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:cl01Upl:UPsp1:cl01Pce:cl01Lv:1:cl01Pse:cl01Cl']`;
const hireReason = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:selectOneChoice2::drop']`;
const hireRasonDropDown = `//li[contains(text(),'Hire to fill vacant position')]`;
const legalEmployer = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:selectOneChoice3::lovIconId']`;
const legalEmployerDropDown = `//span[contains(text(),'US2 Legal Entity')]`;
const lastName = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:r1:0:i1:4:it20::content']`;
const firstName = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:r1:0:i1:5:it60::content']`;
const preferedPronoun = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:r1:0:i1:6:selectOneChoice119::drop']`;
const prederedPronounDropdown = `//li[contains(text(),'(He/Him)')]`;
const title = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:r1:0:i1:7:selectOneChoice4::drop']`;
const titleDropdown = `//li[contains(text(),'Ms.')]`;
const gender = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:soc3::drop']`;
const genderDropdown = `//li[contains(text(),'Male')]`;
const dateOfBrith = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:pt_r1:0:id3::content']`;
const nextCTA = `//div[@title='Next']`;

const personNumber = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:0:SP1:NewPe1:0:r1:0:it1::content']`;
// Home Address

const addressLine1 = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:1:SP1:Perso2:0:Perso1:0:Maint1:0:i1:0:inputText17::content']`;
const zipCode = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:1:SP1:Perso2:0:Perso1:0:Maint1:0:i1:3:inputComboboxListOfValues28::content']`;

// Work relation

const I9Status = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:2:sP2:df2_WorkRelationshipLegDDFIterator_I9_STATUS_DisplayUS::lovIconId']`;
const I9StatusDropDown = `//span[contains(text(),'Verified')]`;
const eVerifyStatus = ``;
const expire = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:2:sP2:df2_WorkRelationshipLegDDFIterator_I9_EXPIRATIONUS::content']`;
const newHire = ``;
const expReason = ``;
const medicalInsuranceAvailable = ``;
const medicalInsuranceAvailableDate = ``;
const recallRight = ``;

//payroll Details:

const businessUnit = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:2:sP2:NewPe3:0:NewPe1:0:businessUnitId::lovIconId']`;
const businessUnitDropDown = `(//span[contains(text(),'01Apple US Business Unit')])[1]`;
const assignmentStatus = `//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:2:sP2:NewPe3:0:NewPe1:0:selectOneChoice2::drop']`;
const assignmentStatusDropDwon = `//li[contains(text(),'Active - Payroll Eligible')]`;
const projectEndDate = `//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:pt1:pt_r1:2:sP2:NewPe3:0:NewPe1:0:id1::content']`;

class MyClient {
  async goToMyCleintPage() {
    await helper.waitForXPathAndClick(goToMyClient);
    await page.waitForTimeout(3500);
    await page.evaluate(`window.confirm = () => true`);
    await helper.waitForXPathAndClick(newPerson);
    await page.evaluate(`window.confirm = () => true`);
    await page.evaluate(() => {
      window.onbeforeunload = null;
    });
    await page.waitForNavigation(), await page.waitForTimeout(2500);
    await page.evaluate(() => {
      window.onbeforeunload = null;
    });
    await page.evaluate(`window.confirm = () => true`);
  }

  async goToHireEmployee() {
    await page.waitForTimeout(2500);

    await helper.waitForXPathAndClick(hireEmployee);
  }

  async enterBasicDetails() {
    await page.waitForTimeout(3500);
    //   const hireActionVisible = await page.waitForXPath(changeHireTitle, { visible: true, timeout: 0 })
    //   .then(() => true)
    //   .catch(() => false);

    // if (hireActionVisible) {
    //   console.log("visible")
    //   await helper.waitForXPathAndClick(hireAction);
    //   await helper.waitForXPathAndClick(hireActionDropDown);
    // }
    const timeout = 5000;
    let hireActionVisible = false;

    try {
      await page.waitForXPath(changeHireTitle, { visible: true, timeout });
      hireActionVisible = true;
    } catch (error) {
      hireActionVisible = false;
    }

    if (hireActionVisible) {
      console.log("visible");
      await helper.waitForXPathAndClick(hireAction);
      await helper.waitForXPathAndClick(hireActionDropDown);
    }

    await page.waitForTimeout(1500);
    await helper.waitForXPathAndClick(hireReason);
    await helper.waitForXPathAndClick(hireRasonDropDown);
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndClick(legalEmployer);
    await helper.waitForXPathAndClick(legalEmployerDropDown);
    await page.waitForTimeout(2500);

    let personNumberVisible = false;

    try {
      await page.waitForXPath(personNumber, { visible: true, timeout });
      personNumberVisible = true;
    } catch (error) {
      personNumberVisible = false;
    }

    if (personNumberVisible) {
      console.log("visible");
      await helper.waitForXPathAndType(personNumber, "123456789");
    }

    await helper.waitForXPathAndType(lastName, "zulfiqar");
    await helper.waitForXPathAndType(firstName, "waqas");
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndClick(preferedPronoun);
    await helper.waitForXPathAndClick(prederedPronounDropdown);
    await helper.waitForXPathAndClick(title);
    await helper.waitForXPathAndClick(titleDropdown);
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndClick(gender);
    await helper.waitForXPathAndClick(genderDropdown);
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndType(dateOfBrith, "01/01/2020");
  }

  async enterHomeAddress() {
    await helper.waitForXPathAndClick(nextCTA);
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndType(zipCode, "94901");
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndType(addressLine1, "acbasod");
    await page.waitForTimeout(1500);
  }

  async enterWorkRelation() {
    await helper.waitForXPathAndClick(nextCTA);
    await helper.waitForXPathAndClick(I9Status);
    await helper.waitForXPathAndClick(I9StatusDropDown);
    await page.waitForTimeout(1500);
    await helper.waitForXPathAndType(expire, "01/01/2024");

    await helper.waitForXPathAndClick(nextCTA);
    await page.waitForTimeout(2500);
  }
}
export default new MyClient();
