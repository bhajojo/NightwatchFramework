//Page Name:   ForgetPasswordPage
//Created By : Bharat Joshi
//Created Date: 08-05-17
module.exports = function (browser) {
  this.TNOR195_ViewMessagePageValidations = function() {
    const assert = require('assert');
    //Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    //Open Messages from Menu
    browserObject.click("@HomePageMenu");
    browser.pause(2000)
    browserObject.click("@HomePageMenuMessages");
    browserObject.waitForElementPresent("@MessageHeading",2000);
    browserObject.waitForElementPresent("@MessageLink",2000);
    browserObject.waitForElementPresent("@NewMessageButton",10000);
     
    //Get The Messages Count
    browser.elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
      sMessageCount = result.value.length;

        //Verify if the Icons and Message Subjct is available
         for (iCounter=1 ;iCounter<=sMessageCount; iCounter++)
          {
              browserObject.waitForElementPresent("//*[@id='container']//a[@class='list__item']["+iCounter+"]//div[@class='list__item__icon']",2000)
              browserObject.waitForElementPresent("//*[@id='container']//a[@class='list__item']["+iCounter+"]//div[@class='list__item__content']",2000)
          }
                        
        });
      browser.pause(3000)
      //Open First Message and Verify the Fields 

      //*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']//span[@class='content-tooltip']//span[1]
   
        browser
            .getText("//*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']",function(result)
            {
                PrevDate = result.value;
                //Con
            })
      browserObject.click("//*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']");
      browserObject.waitForElementPresent("@MailConversationLink",10000);
      browserObject.waitForElementPresent("@MessageLinkNavigation",10000);

      browser.pause(3000)
      //Get text of Message Subject and verify it on the Next Page
       
      //browserObject.waitForElementPresent("@MessageSubject",10000);
      //browserObject.waitForElementPresent("@MailConversationLink",10000);
      
      //Click on Messages Link from navigation and verify the page 
      browserObject.click("@MessageLink");
      browser.pause(8000)
      
      // browserObject.waitForElementPresent("@MessageHeading",2000);
      // browserObject.waitForElementPresent("@MessageLink",2000);
      browserObject.waitForElementPresent("@NewMessageButton",10000);
      browserObject.waitForElementPresent("@MoreButtonViewMessage",10000);
      // browser.moveToElement(".//*[@id='container']//button[@class='button more button--primary']", 0, 0)
      // browserObject.click("@MoreButtonViewMessage");
      // browser.mouseButtonClick(0)
      // browser.pause(20000)
      //browserObject.click("@MoreButtonViewMessage");
      browser
        .elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
         sMessageCount = result.value.length;
        //Click on More
        
      }).perform(function() {
        //console.log('elementValue:', sMessageCount);
        sMessageCountBeforeMoreClick = sMessageCount;
        console.log('elementValuebefore:', sMessageCountBeforeMoreClick);
        // browser.pause(3000)
        // browserObject.click("xpath=.//*[@id='container']/div/div[3]/div[3]/div/div[3]/button");
        // browser.pause(5000)
        browser.execute(function() {
          document.getElementsByClassName('button more button--primary').item(0).click()
        })
        
        browser.pause(5000)
        browser.elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
        sMessageCountAfterMoreClick = result.value.length;
        console.log('elementValueafter:', sMessageCountAfterMoreClick);
        doublesMessageCountAfterMoreClick=sMessageCountBeforeMoreClick*2
        assert.equal(20,sMessageCountAfterMoreClick,"After Click on More count is doubled")
        
         //Open View Message Again
          browserObject.click("@HomePageMenu");
          browser.pause(2000)
          browserObject.click("@HomePageMenuMessages");
      }).perform(function() {
        browser.elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
        sMessageCountAfterPageReset = result.value.length;
        assert.equal(sMessageCountAfterPageReset,"20","After Click on More count is same")
      })
    })
  })
  
  browserObject.click("@HomePageMenu");
  browser.pause(2000)
  browserObject.click("@HomePageMenuMessages");

  browserObject.click("//*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']")
  browserObject.click("@MessageLink");  
  browser.elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
    sMessageCountAfterMessageOpened = result.value.length
    assert.equal(sMessageCountAfterMessageOpened,"20","After Click on More count is same") 
  })

  //Send the Message from Preferences
  browserObject.click('@HomePageMenu');

  //Click on Menu Profile
  browserObject.click('@HomePageMenuProfile');

  //Click Preferences tab
  browserObject.waitForElementPresent('@PreferenceTab', 10000);
  browserObject.click('@PreferenceTab');
  browser.pause(2000)
  //Reset Set the Communication method
  var browserObject = browser.page.ObjectRepository();
  var FolderName=new Date().getTime();
  browserObject.click("@SMSRadioButton");
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  browserObject.click("@RequestchangeButton");
  //Change communication method to Phone Call
  browserObject.click("@PhoneRadioButton");
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  browserObject.click("@RequestchangeButton");
  //Change communication method to Email
  browserObject.click("@EmailRadioButton");
  browserObject.waitForElementPresent('@RequestchangeButton', 7000);
  //browserObject.click("@RequestchangeButton");

  browser.execute(function() {
          document.getElementsByClassName('button button--primary').item(0).click()
  })
  //Click on first Message
  browserObject.click("@HomePageMenu");
  browser.pause(2000)
  browserObject.click("@HomePageMenuMessages");

  browserObject.click("//*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']")
  browserObject.click("@MessageLink");  
  browser.pause(2000)
  browser.elements("xpath",".//*[@id='container']//a[@class='list__item']", function(result){
    sMessageCountAfterMessageOpened = result.value.length
    assert.equal(sMessageCountAfterMessageOpened,"10","After Click on More count is same") 
  })

  //Get the Text of First Message
  //Click on First Message and Verify the Text 
  browser.pause(2000)
  browser.assert.containsText(".//*[@id='container']//a[1]//span/span/span[1]","Övrigt: Föredragen kommunikationsmetod")
  //browserObject.click("//*[@id='container']//a[@class='list__item'][1]//div[@class='list__item__content']")
  browserObject.click(".//*[@id='container']//a[1]//span/span/span[1]")
  browser.pause(2000)
  browser.assert.containsText(".//*[@id='container']//ol/li[3]","Föredragen kommunikationsmetod")
 
    
  }
}
