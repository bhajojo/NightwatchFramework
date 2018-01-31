module.exports = {
  'Test Details Account' : function (client) {
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

    //Account Details
    var detailsClass=client.page.accountDetailsEveryday()
    detailsClass.showMyAccountDetailsEveryday("everyday")

    }
};
