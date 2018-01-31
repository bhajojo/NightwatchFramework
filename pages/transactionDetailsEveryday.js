module.exports = function (browser) {
  this.showTransactionDetails = function() {

//Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

//Header Elment
browserObject.waitForElementPresent('@HeaderTitle', 2000);
browserObject.waitForElementPresent('@NotificationIcon',2000);
browserObject.waitForElementPresent('@HeaderUsername', 2000);
browserObject.waitForElementPresent('@LogoutLink', 2000);

//Click Fuel Tranaction Entry from 'Recent Transaction'
browserObject.waitForElementPresent('@NavigateFuelTransactionDetails', 5000);
browserObject.click('@NavigateFuelTransactionDetails');

//Save screenshot for Transaction Details
browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/transactionDetails.jpg');

//Transaction Details Heading text
browserObject.waitForElementPresent('@TransactionDetailsHeading', 2000);

//Navigation Path UI
browserObject.waitForElementPresent('@HomeLinkNavigation', 2000);
browserObject.waitForElementPresent('@TransactionLinkNavigation', 2000);
browserObject.waitForElementPresent('@TransactionDetailsLinkNavigation', 2000);

//Transaction Summary UI
browserObject.waitForElementPresent('@IconTransactionSummary', 2000);
browserObject.waitForElementPresent('@AmountTransactionSummary', 2000);
browserObject.waitForElementPresent('@BeneficiaryTransactionSummary', 2000);
browserObject.waitForElementPresent('@TransactionTypeSummary', 2000);
browserObject.waitForElementPresent('@DateTransactionSummary', 2000);

//Transaction Details UI
browserObject.waitForElementPresent('@CardLabelTransactionDetails', 2000);
browserObject.waitForElementPresent('@CardValueTransactionDetails', 2000);
browserObject.waitForElementPresent('@VATLabelTransactionDetails', 2000);
browserObject.waitForElementPresent('@VATValueTransactionDetails', 2000);

//Footer Element
// browserObject.waitForElementPresent('@SupportMediaLabel', 2000);
// browserObject.waitForElementPresent('@CustomerCareLabel', 2000);
// browserObject.waitForElementPresent('@FacebookLink', 2000);
// browserObject.waitForElementPresent('@TwitterLink', 2000);

//Transaction details component

browserObject.click('@HomeLinkNavigation');

//Click More Transaction Button
browserObject.click('@MoreTransactionLink');

//Click Transaction link
browserObject.waitForElementPresent('@TransactionLinkNavigation', 5000);
browserObject.click('@TransactionLinkNavigation');

//Verify the Heading on the page
browserObject.expect.element("@TransactionLabel").to.be.present.after(2000)
}
}
