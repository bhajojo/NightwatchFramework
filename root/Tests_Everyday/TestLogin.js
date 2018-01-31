module.exports = {
  'Test My Pages Login' : function (client) {
    var launchMyPageEveryday = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageEveryday.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("everyday")
      //loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerification("everyday")
      loginVerificationClass.LoginBankID()

      //loginClass.ValidateLoginButton()

      //Enter the Credentials
      //loginClass.EnterLoginCredentials()

      var HomePageVerification=client.page.HomePageVerification()
      HomePageVerification.HomePage()   
    }
};
