module.exports = {
     'Test Transfer Money' : function (client) {
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

      //loginClass.ValidateLoginButton()

      //Enter the Credentials
      loginClass.EnterLoginCredentialsEveryday()

      //Verify the Object on the Installment Page
      var TransferMoney=client.page.TransferMoney()
      TransferMoney.MakeTransferMoney()
      TransferMoney.VerifyInputValidations("agrol")
      TransferMoney.VerifyTransferSentEmail()

    }
};
