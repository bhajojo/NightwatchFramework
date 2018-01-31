// ******************************************************************************************************
//Page Name:   Transaction Search functions
//Created By : Piyush Agrawal
//Created Date: 21-06-17
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
    // browser.pause(5000);
    // browserObject.click("@MoreTransactionLink");
    // browser.pause(5000);

    //Work around to clikc on more Transactions 
    browser.execute(function() {
          document.getElementsByClassName('homepage__moretransaction__title').item(0).click()
          document.getElementsByClassName('transaction-search__filter').item(0).click()
          
    })
    
    
    //browserObject.click('@TransactionSearchFilter');
    browser.pause(3000);
    var contents = fs.readFileSync("./TestDataAgrol/SearchData.Json");
    var jsonContentSearch = JSON.parse(contents);
    
    this.objectVerification = function()
    {
      browserObject.waitForElementPresent('@TransactionSearchFilterDatelabel',5000);
      browserObject.waitForElementPresent('@TransactionSearchFilterDateFrom',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterDateTo',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterAmountLabel',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterAmountFrom',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterAmountTo',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterCardLabel',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterPrimaryCard',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterAnyCard',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterExtraCard',1000);
      browserObject.waitForElementPresent('@TransactionSearchFilterNoCard',1000);
      browserObject.waitForElementPresent('@FilterLabel',1000);
    };



    //*******************************************************************************************************
          //Function:      Verify search using free text search field
          //Created By :   Piyush Agrawal
          //Creation Date: 22-Jun-2017
    // ******************************************************************************************************

    this.FreeTextFieldSearch =  function()
    {
      browserObject.setValue('@TransactionSearchTextFilter', jsonContentSearch.Text);
      browser.pause(3000);

      browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result){

        Count = result.value.length;
        console.log("Total rows are"+ Count)

        for (i=1;i<=Count;i++)
        {
          browserObject.verify.containsText(".//*[@id='container']//a["+i+"]//div[@class='list-item__title']",jsonContentSearch.Text);
        }
        browser.pause(3000);
        browserObject.clearValue(".//*[@id='container']//input[@class='input' and @placeholder='Sök' and @value='"+jsonContentSearch.Text+"']");
        browser.pause(2000);
        browserObject.click('@TransactionSearchTextFilter');
    });
}
    //*******************************************************************************************************
          //Function:      Verify search using Date search field
          //Created By :   Piyush Agrawal
          //Creation Date: 22-Jun-2017
    // ******************************************************************************************************

    this.DateSearch = function()
    {

      browserObject.click('@TransactionSearchFilterDateFrom');
      browser.pause(2000);
      browserObject.clearValue('@TransactionSearchFilterDateFrom');
      browser.pause(2000);
      browserObject.setValue("@TransactionSearchFilterDateFrom",jsonContentSearch.FromDate );
      browser.pause(3000);
      browserObject.click('@TransactionSearchFilterDateTo');
      browser.pause(2000);
      browserObject.clearValue('@TransactionSearchFilterDateTo');
      browser.pause(2000);
      browserObject.setValue("@TransactionSearchFilterDateTo",jsonContentSearch.ToDate );
      browser.pause(5000);

      browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result){
      Count = result.value.length;
      console.log("Total rows are"+ Count)

      for (i=1;i<=Count;i++)
      {
        browser.getText(".//*[@id='container']//a["+i+"]//div[3]//span",function(result)
        {
            //Get transaction date
          var  TransactionDate = result.value;
          var  FromDate = jsonContentSearch.FromDate;
          var ToDate = jsonContentSearch.ToDate;

          var from = Date.parse(FromDate);
          var to   = Date.parse(ToDate);
          var check = Date.parse(TransactionDate );

          if(check <= to && check >= from)
          {
            console.log("Date fall between From and To date");
          }
          else
          {
              console.log("Failed");
              browserObject.waitForElementPresent("@NewMessageButton",1000);
          }
        });
      }
      browser.pause(6000);
    });
  }

//*******************************************************************************************************
          //Function:      Verify search using Amount search field
          //Created By :   Piyush Agrawal
          //Creation Date: 22-Jun-2017
// ******************************************************************************************************

    this.SearchAmount =  function()
    {
      var Amount= 0;
      var replace= require('replace')
      var assert= require('assert')
      browserObject.setValue("@TransactionSearchFilterAmountFrom",jsonContentSearch.FromAmount);
      browser.pause(3000);
      browserObject.setValue("@TransactionSearchFilterAmountTo",jsonContentSearch.ToAmount);
      browser.pause(6000);;

      browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result){
      Count = result.value.length;
      console.log("Total rows are"+ Count)

      for (i=1;i<=Count;i++)

      {
          browser
          .getText(".//*[@id='container']//a["+i+"]//div[2]/span",function(result)
          {
              //Get the values from the application and store it in a variable
              Amount = result.value;
              console.log("Amount IS "+ Amount)
              var Amount4 =  Amount.replace(' kr','');
              console.log("Amount4 IS "+ Amount4)
              var Amount1 =  Amount4.replace(',','.');
              console.log("Amount1 IS "+ Amount1)
              var Amount2=  Amount1.replace('−','');
              console.log("Amount2 IS "+ Amount2)
              var Amount3 =  Math.abs(Amount2);
              console.log("Amount3 IS "+ Amount3)
              console.log("FROM:"+ jsonContentSearch.FromAmount)
              console.log("TO:"+ jsonContentSearch.ToAmount)
              if(Amount3 >= jsonContentSearch.FromAmount && Amount3 <= jsonContentSearch.ToAmount)
              {
                console.log("Amount is between From and To");
              }
              else
              {
                 console.log("Search Failed");
                 //Below object is just script should fail and exit loop with else part
                   browserObject.waitForElementPresent("@NewMessageButton",1000);
              }
          });
        }
      });
        browser.pause(4000);
        browserObject.clearValue(".//*[@id='container']//input[@class='input' and @placeholder='Från' and @value='"+jsonContentSearch.FromAmount+"']");
        browser.pause(2000);
        browserObject.clearValue(".//*[@id='container']//input[@class='input' and @placeholder='till' and @value='"+jsonContentSearch.ToAmount+"']");
        browser.pause(2000);
      }

//******************************************************************************************************
            //Function:      Verify search using card type field
            //Created By :   Piyush Agrawal
            //Creation Date: 22-Jun-2017
// ******************************************************************************************************

      this.SearchCardType = function()
      {
        browserObject.click(".//*[@id='item-0' and  @class='checkbox-group__checkbox' and  @name='543066******6099' and @value='543066******6099']");
        browser.pause(3000);
        browserObject.click(".//*[@id='item-notLinkedToCard']");
        browser.pause(3000);
        browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result){
        Count = result.value.length;
        console.log("Total rows are"+ Count)

        for (i=1;i<=Count;i++)
        {
          browserObject.verify.containsText(".//*[@id='container']//a["+i+"]//div[@class='hidden-on-device']//div[@class='i18n-account-number']",jsonContentSearch.MaskCardNumber);
          //browserObject.verify.containsText(".//*[@id='container']//a["+i+"]//div[@class='hidden-on-desktop']//div[@class='i18n-account-number']",jsonContentSearch.MaskCardNumber);
        }
          browser.pause(8000);
          browserObject.click(".//*[@id='item-0' and  @class='checkbox-group__checkbox' and  @name='543066******6099' and @value='543066******6099']");

        });
      }

      //*******************************************************************************************************
            //Function:      Verify search using Fuel type field
            //Created By :   Piyush Agrawal
            //Creation Date: 22-Jun-2017
      // ******************************************************************************************************

      this.SearchFuelType = function()
      {
        browserObject.click(".//*[@id='item-0' and @class='checkbox-group__checkbox'  and @name='BENSIN' and@value='BENSIN']");
        browser.pause(3000);
        browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result)
        {
        Count = result.value.length;
        console.log("Total rows are"+ Count)

        for (i=1;i<=Count;i++)
        {
          browserObject.verify.containsText(".//*[@id='container']//a["+i+"]//div[1]/span[contains(.,'BENSIN ')]",jsonContentSearch.FuelType);
        }

        browserObject.click(".//*[@id='item-0' and @class='checkbox-group__checkbox'  and @name='BENSIN' and@value='BENSIN']");
      });
    }

      //*******************************************************************************************************
            //Function:      Verify error message when To field is less than form field
            //Created By :   Piyush Agrawal
            //Creation Date: 21-July-2017
      // ******************************************************************************************************

      this.ErrorMesageFieldValidations = function() 
      {
        browser.pause(3000);
        browserObject.clearValue("@TransactionSearchFilterAmountFrom");
        browserObject.setValue("@TransactionSearchFilterAmountFrom",jsonContentSearch.ToAmount);
        browser.pause(3000);
        browserObject.clearValue("@TransactionSearchFilterAmountTo");
        browser.pause(2000)
        browserObject.setValue("@TransactionSearchFilterAmountTo",jsonContentSearch.FromAmount);

        browserObject.waitForElementPresent(".//*[@id='container']//label[contains(.,'Minst') and contains(.,'"+jsonContentSearch.ToAmount+"') and contains(.,'kan anges')]",3000);
        browser.pause(3000);

        browserObject.clearValue("@TransactionSearchFilterAmountTo");
        browserObject.setValue("@TransactionSearchFilterAmountTo",jsonContentSearch.ToAmount);
        browser.pause(3000);
        browserObject.clearValue("@TransactionSearchFilterAmountTo");
        browser.pause(2000)
        browserObject.setValue("@TransactionSearchFilterAmountFrom",jsonContentSearch.ToAmountErr);
        browser.pause(2000);

        browserObject.waitForElementPresent(".//*[@id='container']//label[contains(.,'Mindre eller lika med') and contains(.,'"+jsonContentSearch.ToAmount+"') and contains(.,'kan anges')]",3000);
        browser.pause(2000);
      }

//*******************************************************************************************************
            //Function:      Verify information message when no transactions present
            //Created By :   Piyush Agrawal
            //Creation Date: 21-July-2017
// ******************************************************************************************************

      this.NoDataValidation = function()
      {
        browserObject.click(".//*[@id='item-1' and @class='checkbox-group__checkbox'  and @name='DIESEL' and@value='DIESEL']");
        browser.pause(3000);
        browserObject.waitForElementPresent('@TransactionNodataMsg',3000);
        browserObject.waitForElementNotPresent('@TransactionSortingButton',3000);
        browserObject.waitForElementNotPresent('@TransactionExportButton',3000);

        browserObject.setValue("@TransactionSearchFilterAmountFrom",jsonContentSearch.FromAmount);;
        browserObject.click(".//*[@id='item-0' and @class='checkbox-group__checkbox'  and @name='BENSIN' and@value='BENSIN']");
      }

//*******************************************************************************************************
        //Function:      Verify Transaction are sorted in Descending order of amount
        //Created By :   Piyush Agrawal
        //Creation Date: 24-July-2017
// ******************************************************************************************************

      this.AmountSortDesc =  function()
      {
        var Amount= 0;
        var replace= require('replace')
        browser.pause(3000)
        browserObject.click("@TransactionSortingButton");
        browser.pause(2000);
        browserObject.click("@SortingAmountDesc");
        browserObject.click("@TransactionSortingButton");

        browser.pause(3000);
        browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result)
        {
        RowCount = result.value.length;
        console.log("Total rows are"+ RowCount)
        for (i=1;i<RowCount;i++)
        {
          browser.getText(".//*[@id='container']//a["+i+"]/div[2]/div[2]/span",function(result)
          {
            //Get the values from the application and store it in a variable
            Amount1 = result.value;
            var Amount1 =  Amount1.replace(' kr','');
            var Amount1 =  Amount1.replace(',','.');
            var Amount1=  Amount1.replace('−','');
            var Amount1 =  Math.abs(Amount1);
            console.log("Amount IS "+ Amount1);
            browser.getText(".//*[@id='container']//a["+i+"+1]//div[2]/span",function(result)
            {
                //Get the values from the application and store it in a variable
                Amount2 = result.value;
                var Amount2 =  Amount2.replace(' kr','');
                var Amount2 =  Amount2.replace(',','.');
                var Amount2=  Amount2.replace('−','');
                var Amount2 =  Math.abs(Amount2);
                console.log("Amount IS "+ Amount2);
                if(Amount1 >= Amount2)
                {
                  console.log("Transaction is sorted");
                }
                else
                {
                   console.log("Transaction is not sorted");
                   //Below object is just script should fail and exit loop with else part
                     browserObject.waitForElementPresent("@NewMessageButton",1000);
                }
            });
          });
        }
      });
    }

    //*******************************************************************************************************
            //Function:      Verify Transaction are sorted in Ascending order of amount
            //Created By :   Piyush Agrawal
            //Creation Date: 24-July-2017
    // ******************************************************************************************************

          this.AmountSortAsc =  function()
          {
            var Amount= 0;
            var replace= require('replace')

            browserObject.click("@TransactionSortingButton");
            browser.pause(1000);
            browserObject.click("@SortingAmountAsc");
            browserObject.click("@TransactionSortingButton");

            browser.pause(3000);
            browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list-item__title']", function(result)
            {
            RowCount = result.value.length;
            console.log("Total rows are"+ RowCount)
            for (i=1;i<RowCount;i++)
            {
              browser.getText(".//*[@id='container']//a["+i+"]/div[2]/div[2]/span",function(result)
              {
                //Get the values from the application and store it in a variable
                Amount1 = result.value;
                var Amount1 =  Amount1.replace(' kr','');
                var Amount1 =  Amount1.replace(',','.');
                var Amount1=  Amount1.replace('−','');
                var Amount1 =  Math.abs(Amount1);
                console.log("Amount IS "+ Amount1);
                browser.getText(".//*[@id='container']//a["+i+"+1]//div[2]/span",function(result)
                {
                    //Get the values from the application and store it in a variable
                    Amount2 = result.value;
                    var Amount2 =  Amount2.replace(' kr','');
                    var Amount2 =  Amount2.replace(',','.');
                    var Amount2=  Amount2.replace('−','');
                    var Amount2 =  Math.abs(Amount2);
                    console.log("Amount IS "+ Amount2);
                    if(Amount1 <= Amount2)
                    {
                      console.log("Transaction is sorted");
                    }
                    else
                    {
                       console.log("Transaction is not sorted");
                       //Below object is just script should fail and exit loop with else part
                         browserObject.waitForElementPresent("@NewMessageButton",1000);
                    }
                });
              });
            }
          });
        }





}
