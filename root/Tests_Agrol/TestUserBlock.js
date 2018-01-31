module.exports ={
  'Test User Block' : function (client) {
      var launchMyPageAgrol = client.page.launchMyPageAgrol();
      var FolderName=new Date().getTime();
      var browserObject = client.page.ObjectRepository();

      launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')


  //user is able to login for third time if he enters incorrect password for 2 times
        var UserBlocked=client.page.loginPage("agrol")
        UserBlocked.userBlocked()
        browserObject.waitForElementPresent('@InvalidPwdMessage', 10000);
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/InvalidPwdMessage.png')

        var UserBlocked=client.page.loginPage("agrol")
        UserBlocked.userBlocked()
        browserObject.waitForElementPresent('@InvalidPwdMessage', 10000);
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/InvalidPwdMessage.png')

        var UserBlocked=client.page.loginPage("agrol")
        UserBlocked.EnterLoginCredentials()
        //browserObject.waitForElementPresent('@PrimaryCardLabel', 2000);
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/SuccessfulLogin.png')

        var logoutPageVerification=client.page.PageLogout()
        logoutPageVerification.logout()

        //launchMyPageAgrol.navigate()
//user is blocked after user enters incorrect password for three times
      var UserBlocked=client.page.loginPage("agrol")
      UserBlocked.userBlocked()
      browserObject.waitForElementPresent('@InvalidPwdMessage', 10000);
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/InvalidPwdMessage.png')

      var UserBlocked=client.page.loginPage("agrol")
      UserBlocked.userBlocked()
      browserObject.waitForElementPresent('@InvalidPwdMessage', 10000);
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/InvalidPwdMessage.png')

      var UserBlocked=client.page.loginPage("agrol")
      UserBlocked.userBlocked()
      browserObject.waitForElementPresent('@UserBlockedMessage', 10000);
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/USerBlockedMessage.png')

      var forgetPwd=client.page.ForgetPasswd("agrol")
      forgetPwd.ForgetPasswordPage()

    }
  }
