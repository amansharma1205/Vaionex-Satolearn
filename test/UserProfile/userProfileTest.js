import userProfile_Page from '../../pageObjects/userProfile/userProfile_Page.js'
import Login_Page from "../../pageObjects/login/Login_Page";
import Home_Page from '../../pageObjects/home/Home_Page.js';
import helpers from "../../resources/helpers.js";
import { Console } from 'console';
var assert = require('assert');
describe('Verify User Profile screen test cases ',()=>{

            before('optional description', async function () {
              await browser.url('/');
              await helpers.waitforPageload();
              await Login_Page.LoginToSato();
                         
            });
            
            beforeEach (async function (){
             await helpers.waitforPageload();
             await browser.url('/overview');
                                  
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

    it('Test 2 Verify My Profile screen',async()=>{

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


    it('Test 3 :- Verify Creator Space Screen',async()=>{
      await userProfile_Page.userProfileIcon.waitForDisplayed();
      await userProfile_Page.userProfileIcon.click();
      await userProfile_Page.userProfileMyProfile.waitForDisplayed();
      await userProfile_Page.userProfileCreatorSpace.click();
      try {
        await userProfile_Page.creatorSpaceMyCourses.waitForDisplayed();
       // await userProfile_Page.creatorSpaceCourseTitleBar.waitForDisplayed();
        await userProfile_Page.creatorSpaceCreateNewCourseBTN.waitForDisplayed();
        await userProfile_Page.creatorSpaceCreateNewCourseBTN.click();
        await userProfile_Page.creatorSpaceAggreeBTN.waitForDisplayed();
        await userProfile_Page.creatorSpaceAggreeBTN.click();
        await userProfile_Page.creatorSpaceCourseDetailsPage.waitForDisplayed();
        await userProfile_Page.creatorSpaceLessonsPageBTN.click();
        await userProfile_Page.creatorSpaceLessonsAddSectionBTN.waitForDisplayed();
        await userProfile_Page.creatorSpaceLessonsAddSectionBTN.click();
        await userProfile_Page.creatorSpaceLessonsAddSectionCancelBTN.waitForDisplayed()
        await userProfile_Page.creatorSpaceLessonsAddSectionCancelBTN.click();
        await userProfile_Page.creatorSpaceStatsPageBTN.click();

      } catch (error) {
        console.log("Error:-"+error);
        assert.fail();
      }
    })

    it('Test 4 :- Verify guidelines screen',async()=>{
      await userProfile_Page.userProfileIcon.waitForDisplayed();
      await userProfile_Page.userProfileIcon.click();
      await userProfile_Page.userProfileMyProfile.waitForDisplayed();
      
      try {
        await userProfile_Page.userProfileGuideLines.click();
        await userProfile_Page.GuideLinesTitle.waitForDisplayed();
        await expect(await userProfile_Page.GuideLinesTitle).toHaveText('Teaching Guidelines');
        
      } catch (error) {
        console.log("Error:-"+error);
        assert.fail();
      }
    })


    it('Test 5:- Verify terms and condtition page',async()=>{
      await userProfile_Page.userProfileIcon.waitForDisplayed();
      await userProfile_Page.userProfileIcon.click();
      await userProfile_Page.userProfileMyProfile.waitForDisplayed();
      try {
        await userProfile_Page.userProfileTermCondition.click();
        await expect(browser).toHaveUrlContaining('terms');
        await expect(browser).toHaveTitle('Terms and Conditions');
        
        
      } catch (error) {
        console.log("Error:-"+error);
        assert.fail();
        
      }
    })
})