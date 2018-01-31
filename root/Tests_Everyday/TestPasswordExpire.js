module.exports = {
  'Test My Pages Password Expire' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        .assert.title("nfs-app", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      //Login into application
      var loginClass=client.page.loginPage("agrol")
      loginClass.ExpirePassword()

      //Reset Password
      var forgetPwd=client.page.ForgetPasswd("agrol")

      forgetPwd.ForgetPasswordPage()

      forgetPwd.fnForgetPasswordValidation()


    }
};
