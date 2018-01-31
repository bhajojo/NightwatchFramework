module.exports = {
  'Test My Pages Forgot Password' : function (client) {
    var launchMyPageEveryday = client.page.launchMyPageEveryday();
    var FolderName=new Date().getTime();
    launchMyPageEveryday.navigate()
        .assert.title("nfs-app", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')

      // Call to Login into application
       var loginClass=client.page.loginPage("everyday")
       loginClass.loginMyPage()

       //Call to funcational validation on forgot password page
       var forgetPwd=client.page.ForgetPasswd()
       forgetPwd.ValidationFP()

       //Call to the application flow validation of forget password
       forgetPwd.ForgetPasswordPage()

    }
  }
