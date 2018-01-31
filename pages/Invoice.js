// Page Name:   Invoice functions
// Created By : Bharat Joshi
// Created Date: 23-05-17

module.exports = function (browser,Cardtype)
{
    //var browserObject = browser.page.ObjectRepository();
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
      //Function:      Verify the Invoice Page
      //Created By :   Bharat Joshi
      //Creation Date: 23-Jun-2017
// ******************************************************************************************************
this.InvoicePageVerification = function()
    {
        var UserName=process.env.USERNAME
        const assert = require('assert');
        var fs = require('fs');
        browserObject.click("@HomePageMenu");
        browserObject.click("@HomePageMenuPayments");
        browserObject.waitForElementPresent("@InvoicesTab",2000);
        browser.pause(2000)
        browserObject.click("@InvoicesTab")
        browser.pause(1000)

        //Verify the elements on the Invoice Page
        browserObject.waitForElementPresent("@LatestInvoiceHeading",3000)    
        browserObject.waitForElementPresent("@LatestInvoiceMonth",3000) 
        browserObject.waitForElementPresent("@LatestInvoicedueDate",3000) 
        browserObject.waitForElementPresent("@LatestInvoiceDownloadLink",3000) 

        //This Section will appear later
        // browserObject.waitForElementPresent("@PreviousInvoiceHeader",3000)  
        // browserObject.waitForElementPresent("@PreviousInvoiceMonth",3000) 
        // browserObject.waitForElementPresent("@PreviousInvoicedueDate",3000) 
        // browserObject.waitForElementPresent("@PreviousInvoiceDownloadLink",3000) 

              
}

//*******************************************************************************************************
      //Function:      Verify the Invoice Page
      //Created By :   Bharat Joshi
      //Creation Date: 23-Jun-2017
// ******************************************************************************************************
// this.DeleteDownloadedPDF = function()
// {
//     var UserName=process.env.USERNAME
//     const assert = require('assert');
//     var fs = require('fs');
//     fs.stat("C:/Users/"+UserName+"/Downloads/INVOICE_2013-11-31.pdf", function(err, stat) 
//     {
//         if(err == null) 
//         {
//             //assert.ok("Date","File Exists")
//             fs.unlink("C:/Users/"+UserName+"/Downloads/INVOICE_2013-11-31.pdf", function(error)
//             {
//                 if (error)
//                 {
//                     throw error;
//                 }
//                 console.log('Deleted the Downloaded PDF file ');
//                 //browser.pause(10000)
//             });
//         }
//     });
// }

//*******************************************************************************************************
      //Function:      Verify the Invoice Page
      //Created By :   Bharat Joshi
      //Creation Date: 23-Jun-2017
// ******************************************************************************************************
this.DownloadPreviousInvoice = function()
{
    browserObject.click("@PreviousInvoiceDownloadLink",function()
        {           
            console.log('Downloaded Previous Invoices PDF file ');
        });
}

// //*******************************************************************************************************
//       //Function:      Verify the Invoice Page
//       //Created By :   Bharat Joshi
//       //Creation Date: 23-Jun-2017
// // ******************************************************************************************************
// this.DownloadLatestInvoice = function()
// {
//     //Download Latest Invoice and Verify in the Location 
//     browserObject.click("@LatestInvoiceDownloadLink",function()
//     {           
//         console.log('Downloaded the Latest PDF file ');
//     });  
// }


}

// module.exports = {

//   commands: [
//     {
//       InvoicePageVerification: function () {
//         console.log('Verification'); // called immediately
//       },
//        DownloadLatestInvoice: function () {
//         console.log('Download'); // called immediately
//       },
//        DeleteDownloadedPDF: function () {
//         console.log('Delete'); // called immediately
//       },
//       myQueuedCommand: function () {
//         this.api.perform(function () {
//           console.log('Page object command as queued command'); // called in queue
//         }.bind(this)); // ensure `this` in perform is still page object
//       }
//     }
//   ]
// };