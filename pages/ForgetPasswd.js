
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
  var FolderName=new Date().getTime();

  //Description : Verification of Forget Password Page
  //Created By  : Bharat Joshi
  this.ForgetPasswordPage = function()
  {
      browser.windowMaximize()
      browserObject.click('@passwordLink')
      browser.pause(3000);
      browser.waitForElementPresent(".//h1//span[text()='Logga in']", 1500)
      //.element('css selector', 'iframe[src*="nfs1.mypages.int.tds.tieto.com:8083/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {
      .element('css selector', 'iframe[src*="portal-mypages-uat.cloudapps.ocp-nuat.nordea.prd.a.tecdomain.net/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {    
      browser.frame({ELEMENT: frame.value.ELEMENT}, () => {
          // Do your stuff here
          browserObject.waitForElementPresent('@loginlink', 5000);
          browser.pause(3000)
          //browserObject.waitForElementPresent('@ForgotPasswordLink', 2000);
          browserObject.click('@UsernameInputForgotPassword')
          browser.keys(browser.Keys.TAB)
          browser.keys(browser.Keys.TAB)
          browser.keys(browser.Keys.ENTER)
          
          //browserObject.click('@ForgotPasswordLink')
          browser.pause(3000);
          browserObject.waitForElementPresent('@FPResetButtonDisable', 1000);
          browserObject.waitForElementPresent('@FPCancelButton', 2000);
          
          //Enter the Username and then click on cancel
          browserObject.setValue('@UsernameInputForgotPassword', jsonContent.UserName);
          browserObject.click('@FPResetButton')
          browser.pause(3000);
        
          //var message= browserObject.getText('@FPPasswordResetLinkSendMessage')
          var successMsg;
          browser.getText(".//div[@class='alert alert-success']",function(result)
          {
          successMsg=result.value;
          console.log(successMsg);

        if (successMsg == "Vi har mailat dig en länk till återställningsformulär för lösenord. Kontrollera din inkorg. Det kan ta en stund att komma fram. Var vänlig ring +46 012 3456 89 om du behöver hjälp.")
        {
        //browserObject.waitForElementPresent('@FPPasswordResetLinkSendMessage', 500);
        //browser.pause(2000);
        //Open Gmail - Set UserName and Password
        browser.init().url('http://gmail.com')
        browserObject.setValue("@gmailUserID", "ebsnbtesting@gmail.com")
        browserObject.click('@gmailNextbtn')
        browser.pause(1000)
        browserObject.waitForElementPresent("@gmailPassword",5000)
        browser.pause(1000)
        browserObject.setValue("@gmailPassword", "Netbank@123")
        browser.pause(1000)
        browserObject.click('@gmailPasswordNextbtn')
        browser.pause(5000)
        //browserObject.expect.element("xpath=.//table[@id=':2s']//tr[1]//span[contains(.,'tieto.keycloak')]").to.be.present.before(10000)
        browserObject.waitForElementPresent('@gMailFirstRowSubject', 10000)

        //click on the Latest Mail in the mail box
        browserObject.click('@gMailFirstRowSubject')
        var message= browserObject.getText('@gMailPasswordResetLink',function(result)
        {
            //fetch the forget password link and repalce the ip with the application URL
            gMailPasswordResetLink=result.value;
            var res = gMailPasswordResetLink.replace("192.168.0.3", "nfs1.mypages.int.tds.tieto.com")
            browser.pause(1000)

            //Click on Delete mail icon
        browserObject.click(".//*[@id=':5']/div[2]/div[1]//div[2]/div[3]")

        //Swich to Keycloak window
        browser.execute(function(res)
        {
            window.open(res);
        },[res]);
        browser.pause(1000)
        browser.window_handles(function(results)
        {
            var keycloakWindow= results.value[1];
            browser.switchWindow(keycloakWindow)

            //Reset the Password in Keycloak window
            browser.setValue(".//input[@id='password-new']", "mediam@123")
            browser.setValue(".//input[@id='password-confirm']", "mediam@123")
            browser.click(".//input[@value='Submit']")

            //Verify the successMsg
            browser.expect.element(".//div[@id='kc-header-wrapper']").text.to.contain("YOUR ACCOUNT HAS BEEN UPDATED").before(5000)
        });
      })
    }
  else if (successMsg == "Sorry, the request failed because of network or server issue")
  {
      browserObject.waitForElementPresent('@FPNetworkErrMessage', 5000);
      browserObject.waitForElementPresent('@FPResetButtonDisable', 5000)

      //Click on Continue
      browserObject.click('@FPCancelButton')
      browserObject.waitForElementPresent('@ForgotPasswordLink', 500);
  }
  browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/forgetPwd_Page.png')

  //Close the browser window after the exeuction
  browser.closeWindow()
  });
  })
    })
    .frame(null)
    
    // Enter the username and click on reset
    // browserObject.setValue('@UsernameInputForgotPassword', jsonContent.UserName);
    // browser.pause(1000);
    // browserObject.click('@FPResetButton')
    

    //Verify the Message on the page
    
}

this.ValidationFP = function() {

  //Setup the Variables in required for reach Test
   var browserObject = browser.page.ObjectRepository();
  var fs = require("fs");
  var contents = fs.readFileSync("./TestDataAgrol/Forgetpwd.json");
  var jsonContent = JSON.parse(contents);
  var FolderName=new Date().getTime();

  browser.windowMaximize()
  browserObject.click('@passwordLink')
  browser.pause(3000);
  browser.waitForElementPresent(".//h1//span[text()='Logga in']", 1500)
  //.element('css selector', 'iframe[src*="nfs1.mypages.int.tds.tieto.com:8083/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {
    .element('css selector', 'iframe[src*="portal-mypages-uat.cloudapps.ocp-nuat.nordea.prd.a.tecdomain.net/auth/realms/mypages/protocol/openid-connect/auth"]', (frame) => {    
    browser.frame({ELEMENT: frame.value.ELEMENT}, () => {
    // Do your stuff here
    browserObject.waitForElementPresent('@loginlink', 5000);
    browser.pause(8000)
    browserObject.waitForElementPresent('@ForgotPasswordLink', 2000);
    browserObject.click('@ForgotPasswordLink')
    browser.pause(5000);
    browserObject.waitForElementPresent('@UsernameInputForgotPassword', 500);
    browserObject.setValue('@UsernameInputForgotPassword', jsonContent.SSN);
    browser.pause(2000);
    browserObject.click('@FPResetButton')
    browser.pause(7000);
        });
    })
    .frame(null)

  //browserObject.click('@FPResetButton')
  //var errMessage;
  //browser.expect.element("//div[@class='error-message__details").text.to.contain("you do not have registered email id, please contact customer support").before(3000)
//  Do not delete  below code
//   browser.getText("//div[@class='error-message__details']",function(result) {
//   errMessage=result.value;
//   if (errMessage == "you do not have registered email id, please contact customer support")
//   {
//     browserObject.waitForElementPresent('@FPWithoutEmailSSNErrMessage', 1000);
//   }
//   else
//   {
//     browserObject.waitForElementPresent('@FPNetworkErrMessage', 1000);
//   }
// })
  //browserObject.clearValue('@UsernameInputForgotPassword');
  // browserObject.waitForElementPresent('@ForgotPasswordLink', 2000);
  // browserObject.click('@ForgotPasswordLink')
  // browser.pause(2000);
  // browserObject.setValue(".//*[@id='container']//div[1]/input", jsonContent.SSN_1);
  // browser.pause(7000);
  // browserObject.click('@FPResetButton')
  // browser.pause(2000);
  // browserObject.waitForElementPresent('@FPInvalidSSN', 1000);
  // browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/ValidationFP.png')
  // browserObject.click('@FPCancelButton')
}
}
