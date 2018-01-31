module.exports = {
  'Test Transaction List' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
      .assert.title("Card Portal", "My page application is opened")
      client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')
      var loginClass=client.page.loginPage("agrol")
      loginClass.loginMyPage()

      var loginVerificationClass=client.page.LoginPageVerification()
      loginVerificationClass.loginMyPageVerification()

      //loginClass.ValidateLoginButton()

      //Enter the Credentials
      loginClass.EnterLoginCredentials()

      //Home Page object validation
      var TransactionList=client.page.TransactionList()

      TransactionList.objectVerification();
      TransactionList.TransactionVerification();
      //TransactionList.MoreTransactionValidation();
      TransactionList.SortingAmountAsc();
      TransactionList.SortingAmountDesc();

      TransactionList.ExportToExcel();
      //TransactionList.CompareJson();
    }
};
