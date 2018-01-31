module.exports = {
  'Test Accounts Transaction' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        //.assert.title("Card Portal", "My page application is opened")

        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')
        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        //verify the Login Page Objects
        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        //Transaction Details
        var detailsTransactionClass=client.page.transactionDetails()
        detailsTransactionClass.showTransactionDetails()

    }
};
