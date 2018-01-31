module.exports = function (browser) {
  this.showMyAccountDetails = function() {

//Setup the Variables in required for reach Test
    var browserObject = browser.page.ObjectRepository();
    var FolderName=new Date().getTime();

    browserObject.waitForElementPresent('@LogoutLink', 3000);

    //Click Primary Card

    //browserObject.click('@SelectPrimaryCard');

    //Primary Card UI
    //Highlight Primary Card
    browserObject.waitForElementPresent('@HighlightedPrimaryCard', 3000);
    //Available Card credit
    browserObject.waitForElementPresent('@PrimaryMaskedCardNumber', 3000);
    //Card list icon
    browserObject.waitForElementPresent('@PrimaryCardHolderName', 3000);

//Save Screenshot
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/primaryCardDetails.jpg')

//Account details UI
    // Credit Information
    //Credit used title
    browserObject.waitForElementPresent('@CreditUsedTitle', 3000);
    //Used Credit
    browserObject.waitForElementPresent('@CreditUsedAmount', 3000);
    //Credit Limit
    browserObject.waitForElementPresent('@CreditLimit', 3000);
    //Change limit static link
    browserObject.waitForElementPresent('@ChangeLimitLink', 3000);

    //Available Balance Information
    //Available Balance Title
    browserObject.waitForElementPresent('@AvailableBalanceTitle', 3000);
    //Account number
    browserObject.waitForElementPresent('@AvailableBalanceAmount', 3000);

    //Fuel discounts information
    //Title
    browserObject.waitForElementPresent('@FuelDiscountTitle',3000);
    //Discount amount
    browserObject.waitForElementPresent('@FuelDiscountAmount',3000);
    //Year info
    browserObject.waitForElementPresent('@FuelDiscountYearInfo',3000);
    //Read more link
    browserObject.waitForElementPresent('@FuelDiscountReadMore',3000);
    //Click Read more link
    browserObject.click('@FuelDiscountReadMore');
    browser.pause(5000)

    //Fuel matrix page
    //Save Screenshot
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/Fuelmatrixpage.jpg')
    //Title
   // browserObject.waitForElementPresent('@ReadMoreTitle',3000); not appering now 
    //Navigation links
    //browserObject.waitForElementPresent('@HomeBackButtonLink',3000);
    //browserObject.waitForElementPresent('@FuelDiscountNavigationLink',3000);
    //click Home link
    //browserObject.click('@HomeBackButtonLink');
    //browser.pause(5000)

    //Card Type Information
    //Card TYpe title
    browserObject.waitForElementPresent('@CardTitlePrimary', 10000);
    //Card Nickname
    browserObject.waitForElementPresent('@CardDetailsNickname', 10000);
    //Card Type-- Not available
    //browserObject.waitForElementPresent('@CardDetailsType', 10000);

//Select Extra Card
    browserObject.click('@SelectExtraCard');

//Extra Card UI
    //Highlight Extra Card
    browserObject.waitForElementPresent('@HighlightedExtraCard', 3000);
    //Extra Card text
    browserObject.waitForElementPresent('@ExtraMaskedCardNumber', 3000);
    //Available Card credit
    browserObject.waitForElementPresent('@ExtraCardHolderName', 3000);

//Save Screenshot
    browser.saveScreenshot('./reports/Screenshot/'+FolderName+'/extraCardDetails.jpg')

}
}
