module.exports = {
  'Test Profile Page' : function (client) {
    var launchMyPage = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPage.navigate()
        .assert.title("Card Portal", "My page application is opened")

        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')
        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        //verify the Login Page Objects
        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        //Account Details
        var detailsClass=client.page.accountDetails()
        detailsClass.showMyAccountDetails()

    }
};
