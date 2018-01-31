//Page Name:   Recent Transaction functions
//Created By : Piyush Agrawal
//Created Date: 24-05-17

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

    this.objectVerification = function()
    {
      browserObject.waitForElementPresent('@UnbilledTrnLabel',5000);
      browserObject.waitForElementPresent('@MoreTransactionIcon',1000);
      browserObject.waitForElementPresent('@MoreTransactionLink',1000);
    }

    this.RecentTransactionVerification = function()
    {

      for (i=1;i<6;i++)
      {
        browserObject.waitForElementPresent(".//*[@id='container']//div[3]//div/a["+i+"]",2000);
        browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__title']",1000);
        browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__value']",1000);
        browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__subtitle']",1000);
      }
  }

// Function to verify UI when their are no transaction for user
    this.NoTransactions = function()
    {
      browserObject.waitForElementPresent("@NoTransactionsMessage",2000);
      browserObject.waitForElementPresent("UnbilledTrnLabel",2000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//div[3]//div/a["+i+"]",2000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list__item__title']",1000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list__item__value']",1000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list__item__subtitle']",1000);

      //Verify when their are bo transactions on transaction page
      browserObject.click("@MoreTransactionLink");
      browserObject.waitForElementPresent("@NoTransactionsMessage",2000);
      browserObject.waitForElementVisible("@SortingDropdownbox",2000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list-item__title']",1000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list-item__value']",1000);
      browserObject.waitForElementNotPresent(".//*[@id='container']//a[1]//div[@class='list-item__subtitle']",1000);

    }


}
