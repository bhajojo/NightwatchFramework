
module.exports = function (browser,Cardtype) {
  var browserObject = browser.page.ObjectRepository();
  var fs = require("fs");
  var assert= require('assert')
  if (Cardtype =="agrol")
  {
      var contents = fs.readFileSync("./TestDataAgrol/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }
  if (Cardtype =="mediamarkt")
  {
      var contents = fs.readFileSync("./TestDataMediaMarkt/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }
  if (Cardtype =="everyday")
  {
      var contents = fs.readFileSync("./TestDataEveryday/Credentials.Json");
      var jsonContent = JSON.parse(contents);
  }
  var FolderName=new Date().getTime();

  //Description : Verification of Forget Password Page
  //Created By  : Bharat Joshi
  this.LoadMoreMessage = function()
  {

    browserObject.click("@HomePageMenu");
    browserObject.click("@HomePageMenuMessages");
    browserObject.waitForElementPresent("@MessageHeading",2000);
    browserObject.waitForElementPresent("@MessageLink",2000);
    browserObject.waitForElementPresent("@NewMessageButton",10000);

    browser.pause(5000)
    //Loop to click on More button 
    browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

    browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

    browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

    browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

     browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

     browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
       
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })

     browser.elements("xpath",".//button[contains(@class,'button more')]",function(result)
    {
        Morecount= result.value.length;
        
        if (Morecount==1)
        {
          browser.click(".//button[contains(@class,'button more')]")
          browser.pause(2000)
        }
    })
       
  }

this.VerifyNotificationeSignIN = function() {

    //Get Notification count First 
    browser
        .getText(".//div[contains(@class,'notifications__badge')]",function(result)
        {
            NotificationCountIntial=result.value;
            console.log("I: "+NotificationCountIntial);

        })
        .perform(function()
        {
           browser.pause(2000)
        
            browser.click(".//*[@id='container']//a//span[text()='Signature required']//ancestor::div[3]")
            browser.pause(4000)

            browser
            .getText(".//div[contains(@class,'notifications__badge')]",function(result)
            {
                NotificationCountfinal=result.value;
                console.log("F: "+NotificationCountfinal);

            })
            .perform(function()
            {
                idiff=NotificationCountIntial-NotificationCountfinal
                console.log(idiff)
                assert.equal(idiff,0)
            })    
        })
    }

this.VerifyeSignINfunctionality = function() {

    //Get Notification count First 
    browser
        .getText(".//div[contains(@class,'notifications__badge')]",function(result)
        {
            NotificationCountIntial=result.value;
            console.log("I: "+NotificationCountIntial);

        })
        .perform(function()
        {
            //browser.click(".//*[@id='container']//a//span[text()='Signature required']")
            browser.pause(4000)

            browser.click(".//button[contains(@class,'button more')]//span[text()='Sign']")

            browser.pause(20000)
            browserObject.click("@HomeBackButtonLink")            

            browser.pause(8000)
            browser
            .getText(".//div[contains(@class,'notifications__badge')]",function(result)
            {
                NotificationCountfinal=result.value;
                console.log("F: "+NotificationCountfinal);
            })
            .perform(function()
            {
                idiff=NotificationCountIntial-NotificationCountfinal
                console.log(idiff)
                assert.equal(idiff,1)
            })    
        })
    }
    
  }
