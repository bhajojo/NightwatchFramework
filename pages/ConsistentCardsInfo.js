//Page Name:   Installments functions
//Created By : Bharat Joshi
//Created Date: 26-05-17

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
      this.VerifyCardsOnTransactions = function(Cardtype)
      { 

        if (Cardtype =="agrol")
        {
            var contents = fs.readFileSync("./TestDataAgrol/ConsistentCards.Json");
            var jsonContentCards = JSON.parse(contents);
        }
        if (Cardtype =="mediamarkt")
        {
            var contents = fs.readFileSync("./TestDataMediaMarkt/ConsistentCards.Json");
            var jsonContentCards = JSON.parse(contents);
        }
        if (Cardtype =="everyday")
        {
            var contents = fs.readFileSync("./TestDataEveryday/ConsistentCards.Json");
            var jsonContentCards = JSON.parse(contents);
        }
        
                  
        //Verify the Consistent Cards On Home Page and Transaction Page      
        browserObject.waitForElementPresent(".//*[@id='container']//div[@class='cards-list__card__number']//div[@class='i18n-account-number' and contains(text(),'"+jsonContentCards.CardNumber+"')]",2000);
        //browserObject.waitForElementPresent(".//*[@id='container']//a[1]//div[@class='i18n-account-number' and contains(text(),'"+jsonContentCards.CardNumber+"') or contains(text(),'"+jsonContentCards.ExtraCardNumber+"')]",2000);
        browser.pause(5000)
        //Click on More Transaction and Verify the Object 
        browserObject.click("@MoreTransactionLink");
        browserObject.waitForElementPresent(".//div[@class='i18n-account-number' and contains(text(),'"+jsonContentCards.CardNumber+"')  or contains(text(),'"+jsonContentCards.ExtraCardNumber+"')]",2000);
        
        //Click on Search Filter and Verify if the Object with cards numebr is present 
        browser.pause(2000)
        browserObject.click("@TransactionSearchFilter");      
        browser.pause(2000)
        browserObject.waitForElementPresent(".//*[@id='container']//span[@class='checkbox-group__span--text']//div[@class='i18n-account-number' and contains(.,'"+jsonContentCards.CardNumber+"')]",4000);
        browser.pause(2000)
        //Verify the Cards Info on transaction details 
        browserObject.click(".//*[@id='container']//a//div[@class='i18n-account-number' and contains(.,'"+jsonContentCards.CardNumber+"')]");
        browser.pause(2000)
        browserObject.waitForElementPresent(".//*[@id='container']//div[@class='transaction-detail__row'][1]//div[@class='i18n-account-number' and contains(.,'"+jsonContentCards.CardNumber+"') or contains(text(),'"+jsonContentCards.ExtraCardNumber+"')]",2000)

        //Select Security from the menu and verify the consistent Cards
        browserObject.click("@HomePageMenu");
        browserObject.click("@HomePageMenuSecurity");
        //browserObject.waitForElementPresent(".//*[@id='container']//option[1]//div[@class='i18n-account-number' and contains(text(),'"+jsonContentCards.CardNumber+"') or contains(text(),'"+jsonContentCards.ExtraCardNumber+"')]",2000)
      }
    
}