module.exports = function (browser,Cardtype)
{

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
  //var jsonContent = JSON.parse(contents);
  var FolderName=new Date().getTime();

  //function to maximize the window
  this.loginMyPage = function()
  {
    //Script to type user name and the Password
    //browser.windowMaximize()
    //browserObject.waitForElementPresent('@loginlink', 2000);
  }

  //function to validate login button
  this.ValidateLoginButton = function()
  {

    browser.waitForElementPresent(".//h1//span[text()='Logga in']", 1500)
        //.element('css selector', 'iframe[src*="nfs1.mypages.int.tds.tieto.com:8083/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {
        .element('css selector', 'iframe[src*="portal-mypages-uat.cloudapps.ocp-nuat.nordea.prd.a.tecdomain.net/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {    
            browser.frame({ELEMENT: frame.value.ELEMENT}, () => {
            // Do your stuff here
            browserObject.clearValue('@UsernameInput');
            browserObject.setValue('@UsernameInput', jsonContent.UserName);
            browser.useCss();
            browser.assert.attributeEquals(".button", "disabled", "true")
            browser.useXpath();
            browserObject.setValue('@PasswordInput', jsonContent.OneCharPassword);
            browser.useCss()
            browser.assert.notEqual(".button", "disabled", "true")
            browser.useXpath();
            browserObject.clearValue('@PasswordInput')      
        });
    })
    .frame(null)
    //CLICK ON mOBILE BANK TAB AND THEN AGAIN ON THE PASSWORD TAB
    browserObject.click('@mobileBankLink')
    browserObject.click('@passwordLink')
        
  }

  //function to enter the login credentials
  this.EnterLoginCredentials = function()
  {
      //browser.pause(10000)

      browser.waitForElementPresent(".//h1//span[text()='Logga in']", 1500)
            //.element('css selector', 'iframe[src*="nfs1.mypages.int.tds.tieto.com:8083/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {
            .element('css selector', 'iframe[src*="portal-mypages-uat.cloudapps.ocp-nuat.nordea.prd.a.tecdomain.net/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {  
                browser.frame({ELEMENT: frame.value.ELEMENT}, () => {
                // Do your stuff here
                   browserObject.clearValue('@UsernameInput');
                   browser.pause(1000)
                   browserObject.clearValue('@PasswordInput');
                    //console.log(jsonContent.UserName)
                    //console.log(jsonContent.Password)
                    browser.pause(1000)
                    browserObject.setValue('@UsernameInput', jsonContent.UserName);
                    browser.pause(2000)
                    browserObject.setValue('@PasswordInput', jsonContent.Password );
                    //browser.pause(1000)    
                    //Click on Login button
                    //browserObject.click('@LoginButton')
                    browser.useCss();
                    browser.submitForm('form#kc-form-login')
                    browser.useXpath();

                });
            })
            .frame(null)
      
      //Click on Logout
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/Cards_Page.png')
      //browserObject.click('@LogoutLink')

  }

  this.EnterLoginCredentialsEveryday = function()
  {
      browser.pause(1000)
      browserObject.clearValue('@UsernameInput');
      browser.pause(1000)
      browserObject.setValue('@UsernameInput', jsonContent.UserName_Everyday);
      browser.pause(1000)
      //Click on Login button
      browserObject.click('@LoginButton')
      browser.pause(20000)
      //Click on Logout
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/Cards_Page.png')
      //browserObject.click('@LogoutLink')

  }

  this.EnterLoginCredentialsAgrol = function()
  {
      browser.pause(1000)
      browserObject.clearValue('@UsernameInput');
      browser.pause(1000)
      browserObject.setValue('@UsernameInput', jsonContent.UserName);
      browser.pause(1000)
      //Click on Login button
      browserObject.click('@LoginButton')
      browser.pause(20000)
      //Click on Logout
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/Cards_Page.png')
      //browserObject.click('@LogoutLink')

  }

  //function to verify the expired password
  this.ExpirePassword = function()
  {
        browserObject.click('@passwordLink')
        browserObject.waitForElementPresent('@UsernameInput', 2000);
        browserObject.setValue('@UsernameInput', jsonContent.UserName);
        browserObject.setValue('@PasswordInput', jsonContent.Password);

        //Click on Login button
        browserObject.click('@LoginButton')
        browserObject.waitForElementPresent('@PasswordExpMessage', 10000);
        browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/PasswordExpirationMsg.png');
  }

  //function to verify blocked user
  this.userBlocked = function()
  {
      browserObject.click('@passwordLink')
      browserObject.waitForElementPresent('@UsernameInput', 2000);
      browserObject.clearValue('@UsernameInput');
      browserObject.clearValue('@PasswordInput');
      browserObject.setValue('@UsernameInput', jsonContent.UserName);
      browserObject.setValue('@PasswordInput', jsonContent.IncorrectPassword);

      //Click on Login button
      browserObject.click('@LoginButton')
  }


}
