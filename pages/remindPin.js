module.exports = function (browser,Cardtype)
{
    var fs = require('fs');
    var browserObjectInstalment = browser.page.ObjectRepository();
    var browserObject = browser.page.ObjectRepository();
    if (Cardtype =="agrol")
    {
        var contents = fs.readFileSync("./TestDataAgrol/ConsistentCards.Json");
        var jsonContent = JSON.parse(contents);
    }
    if (Cardtype =="mediamarkt")
    {
        var contents = fs.readFileSync("./TestDataMediaMarkt/ConsistentCards.Json");
        var jsonContent = JSON.parse(contents);
    }
    if (Cardtype =="everyday")
    {
            var contents = fs.readFileSync("./TestDataEveryday/ConsistentCards.Json");
            var jsonContentCards = JSON.parse(contents);
    }
    
//*******************************************************************************************************
      //Function:      Verify the Cards On Transaction Page
      //Created By :   Bharat Joshi
      //Creation Date: 26-Jun-2017
// ******************************************************************************************************
    this.VerifyRemindPinSection = function(Cardtype)
    {
        //Verify the Objects on the Reminf Pin section
        browserObject.waitForElementPresent('@RemindPinHeading', 2000);
        browserObject.waitForElementPresent('@RemindPinMessage', 2000);
        browserObject.waitForElementPresent('@RemindPinRequestReminderLink', 2000);

        //Selec the Cards with the Nick Name
        browserObject.click('@SelectCardDropDown'); 
        browser.pause(1000)
        browserObject.click('@DropDownSelectCard');
        browser.pause(2000)
        browserObject.click('@RemindPinRequestReminderLink');
        browser.pause(2000)
        browserObject.waitForElementPresent('@RemindPinHeadingModal', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage2', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage3', 2000);
        browserObject.waitForElementPresent('@RemindPinModalContinueButton', 2000);
        browserObject.waitForElementPresent('@RemindPinModalCancelButton', 2000);
        browser.pause(2000)
        browserObject.click('@RemindPinModalCancelButton');
        browser.pause(2000)
        browserObject.click('@RemindPinRequestReminderLink');
        browser.pause(1000)
        browserObject.waitForElementPresent('@RemindPinModalContinueButton', 2000);
        browserObject
            .getText('@DropDownSelectCarddiv',function(result)
            {
                NickNameCardsNo = result.value;
                console.log(NickNameCardsNo)
                browser.verify.containsText(".//*[@id='container']//p[1]/span/span[1]//div",NickNameCardsNo);
            })
        
        browserObject.click('@RemindPinModalContinueButton');
        browser.pause(31000)       
        

        //Edit the Name from Preferences 
        browserObject.click('@ViewMessageNavigattionHome');
        browser.pause(3000)  
        //Verify Menu options
        browserObject.click('@ProfileQuickLinkText');
        browser.pause(3000) 
        //Click Preferences tab
        browserObject.waitForElementPresent('@PreferenceTab', 10000);
        browserObject.click('@PreferenceTab');

        browserObject.waitForElementPresent('@EditButton', 2000);
        browserObject.click('@EditButton');

        browser.pause(5000) 
        browser.clearValue(".//*[@id='container']/div/div[3]/div[3]/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/input")
        browser.pause(5000) 
        browserObject.click('@SaveEditedNickname');
        browser.pause(3000)  

        browserObject.click('@ViewMessageNavigattionHome');
        browserObject.waitForElementPresent('@CardSecurityMenu', 2000);
        browserObject.click('@CardSecurityMenu');

         browserObject.click('@SelectCardDropDown'); 
        browser.pause(1000)
        browserObject.click('@DropDownSelectCard');
        browser.pause(2000)
        browserObject.click('@RemindPinRequestReminderLink');
        browser.pause(2000)
        browserObject.waitForElementPresent('@RemindPinHeadingModal', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage2', 2000);
        browserObject.waitForElementPresent('@RemindPinModalMessage3', 2000);
        browserObject.waitForElementPresent('@RemindPinModalContinueButton', 2000);
        browserObject.waitForElementPresent('@RemindPinModalCancelButton', 2000);
        browser.pause(2000)
        browserObject.click('@RemindPinModalCancelButton');
        browser.pause(2000)
        browserObject.click('@RemindPinRequestReminderLink');
        browser.pause(1000)
        browserObject.waitForElementPresent('@RemindPinModalContinueButton', 2000);
        browserObject
            .getText('@DropDownSelectCarddiv',function(result)
            {
                NickNameCardsNo = result.value;
                console.log(NickNameCardsNo)
                browser.verify.containsText(".//*[@id='container']//p[1]/span/span[1]//div",NickNameCardsNo);
            })
        
        browserObject.click('@RemindPinModalContinueButton');
        browser.pause(10000)  
        

    }
    
}