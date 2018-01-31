module.exports = {
  'Test Profile Page' : function (client) {
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

      //Home Page object validation
        var viewProfile=client.page.ViewProfile()
        viewProfile.ViewProfileDetails()
    }
};
