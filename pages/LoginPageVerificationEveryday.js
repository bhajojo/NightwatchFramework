module.exports = function (browser,Cardtype) {

  var browserObject = browser.page.ObjectRepository();
  var fs = require("fs");
  if (Cardtype =="agrol")
  {
      var contents = fs.readFileSync("./TestDataAgrol/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }
  if (Cardtype =="mediamarkt")
  {
      var contents = fs.readFileSync("./TestDataMediaMarkt/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }
  if (Cardtype =="everyday")
  {
      var contents = fs.readFileSync("./TestDataEveryday/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }

  //function to verify the login page
  this.loginMyPageVerification = function(Cardtype) {

    //Setup the Variables in required for reach Test

    var FolderName=new Date().getTime();

    //Verify the Objects in the Page
    browserObject.waitForElementPresent('@loginHeader', 5000);
    //browserObject.waitForElementPresent('@mobileBankLink', 500);
    //browserObject.waitForElementPresent('@passwordLink', 500);
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_Page.png')
    //browser.useCss();
    //browserObject.click('@passwordLink');
    browserObject.waitForElementPresent('@UsernameInput', 2000);

    //Verify if the button is disabled
    //browser.assert.attributeEquals(".button", "disabled", "true")
    //browser.useXpath();

    //Verify if the objects are present on the login page
    browserObject.expect.element('@UsernameInput').to.be.present.before(500)
    browserObject.waitForElementPresent('@UsernameInput', 500);
    //browserObject.waitForElementPresent('@PasswordInput', 500);
    //browserObject.waitForElementPresent('@ForgotPasswordLink', 500);
    browser.useCss();
    browser.assert.visible(".input[placeholder='YYYYMMDDNNNN']")
    browser.useXpath();
  }

  //*******************************************************************************************************
      //Function:      Login with the BANK ID
      //Created By :   Bharat Joshi
      //Creation Date: 30-Jun-2017
// ******************************************************************************************************
  this.LoginBankID = function()
  {
    //Select Tab Mobile Bank ID
    browserObject.click('@mobileBankLink')

    //Enter the User Name
    browserObject.setValue('@UsernameInput', jsonContent.UserName);

    //Click on Login Button
    browserObject.click('@LoginButton')

    //


  }
}
