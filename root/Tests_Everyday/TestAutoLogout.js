module.exports = {
  'Test Auto logout' : function (client) {
    var launchMyPageEveryday = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageEveryday.navigate()
      .assert.title("nfs-app", "My page application is opened")
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')


      var loginClass=client.page.loginPage("everyday")
      loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerification()
      loginVerificationClass.loginMyPageVerification()


        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        //Account Details
        var AutoLogOut=client.page.AutoLogOut()
        AutoLogOut.PerformAutologout()

    }
};
