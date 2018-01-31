module.exports = {
  'Test My Pages Login' : function (client) {
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

      //Verify the Home Page
      var HomePageVerification=client.page.HomePageVerification()
      HomePageVerification.HomePage()

      var Invoice=client.page.Invoice()

      //Invoice.DeleteDownloadedPDF()
      Invoice.InvoicePageVerification()
      //Invoice.DeleteDownloadedPDF()
      //Invoice.DownloadLatestInvoice()
      //Invoice.DeleteDownloadedPDF()
      // client.pause(5000)
      
      //Removed the Previous Invoice Section- Will come Later
      // Invoice.DownloadPreviousInvoice()
      // client.pause(5000)
      // Invoice.DeleteDownloadedPDF()
      var InvoiceDelete=client.page.InvoiceDelete()
      InvoiceDelete.DownloadLatestInvoice(client)
      InvoiceDelete.DeleteDownloadeInvoice()
    }

};