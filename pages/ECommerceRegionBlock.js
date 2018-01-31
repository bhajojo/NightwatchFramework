// ******************************************************************************************************
//Page Name:   Transaction Search functions
//Created By : Piyush Agrawal
//Created Date: 04-09-17
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
    browserObject.click("@CardSecurityMenu");
    browserObject.waitForElementPresent("@SecurityPageHeader",10000);

//*******************************************************************************************************
      //Function:      Object Verification
      //Created By :   Piyush Agrawal
      //Creation Date: 04-Sept-2017
// ******************************************************************************************************

    this.objectVerification = function()
    {
        browser.pause(5000);
        browserObject.waitForElementPresent("@ECommerceBlockLabel",5000);
        browserObject.waitForElementPresent("@ECommerceBlockRadioText",5000);
        browserObject.waitForElementPresent("@ECommerceBlockRadioButton",5000);
        browserObject.waitForElementPresent("@RegionBlockLabel",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton1",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton2",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton3",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton4",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton5",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton6",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton7",5000);
        browserObject.waitForElementPresent("@RegionBlockRadioButton8",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry1",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry2",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry3",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry4",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry5",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry6",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry7",5000);
        browserObject.waitForElementPresent("@RegionBlockCountry8",5000);
  }

//*******************************************************************************************************
            //Function:      Week Authentication region blocking
            //Created By :   Piyush Agrawal
            //Creation Date: 04-Sept-2017
// ******************************************************************************************************

    this.WeekAuthenticationRegionBlock =  function()
    {
      browserObject.click("@ECommerceBlockRadioButton");
      browser.pause(8000)
      browser.verify.attributeEquals("@ECommerceBlockRadioButton", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton1");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton1", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton2");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton2", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton3");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton3", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton4");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton4", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton5");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton5", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton6");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton6", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton7");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton7", 'checked', 'true')
      browserObject.click("@RegionBlockRadioButton8");
      browser.pause(8000)
      browser.verify.attributeEquals("@RegionBlockRadioButton8", 'checked', 'true')

    }



    //*******************************************************************************************************
                //Function:      Week Authentication region Unblocking
                //Created By :   Piyush Agrawal
                //Creation Date: 04-Sept-2017
    // ******************************************************************************************************

        this.WeekAuthenticationRegionUnBlock =  function()
        {
          browserObject.click("@ECommerceBlockRadioButton");
          browser.pause(8000)
          browser.verify.attributeEquals("@ECommerceBlockRadioButton", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton1");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton1", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton2");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton2", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton3");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton3", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton4");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton4", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton5");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton5", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton6");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton6", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton7");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton7", 'checked', 'false')
          browserObject.click("@RegionBlockRadioButton8");
          browser.pause(8000)
          browser.verify.attributeEquals("@RegionBlockRadioButton8", 'checked', 'false')
        }


  //*******************************************************************************************************
          //Function:      Strong Authentication  region blocking
          //Created By :   Piyush Agrawal
          //Creation Date: 04-Sept-2017
  // ******************************************************************************************************

      this.StrongAuthenticationRegionBlock =  function()
      {
        browserObject.click("@ECommerceBlockRadioButton");
        browser.pause(2000)
        browser.verify.attributeEquals("@ECommerceBlockRadioButton", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton1");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton1", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton2");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton2", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton3");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton3", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton4");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton4", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton5");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton5", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton6");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton6", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton7");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton7", 'checked', 'true')
        browserObject.click("@RegionBlockRadioButton8");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton8", 'checked', 'true')
      }


  //*******************************************************************************************************
          //Function:      Strong Authentication  region Unblocking
          //Created By :   Piyush Agrawal
          //Creation Date: 04-Sept-2017
  // ******************************************************************************************************

      this.StrongAuthenticationRegionUnBlock =  function()
      {
        browserObject.click("@ECommerceBlockRadioButton");
        browser.pause(2000)
        browser.expect.element('#b_checkbox').to.not.be.selected;
        browser.verify.attributeEquals("@ECommerceBlockRadioButton", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton1");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton1", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton2");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton2", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton3");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton3", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton4");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton4", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton5");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton5", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton6");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton6", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton7");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton7", 'checked', 'false')
        browserObject.click("@RegionBlockRadioButton8");
        browser.pause(2000)
        browser.verify.attributeEquals("@RegionBlockRadioButton8", 'checked', 'false')
      }
};
