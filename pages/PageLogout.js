module.exports = function (browser,Cardtype) {

  var browserObject = browser.page.ObjectRepository();
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

  //function to verify the login page
  this.logout = function(Cardtype) {

        //Setup the Variables in required for reach Test
        var FolderName=new Date().getTime();
        browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/login_Page.png')

        //click on Logout ICON
        browserObject.click('@LogoutLink')

        //Verify the Message exist on the page
        //browser.expect.element(".//span[text()='See you next time!']").to.be.present.after(5000);
        browser.expect.element(".//span[text()='Vi ses nästa gång!']").to.be.present.after(5000);

        //Click on Return to Login
        browser.pause(2000)
        browserObject.click('@ReturnToLogin')
        //browser.closeWindow()
    }
}
