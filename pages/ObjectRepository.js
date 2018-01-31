//Page Name:   ForgetPasswordPage
//Created By : Bharat Joshi
//Created Date: 08-05-17
//----------------------------------------------------------------------------------
module.exports = {
    elements: {
        title: { selector: 'div[class=title]' },
        loginlink: {
            locateStrategy: 'xpath',
            selector: ".//input[contains(.,'Log in') or contains(@value,'Logga in')]"
        },
        Cardslink: {
            locateStrategy: 'xpath',
            selector: ".//a[text()='Cards' or contains(.,'Kort')]"
        },
        Transactionlink: {
            locateStrategy: 'xpath',
            selector: ".//a[text()='Transactions' or text()='Transaktioner']"
        },
        Homelink: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Home' or text()='Hem']"
        },
        LogoutLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//a[contains(@href,'#/authenticate/logout')]"
        },
        loginHeader: {
            locateStrategy: 'xpath',
            selector: ".//h1//span[text()='Logga in']"
        },
        mobileBankLink: {
            locateStrategy: 'xpath',
            selector: ".//li[1]//span[text()='Mobil BankID' or text()='Mobile BankID']"
        },
        passwordLink: {
            locateStrategy: 'xpath',
            selector: ".//li[2]//a[@class='link']"
        },
        HomePageLink: {
            locateStrategy: 'xpath',
            selector: ".//h1[text()='My card']"
        },
        MyCardLabel: {
            locateStrategy: 'xpath',
            selector: ".//h1[text()='My Pages']"
        },
        PrimaryCardLabel: {
            locateStrategy: 'xpath',
            selector: ".//div[text()='Primary card']"
        },
        NotificationIcon: {
            locateStrategy: 'xpath',
            selector: ".//div[contains(@class,'notifications__badge')]"
        },
        TransferAmountMenu: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='app-menu--title']//span[text()='Överföra pengar']"
        },
        CardSecurityMenu: {
            locateStrategy: 'xpath',
            selector: ".//ul[@class='app-menu--list']//span[text()='Security' or text()='säkerhet']"
        },
        UpcomingPaymentsLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Upcoming Payments']"
        },
        UpcomingPaymentsLabel1: {
            locateStrategy: 'xpath',
            selector: ".//span[text() = 'Upcoming payment']"
        },
        MinimumAmountLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[contains(.,'Minimum')]"
        },
        UnbilledTrnLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Recent Transactions' or text()='Senaste transaktioner']"
        },
        PersonalServicesLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Personal services' or text()='Personliga tjänster' or text()='Genvägar']"
        },
        MessagesLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Messages' or text() ='meddelanden']"
        },
        CreditLimitLabel: {
            locateStrategy: 'xpath',
            selector: ".//ul[@class='grid-links']//span[text()='Kreditgräns']"
        },
        CreditLimitLabelShortCut: {
            locateStrategy: 'xpath',
            selector: ".//ul[@class='grid-links']//span[text()='Kreditgräns']"
        },
        HelpAndSuuportLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Help & Support' or text()='Hjälp och support']"
        },
        ProfileLabel: {
            locateStrategy: 'xpath',
            //selector: ".//*[@id='container']//span[text()='Profile' or text()='Profil']"
            selector: ".//*[@id='container']/div/div[3]/div[3]/div[2]/div[4]/div[1]/div/ul/li[1]/a/div[2]/span/span[1]"
        },
        SupportMediaLabel: {
            locateStrategy: 'xpath',
            selector: ".//h2[text()='SOCIAL MEDIA']"
        },
        CustomerCareLabel: {
            locateStrategy: 'xpath',
            selector: ".//h2[text()='CUSTOMER CARE']"
        },
        FacebookLink: {
            locateStrategy: 'xpath',
            selector: ".//a[text()='Facebook']"
        },
        TwitterLink: {
            locateStrategy: 'xpath',
            selector: ".//a[text()='Twitter']"
        },
        ForgotPasswordLink: {
            locateStrategy: 'xpath',
            selector: ".//a[@id='forgotPasswordLink']"
        },
        UsernameInput: {
            locateStrategy: 'xpath',
            selector: ".//input[@id='username']"
        },
        UsernameInputForgotPassword: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='ÅÅÅÅMMDDNNNN']"
        },
        PasswordInput: {
            locateStrategy: 'xpath',
            selector: ".//input[@id='password']"
        },
        LoginButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@name='login']"
        },
        UsernameLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Personlight ID Nummer']"
        },
        FPResetButtonDisable: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='kc-form-buttons']//input[@disabled='']"
        },
        FPCancelButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(text(),'Annullera')]"
        },
        FPResetButton: {
            locateStrategy: 'xpath',
            selector: ".//input[contains(@class,'button')]"
        },
        FPContinueButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//i[contains(.,'arrow_forward')]"
        },
        gmailUserID: {
            locateStrategy: 'xpath',
            selector: "//input[@id='identifierId']"
        },
        gmailPassword: {
            locateStrategy: 'xpath',
            selector: "//input[@name='password']"
        },
        gmailSignInbtn: {
            locateStrategy: 'xpath',
            selector: "//input[@id='signIn']"
        },
        gmailNextbtn: {
            locateStrategy: 'xpath',
            selector: ".//div[@id='identifierNext']"
        },
        gmailPasswordNextbtn: {
            locateStrategy: 'xpath',
            selector: ".//div[@id='passwordNext']"
        },
        FPNetworkErrMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Sorry, the request failed because of network or server issue']"
        },
        FPPasswordResetLinkSendMessage: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='forgot-password__success__title']"
        },
        ProfileTitle: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Profile' or text()='Profil']"
        },
        ProfileNavigation: {
            locateStrategy: 'xpath',
            selector: ".//a[text()='Home']//..//following-sibling::li[text()='Profile' or text()='Profil']"
        },
        InformationTab: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Personal Information' or text()='Personlig information']"
        },
        PreferenceTab: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[2][@class='tab__item']//span[@class='content-tooltip' and contains (.,'Preferences') or contains(.,'Inställningar')]"
        },
        LabelName: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Name' or text()='Namn'] "
        },
        LabelAddress: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Street Address' or text()='Gatuadress']"
        },
        PostalCode: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Postal Code' or text()='postnummer' or text ()='Postnummer']"
        },
        LabelEmailAddress: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Email Address' or text()='E-postadress']"
        },
        LabelHomePhone: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Home Phone' or text()='Hemtelefon']"
        },
        LabelMobilePhone: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Mobile Phone' or text()='Mobiltelefon']"
        },
        LabelWorkPhone: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Work Phone' or text()='Jobbtelefon']"
        },
        NotSpecifiedText: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Not Specified' or text()='Ej angivet']"
        },
        LabelContactInformation: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Contact information' or text()='Kontakt information' or text ()='Kontaktinformation']"
        },
        EditButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='profile__subtitle-action-link']"
        },
        HomeBackButtonLink: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Home' or text()='Hem']"
        },
        PasswordExpMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Password expired, please reset using the forgot password link' or text()='Lösenordet har löpt ut, uppdatera lösenordet med Glömt lösenord']"
        },
        InvalidPwdMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Invalid username or password']"
        },
        UserBlockedMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[contains(text(),'blocked, please try Reset')]"
        },
        FPWithoutEmailSSNErrMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='you do not have registered email id, please contact customer support' or text()='Du har ikke registrert email id, vennligst kontakt kundesupport']"
        },
        FPInvalidSSN: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Invalid Personal ID number']"
        },
        gMailFirstRowSubject: {
            locateStrategy: 'xpath',
            selector: ".//tr[1]//b[text()='Reset password']"
        },
        gMailPasswordResetLink: {
            locateStrategy: 'xpath',
            selector: ".//div[2]/p[2]/a"
        },
        NewPassword: {
            locateStrategy: 'xpath',
            selector: ".//input[@id='password-new']"
        },
        NewPasswordConfirm: {
            locateStrategy: 'xpath',
            selector: ".//input[@id='password-confirm']"
        },
        NewPasswordSubmit: {
            locateStrategy: 'xpath',
            selector: ".//input[@value='Submit']"
        },
        SelectPrimaryCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card__title')]"
        },
        HighlightedPrimaryCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card--selected')][contains(.,'5430 66** **** 6099')]"
        },
        CreditBalance: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card__title')]//..//div[@class='cards-list__card__balance']"
        },
        PrimaryCardHolderName: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__holder'][contains(.,'KLUCK KLARA')]"
        },
        ExtraCardHolderName: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__holder'][contains(.,'KLICK PETER')]"
        },
        CardListIcon: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card__title')]//..//div[@class='cards-list__card__icon']"
        },
        CreditUsedTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[@class='accounts__title' and contains(.,'Kredit används') or contains(.,'Kvar att utnyttja')]"
        },
        CreditUsedAmount: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='accounts__title' and contains(.,'Kvar att utnyttja')]//..//div[@class='accounts__amount']"
        },
        CreditLimit: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='accounts__title' and contains(.,'Utnyttjad kredit')]//..//div[@class='accounts__value']"
        },
        ChangeLimitLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'accounts__action') and contains(.,'Ändra gräns')]"
        },
        AvailableBalanceTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='accounts__title' and contains(.,'Kvar att utnyttja')]"
        },
        AvailableBalanceAmount: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='accounts__title' and contains(.,'Kvar att utnyttja')]//..//div[3][@class='accounts__amount']"
        },
        CardTitlePrimary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[@class='content-tooltip'][contains(.,'Kort')]"
        },
        CardDetailsNickname: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[4][@class='accounts__colums']//div[3][@class='accounts__amount']"
        },
        CardDetailsType: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[4][@class='accounts__colums']//div[3][@class='accounts__value']"
        },
        PrimaryMaskedCardNumber: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__number' and contains(.,'5430 66** **** 6099')]"
        },
        SelectExtraCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__number' and contains(.,'5430 66** **** 8186')]"
        },
        HighlightedExtraCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__details'][contains(.,'5430 66** **** 8186')]"
        },
        ExtraCardLabel: {
            locateStrategy: 'xpath',
            selector: ".//div[text()='Extra Card']"
        },
        ExtraMaskedCardNumber: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__number' and contains(.,'5430 66** **** 8186')]"
        },
        CreditBalanceExtraCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card__title')]//..//div[@class='cards-list__card__balance']"
        },
        ExtraCardHolderName: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__holder'][contains(.,'KLICK PETER')]"
        },
        CardListIconExtraCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card__title')]//..//div[@class='cards-list__card__icon']"
        },
        HeaderTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//a[@class='top-header__logo-link']"
        },
        HeaderUsername: {
            locateStrategy: 'xpath',
            selector: ".//*[@class='top-header__user-label']"
        },
        NavigateFuelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//a[1][@class ='list__item']"
        },
        NavigateNonFuelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//a[2][@class ='list__item']"
        },
        MoreTransactionLink: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='More transactions' or text()='Fler transaktioner']"
        },
        TransactionDetailsHeading: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h1[@class='header__page-title header__page-title--transactions']//span[text()='Transaction Details' or text()='Transaktions Detaljer']"
        },
        HomeLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[@class='navigation__item']//a[contains(@href,'home') or contains(@href,'hem')]"
        },
        TransactionLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[@class='navigation__item']//a[contains(@href,'transactions') or contains(@href,'transaktioner')]"
        },
        TransactionDetailsLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[@class='navigation__item']//span[contains(.,'Transaction Details') or contains(.,'Transaktions Detaljer')]"
        },
        IconTransactionSummary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-summary--icon']"
        },
        AmountTransactionSummary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-summary__details--amount']//span"
        },
        BeneficiaryTransactionSummary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-summary__details--merchant']"
        },
        TransactionTypeSummary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-summary__details']//div[3]"
        },
        DateTransactionSummary: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-summary__details--date']//span"
        },
        CardLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[contains(., 'Card') or contains(.,'Kort')]"
        },
        CardValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'Card') or contains(.,'Kort')]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        OriginalAmountLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[contains(., 'Original amount') or contains(.,'Originalbelopp')]"
        },
        OriginalAmountValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'Original amount') or contains(.,'Originalbelopp')]]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        AccountNumberLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[contains(., 'Account number') or contains(.,'Kontonummer')]"
        },
        AccountNumberValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'Account number') or contains(.,'Kontonummer')]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        VATLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[contains(., 'VAT') or contains(.,'MOMS')]"
        },
        VATValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'VAT') or contains(.,'MOMS')]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        FuelLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[contains(., 'Fuel') or contains(.,'Bränsle')]"
        },
        FuelValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'Fuel') or contains(.,'Bränsle')]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        FuelStationLabelTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-detail__row--label']//span[ contains(., 'Fuel station')]"
        },
        FuelStationValueTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-detail__row--label' and contains(.,'Fuel station')]//..//following-sibling::div[@class='transaction-detail__row--value']"
        },
        TransactionLabel: {
            locateStrategy: 'xpath',
            selector: ".//h1//span[text()='Transactions' or text()='transaktioner']"
        },
        HomeNavigationLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Home' or text()='Hem']"
        },
        TransactionNavigationLabel: {
            locateStrategy: 'xpath',
            selector: ".//li[2]//span[text()='Transactions' or text()='transaktioner']"
        },
        NoTranscationMessage: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='No transactions to display' or text()='Inga transaktioner som ska visas']"
        },
        SortingDropdownbox: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='dropdown-button'][2]"
        },
        SortingDateDesc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Date, newest first' or text()='Datum, nyaste först']"
        },
        SortingDateAsc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Date, oldest first' or text()='Datum, äldsta först']"
        },
        SortingBeneficiaryAsc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Beneficiary A-Z' or text()='Mottagare A-Z']"
        },
        SortingBeneficiaryDesc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Beneficiary Z-A' or text()='Mottagare Z-A']"
        },
        SortingAmountDesc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Amount, largest first' or text()='Belopp, största först']"
        },
        SortingAmountAsc: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Amount, smallest first' or text()='Belopp, minsta först']"
        },
        MoreButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button[text()='More' or text()='Mer]"
        },
        MoreButtonViewMessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button[@class='button more button--primary']"
        },
        MoreTransactionIcon: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//a/span[1]"
        },
        ReturnToLogin: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Return to login' or text()='Återgå till inloggning']"
        },
        HeaderSecurityPage: {
            locateStrategy: 'xpath',
            selector: "//h1[@class='header__page-title header__page-title--security']"
        },
        SecurityCardDropDown: {
            locateStrategy: 'xpath',
            selector: "//h1[@class='header__page-title header__page-title--security']"
        },
        SecurityCardBlockSection: {
            locateStrategy: 'xpath',
            selector: ".//a[@href='#/security/block']"
        },
        SecuirtyCustSupportText: {
            locateStrategy: 'xpath',
            selector: "//span[text()='Customer support is available for you 24/7' or text()='Kundsupport är tillgängligt för dig 24/7']"
        },
        SecuirtyBlockCardText: {
            locateStrategy: 'xpath',
            selector: "//span[text()='Do you want to block the card?' or text()='Vill du blockera kortet?']"
        },
        SecuirtyBlockCardCallNo: {
            locateStrategy: 'xpath',
            selector: "//a[@href='tel:+46 01234 5678']"
        },
        TransactionDownload: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@title='Exportera']"
        },
        ExportToExcelSpan: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Export To Excel' or text()='Exportera till Excel']"
        },
        TransactionSearchFilter: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='transaction-search__filter']"
        },
        TransactionSearchTextFilter: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//input[@class='input' and @placeholder='Search' or @placeholder='Sök']"
        },
        TransactionSearchFilterDatelabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()= 'DATE' or text()='DATUM']"
        },
        TransactionSearchFilterDateFrom: {
            locateStrategy: 'xpath',
            selector: ".//div[contains(@class,'datepicker')]//input[@class='input' and @placeholder='Från']"
        },
        TransactionSearchFilterDateTo: {
            locateStrategy: 'xpath',
            selector: ".//div[contains(@class,'datepicker')]//input[@class='input' and @placeholder='till']"
        },
        TransactionSearchFilterAmountLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()= 'AMOUNT' or text()='MÄNGD']"
        },
        TransactionSearchFilterAmountFrom: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='MÄNGD']//ancestor::div[@class='transaction-search__fields']//input[@class='input' and @placeholder='Från']"
        },
        TransactionSearchFilterAmountTo: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='MÄNGD']//ancestor::div[@class='transaction-search__fields']//input[@class='input' and @placeholder='till']"
        },
        TransactionSearchFilterCardLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()= 'CARD OR TRANSACTION TYPE' or text()='KORT ELLER TRANSAKTIONSTYP']"
        },
        TransactionSearchFilterPrimaryCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='item-0']//..//div"
        },
        TransactionSearchFilterAnyCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='item-anyCard']"
        },
        TransactionSearchFilterExtraCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='item-1']//..//div"
        },
        TransactionSearchFilterNoCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='item-notLinkedToCard']"
        },
        TransactionSearchFilterPrimaryCardCheckbox: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-search__fields'][1]//input[@id='item-0']"
        },
        TransactionSearchFilterExtraCardCheckbox: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-search__fields'][1]//input[@id='item-1']"
        },
        TransactionSearchFilterFuelTypeBensin: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-search__fields'][2]//input[@id='item-0' and @value='BENSIN']"
        },
        TransactionSearchFilterFuelTypeDiesel: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-search__fields'][2]//input[@id='item-1' and @value='DIESEL']"
        },
        TransactionSearchFilterFuelTypeE85: {
            locateStrategy: 'xpath',
            selector: ".//div[@class='transaction-search__fields'][2]//input[@id='item-2' and @value='E85']"
        },
        HomePageMenu: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='top-header__logo col']//span"
        },
        HomePageMenuOverview: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title app-menu--active']//span[text()='Overview' or text()='Översikt']"
        },
        HomePageMenuTransactions: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Transactions' or text()='transaktioner']"
        },
        HomePageMenuProfile: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Profile' or text()='Profil']"
        },
        HomePageMenuTransferMoney: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Överföra pengar']"
        },
        HomePageMenuCreditLimit: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Credit Limit' or text()='Kreditgräns']"
        },
        HomePageMenuPayments: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Payments' or text()='betalningar']"
        },
        HomePageMenuSecurity: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='Security' or text()='säkerhet']"
        },
        HomePageMenuTAndCforCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='T&C for Card' or text()='T & C för kort']"
        },
        HomePageMenuTAndCforInsurance: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='T&C for Insurance' or text()='T & C för försäkring']"
        },
        HomePageMenuSECCI: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='app-menu--title']//span[text()='SECCI']"
        },
        InstalmentsTab: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//ul/li[@class='tab__item']//span//span[contains(.,'instalments') or contains(.,'avbetalning')]"
        },
        InstalmentsSection: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='installments__section']"
        },
        InvoicesTab: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//ul/li[@class='tab__item']//span//span[contains(.,'invoices') or contains(.,'fakturor')]"
        },
        LatestInvoiceHeading: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h1//span[text()='Latest invoice' or text()='Senaste fakturan']"
        },
        LatestInvoiceMonth: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='recent-invoice']//div[@class='list__item__title' and contains(.,'June 2017')]"
        },
        LatestInvoicedueDate: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='recent-invoice']//span[contains(text(),'Due on') or contains(text(),'På grund av')]"
        },
        LatestInvoiceDownloadLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='recent-invoice__download-link-text']"
        },
        PreviousInvoiceHeader: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='invoice-list']//span[text()='Previous invoices' or text()='Tidigare fakturor']"
        },
        PreviousInvoiceMonth: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='invoice-list']//div[@class='invoice-list-item__title' and contains(.,'November 2013')]"
        },
        PreviousInvoicedueDate: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='invoice-list']//span[contains(text(),'Due on') or contains(text(),'På grund av')]"
        },
        PreviousInvoiceDownloadLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='invoice-list-item__icon']"
        },

        MessageHeading: {
            locateStrategy: 'xpath',
            selector: ".//h1//span[text()='meddelanden']"
        },
        MessageLink: {
            locateStrategy: 'xpath',
            selector: ".//li//span[text()='meddelanden']"
        },
        NewMessageButton: {
            locateStrategy: 'xpath',
            selector: " .//*[@id='container']//button//span[text()='New Message' or text()='Nytt meddelande']"
        },
        MailConversationHeading: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div/h1//span[text()='Mail Conversation' or text()='Mail konversation']"
        },
        MailConversationLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[3]//span[text()='Mail Conversation' or text()='Mail konversation']"
        },
        MessageLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[2]//span[text()='meddelanden']"
        },
        MessageSubject: {
            locateStrategy: 'xpath',
            selector: "//*[@id='container']//div[text()='Mail Conversation View']"
        },
        QuickLinkTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Quick links' or text()='Snabblänkar']"
        },
        ProfileQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[1][@class='grid-links__item']"
        },
        ProfileQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Profile' or text()='Profil']"
        },
        ProfileQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Always visible' or text()='Alltid synlig']"
        },
        MessagesQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[2][@class='grid-links__item']"
        },
        MessagesQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Messages' or text()='meddelanden']"
        },
        MessagesQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[2][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        DiscountMatrixQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[3][@class='grid-links__item']"
        },
        DiscountMatrixQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Discount Matrix' or text()='Rabattmatris']"
        },
        DiscountMatrixQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[3][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        HelpAndSupportQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[4][@class='grid-links__item']"
        },
        HelpAndSupportQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Help & Support' or text()='Hjälp och support']"
        },
        HelpAndSupportQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[4][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        InvoicesOrPaymentsQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[5][@class='grid-links__item']"
        },
        InvoicesOrPaymentsQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Invoices/Payments']"
        },
        InvoicesOrPaymentsQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[5][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        TransferMoneyQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[6][@class='grid-links__item']"
        },
        TransferMoneyQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Transfer Money' or text()='Överföra pengar']"
        },
        TransferMoneyQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[6][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        CreditLimitQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[7][@class='grid-links__item']"
        },
        CreditLimitQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Credit Limit' or text()='Kreditgräns']"
        },
        CreditLimitQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[7][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        ApplyforanextracardQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[8][@class='grid-links__item']"
        },
        ApplyforanextracardQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Apply for an extra card' or text()='Ansök om ett extra kort']"
        },
        ApplyforanextracardQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[8][@class='grid-links__item']//span[text()='Hidden' or text()='Dold']"
        },
        SecurityQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[9][@class='grid-links__item']"
        },
        SecurityQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Security' or text()='säkerhet']"
        },
        SecurityQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[9][@class='grid-links__item']//span[text()='Hidden'or text()='Dold']"
        },
        TransactionsQuickLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[10][@class='grid-links__item']"
        },
        TransactionsQuickLinkText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='grid-link__title']//span[text()='Transactions' or text()='transaktioner']"
        },
        TransactionsQuickLinkStatus: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[10][@class='grid-links__item']//span[text()='Hidden' text()='Dold']"
        },
        ProfileLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[@class='navigation__item']//span[text()='Profile' or text()='Profil']"
        },
        PreferencesSubtitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='profile__subtitle-row']//span[text()='Communication' or text()='Kommunikation']"
        },
        SubtitleInfoText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='WHAT IS YOUR PREFERRED METHODS OF COMMUNICATION?' or text()='VAD ÄR DITT FÖREDRAGNA KOMMUNIKATIONSMETODER?']"
        },
        EmailField: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='E-mail' or text()='E-post']"
        },
        SMSField: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='SMS']"
        },
        PhonecallField: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Phone call' or text()='Telefonsamtal']"
        },
        EmailRadioButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//input[@id='radioEmail']"
        },
        SMSRadioButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//label[@for='radioSMS']"
        },
        PhoneRadioButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//label[@for='radioPhoneCall']"
        },
        RequestchangeButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button[contains(.,'Request change') or contains(.,'Begär ändring')]"
        },
        RequestchangeInfo: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Processing your request might take 24 hours. For instant service call +46 012345678. Only one request is valid at a time.' or text()='Behandling av din förfrågan kan ta 24 timmar']"
        },
        CardNicknamesTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Card nicknames' or text()='Kort smeknamn']"
        },
        //CardDetailsNickname:{
        //       locateStrategy: 'xpath',
        //     selector: ".//*[@id='container']//div[@class='profile__label'][contains(.,'KLUCK KLARA')]/div[contains(.,'543066******6099')]"},
        CancelEditNickname: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='profile__subtitle-action-link']//span[text()='Cancel' or text()='Annullera']"
        },
        SaveEditedNickname: {
            locateStrategy: 'xpath',
            selector: ".//*[text()='Save' or text()='spara']"
        },
        HomePageMenuMessages: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'app-menu--title')]//span[text()='Messages' or text()='Meddelanden']"
        },
        FilterLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text() ='Filter' or text()='Filtrera']"
        },
        TransactionNodataMsg: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='No transactions to display' or text()='Inga transaktioner som ska visas']"
        },
        TransactionExportButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[1]/div[@class='dropdown-button__toggle dropdown-button__toggle--closed']"
        },
        TransactionSortingButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[2]/div[@class='dropdown-button__toggle dropdown-button__toggle--closed']"
        },
        TransactionSortingButtonOpen: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[2]/div[@class='dropdown-button__toggle dropdown-button__toggle--open']"
        },
        MessagesHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[2][@class='grid-links__item']//span[text()='Messages' or text()='meddelanden']"
        },
        DiscountMatrixHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[3][@class='grid-links__item']//span[text()='Discount Matrix' or text()='Rabattmatris']"
        },
        HelpAndSupportHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[4][@class='grid-links__item']//span[text()='Help & Support' or text()='Hjälp och support']"
        },
        PaymentsHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[5][@class='grid-links__item']//span[text()='Payments' or text()='betalningar']"
        },
        TransferMoneyHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[6][@class='grid-links__item']//span[text()='Transfer Money' or text()='Överföra pengar']"
        },
        CreditLimitHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[7][@class='grid-links__item']//span[text()='Credit Limit' or text()='Kreditgräns']"
        },
        ApplyforanextracardHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[8][@class='grid-links__item']//span[text()='Apply for an extra card' or text()='Ansök om ett extra kort']"
        },
        SecurityHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[9][@class='grid-links__item']//span[text()='Security' or text()='säkerhet']"
        },
        TransactionsHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[10][@class='grid-links__item']//span[text()='Transactions' or text()='transaktioner']"
        },
        ProfileHomeQuicklink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[1][@class='grid-links__item']//span[text()='Profile' or text()='Profil']"
        },
        CardnicknamesPreferences: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[1][@class='profile__row']//div[@class='profile__label']//div[@class='profile__card-no']"
        },
        CardnicknamesValue: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[1][@class='profile__row']//div[@class='profile__value']"
        },
        Cardnicknameinput: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[1][@class='profile__row']//div[@class='input-container']/input[@class='input']"
        },
        NicknameHomescreen: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='accounts__amount'][contains(.,'Kluck K')]"
        },
        NicknameTransactionList: {
            locateStrategy: 'xpath',
            selector: ".//a[@class='list__item']//div[@class='i18n-account-number'][contains(.,'Kluck K')]"
        },
        NicknameTransactionSearch: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[2][@class='checkbox-group']//div[@class='i18n-account-number']"
        },
        NicknameTransactionDetails: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[1][@class='transaction-detail__row']//div[@class='i18n-account-number'][contains(.,'Kluck K')]"
        },
        Clickfirstmessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div//div[@class='list']//a[1]//div[@class='list__item__content']"
        },
        EmailMessageText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,' EMAIL:Preferred') or contains(.,'Föredragen')]"
        },
        SMSMessageText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,' SMS:Preferred')  or contains(.,'Föredragen.')]"
        },
        PhoneMessageText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,' PHONE:Preferred')  or contains(.,'Föredragen')]"
        },
        ContactInfoNote: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(text(),'Processing your request might take 24 hours.') or contains(text(),'Behandling av din förfrågan kan ta 24 timmar')]"
        },
        EmailPlaceholder: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='Email Address' or @placeholder='E-postadress']"
        },
        HomePhonePlaceholder: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='Home Phone' or @placeholder='Hemtelefon']"
        },
        MobilePhonePlaceholder: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='Mobile Phone' or @placeholder ='Mobiltelefon']"
        },
        InvalidEmailError: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='**Invalid email' or text()='** Ogiltig email']"
        },
        InvalidHomePhoneError: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[6][@class='profile__row']//span[text()='**should start with 0, minimum 8 maximum 20 numbers required' or text()='** Börja med 0, minst 8 maximalt 20 nummer krävs']"
        },
        InvalidMobilePhoneError: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[7][@class='profile__row']//span[text()='**should start with 0, minimum 8 maximum 20 numbers required' or text()='** Börja med 0, minst 8 maximalt 20 nummer krävs']"
        },
        ContactInfoMessageVerification: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3]//span[@class='message__detail__body' and contains(.,' Message : The Contact information has been changed') or contains(.,'Kontaktinformationen har ändrats') and contains(.,'New mobile : 00234567890123456789') and contains(.,'New email : ebsnbtesting1@gmail.com ') and contains(.,' New telephone : 0123456789')]"
        },
        /*MessagesHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[2][@class='grid-links__item']//span[text()='Messages']"},
        DiscountMatrixHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[3][@class='grid-links__item']//span[text()='Discount Matrix']"},
        HelpAndSupportHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[4][@class='grid-links__item']//span[text()='Help & Support']"},
        PaymentsHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[5][@class='grid-links__item']//span[text()='Payments']"},
        TransferMoneyHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[6][@class='grid-links__item']//span[text()='Transfer Money']"},
        CreditLimitHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[7][@class='grid-links__item']//span[text()='Credit Limit']"},
        ApplyforanextracardHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[8][@class='grid-links__item']//span[text()='Apply for an extra card']"},
        SecurityHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[9][@class='grid-links__item']//span[text()='Security']"},
        TransactionsHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[10][@class='grid-links__item']//span[text()='Transactions']"},
        ProfileHomeQuicklink:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//li[1][@class='grid-links__item']//span[text()='Profile']"},
        CardnicknamesPreferences:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[1][@class='profile__row']//div[@class='profile__label']//div[@class='profile__card-no']"},
        CardnicknamesValue:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[1][@class='profile__row']//div[@class='profile__value']"},
        Cardnicknameinput:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[1][@class='profile__row']//div[@class='input-container']/input[@class='input']"},
        NicknameHomescreen:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[@class='accounts__amount'][contains(.,'Kluck K')]"},
        NicknameTransactionList:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//a[3][@class='list-item']//div[@class='i18n-account-number'][contains(.,'Kluck K')]"},
        NicknameTransactionSearch:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[2][@class='checkbox-group']//div[@class='i18n-account-number']"},
        NicknameTransactionDetails:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div[1][@class='transaction-detail__row']//div[@class='i18n-account-number'][contains(.,'Kluck K')]"},
        Clickfirstmessage:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//div//div[@class='list']//a[1]//div[@class='list__item__content']"},
        EmailMessageText:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//span[contains(.,' EMAIL:Preferred')]"},
        SMSMessageText:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//span[contains(.,' SMS:Preferred')]"},
        PhoneMessageText:{
                locateStrategy: 'xpath',
                selector:".//*[@id='container']//span[contains(.,' PHONE:Preferred')]"},*/
        FuelDiscountTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[@class='content-tooltip'][contains(.,'Drivmedelsrabattermypages')]"
        },
        FuelDiscountAmount: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3][@class='accounts__colums']//div[3][@class='accounts__amount']"
        },
        FuelDiscountYearInfo: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3][@class='accounts__colums']//div[4][@class='accounts__value']"
        },
        FuelDiscountReadMore: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span//span[contains(.,'Se dina drivmedelsrabatter')][1]"
        },
        ReadMoreTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h1[@class='header__page-title header__page-title--show_content/:contentKey']"
        },
        FuelDiscountNavigationLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,'Se dina drivmedelsrabatter')]"
        },
        Profileheader: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h1[@class='header__page-title header__page-title--profile']//span[@class='content-tooltip' and contains(.,'Profile') or contains(.,'Profil')]"
        },
        MessageDropDown: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//a[1][@class='list__item']//div[@class='dropdown-button']//div"
        },
        DeleteOption: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Delete' or text()='Radera']"
        },
        //selector:".//*[@id='container']//h1[@class='header__page-title header__page-title--profile']//span[text()='Profile']"},
        MessageFirstRow: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[2]/div[1]/a[1]"
        },
        ViewMessageNavigattionHome: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Home' or text()='Hem']"
        },
        ViewMessageNavigattionMessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Messages' or text()='meddelanden']"
        },
        ViewMessageThreadYouLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='you' or text()='DU']"
        },
        ViewMessageMessageThreadTextArea: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//textarea[@placeholder='Type a reply' or @placeholder='Skriv ett svar']"
        },
        ViewMessageThreadSendButtonDisable: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button[@disabled='']/span[contains(.,'Send') or contains(.,'skicka')]"
        },
        ViewMessageThreadSendButtonEnable: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span/span[contains(.,'Send') or contains(.,'skicka')]"
        },
        ViewMessageThreadCustomerServiceLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='customer service' or contains(.,'KUNDSERVICE')]"
        },
        ViewMessageThreadCustomerServiceReply: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']/div//div/div/div[2]/div/div[2]/span']"
        },
        RemindPinHeading: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h2[2]//span[contains(.,'Remind PIN') or contains(.,'Påminn PIN-kod')]"
        },
        RemindPinMessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,'Den nuvarande PIN-koden kommer att påminnas med säkra kommunikationsmedel') or contains(.,'The current PIN will be reminded to by secure means of communication.')]"
        },
        RemindPinRequestReminderLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button//span[contains(.,'Request reminder') or contains(.,'Begäran om påminnelse')]"
        },
        RemindPinHeadingModal: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='modal-content']//h2/span[contains(.,'Remind PIN') or contains(.,'Påminn PIN-kod')]"
        },
        RemindPinModalMessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='modal-content']//span[contains(.,'Behandling av din förfrågan kan ta 24 timmar') or contains(.,'Processing your request might take 24 hours. For instant service call +46 012345678')]"
        },
        RemindPinModalMessage2: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='modal-content']//span[contains(.,'This will Remind PIN for') or contains(.,'Detta kommer att påminna PIN-kod för')]"
        },
        RemindPinModalMessage3: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='modal-content']//span[contains(.,'Would you like to continue') or contains(.,'Vill du fortsätta')]"
        },
        RemindPinModalContinueButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']/div/div[3]/div[3]/div[3]/div[1]/div[1]/div/div/div[1]/div/button[1]"
        },
        RemindPinModalCancelButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']/div/div[3]/div[3]/div[3]/div[1]/div[1]/div/div/div[1]/div/button[2]"
        },
        SelectCardDropDown: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//select"
        },
        DropDownSelectCard: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//select//option[2]"
        },
        DropDownSelectCarddiv: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//select//option[2]//div"
        },
        FirstNotificationMail: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//a[@class='list__item'][1]"
        },
        BonusTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[@class='content-tooltip'][contains(.,'Bonus') or contains(.,'Bonus')]"
        },
        BonusAmount: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3][@class='accounts__colums']//div[3][@class='accounts__amount']"
        },
        BonusInfoLine1: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3][@class='accounts__colums']//div[4][@class='accounts__value']"
        },
        BonusInfoLine2: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[3][@class='accounts__colums']//div[5][@class='accounts__value']"
        },
        HighlightedPrimaryCardEveryday: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[contains(@class,'cards-list__card--selected')][contains(.,'5412 77** **** 5870')]"
        },
        PrimaryMaskedCardNumberEveryday: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__number' and contains(.,'5412 77** **** 5870')]"
        },
        PrimaryCardHolderNameEveryday: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='cards-list__card__holder'][contains(.,'KLUCK KLARA E.')]"
        },
        SendMsgSubjectTypeLabel: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='General subject' or text()='Allmänt ämne']"
        },
        SendMsgSubjectTextBox: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//input[@placeholder='Subject' or @placeholder ='Ämne'][@maxlength='50']"
        },
        SendMsgTextArea: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='message_body'][@maxlength='5000'][@placeholder='Your message' or @placeholder='Ditt meddelande']"
        },
        SendMsgSendButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Send' or text()='Skicka']"
        },
        SendMsgBackButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Back' or text()='tillbaka']"
        },
        SendMsgSubTypeErrorMsg: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='** Subject Type is mandatory' or text()='** Ämnes typ är obligatorisk']"
        },
        SendMsgSubErrorMsg: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='** Subject Text is mandatory' or text()='** Ämnestext är obligatoriskt']"
        },
        SendMsgAreaErrorMsg: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='** Message body is mandatory' or text()='** Meddelandeorgan är obligatoriskt']"
        },
        SendMsgRadioButton1: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='User Information' or text()='användar information']"
        },
        SendMsgRadioButton2: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Debt and payment info' or text()='Skulder och betalningsinformation']"
        },
        SendMsgRadioButton3: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Login Information for Mypages' or text()='Logga in Information för Mypages']"
        },
        SendMsgRadioButton4: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Invoice' or text()='Faktura']"
        },
        SendMsgRadioButton5: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Interest' or text()='Intressera']"
        },
        SendMsgRadioButton6: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Autogiro' or text()='Direktbetalning']"
        },
        SendMsgRadioButton7: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//div[@class='mailsubject__item__subjectradio']//span[text()='Other' or text()='Andra']"
        },
        SendMsgRadioButtonSelection1: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='1'][@type='radio']"
        },
        SendMsgRadioButtonSelection2: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='2'][@type='radio']"
        },
        SendMsgRadioButtonSelection3: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='3'][@type='radio']"
        },
        SendMsgRadioButtonSelection4: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='4'][@type='radio']"
        },
        SendMsgRadioButtonSelection5: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='5'][@type='radio']"
        },
        SendMsgRadioButtonSelection6: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='6'][@type='radio']"
        },
        SendMsgRadioButtonSelection7: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='7'][@type='radio']"
        },
        SendMsgSaveDraftmessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,'Draft automatically saved today at') or contains(.,'Utkast automatiskt sparat idag vid')]"
        },
        SendMsgDeleteLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Delete' or text()='Radera']"
        },
        SendMsgSaveDraftmessageText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='The message was automatically prefilled with draft from' or text()='Meddelandet fylldes automatiskt i med utkast från ']"
        },
        SendMsgStartFromScratchLink: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span/span[contains(.,'Start From Scratch') or contains(.,'Börja från början')]"
        },
        TransferMoneyTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//h1[@class='header__page-title header__page-title--transfer_money']//span[1][text()='Överföra pengar']"
        },
        TransferMoneyLinkNavigation: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//li[@class='navigation__item']//span[text()='Överföra pengar']"
        },
        TransferAmountTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Överföringsbelopp']"
        },
        TransferAmountInput: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='Överföringsbelopp']"
        },
        ToAccountTitle: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='TILL KONTO']"
        },
        ToAccountPlaceholder: {
            locateStrategy: 'xpath',
            selector: ".//input[@placeholder='kontonummer']"
        },
        MoneyTransferInfo1: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Överföringsbeloppet ska ligga mellan 3 000,00 kr till 30 000,00 kr och bör inte överstiga det tillgängliga beloppet 32 000,00 kr']"
        },
        MoneyTransferInfo2: {
            locateStrategy: 'xpath',
            
            selector: ".//*[@id='container']//span[text()='Kontonumret ska vara minst 10 till högst 16 siffror långt och ska ha ett 4-siffrigt clearingnummer']"
        },
        TransferButton: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//button[@class='button button--primary']//span[text()='Överföra']"
        },
        MoneyTransferInfo3: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Behandlingen av betalningen kan ta några dagar']"
        },
        InvalidAmountError: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Ogiltigt belopp, det matchar inte de nödvändiga kriterierna']"
        },
        InvalidToAccountError: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Ogiltigt konto, kontonummer ska vara minst 10 högst 16 siffror långt.']"
        },
        TransferSuccessMessage: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[text()='Förfrågan om överföring av pengar har tagits upp, och behandlingen av din begäran kan ta några dagar.']"
        },
        TransferMessageText: {
            locateStrategy: 'xpath',
            selector: ".//*[@id='container']//span[contains(.,'Meddelande : En ny överföringsförfrågan skapad')]"
        },
        ECommerceBlockLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='E-handel']"
        },
        ECommerceBlockRadioText: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Håll dina e-handelstransaktioner aktiverade, om du planerar att använda ditt kort online']"
        },
        ECommerceBlockRadioButton: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='ecommerce_toggle']"
        },
        RegionBlockLabel: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Tillåtna regioner']"
        },
        RegionBlockRadioButton1: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='01']"
        },
        RegionBlockRadioButton2: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='02']"
        },
        RegionBlockRadioButton3: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='03']"
        },
        RegionBlockRadioButton4: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='04']"
        },
        RegionBlockRadioButton5: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='05']"
        },
        RegionBlockRadioButton6: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='06']"
        },
        RegionBlockRadioButton7: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='07']"
        },
        RegionBlockRadioButton8: {
            locateStrategy: 'xpath',
            selector: ".//label[@class='checkbox__label'][@for='08']"
        },
        RegionBlockCountry1: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Sverige']"
        },
        RegionBlockCountry2: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Norden']"
        },
        RegionBlockCountry3: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Europa']"
        },
        RegionBlockCountry4: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='afrika']"
        },
        RegionBlockCountry5: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Asien']"
        },
        RegionBlockCountry6: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Nord- och Centralamerika']"
        },
        RegionBlockCountry7: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Sydamerika']"
        },
        RegionBlockCountry8: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='oceanien']"
        },
        SecurityPageHeader: {
            locateStrategy: 'xpath',
            selector: ".//h1[@class='header__page-title header__page-title--security']//span[text()='Security' or text()='säkerhet']"
        },
        LogoutPageTitle: {
            locateStrategy: 'xpath',
            selector: ".//span[text()='Vi ses nästa gång!']"
        }
    }
};
