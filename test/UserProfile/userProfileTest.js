import userProfile_Page from '../../pageObjects/userProfile/userProfile_Page.js'
import Login_Page from "../../pageObjects/login/Login_Page";
var assert = require('assert');
describe('Verify User Profile screen test cases ',()=>{

    beforeEach (async function (){
        browser.url('/');
        Login_Page.waitforPageload();
        Login_Page.LoginToSato();
        await browser.pause(10000);
        await Login_Page.clickSubmitButton();
        await browser.pause(2000);
    })
    
    it('Test 1:- Verify user Profile Screen',async()=>{
      
      await userProfile_Page.userProfileIcon.waitForDisplayed();
      await userProfile_Page.userProfileIcon.click();
      try {
          await userProfile_Page.userProfileText.waitForDisplayed();
          await expect(await userProfile_Page.userProfileText).toHaveText("User Profile");
          await userProfile_Page.userProfileSignOutBTN.waitForDisplayed();
          await expect(await userProfile_Page.userProfileSignOutBTN).toHaveText("SIGN OUT");
          await userProfile_Page.userProfileMyProfile.waitForDisplayed();
          await userProfile_Page.userProfileCreatorSpace.waitForDisplayed();
          await userProfile_Page.userProfileGuideLines.waitForDisplayed();
          await userProfile_Page.userProfileTermCondition.waitForDisplayed();
          await userProfile_Page.OurPlatformBlockCode.waitForDisplayed();
          await userProfile_Page.OurPlatformAPIandME.waitForDisplayed();
          await userProfile_Page.OurPlatformRaspera.waitForDisplayed();
          await userProfile_Page.OurPlatformStaolearn.waitForDisplayed();

      } catch (error) {
        console.log("Error:-"+error);
        assert.fail();
      }
      
    })

    it.only('Test 2 Verify My Profile screen',async()=>{

        await userProfile_Page.userProfileIcon.waitForDisplayed();
        await userProfile_Page.userProfileIcon.click();
        await userProfile_Page.userProfileMyProfile.waitForDisplayed();
        await userProfile_Page.userProfileMyProfile.click();
        try {
          await userProfile_Page.MyProfileBitCoin.waitForDisplayed();
          await expect(userProfile_Page.MyProfileBitCoin).toHaveText('Bitcoin Wallet:'); 
          await userProfile_Page.MyProfileExportBTN.waitForDisplayed();
          await expect(userProfile_Page.MyProfileExportBTN).toHaveText('Export'); 
          await userProfile_Page.MyProfileExportBTN.click();
          await userProfile_Page.MyProfileMnemonicPhraseBTN.waitForDisplayed();
          await userProfile_Page.MyProfileMnemonicPhraseBTN.click();
          await userProfile_Page.MyProfileCloseExportMnemonic.click();
          await userProfile_Page.MyProfileWithdrawBTN.waitForDisplayed();
          await userProfile_Page.MyProfileWithdrawBTN.click();
          await userProfile_Page.MyProfileWithDrawCancelBTN.click();

          await userProfile_Page.MyProfileChangeEmailBTN.waitForDisplayed();
          await userProfile_Page.MyProfileChangeEmailBTN.click();
          await userProfile_Page.MyProfileAllModelCancelBTN.click();

          await userProfile_Page.MyProfileUpdatePortraitBTN.waitForDisplayed();
          await userProfile_Page.MyProfileUpdatePortraitBTN.click();
          await userProfile_Page.MyProfileUpdateProtCancelBTN.click();


          await userProfile_Page.MyProfileChangePasswordBTN.waitForDisplayed();
          await userProfile_Page.MyProfileChangePasswordBTN.click();
          await userProfile_Page.MyProfileAllModelCancelBTN.click();


          await userProfile_Page.MyProfileDeleteAccountBTN.waitForDisplayed();
          await userProfile_Page.MyProfileDeleteAccountBTN.click();
          await userProfile_Page.MyProfileAllModelCancelBTN.click();

          await userProfile_Page.MyProfileChangeUsernameBTN.waitForDisplayed();
          await userProfile_Page.MyProfileChangeUsernameBTN.click();
          await userProfile_Page.MyProfileAllModelCancelBTN.click();
                     
        } catch (error) {
          console.log("Error:-"+error);
          assert.fail();
        }

    })
})