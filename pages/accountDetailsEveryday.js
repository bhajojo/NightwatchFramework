module.exports = function (browser) {
this.showMyAccountDetailsEveryday = function(Cardtype) {

//Setup the Variables in required for reach Test
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();

  var fs = require("fs");
  if (Cardtype =="everyday")
  {
      var contents = fs.readFileSync("./TestDataEveryday/CreateTag.Json");
      var jsonContent = JSON.parse(contents);
  }

//Add Nickname from Preferences for showing it under Account and Card details
  //Click Hamburg Menu
  browserObject.click('@HomePageMenu');
  //Verify Profile option
  browserObject.click('@HomePageMenuProfile');
  //Click Preferences tab
  browserObject.waitForElementPresent('@PreferenceTab', 10000);
  browserObject.click('@PreferenceTab');
  //Click Edit button
  browser.pause(5000)
  browserObject.click('@EditButton');
  browser.pause(5000)
  //Clear value from the nickname field
  browserObject.clearValue('@Cardnicknameinput');
  browserObject.setValue('@Cardnicknameinput', jsonContent.EditNickname);
  browserObject.click('@SaveEditedNickname');
  browser.pause(10000)
  //Verify edited nickname under Card Details
  browserObject.click('@Homelink');

//Click Primary Card
  //Primary Card UI
  //Highlight Primary Card
  browserObject.waitForElementPresent('@HighlightedPrimaryCardEveryday', 3000);
  //Available Card credit
  browserObject.waitForElementPresent('@PrimaryMaskedCardNumberEveryday', 3000);
  //Card list icon
  browserObject.waitForElementPresent('@PrimaryCardHolderNameEveryday', 3000);

//Save Screenshot
  browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/primaryCardDetails.jpg')

//Account details UI
  // Credit Information
  //Credit used title
  browserObject.waitForElementPresent('@CreditUsedTitle', 3000);
  //Used Credit
  browserObject.waitForElementPresent('@CreditUsedAmount', 3000);
  //Credit Limit
  browserObject.waitForElementPresent('@CreditLimit', 3000);
  //Change limit static link
  browserObject.waitForElementPresent('@ChangeLimitLink', 3000);

  //Available Balance Information
  //Available Balance Title
  browserObject.waitForElementPresent('@AvailableBalanceTitle', 3000);
  //Account number
  browserObject.waitForElementPresent('@AvailableBalanceAmount', 3000);

  //Bonus information
  //Title
  browserObject.waitForElementPresent('@BonusTitle',3000);
  //Bonus amount
  browserObject.waitForElementPresent('@BonusAmount',3000);
  //Bonus info in 2 lines
  browserObject.waitForElementPresent('@BonusInfoLine1',3000);
  browserObject.waitForElementPresent('@BonusInfoLine2',3000);

  //Card Type Information
  //Card TYpe title
  browserObject.waitForElementPresent('@CardTitlePrimary', 10000);
  //Card Nickname
  browserObject.waitForElementPresent('@CardDetailsNickname', 10000);
  //Card Type
  browserObject.waitForElementPresent('@CardDetailsType', 10000);

}
}
