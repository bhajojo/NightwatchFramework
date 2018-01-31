module.exports = function (browser) {
  this.PerformAutologout = function() {

//Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    browserObject.waitForElementPresent('@LogoutLink', 3000);

    //Wait till 15 minutes to AutoLogOut

    browser.pause(900000)

    //Verify login page object after auto logout

    browserObject.waitForElementPresent('@loginHeader', 3000);

//Save Screenshot
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/AfterAutoLogOut.jpg')

}
}
