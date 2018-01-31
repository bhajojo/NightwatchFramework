//Page Name:   Delete Message
//Created By : Bharat Joshi
//Created Date: 08-05-17
module.exports = function (browser) {
  this.VerifyDeleteMessage = function() {
    const assert = require('assert');
    //Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    //Open Messages from Menu
    browserObject.click("@HomePageMenu");
    //Select message option
    browserObject.click("@HomePageMenuMessages");
    // browser.pause(3000)
    // //Click message drop down
    // browserObject.click("@MessageDropDown");
    // browser.pause(3000)
    // //Click Delete option
    // browserObject.click("@DeleteOption");
    // //Save screenshot for Transaction Details
    // browser.pause(3000)
   
     browser.execute(function() {
          document.getElementsByClassName('dropdown-button').item(0).children.item(0).click()
          document.getElementsByClassName('dropdown-container__list--items').item(0).click()
    })

    browser.dismissAlert()
    browser.pause(3000)
    
    //Click Delete option
    browserObject.click("@HomePageMenu");
    //Select message option
    browserObject.click("@HomePageMenuMessages");
    browser.pause(3000)
    //Click message drop down
    // browserObject.click("@MessageDropDown");
    // browser.pause(3000)
    // //Click Delete option
    // browserObject.click("@DeleteOption");
    // browser.pause(3000)

    browser.execute(function() {
          document.getElementsByClassName('dropdown-button').item(0).children.item(0).click()
          document.getElementsByClassName('dropdown-container__list--items').item(0).click()
    })
    browser.acceptAlert()
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/DeleteConfirmationDialog.jpg');
    //Click 'OK' button


  }
}
