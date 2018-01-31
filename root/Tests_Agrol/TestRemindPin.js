module.exports = {

  'Test Remind Pin funcationality' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        //.assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

        //Home Page object validation

        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        //verify the Login Page Objects
        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        var cardBlockpage=client.page.SecurityPages()
        cardBlockpage.SecurityPageVerification()

        var RemindPinpage=client.page.remindPin()
        RemindPinpage.VerifyRemindPinSection()

  }
}
