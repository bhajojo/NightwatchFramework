module.exports = {
  'Test Recent Transaction' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')


        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()


        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        loginClass.ValidateLoginButton()

        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        //Home Page object validation
        var RecentTransaction=client.page.RecentTransaction()
        RecentTransaction.objectVerification()

        //verify the Recent Transactions
        RecentTransaction.RecentTransactionVerification()

      //  RecentTransaction.NoTransactions()
    }
};
