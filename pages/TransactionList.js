//Page Name:   Transaction List functions
//Created By : Piyush Agrawal
//Created Date: 18-05-17

module.exports = function (browser,Cardtype)
{
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

    browserObject.click("@MoreTransactionLink");

    this.objectVerification = function()
    {
      browserObject.waitForElementPresent('@TransactionLabel',5000);
      browserObject.waitForElementPresent('@HomeNavigationLabel',1000);
      browserObject.waitForElementPresent('@TransactionNavigationLabel',1000);
  }

//*******************************************************************************************************
      //Function:      Verify of Transaction page
      //Created By :   Bharat Joshi
      //Creation Date: 8-Jun-2017
// ******************************************************************************************************
      this.TransactionVerification = function()
      {

        browserObject.waitForElementPresent(".//*[@id='container']//div[@class='transaction-search__filter']",5000)
        browserObject.click(".//*[@id='container']//div[@class='transaction-search__filter']");
        browserObject.click("//div[contains(@class,'datepicker')]//input[@class='input' and @placeholder='From' or @placeholder='Från']");
        browser.pause(2000)
        browserObject.clearValue("//div[contains(@class,'datepicker')]//input[@class='input' and @placeholder='From' or @placeholder='Från']")
        browser.pause(2000)
        browserObject.setValue("//div[contains(@class,'datepicker')]//input[@class='input' and @placeholder='From' or @placeholder='Från']","2016-02-16" );

        //Unselect Any Card and Select Primary card
        browserObject.click(".//*[@id='item-anyCard']");
        browserObject.click(".//*[@id='item-0']");

        for(i=1;i<9;i++)
        {
          browserObject.waitForElementPresent(".//*[@id='container']//div[3]//div/a["+i+"]",2000);
          browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__title']",5000);
          browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__value']",5000);
          browserObject.waitForElementPresent(".//*[@id='container']//a["+i+"]//div[@class='list__item__subtitle']",5000);
        }
      }

//*******************************************************************************************************
      //Function:      Click on More Transactions
      //Created By :   Bharat Joshi
      //Creation Date: 8-Jun-2017
// ******************************************************************************************************
      this.MoreTransactionValidation = function()
      {
        browserObject.click("@MoreButton");
        browserObject.waitForElementPresent(".//*[@id='container']//div[3]//div/a[11]",2000);
      }
//*******************************************************************************************************
      //Function:      Verify Sorting of Amount By Ascending
      //Created By :   Bharat Joshi
      //Creation Date: 8-Jun-2017
// ******************************************************************************************************
this.SortingAmountAsc = function()
{
  var assert= require('assert')
  var AmountPreVal= 0
  var AmountSuccVal =0
  var UnsortedArray=[];
  var UnsortedSortedArray=[];
  var IntermidiateArray=[];
  var Ar= require('ArrayList')

  //Click on Sorting Dropdown
  browser.pause(3000);
  browserObject.click("@TransactionSortingButton");
  browserObject.waitForElementPresent('@SortingAmountAsc',5000);
  browserObject.click("@SortingAmountAsc");

  browser.pause(3000)
  browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list__item__title']", function(result)
  {
  RowCount = result.value.length;
  console.log("Total rows are "+ RowCount)
  for (i=1;i<RowCount;i++)
  {
      k=i+1;
      browser
      .getText(".//*[@id='container']//a["+i+"]//div[2]/span",function(result)
      {
          //Get the values from the application and store it in a variable
          AmountPreVal = result.value;

      })
      .getText(".//*[@id='container']//a["+k+"]//div[2]/span",function(result)
      {
          //Get the values from the application and store it in a variable
          AmountSuccVal = result.value;
      })

      //function to perform validation of amounts
      .perform(function()
      {
          var AmountPre =  AmountPreVal.replace(' kr','');
          var AmountPreRepKR =  AmountPre.replace(',','.');
          var AmountPreRepMinus=  AmountPreRepKR.replace('−','');
          var AmountPreFinal =  Math.abs(AmountPreRepMinus);
          //console.log("Amount Pre "+ AmountPreFinal)

          var AmountSucc =  AmountSuccVal.replace(' kr','');
          var AmountSuccRepKR =  AmountSucc.replace(',','.');
          var AmountPreSuccMinus=  AmountSuccRepKR.replace('−','');
          var AmountSuccFinal =  Math.abs(AmountPreSuccMinus);
          //console.log("Amount Pre "+ AmountSuccFinal)

          if (AmountSuccFinal>AmountPreFinal)
          {
              console.log(AmountPreFinal + " is less than "+ AmountSuccFinal)
          }
          else
          {
              console.log("List is not sorted")
          }
      })
    }
  })
}

//*******************************************************************************************************
      //Function:      Verify Sorting of Amount By Descending
      //Created By :   Bharat Joshi
      //Creation Date: 8-Jun-2017
// ******************************************************************************************************

      this.SortingAmountDesc = function()
      {
            var assert= require('assert')
            var AmountPreVal= 0
            var AmountSuccVal =0
            var UnsortedArray=[];
            var UnsortedSortedArray=[];
            var IntermidiateArray=[];
            var Ar= require('ArrayList')
            var l=8
            browser.pause(3000)
            browserObject.click("@SortingDropdownbox");
            browser.pause(3000)
            browserObject.waitForElementPresent('@SortingAmountDesc',5000);
            browserObject.click("@SortingAmountDesc");
            browser.pause(3000)

            browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list__item__title']", function(result)
            {
            RowCount = result.value.length;
            console.log("Total rows are "+ RowCount)

            for (l=2;l<RowCount;l++)
            {
                m=l+1;
                browser
                .getText(".//*[@id='container']//a["+l+"]//div[2]/span",function(result)
                {
                    //Get the values from the application and store it in a variable
                    AmountPreVal = result.value;
                 })
                .getText(".//*[@id='container']//a["+m+"]//div[2]/span",function(result)
                {
                    //Get the values from the application and store it in a variable
                    AmountSuccVal = result.value;
                })

            //function to perform validation of amounts
            .perform(function()
            {
                var AmountPre =  AmountPreVal.replace(' kr','');
                var AmountPreRepKR =  AmountPre.replace(',','.');
                var AmountPreRepMinus=  AmountPreRepKR.replace('−','');
                var AmountPreFinal =  Math.abs(AmountPreRepMinus);
                console.log("Amount Pre "+ AmountPreFinal)

                var AmountSucc =  AmountSuccVal.replace(' kr','');
                var AmountSuccRepKR =  AmountSucc.replace(',','.');
                var AmountPreSuccMinus=  AmountSuccRepKR.replace('−','');
                var AmountSuccFinal =  Math.abs(AmountPreSuccMinus);
                console.log("Amount Succ "+ AmountSuccFinal)

                if (AmountSuccFinal<AmountPreFinal)
                {
                    console.log("List is sorted")
                }
                else
                {
                    console.log("List is not sorted")
                }

            })
           }
        })
      }

//*******************************************************************************************************
        //Function:      Verify Transaction are sorted in Ascending order of date
        //Created By :   Piyush Agrawal
        //Creation Date: 26-July-2017
// ******************************************************************************************************

      this.SortingDateAsc = function()
      {
        var assert= require('assert')
        var PrevDate= 0
        var NexDate =0

        //Click on Sorting Dropdown
        browser.pause(3000);
        browserObject.click("@TransactionSortingButton");
        browserObject.waitForElementPresent('@SortingDateAsc',5000);
        browserObject.click("@SortingDateAsc");

        browser.pause(3000)
        browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list__item__title']", function(result)
        {
        RowCount = result.value.length;
        console.log("Total rows are "+ RowCount)
        for (i=1;i<RowCount;i++)
        {
            k=i+1;
            browser
            .getText(".//*[@id='container']//a["+i+"]//div[3]//div[@class='hidden-on-device']/span",function(result)
            {
                PrevDate = result.value;
            })
            .getText(".//*[@id='container']//a["+k+"]//div[3]//div[@class='hidden-on-device']/span",function(result)
            {
                NexDate = result.value;
            })
            .perform(function()
            {
                var PreviousDate = Date.parse(PrevDate);
                var NextDate   = Date.parse(NexDate);

                if(PreviousDate <= NextDate)
                {
                  console.log( PreviousDate +" is less than " + NextDate);
                }
                else
                {
                  console.log("Date Sorting is not correct");
                   browserObject.waitForElementPresent("@NewMessageButton",1000);
                }
            })
          }
        })
      }

//*******************************************************************************************************
        //Function:      Verify Transaction are sorted in Descending order of date
        //Created By :   Piyush Agrawal
        //Creation Date: 26-July-2017
// ******************************************************************************************************

      this.SortingDateDesc = function()
      {
        var assert= require('assert')
        var PrevDate= 0
        var NexDate =0

        //Click on Sorting Dropdown
        browser.pause(3000);

        browserObject.click("@TransactionSortingButton");
        browserObject.waitForElementPresent('@SortingDateDesc',5000);
        browserObject.click("@SortingDateDesc");

        browser.pause(3000)
        browser.elements("xpath",".//*[@id='container']//div[3]//div[2]/div//div[2]/div[@class='list__item__title']", function(result)
        {
        RowCount = result.value.length;
        console.log("Total rows are "+ RowCount)
        for (i=1;i<RowCount;i++)
        {
            k=i+1;
            browser
            .getText(".//*[@id='container']//a["+i+"]//div[3]//div[@class='hidden-on-device']/span",function(result)
            {
                PrevDate = result.value;
            })
            .getText(".//*[@id='container']//a["+k+"]//div[3]//div[@class='hidden-on-device']/span",function(result)
            {
                NexDate = result.value;
            })

            .perform(function()
            {
                var PreviousDate = Date.parse(PrevDate);
                var NextDate   = Date.parse(NexDate);

                if(PreviousDate >= NextDate)
                {
                  console.log( PreviousDate +" is greater than " + NextDate);
                }
                else
                {
                  console.log("Date Sorting is not correct");
                   browserObject.waitForElementPresent("@NewMessageButton",1000);
                }
            })
          }
        })
      }


//*******************************************************************************************************
//Function:      Verify Export to Excel funcationality
//Cretaed By :   Bharat Joshi
//Creation Date: 8-Jun-2017
// ******************************************************************************************************
      this.ExportToExcel=function()
      {
        var dateTime = require('node-datetime');
        var replace1 = require('replace');
        var Ar= require('ArrayList')
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d');
        var xlsx = require("xlsx");
        var fs = require('fs');
        const assert = require('assert');
        var iTransactionCount
        var UserName=process.env.USERNAME
        var DatelistFromExcel =[];
        var listFromApplication =[];
        var AmountlistFromExcel=[];
        var jsonfile = require('jsonfile');

        //Click on Export Button
        browser.pause(5000)
        browserObject.click("@TransactionDownload");
        browserObject.click("@ExportToExcelSpan")
        browser.pause(5000)
        browserObject.waitForElementPresent("@TransactionDownload",2000,function()
        {
             //browser.pause(5000)
            //Intialize the required parametersnightwatc -e 
            if(typeof require !== 'undefined') XLSX = require("xlsx");
            var workbook = XLSX.readFile("C:/Users/"+UserName+"/Downloads/Transaktionslista_"+formatted+".xls");
            var first_sheet_rows = workbook.sheetRows;
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var range=worksheet["!ref"];

            //Create a function for getting the value from the Excel and putting it into Json
            browserObject.waitForElementPresent("@TransactionDownload",2000,function()
            {
                //Start the Loop from the counter 7 where the data from the transaction lists starts
                for(var R = 7; R <=17; ++R)
                {
                    var desired_cell = worksheet['A'+R];
                    var desired_value = (desired_cell ? desired_cell.v : undefined);
                    DatelistFromExcel.push(desired_value)

                    var desired_cell_amount = worksheet['I'+R];
                    var desired_value_amount = (desired_cell ? desired_cell_amount.v : undefined);
                    AmountlistFromExcel.push(desired_value_amount)

                }

            //Loop to push the data from application and verify it with the excel
            for (var iTransactionCount=1;iTransactionCount<9;iTransactionCount++)
            {
                //Get the Value in the Results
                result2Date=DatelistFromExcel[iTransactionCount-1]

                result2AmountExcel=AmountlistFromExcel[iTransactionCount-1]
                //var result2Amount = result2AmountExcel.replace(".", ",");

                //Verify the browser contents with the data fetched from excel
                browserObject.verify.containsText(".//*[@id='container']//a["+iTransactionCount+"]//div[@class='hidden-on-device']/span[1]",result2Date)
                //browserObject.verify.containsText(".//*[@id='container']//a["+iTransactionCount+"]//div[@class='list-item__value']//span",result2AmountExcel + "  Kr")
            }

        });

        //Delete the downloaded excel
            fs.unlink("C:/Users/"+UserName+"/Downloads/Transaktionslista_"+formatted+".xls", function(error)
            {
                if (error)
                {
                    throw error;
                }
                console.log('Deleted the Downloaded Excel file ');
            });
        });



      }
}
