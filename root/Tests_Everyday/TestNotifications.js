module.exports = {
  'Test My Pages Notifications' : function (client) {
      var launchMyPageAgrol = client.page.launchMyPageAgrol();
      var FolderName=new Date().getTime();
      launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("agrol")
      //loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerification()
      loginVerificationClass.loginMyPageVerification()

      loginClass.ValidateLoginButton()

      //Enter the Credentials
      loginClass.EnterLoginCredentials()

      var HomePageVerification=client.page.HomePageVerification()
      HomePageVerification.HomePage()

      var NotificationVerification=client.page.Notification()
      NotificationVerification.VerifyNotificationIcon()
    }
};
