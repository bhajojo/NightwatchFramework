module.exports = {
  'Test My Pages Logout funcationality' : function (client) {
      var launchMyPageAgrol = client.page.launchMyPageEveryday();
      var FolderName=new Date().getTime();
      launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("everyday")
      //loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerificationEveryday()
      loginVerificationClass.loginMyPageVerification()

      //loginClass.ValidateLoginButton()

      //Enter the Credentials
      loginClass.EnterLoginCredentialsEveryday()

      //Logout verification
      var logoutPageVerification=client.page.PageLogout()
      logoutPageVerification.logout()

      //Verify the Login Page Again
      loginVerificationClass.loginMyPageVerification()

    }
};
