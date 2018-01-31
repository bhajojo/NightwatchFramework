module.exports = function (browser) {
  this.VerifyMainmenu = function() {

//Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

//Hamburg Menu identification
browserObject.waitForElementPresent('@HomePageMenu', 2000);

//Click Hamburg Menu
browserObject.click('@HomePageMenu');

//Save screenshot for Transaction Details
browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/hamburgMenu.jpg');

//Verify Menu options

//Verify Overview in Active state
browserObject.waitForElementPresent('@HomePageMenuOverview', 5000);

//Verify Other menu options
browserObject.waitForElementPresent('@HomePageMenuTransactions', 5000);
browserObject.waitForElementPresent('@HomePageMenuProfile', 5000);
browserObject.waitForElementPresent('@HomePageMenuTransferMoney', 5000);
browserObject.waitForElementPresent('@HomePageMenuPayments', 5000);
browserObject.waitForElementPresent('@HomePageMenuCreditLimit', 5000);
browserObject.waitForElementPresent('@HomePageMenuSecurity', 5000);
browserObject.waitForElementPresent('@HomePageMenuTAndCforCard', 5000);
browserObject.waitForElementPresent('@HomePageMenuTAndCforInsurance', 5000);
browserObject.waitForElementPresent('@HomePageMenuSECCI', 5000);

//Click Transactions Menu
browserObject.click('@HomePageMenuTransactions');

//Click Profile Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuProfile');

//Click Transfermoney Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuTransferMoney');

//Click Payments Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuPayments');

//Click Credit limit Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuCreditLimit');

//Click Security Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuSecurity');

//Click T and C Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuTAndCforCard');

//Click T and C for Insurance Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuTAndCforInsurance');

//Click SECCI Menu
browserObject.click('@HomePageMenu');
browserObject.click('@HomePageMenuSECCI');

}
}
