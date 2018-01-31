module.exports = function (browser) {
  this.MakeTransferMoney = function() {
  {
    //Defined object repository
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    //Click Menu button
    browserObject.click("@HomePageMenu");
    //Select Transfer Money
    browserObject.click('@HomePageMenuTransferMoney');

    //Save screenshot for Transfer money
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/transfermoney.jpg');

    //UI of Transfer Money page
    //Header elements
    //Header Elment
    browserObject.waitForElementPresent('@HomePageMenu', 2000);
    browserObject.waitForElementPresent('@HeaderTitle', 2000);
    browserObject.waitForElementPresent('@NotificationIcon',2000);
    browserObject.waitForElementPresent('@HeaderUsername', 2000);
    browserObject.waitForElementPresent('@LogoutLink', 2000);

    //Transfer Money page Title and Navigation Link
    browserObject.waitForElementPresent('@TransferMoneyTitle', 2000);
    browserObject.waitForElementPresent('@HomeBackButtonLink', 2000);
    browserObject.waitForElementPresent('@TransferMoneyLinkNavigation', 2000);

    //Verify Transfer Money page contents
    //Transfer amount title
    browserObject.waitForElementPresent('@TransferAmountTitle', 2000);
    //Transfer amount field
    browserObject.waitForElementPresent('@TransferAmountInput', 2000);
    //Info text
    //browserObject.waitForElementPresent('@MoneyTransferInfo1', 2000);
    //To account title
    browserObject.waitForElementPresent('@ToAccountTitle', 2000);
    //To account field
    browserObject.waitForElementPresent('@ToAccountPlaceholder', 2000);
    //Transfer button
    browserObject.waitForElementPresent('@TransferButton', 2000);
    //Info text
    browserObject.waitForElementPresent('@MoneyTransferInfo2', 2000);
}
}
//Verofy Invalid-valid input validations
this.VerifyInputValidations = function(Cardtype)
{
  //Defined object repository
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();

  var fs = require("fs");
  if (Cardtype =="agrol")
  {
      var contents = fs.readFileSync("./TestDataAgrol/CreateTag.Json");
      var jsonContent = JSON.parse(contents);
  }
  //Enter invalid amount
  browserObject.clearValue('@TransferAmountInput');
  browserObject.setValue('@TransferAmountInput', jsonContent.InvalidAmount);

  //Enter invalid To account
  browserObject.clearValue('@ToAccountPlaceholder');
  browserObject.setValue('@ToAccountPlaceholder', jsonContent.InvalidToAccount);

  //Click Transfer button
  //browserObject.click("@TransferButton");
  //Work Around for button click  using Java Script code

  browser.execute(function() {
          document.getElementsByClassName('button button--primary').item(0).click()
  })
  
  browser.pause(3000)
  //Error messages for Invalid amount and Invalid to account
  browserObject.waitForElementPresent('@InvalidAmountError', 2000);
  browserObject.waitForElementPresent('@InvalidToAccountError', 2000);

  //Enter Valid amount
  browserObject.clearValue('@TransferAmountInput');
  browserObject.setValue('@TransferAmountInput', jsonContent.ValidAmout);

  //Enter Valid To account
  browserObject.clearValue('@ToAccountPlaceholder');
  browserObject.setValue('@ToAccountPlaceholder', jsonContent.ValidToAccount);

  //Click Transfer button
  browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
  })

  //Validate with BankID manually
  browser.pause(20000)

  //Success message
  browserObject.waitForElementPresent('@TransferSuccessMessage', 2000);
}
//Verify Sent email for transfer
this.VerifyTransferSentEmail = function(Cardtype){
  //Defined object repository
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();

  //Click Menu button
  browserObject.click("@HomePageMenu");
  //Click Messages options
  browserObject.click('@MessagesLabel');
  browser.pause(3000)
  browserObject.click('@Clickfirstmessage');
  browser.pause(3000)
  browserObject.waitForElementPresent('@TransferMessageText', 2000);

}
}
