module.exports = {
     'Test Transfer Money' : function (client) {
      var launchMyPageAgrol = client.page.launchMyPageAgrol();
      var FolderName=new Date().getTime();
      launchMyPageAgrol.navigate()
      .assert.title("Card Portal", "My page application is opened")
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("agrol")
      //loginClass.loginMyPage()

      //verify the Login Page Objects
      var loginVerificationClass=client.page.LoginPageVerification()
      loginVerificationClass.loginMyPageVerification()

      loginClass.ValidateLoginButton()

      //Enter the Credentials
      loginClass.EnterLoginCredentials()

      //Verify the Object on the Installment Page
      var TransferMoney=client.page.TransferMoney()
      TransferMoney.MakeTransferMoney()
      TransferMoney.VerifyInputValidations("agrol")
      TransferMoney.VerifyTransferSentEmail()

    }
};
