module.exports = function (browser) {
  this.VerifyPreferences = function() {

//Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

//Hamburg Menu identification
browserObject.waitForElementPresent('@HomePageMenu', 2000);

//Click Hamburg Menu
browserObject.click('@HomePageMenu');

//Verify Menu options
browserObject.click('@HomePageMenuProfile');

//Click Preferences tab
browserObject.waitForElementPresent('@PreferenceTab', 10000);
browserObject.click('@PreferenceTab');


//Save screenshot for Transaction Details
browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/preferences.jpg');

//Verify UI of Preferences Pages
//Header Elment
browserObject.waitForElementPresent('@HomePageMenu', 2000);
browserObject.waitForElementPresent('@HeaderTitle', 2000);
browserObject.waitForElementPresent('@NotificationIcon',2000);
browserObject.waitForElementPresent('@HeaderUsername', 2000);
browserObject.waitForElementPresent('@LogoutLink', 2000);

//Profile page Title and Navigation Link
browserObject.waitForElementPresent('@Profileheader', 7000);
browserObject.waitForElementPresent('@HomeBackButtonLink', 2000);
browserObject.waitForElementPresent('@ProfileLinkNavigation', 2000);

//Preferences page Subtitle and Information
browserObject.waitForElementPresent('@PreferencesSubtitle', 2000);
browserObject.waitForElementPresent('@SubtitleInfoText', 2000);

//Verify Communication METHODS
this.CommunicationMethod = function()
{
  //Defined object repository
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();

  //Change communication method to SMS
  browserObject.click("@SMSRadioButton");
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  browserObject.click("@RequestchangeButton");
  //Navigate to Secure mail and verify changed communication method Mail
  browserObject.click('@HomePageMenu');
  browserObject.click('@HomePageMenuMessages');
  browser.pause(3000)
  browserObject.click('@Clickfirstmessage');
  browser.pause(3000)
  browserObject.waitForElementPresent('@SMSMessageText', 2000);

  //Click Hamburg Menu
  browserObject.click('@HomePageMenu');
  browserObject.click('@HomePageMenuProfile')
  //Click Preferences tab
  browserObject.waitForElementPresent('@PreferenceTab', 10000);
  browserObject.click('@PreferenceTab');

  //Change communication method to Phone Call
  browserObject.click("@PhoneRadioButton");
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  browserObject.click("@RequestchangeButton");

  //Change communication method to Email
  browser.pause(3000)
  browserObject.click("@EmailRadioButton");
  browser.pause(3000)
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  browserObject.click("@RequestchangeButton");

}


//Verify QuickLink

//Verify QuickLink in Hidden State
this.VerifyQuicklinkHidden = function()
{
  //Defined object repository
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();

  //Quicklink title
  browserObject.waitForElementPresent('@QuickLinkTitle', 2000);

  //Identify quick link status - Visible
  var quicklinkstatus;

  for(i=2;i<=10;i++)
  {
    browser
    .getText(".//*[@id='container']//li["+i+"]//div[contains(@class,'quick-links__visibility--div')]",function(result)
    {
     quicklinkstatus=result.value;
     console.log(quicklinkstatus)
    })

   .perform(function()
   {

      for(j=2;j<=10;j++){
      if(quicklinkstatus=='Synlig')
      {
        browser.click(".//*[@id='container']//li["+j+"]//div[contains(@class,'quick-links__visibility--div')]")
        browser.pause(3000)
      }}
   }) // Verify quick link status
}
// Home page navigation
browserObject.click('@Homelink');

// Disabled quick links not present on Home page
browserObject.waitForElementNotPresent('@MessagesHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@DiscountMatrixHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@HelpAndSupportHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@PaymentsHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@TransferMoneyHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@CreditLimitHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@ApplyforanextracardHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@SecurityHomeQuicklink', 2000);
browserObject.waitForElementNotPresent('@TransactionsHomeQuicklink', 2000);

//Profile quick link present on Home page
browserObject.waitForElementPresent('@ProfileHomeQuicklink',2000);

}

//Verify QuickLink in Visible State
this.VerifyQuicklinkVisible = function()
{
   //Defined object repository
   var browserObject = browser.page.ObjectRepository();
   var FolderName=new Date().getTime();

   //Identify quick link status - Visible
   var quicklinkstatus;

   for(i=2;i<=10;i++)
   {
     browser
     .getText(".//*[@id='container']//li["+i+"]//div[contains(@class,'quick-links__visibility--div')]",function(result)
     {
      quicklinkstatus=result.value;
      console.log(quicklinkstatus);

    })

    .perform(function()
    {

       for(j=2;j<=10;j++){
       if(quicklinkstatus=='Dold')
       {
         browser.click(".//*[@id='container']//li["+j+"]//div[contains(@class,'quick-links__visibility--div')]")
         browser.pause(3000)
       }}
    }) // Verify quick link status
  }
  // Home page navigation
  browserObject.click('@Homelink');

  // Disabled quick links not present on Home page
  browserObject.waitForElementPresent('@MessagesHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@DiscountMatrixHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@HelpAndSupportHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@PaymentsHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@TransferMoneyHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@CreditLimitHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@ApplyforanextracardHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@SecurityHomeQuicklink', 2000);
  browserObject.waitForElementPresent('@TransactionsHomeQuicklink', 2000);

  //Profile quick link present on Home page
  browserObject.waitForElementPresent('@ProfileHomeQuicklink',2000);

  }

  //Verofy Card nicknames
  this.VerifyCardnicknames = function(Cardtype)
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

    //Title
    browserObject.waitForElementPresent('@CardNicknamesTitle', 2000);
    //Edit button
    browserObject.waitForElementPresent('@EditButton', 2000);
    //Card holder name and Number Details
    browserObject.waitForElementPresent('@CardnicknamesPreferences', 2000);
    //Card nickname value
    browserObject.waitForElementPresent('@CardnicknamesValue', 2000);
    //Click Edit button
    browser.pause(5000)
    browserObject.click('@EditButton');
    browser.pause(5000)
    //UI of Edit Card nickname
    browserObject.waitForElementPresent('@CancelEditNickname', 2000);
    browserObject.waitForElementPresent('@CardnicknamesPreferences', 2000);
    browserObject.waitForElementPresent('@CardnicknamesValue', 2000);
    browserObject.waitForElementPresent('@SaveEditedNickname', 5000);
    //Click nickname field
    //browserObject.click('@Cardnicknameinput');
    //Clear value from the nickname field
    browserObject.clearValue('@Cardnicknameinput');
    browserObject.setValue('@Cardnicknameinput', jsonContent.EditNickname);
    browserObject.click('@SaveEditedNickname');
    browser.pause(10000)
    //Verify edited nickname under Card Details
    browserObject.click('@Homelink');
    browserObject.waitForElementPresent('@NicknameHomescreen', 2000);
    //Verify edited nickname under Transaction List
    browserObject.click('@MoreTransactionLink');
    browserObject.waitForElementPresent('@NicknameTransactionList', 2000);
    //Verify edited nickname under Transaction Search
    browserObject.click('@TransactionSearchFilter');
    browser.pause(3000)
    browserObject.waitForElementPresent('@NicknameTransactionSearch', 5000);
    //Verify edited nickname under Transaction Details
    browserObject.click('@NicknameTransactionList');
    browserObject.waitForElementPresent('@NicknameTransactionDetails', 2000);

  }

}
}
