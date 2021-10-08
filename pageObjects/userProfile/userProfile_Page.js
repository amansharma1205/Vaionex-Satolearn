class userProfile_Page {

    //# User Profile 
        get userProfileIcon() { return $("//div[@class='kt-header__topbar-item kt-header__topbar-item--user']");}
        get userProfileText() { return $("//h5[@class='MuiTypography-root MuiTypography-h5'and text()='User Profile']");}
        get userProfileSignOutBTN() { return $("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text btn btn-label-brand btn-sm btn-bold']/span[@class='MuiButton-label']");}
        get userProfileMyProfile() { return $("//div[@class='kt-notification']/a[1]");}
        get userProfileCreatorSpace() { return $("//div[@class='kt-notification']/a[2]");}
        get userProfileGuideLines() { return $("//div[@class='kt-notification']/a[3]");}
        get userProfileTermCondition() { return $("//div[@class='kt-notification']/a[4]");}

        get OurPlatformBlockCode() { return $("//a[@href='https://block-codes.com/']");}
        get OurPlatformAPIandME() { return $("//a[@href='https://apiandme.com/']");}
        get OurPlatformRaspera() { return $("//a[@href='https://raspora.com/']");}
        get OurPlatformStaolearn() { return $("//a[@href='https://satolearn.com/']");}
    
        ////##My-Profile 
        get MyProfileBitCoin() { return $("//h3[@class='kt-portlet__head-title']");}
        get MyProfileExportBTN() { return $("//button[@id='dropdown-toggle-top']");}
        get MyProfileExportSendMnemonicPhrase() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()=' Mnemonic Phrase ']");}
        get MyProfileMnemonicPhraseBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()=' Mnemonic Phrase ']");}
        get MyProfileCloseExportMnemonic() { return $("//div[@role='dialog']//span[@class='MuiButton-label']");}
        
        get MyProfileWithdrawBTN() { return $("//span[@class='MuiButton-label' and text()='withdraw']");}
        get MyProfileChangeEmailBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Change Email']");}
        
        get MyProfileUpdatePortraitBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Update Portrait']");}
        get MyProfileChangePasswordBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Change Password']");}
        get MyProfileDeleteAccountBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Delete Account']");}
        get MyProfileChangeUsernameBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Change Username']");}
        
        get MyProfileAllModelCancelBTN() { return $("//div[@class='MuiDialogActions-root MuiDialogActions-spacing']/button[@type='button']/span[@class='MuiButton-label']");}
        get MyProfileWithDrawCancelBTN() { return $("//div[@class='MuiDialogActions-root MuiDialogActions-spacing']/div[1]/button[@type='button']/span[@class='MuiButton-label']");}
        get MyProfileUpdateProtCancelBTN() { return $("//div[@class='ant-modal-footer']/div/button[1]/span[@class='MuiButton-label']");}
        





} export default new userProfile_Page()