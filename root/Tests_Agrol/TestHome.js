module.exports = {
'Test My Pages Home Page' : function (client) {
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

        //Verify the Home Page
        var HomePageVerification=client.page.HomePageVerification()
        HomePageVerification.HomePage()

        //Verify the Profile Page
        var ViewProfile=client.page.ViewProfile()
        ViewProfile.ViewProfileDetails()
    }
};
