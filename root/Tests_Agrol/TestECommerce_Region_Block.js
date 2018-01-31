module.exports = {
  'Test Ecommerce and Region Block' : function (client) {
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

       var RegionBlock =client.page.ECommerceRegionBlock("agrol")
       RegionBlock.objectVerification();

        //Region Blocking using Week authentication
       RegionBlock.WeekAuthenticationRegionBlock();
       RegionBlock.WeekAuthenticationRegionUnBlock();

       var logoutPageVerification=client.page.PageLogout()
       logoutPageVerification.logout()

        //Region Blocking using Strong authentication

        loginClass.EnterLoginCredentialsAgrol()
        var RegionBlockStrongAuth = client.page.ECommerceRegionBlock("agrol")

        RegionBlockStrongAuth.StrongAuthenticationRegionBlock();
        RegionBlockStrongAuth.StrongAuthenticationRegionUnBlock();

      }

    }
