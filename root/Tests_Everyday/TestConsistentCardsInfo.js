module.exports = {
  'Test Consistent Card Info' : function (client) {
      var launchMyPageAgrol = client.page.launchMyPageEveryday();
      var FolderName=new Date().getTime();
      launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("everyday")
      //loginClass.loginMyPage()
      //loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerificationEveryday()
      loginVerificationClass.loginMyPageVerification()

      //Enter the Credentials
      loginClass.EnterLoginCredentialsEveryday()

      var HomePageVerification=client.page.HomePageVerification()
      HomePageVerification.HomePage()

      var ConsistentCardsInfo=client.page.ConsistentCardsInfo("everyday")
      ConsistentCardsInfo.VerifyCardsOnTransactions("everyday")
    }
};
