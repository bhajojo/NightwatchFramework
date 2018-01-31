module.exports = {
  elements: {},
  commands: [
    {
        DownloadLatestInvoice: function (browserObject) {
        //Download Latest Invoice and Verify in the Location 
        browserObject.click(".//*[@id='container']//div[@class='recent-invoice__download-link-text']",function()
        {           
            console.log('Downloaded the Latest PDF file ');
        }); 
        browserObject.pause(5000);
      
      },
      DeleteDownloadeInvoice: function () {
        this.api.perform(function() {  
        var UserName=process.env.USERNAME
        const assert = require('assert');
        var fs = require('fs');
            
        fs.stat("C:/Users/"+UserName+"/Downloads/INVOICE_2017-06-30.pdf", function(err, stat) 
            {
                
                if(err == null) 
                {
                    //assert.ok("Date","File Exists")
                    fs.unlink("C:/Users/"+UserName+"/Downloads/INVOICE_2017-06-30.pdf", function(error)
                    {
                        if (error)
                        {
                            throw error;
                        }
                        console.log('Deleted the Downloaded PDF file ');
                       
                    });
                }
            });              
        }.bind(this)); // ensure `this` in perform is still page object
      }
    }
  ]
};