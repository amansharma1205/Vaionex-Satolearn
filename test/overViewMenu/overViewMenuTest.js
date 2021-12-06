import overView_Page from '../../pageObjects/overViewMenu/overViewMenu_Page.js'
import helpers from '../../resources/helpers.js'
import Login_Page from '../../pageObjects/login/Login_Page.js'
import { Console } from 'console';
import exp from 'constants';
var assert = require('assert');
describe("Verify overView Menu" ,()=>{

    before('optional description', async function () {
        await browser.url('/');
        await helpers.waitforPageload();
        await Login_Page.LoginToSato();
                   
      });
      
      beforeEach (async function (){
       await helpers.waitforPageload();
       await browser.url('/');
       await helpers.waitforPageload();
                            
      })

    it('Test 1:- Verify the  Home Screen',async()=>{
        try {
            
            await  overView_Page.walletworkshopGetStartedBTN.waitForExist();
            await overView_Page.walletworkshopGetStartedBTN.scrollIntoView();
            await  expect(await overView_Page.walletworkshopGetStartedBTN).toHaveText("GET STARTED!")
            await  overView_Page.walletworkshopGetStartedBTN.click();
            await  overView_Page.walletworkshopChatBTN.waitForDisplayed();
            await  overView_Page.walletworkshopChatBTN.waitForDisplayed();
            await  overView_Page.walletworkshopSelectedCourseTitle.waitForDisplayed();
            await  expect(await overView_Page.walletworkshopSelectedCourseTitle).toHaveText('Wallet Workshop');
            await  overView_Page.walletworkshopCourseWalletWorkshop.waitForDisplayed();
            await  overView_Page.walletworkshopCourseWalletWorkshop.click();
            await  overView_Page.VerifyCourseContent();
            await  overView_Page.walletworkshopCourseTransactions.click();
            await  overView_Page.VerifyCourseContent();
            await  overView_Page.walletworkshopCoursePaywithBitcoin.click();
            await  overView_Page.VerifyCourseContent();
            await  overView_Page.walletworkshopCourseSmartContracts.click();
            await  overView_Page.VerifyCourseContent();
            await  overView_Page.walletworkshopCourseFilePay.click();
            await  overView_Page.VerifyCourseContent();
            await  overView_Page.walletworkshopCourseApplications.click();
            await  overView_Page.VerifyCourseContent();


            
        } catch (error) {
            console.log("Exception: " + error);
            assert.fail();
        }

    })

    it('Test 2:- verify Tutors screen ',async()=>{

        try {
            await overView_Page.walletworkshopGetStartedBTN.waitForExist();
            await overView_Page.walletworkshopGetStartedBTN.scrollIntoView();
            await expect(await overView_Page.walletworkshopGetStartedBTN).toHaveText("GET STARTED!")
            await overView_Page.walletworkshopGetStartedBTN.click();
            await overView_Page.walletworkshopSideMenuTutors.waitForDisplayed();
            await overView_Page.walletworkshopSideMenuTutors.click();
            await overView_Page.TutorTile.waitForDisplayed();
            await expect(await overView_Page.TutorTile).toHaveText('Tutors');
            await overView_Page.Tutorfilter.waitForDisplayed();
            
            
        } catch (error) {
            console.log("Exception: " + error);
            assert.fail();
        }

    })

    it('Test 3 Verify Your Achievements Screen ',async()=>{

        try {
                 
          await overView_Page.walletworkshopGetStartedBTN.waitForExist();
          await overView_Page.walletworkshopGetStartedBTN.scrollIntoView();
          await expect(await overView_Page.walletworkshopGetStartedBTN).toHaveText("GET STARTED!")
          await overView_Page.walletworkshopGetStartedBTN.click();
          await overView_Page.walletworkshopSideMenuYourAchievements.waitForExist();
          await overView_Page.walletworkshopSideMenuYourAchievements.click();
          await expect(overView_Page.YourAchievementsTitle).toHaveText('Your Achievements');
          await overView_Page.YourAchievementsRemaining1.waitForDisplayed();
          await overView_Page.YourAchievementsRemaining2.waitForDisplayed();
          await overView_Page.YourAchievementsRemaining3.waitForDisplayed();
          await overView_Page.YourAchievementsRemaining4.waitForDisplayed();
          await overView_Page.YourAchievementsRemaining5.waitForDisplayed();
          await overView_Page.YourAchievementsRemaining6.waitForDisplayed();

        } catch (error) {
            console.log("Exception: " + error);
            assert.fail();
        }
    })

    it.only('Test 3 Verify Search Course Functionlaity ',async()=>{

        try {
                 
            await overView_Page.walletworkshopGetStartedBTN.waitForExist();
            await overView_Page.walletworkshopGetStartedBTN.scrollIntoView();
            await expect(await overView_Page.walletworkshopGetStartedBTN).toHaveText("GET STARTED!")
            await overView_Page.walletworkshopGetStartedBTN.click();
            await overView_Page.walletworkshopSideMenuTutors.waitForDisplayed();
            await overView_Page.walletworkshopSideMenuTutors.click();
            await overView_Page.TutorTile.waitForDisplayed();
            await expect(await overView_Page.TutorTile).toHaveText('Tutors');
            await overView_Page.Tutorfilter.waitForDisplayed();
            await overView_Page.VerifySearchCourseTest();
            


        } catch (error) {
            console.log("Exception: " + error);
            assert.fail();
        }
    })
})