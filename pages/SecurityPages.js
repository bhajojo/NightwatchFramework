//Page Name:   Security- Card block
//Created By : Amruta Kale
//Created Date: 30-05-17
module.exports = function (browser) {
  this.SecurityPageVerification = function() {

    //Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();
    browserObject.click("@HomePageMenu");
    browser.pause(3000)
    browserObject.waitForElementPresent('@CardSecurityMenu', 2000);
    browserObject.click('@CardSecurityMenu');
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/CardBlock.jpg');

    browserObject.waitForElementPresent('@HeaderSecurityPage', 2000);
    browserObject.waitForElementPresent('@SecurityCardDropDown', 2000);
    //browserObject.waitForElementPresent('@SecurityCardBlockSection', 2000);
    browserObject.waitForElementPresent('@SecuirtyCustSupportText', 2000);
    browserObject.waitForElementPresent('@SecuirtyBlockCardText', 2000);
    browserObject.waitForElementPresent('@SecuirtyBlockCardCallNo', 2000);
    //browserObject.click('@SecuirtyBlockCardCallNo');

    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/BlockCard.jpg')
  }
}
