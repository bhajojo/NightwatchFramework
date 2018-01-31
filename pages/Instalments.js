//Page Name:   Installments functions
//Created By : Bharat Joshi
//Created Date: 23-05-17

module.exports = function (browser,Cardtype)
{
    var browserObjectInstalment = browser.page.ObjectRepository();
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

//*******************************************************************************************************
      //Function:      Verify the Instalment Page
      //Created By :   Bharat Joshi
      //Creation Date: 23-Jun-2017
// ******************************************************************************************************
      this.InstalmentsPageVerification = function()
      {
    
            browserObject.click("@HomePageMenu");
            browserObject.click("@HomePageMenuPayments");
            browserObject.waitForElementPresent("@InstalmentsTab",2000);
            browser.pause(2000)
            browserObject.click("@InstalmentsTab")
            browser.pause(5000)

            //Get the Count of Installments 
            browser.elements("xpath",".//*[@id='container']//div[@class='installments__section']", function(result){
                var elementcount = result.value.length;
                console.log(elementcount)
                var i = 1;
                 for(i=1;i<=elementcount;i++)
                 {
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__field--cols installments__regular--font']").to.be.present.after(4000)
                        browserObject.waitForElementPresent(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[contains(@class,'font') and contains(@class,'installments__brand'')]",3000)
                        browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__field-cols installments__title']//span[text()='NÄSTA BETALNING']").to.be.present.before(4000)
                        browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__field-cols installments__title']//span[text()='ÅTERSTÅENDE']").to.be.present.before(4000)
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[contains(@class,'regular') and contains(@class,'2')]//span[1]").to.be.present.before(4000)
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__regular--font offset-2']//span[1]").to.be.present.before(4000)
                        //browserObject.waitForElementPresent(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[contains(@class,'installments__date') and contains(@class,'offset-4')]",3000)
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__field--cols installments__date offset-4']//span[1]").to.be.present.before(4000)
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__regular--font offset-2' and contains(.,'payments')]").to.be.present.before(4000)
                        //browserObject.waitForElementPresent(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[contains(@class,'installments__field') and contains(@class,'offset-4')]",3000)
                        //browser.expect.element(".//*[@id='container']//div[@class='installments__section']["+i+"]//div[@class='installments__remaining--amount installments__field--cols offset-4']//span[1]").text.to.contain('Kr')
                }
            });           
      }
    
}