// ******************************************************************************************************
//Page Name:   Transaction Search functions
//Created By : Piyush Agrawal
//Created Date: 21-06-17
// ******************************************************************************************************
module.exports = function (browser,Cardtype)
{
    var browserObject = browser.page.ObjectRepository();
    var fs = require("fs");
    if (Cardtype =="agrol")
    {
        var contents = fs.readFileSync("./TestDataAgrol/Credentials.Json");
        var jsonContent = JSON.parse(contents);
    }

    if (Cardtype =="everyday")
    {
        var contents = fs.readFileSync("./TestDataEveryday/Credentials.Json");
        var jsonContent = JSON.parse(contents);
    }
    browser.pause(5000);

    browserObject.click("@HomePageMenu");
    browserObject.click("@HomePageMenuMessages");
    browserObject.waitForElementPresent("@NewMessageButton",10000);


    var contents = fs.readFileSync("./TestDataAgrol/MessageThread.Json");
    var jsonContentMessage = JSON.parse(contents);

    //*******************************************************************************************************
          //Function:      Object Verification
          //Created By :   Piyush Agrawal
          //Creation Date: 02-Aug-2017
    // ******************************************************************************************************

    this.objectVerification = function()
    {
      //  var split= require('split-string');
      browser.pause(5000);
      browser.getText(".//*[@id='container']//a[1]//div[1]/span[@class='list__item__title--label']/span/span[1]",function(result)
      {
        var  Subject = result.value;
        console.log(Subject);
        browserObject.click("@MessageFirstRow");

        var arr = Subject.split(": ").map(function (val)
        {
        return val;
        });
        console.log(arr[1]);
        browser.pause(5000);
        browserObject.waitForElementPresent(".//*[@id='container']//h1[contains(.,'"+arr[1]+"')]",5000);
        browserObject.waitForElementPresent("@ViewMessageNavigattionHome",5000);
        browserObject.waitForElementPresent("@ViewMessageNavigattionMessage",5000);
        browserObject.waitForElementPresent(".//*[@id='container']//li[text()='"+arr[1]+"']",5000);
        browserObject.waitForElementPresent("@ViewMessageThreadYouLabel",5000);
        browserObject.waitForElementPresent("@ViewMessageMessageThreadTextArea",5000);
        browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);
      });
  }

//*******************************************************************************************************
        //Function:      Send reply to Message Thread
        //Created By :   Piyush Agrawal
        //Creation Date: 02-Aug-2017
// ******************************************************************************************************

    this.SendReply =  function()
    {

      browserObject.setValue("@ViewMessageMessageThreadTextArea",jsonContentMessage.MessageText);
      browserObject.setValue("@ViewMessageMessageThreadTextArea","abcd");
      browser.pause(2000);
      browserObject.waitForElementNotPresent("@ViewMessageThreadSendButtonDisable",5000);
      browserObject.waitForElementPresent("@ViewMessageThreadSendButtonEnable",5000);
      browserObject.click("@ViewMessageThreadSendButtonEnable");
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//span[text()='"+jsonContentMessage.MessageText+"']",5000);
      browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);

    }


    //*******************************************************************************************************
            //Function:      Send reply with 5000 charactersin Messsage Thread
            //Created By :   Piyush Agrawal
            //Creation Date: 02-Aug-2017
    // ******************************************************************************************************

        this.SendReplywith5000Characters =  function()
        {

          browserObject.setValue("@ViewMessageMessageThreadTextArea",jsonContentMessage.MessageText5000Characters);
          browser.pause(2000);
          browserObject.waitForElementNotPresent("@ViewMessageThreadSendButtonDisable",5000);
          browserObject.waitForElementPresent("@ViewMessageThreadSendButtonEnable",5000);
          browserObject.click("@ViewMessageThreadSendButtonEnable");
          browser.pause(3000);
          browserObject.waitForElementPresent(".//*[@id='container']//span[text()='"+jsonContentMessage.MessageText5000Characters+"']",5000);
          browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);

        }


  //*******************************************************************************************************
          //Function:      Verify message is not save as draft message
          //Created By :   Piyush Agrawal
          //Creation Date: 02-Aug-2017
  // ******************************************************************************************************

      this.MessageNontSaved =  function()
      {

        browserObject.setValue("@ViewMessageMessageThreadTextArea",jsonContentMessage.MsgText);
        browser.pause(2000);
        browserObject.click("@ViewMessageNavigattionMessage");
        browser.pause(3000);
        browserObject.click("@MessageFirstRow");
        browserObject.waitForElementNotPresent(".//*[@id='container']//textarea[contains(.,'"+jsonContentMessage.MsgText+"')]",5000);
        browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);

      }

  //*******************************************************************************************************
          //Function:      Verify Message received from Customer support and attachment
          //Created By :   Piyush Agrawal
          //Creation Date: 02-Aug-2017
  // ******************************************************************************************************
          //
          // this.AttachmentVerification =  function()
          // {
          //   browser.pause(5000);
          //   var ChangeURL = client.page.SMAttachmentURL();
          //   ChangeURL.navigate();
          //   browser.pause(5000);
          // }
}
