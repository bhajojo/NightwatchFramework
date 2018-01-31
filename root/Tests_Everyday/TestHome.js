module.exports = {

  'Test My Pages Home Page' : function (client) {
    var launchMyPageEveryday = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageEveryday.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Home Page object validation

        var loginClass=client.page.loginPage("everyday")

        //verify the Login Page Objects
        var loginVerificationClass=client.page.LoginPageVerificationEveryday()
        loginVerificationClass.loginMyPageVerification()

        //Enter the Credentials
        loginClass.EnterLoginCredentialsEveryday()

        var HomePageVerification=client.page.HomePageVerification()
        HomePageVerification.HomePage()

        var ViewProfile=client.page.ViewProfile()
        ViewProfile.ViewProfileDetails()
    }
};
