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
    // //browser.pause(5000);
    // browserObject.click("@NewMessageButton");
    // browser.pause(3000);

    //Click on New Messages Button
    
    browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
    })  

    var contents = fs.readFileSync("./TestDataAgrol/MessageThread.Json");
    var jsonContentMessage = JSON.parse(contents);
    var FolderName=new Date().getTime();

    //*******************************************************************************************************
          //Function:      Object Verification
          //Created By :   Piyush Agrawal
          //Creation Date: 02-Aug-2017
    // ******************************************************************************************************

    this.objectVerification = function()
    {
        browserObject.waitForElementPresent("@SendMsgSubjectTypeLabel",5000);
        browserObject.waitForElementPresent("@SendMsgSubjectTextBox",5000);
        browserObject.waitForElementPresent("@SendMsgTextArea",5000);
        browserObject.waitForElementPresent("@SendMsgSendButton",5000);
        browserObject.waitForElementPresent("@SendMsgBackButton",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton1",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton2",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton3",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton4",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton5",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton6",5000);
        browserObject.waitForElementPresent("@SendMsgRadioButton7",5000);
        browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
    }

//*******************************************************************************************************
        //Function:      Verify Error Messages
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.ErrorMessageValidation =  function()
    {
     // browserObject.click("@SendMsgSendButton");

      browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
      })  
      browser.pause(2000);
      browserObject.waitForElementPresent("@SendMsgSubTypeErrorMsg",5000);
      browserObject.waitForElementPresent("@SendMsgSubErrorMsg",5000);
      browserObject.waitForElementPresent("@SendMsgAreaErrorMsg",5000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
    }

//*******************************************************************************************************
        //Function:    Verify sending Message
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.SendMsg =  function()
    {
      browserObject.click("@SendMsgRadioButtonSelection1");
      browser.pause(2000);
      browserObject.setValue("@SendMsgSubjectTextBox",jsonContentMessage.Subject);
      browserObject.setValue("@SendMsgTextArea",jsonContentMessage.MessageText);
      browser.pause(5000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      //browserObject.click("@SendMsgSendButton");

       browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
      })  
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"']",5000);
      browserObject.click(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"' ]");
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//span[text()='"+jsonContentMessage.MessageText+"']",5000);
      browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);
      browser.pause(2000);
      browserObject.click("@ViewMessageNavigattionMessage");
      browser.pause(2000);
    }

//*******************************************************************************************************
        //Function:      Verify sending Messages with 5000 characters
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.SendMsg5000Char =  function()
    {
      browser.pause(2000);
      browserObject.click(".//*[@id='container']/div/div[3]/div[3]/div/div[1]/button");
      browser.pause(2000);
      browserObject.click("@SendMsgRadioButtonSelection1");
      browser.pause(1000);
      browserObject.setValue("@SendMsgSubjectTextBox",jsonContentMessage.Subject);
      browserObject.setValue("@SendMsgTextArea",jsonContentMessage.MessageText5000Characters);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      //browser.pause(7000);

       browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
      })  
      //browserObject.click("@SendMsgSendButton");
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"']",5000);
      browserObject.click(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"']");
      browser.pause(2000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browserObject.waitForElementPresent(".//*[@id='container']//span[text()='"+jsonContentMessage.MessageText5000Characters+"']",5000);
      browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);
      browserObject.click("@ViewMessageNavigattionMessage");
    }

//*******************************************************************************************************
        //Function:      Verify Message is save as draft and user is able to delete it
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.SaveandDeleteMessage =  function()
    {
      browserObject.click(".//*[@id='container']/div/div[3]/div[3]/div/div[1]/button");
      browser.pause(2000);
      browserObject.click("@SendMsgRadioButtonSelection1");
      browserObject.setValue("@SendMsgSubjectTextBox",jsonContentMessage.Subject);
      browserObject.setValue("@SendMsgTextArea",jsonContentMessage.MessageText);
      browser.pause(4000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browserObject.waitForElementPresent("@SendMsgSaveDraftmessage",5000);
      browserObject.click("@SendMsgDeleteLink");
      browser.pause(2000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browserObject.waitForElementPresent(".//*[@id='container']//input[@placeholder='Ämne'][@value='']",5000);
      browserObject.waitForElementPresent(".//*[@id='message_body'][contains(.,'')]",5000);
    }


//*******************************************************************************************************
        //Function:      Verify draft message is deleted when user clicks on start from scratch
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.DeletionStartFromScratch =  function()
    {
      browserObject.click("@SendMsgRadioButtonSelection1");
      browserObject.setValue("@SendMsgSubjectTextBox",jsonContentMessage.Subject);
      browserObject.setValue("@SendMsgTextArea",jsonContentMessage.MessageText);
      browser.pause(2000);
      browserObject.click("@ViewMessageNavigattionMessage");
      browser.pause(2000);
      browserObject.click(".//*[@id='container']/div/div[3]/div[3]/div/div[1]/button");
      browser.pause(2000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browserObject.waitForElementPresent("@SendMsgStartFromScratchLink",5000);
      browserObject.waitForElementPresent("@SendMsgSaveDraftmessageText",5000);
      browserObject.click("@SendMsgStartFromScratchLink");
      browser.pause(2000);
      browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/SendMessage.jpg')
      browserObject.waitForElementPresent(".//*[@id='container']//input[@placeholder='Ämne'][@value='']",5000);
      browserObject.waitForElementPresent(".//*[@id='message_body'][contains(.,'')]",5000);
    }

//*******************************************************************************************************
        //Function:      Verify user is able to send draft mail
        //Created By :   Piyush Agrawal
        //Creation Date: 04-Aug-2017
// ******************************************************************************************************

    this.SendDraftMail =  function()
    {
      browserObject.click("@SendMsgRadioButtonSelection1");
      browserObject.setValue("@SendMsgSubjectTextBox",jsonContentMessage.Subject);
      browserObject.setValue("@SendMsgTextArea",jsonContentMessage.MessageText);
      browser.pause(2000);
      browserObject.click("@ViewMessageNavigattionMessage");
      browser.pause(2000);
      browserObject.click(".//*[@id='container']/div/div[3]/div[3]/div/div[1]/button");
      browser.pause(2000);
      browserObject.waitForElementPresent("@SendMsgSaveDraftmessageText",5000);
      //browserObject.click("@SendMsgSendButton");
       browser.execute(function() {
        document.getElementsByClassName('button button--primary').item(0).click()
      })  
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"']",5000);
      browserObject.click(".//*[@id='container']//a[1]//span[text()='User Information : "+jsonContentMessage.Subject+"' or text()='Användarinformation: "+jsonContentMessage.Subject+"']");
      browser.pause(2000);
      browserObject.waitForElementPresent(".//*[@id='container']//span[text()='"+jsonContentMessage.MessageText+"']",5000);
      browserObject.waitForElementPresent("@ViewMessageThreadSendButtonDisable",5000);
      browserObject.click("@ViewMessageNavigattionMessage");
    }
}
