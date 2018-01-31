//Page Name:   ForgetPasswordPage
//Created By : Bharat Joshi
//Created Date: 08-05-17
module.exports = function (browser) {
  this.ViewProfileDetails = function() {

    //Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    browserObject.waitForElementPresent('@LogoutLink', 3000);
    // browser.pause(8000)
    // browserObject.click('@ProfileLabel');
    // browser.pause(8000)
    // browserObject.click('@ProfileLabel');
    // browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/ViewProfilePage.jpg')

    browserObject.waitForElementPresent('@LogoutLink', 1000);

    browserObject.waitForElementPresent('@NotificationIcon', 2000);

    browser.pause(3000)
    //browserObject.click("@HomePageMenu");
    //browser.pause(3000)

    //browserObject.click(".//*[@id='container']/div/div[3]/div[3]/div[2]/div[4]/div[1]/div/ul/li[1]/a/div[2]/span/span[1]")
    //browserObject.click(".//*[@id='container']//div[@class='app-menu--title']//span[text()='Profil']");
    // browser.pause(2000)
    // browserObject.waitForElementPresent('@ProfileTitle',1000);
    // browser.pause(2000)
    // browserObject.click('@ProfileTitle');
    
    //Click on profile link shortcut
    browser.execute(function() {
          document.getElementsByClassName('grid-links grid-links--multiline').item(0).children.item(0).children.item(0).click()
    })
    browserObject.waitForElementPresent('@InformationTab',1000);
    browserObject.waitForElementPresent('@LabelName',1000);
    browserObject.waitForElementPresent('@LabelAddress',1000);
    browserObject.waitForElementPresent('@PostalCode',1000);
    browserObject.waitForElementPresent('@LabelEmailAddress',1000);
    browserObject.waitForElementPresent('@LabelHomePhone',1000);
    browserObject.waitForElementPresent('@LabelMobilePhone',1000);
    //browserObject.waitForElementPresent('@LabelWorkPhone',1000);
    browserObject.waitForElementPresent('@NotSpecifiedText',1000);
    browserObject.waitForElementPresent('@LabelContactInformation',1000);
    browserObject.waitForElementPresent('@EditButton',1000);
    //browserObject.waitForElementPresent('@SupportMediaLabel', 1000);
    //browserObject.waitForElementPresent('@CustomerCareLabel', 1000);
    //browserObject.waitForElementPresent('@FacebookLink', 1000);
    //browserObject.waitForElementPresent('@TwitterLink', 1000);

    //browserObject.click('@HomeBackButtonLink');
    //browserObject.waitForElementPresent('@UpcomingPaymentsLabel', 1000);

    //browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/HomePage.jpg')

  }

  //Edit contact information feature
  this.VerifyContactInformation = function(Cardtype)
  {
    //Defined object repository
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    var fs = require("fs");
    if (Cardtype =="agrol")
    {
        var contents = fs.readFileSync("./TestDataAgrol/CreateTag.Json");
        var jsonContent = JSON.parse(contents);
    }

    //Click edit button
    browser.pause(3000)
    //browserObject.click('@EditButton');
    browser.execute(function() {
        document.getElementsByClassName('profile__subtitle-action-link').item(0).click()
    })

    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/EditContactnformation field.jpg')

    //UI after clicking Edit button
    browserObject.waitForElementPresent('@FPCancelButton', 2000);
    browserObject.waitForElementPresent('@LabelEmailAddress', 2000);
    browserObject.waitForElementPresent('@EmailPlaceholder', 2000);
    browserObject.waitForElementPresent('@LabelHomePhone', 2000);
    browserObject.waitForElementPresent('@HomePhonePlaceholder', 2000);
    browserObject.waitForElementPresent('@LabelMobilePhone', 2000);
    browserObject.waitForElementPresent('@MobilePhonePlaceholder', 2000);
    browserObject.waitForElementPresent('@RequestchangeButton', 2000);
    browserObject.waitForElementPresent('@ContactInfoNote',2000);

    //Invalid input for Phone numbers
    //Input invalid email
    browserObject.clearValue('@EmailPlaceholder');
    browserObject.setValue('@EmailPlaceholder', jsonContent.InvalidEmail);
    //Input invalid HomePhone
    browserObject.clearValue('@HomePhonePlaceholder');
    browserObject.setValue('@HomePhonePlaceholder', jsonContent.InvalidPhoneInput1);
    //Input invalid MobilePhone
    browserObject.clearValue('@MobilePhonePlaceholder');
    browserObject.setValue('@MobilePhonePlaceholder', jsonContent.InvalidPhoneInput2);
    //Click Save button

     browser.execute(function() {
       document.getElementsByClassName('button button--primary').item(0).click()
    })
    
    //browserObject.click('@RequestchangeButton');
    browser.pause(7000)
    //Verify error Messages
    //Error for invalid email
    browserObject.waitForElementPresent('@InvalidEmailError', 2000);
    //Error for invalid HomePhone
    browserObject.waitForElementPresent('@InvalidHomePhoneError', 2000);
    //Error for invalid MobilePhone
    browserObject.waitForElementPresent('@InvalidMobilePhoneError', 2000);

    //Valid input for Phone numbers
    //Input valid email
    browserObject.clearValue('@EmailPlaceholder');
    browserObject.setValue('@EmailPlaceholder', jsonContent.ValidEmail);
    //Input valid HomePhone
    browserObject.clearValue('@HomePhonePlaceholder');
    browserObject.setValue('@HomePhonePlaceholder', jsonContent.ValidPoneInput1);
    //Input valid MobilePhone
    browserObject.clearValue('@MobilePhonePlaceholder');
    browserObject.setValue('@MobilePhonePlaceholder', jsonContent.ValidPoneInput2);
    //Click Save button
   // browserObject.click('@RequestchangeButton');

    browser.execute(function() {
       document.getElementsByClassName('button button--primary').item(0).click()
    })
    browser.pause(7000)

    //Navigate to Secure mail and verify changed communication method Mail
    //browserObject.click('@HomePageMenu');

     browser.execute(function() {
       document.getElementsByClassName('top-header__menu-icon ignore-react-onclickoutside').item(0).click()
       document.getElementsByClassName('app-menu--item').item(7).children.item(0).click()
    })
   
    browser.pause(3000)
    browserObject.click('@Clickfirstmessage');
    //browser.pause(3000)
    //browserObject.waitForElementPresent('@ContactInfoMessageVerification', 3000);

}
}
