module.exports = {
  'Test Send Message' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        //.assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')
        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        loginClass.ValidateLoginButton()
        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        var SendMessage=client.page.SendMessage("agrol")
        SendMessage.objectVerification();
        SendMessage.ErrorMessageValidation();
        SendMessage.SendMsg();
        SendMessage.SendMsg5000Char();
        SendMessage.SaveandDeleteMessage();
        SendMessage.DeletionStartFromScratch();
        SendMessage.SendDraftMail();
    }
};
