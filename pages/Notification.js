//Page Name:   
//Created By : Bharat Joshi
//Created Date: 07-08-2017

module.exports = function (browser,Cardtype) {
    var browserObject = browser.page.ObjectRepository();
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

    this.VerifyNotificationIcon= function()
    {
        var assert= require('assert')
        browserObject.expect.element('@NotificationIcon').to.be.visible.before(1000)
         //click on Notification  ICON

        browser
        .getText(".//div[contains(@class,'notifications__badge')]",function(result)
        {
            NotificationCountIntial=result.value;
            console.log("I: "+NotificationCountIntial);

        })
        .perform(function()
        {
            browserObject.click(".//div[contains(@class,'notifications__badge')]")
            browser.pause(2000)
        
            //Get the Subject of the first notification mail 
            browser
            .getText(".//*[@id='container']//a[@class='list__item'][1]//span[@class='list__item__title--label']",function(result)
            {
                NotificationMessage=result.value;
                //console.log(NotificationMessage);

            })

            //Click on Notification Message
            browser.click(".//*[@id='container']//a[@class='list__item'][1]")
            browser.pause(6000)

            browser.elements("xpath",".//button[contains(@class,'button more')]//span[text()='Sign' or text()='Skylt']",function(result){
            var elementcount = result.value.length;

            if (elementcount==1)
              browser.click(".//button[contains(@class,'button more')]//span[text()='Sign' or text()='Skylt']")
              browser.pause(30000)
            })
            
            //browserObject.click("@HomeBackButtonLink") 
            browser.pause(3000)     
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
                var arr = NotificationMessage.split(":");
                val = arr[1].trim()
              
                //Verify the Message Subject in the newly opened mail
                browserObject.verify.containsText(".//*[@id='container']//div[2]//li[3]",val)
            })    
            })
    }
}

