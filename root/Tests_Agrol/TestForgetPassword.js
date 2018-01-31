module.exports = {
  'Test My Pages Login' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

        //Login into application
        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        var forgetPwd=client.page.ForgetPasswd("agrol")
        //forgetPwd.ValidationFP()

        //Set the Password after the forget password
        forgetPwd.ForgetPasswordPage()

    }
  }
