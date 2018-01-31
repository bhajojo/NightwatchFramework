module.exports = {
  'Test Transaction Search' : function (client) {
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

        //Home Page object validation
        var TranSearch=client.page.TransactionSearch("agrol")

      TranSearch.objectVerification()
      TranSearch.FreeTextFieldSearch()
      TranSearch.DateSearch()
      TranSearch.SearchAmount()
      TranSearch.SearchCardType()
      TranSearch.SearchFuelType()
      TranSearch.ErrorMesageFieldValidations()
      TranSearch.NoDataValidation()
      TranSearch.AmountSortDesc()
      TranSearch.AmountSortAsc()

    
    }
};
