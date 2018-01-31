module.exports = function (browser,Cardtype) {
  this.HomePage = function() {

    //Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    //Verify the Objects in the Page
    //browserObject.waitForElementPresent('@HomePageLink', 10000);
    //browserObject.waitForElementPresent('@MyCardLabel', 2000);
    //browserObject.waitForElementPresent('@PrimaryCardLabel', 2000);
    browserObject.click("@HomePageMenu");
    browserObject.waitForElementPresent('@NotificationIcon', 5000);
    browserObject.waitForElementPresent('@TransferAmountMenu', 2000);
    browserObject.waitForElementPresent('@CardSecurityMenu', 2000);
    //browserObject.waitForElementPresent('@UpcomingPaymentsLabel', 2000);
    //browserObject.waitForElementPresent('@UpcomingPaymentsLabel1', 2000);
    //browserObject.waitForElementPresent('@MinimumAmountLabel', 2000);
    browserObject.waitForElementPresent('@UnbilledTrnLabel', 2000);
    browserObject.waitForElementPresent('@PersonalServicesLabel', 2000);
    //browserObject.waitForElementPresent('@MessagesLabel', 2000);
    //browserObject.waitForElementPresent('@CreditLimitLabel', 2000);
    //browserObject.waitForElementPresent('@HelpAndSuuportLabel', 2000); this Label is not availabel
    browserObject.waitForElementPresent('@ProfileLabel', 2000);

    //Need to uncomment once after the EPI server integration is done
    // browserObject.waitForElementPresent('@SupportMediaLabel', 2000);
    // browserObject.waitForElementPresent('@CustomerCareLabel', 2000);
    // browserObject.waitForElementPresent('@FacebookLink', 2000);
    // browserObject.waitForElementPresent('@TwitterLink', 2000);
    browserObject.click("@HomePageMenu");
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/Home_Page.jpg')

  }
}
