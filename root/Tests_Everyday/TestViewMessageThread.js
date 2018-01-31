module.exports = {
  'Test View Message Thread' : function (client) {
    var launchMyPageAgrol = client.page.launchMyPageAgrol();
    var FolderName=new Date().getTime();
    launchMyPageAgrol.navigate()
        .assert.title("Card Portal", "My page application is opened")
        client.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_successful.png')
        var loginClass=client.page.loginPage("agrol")
        loginClass.loginMyPage()

        var loginVerificationClass=client.page.LoginPageVerification()
        loginVerificationClass.loginMyPageVerification()

        loginClass.ValidateLoginButton()

        //Enter the Credentials
        loginClass.EnterLoginCredentials()

        var MsgThread=client.page.ViewMessageThread("agrol")
        MsgThread.objectVerification();
        MsgThread.SendReply();
        MsgThread.SendReplywith5000Characters();
        MsgThread.MessageNontSaved();

      //  var contents = fs.readFileSync("./TestDataAgrol/MessageThread.Json");
        //var jsonContentTest = JSON.parse(contents);


        //client.url(client.launch_url + "/a/b/c");
      //  MsgThread.AttachmentVerification();
      }

    }
};
