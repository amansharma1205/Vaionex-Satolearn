var assert = require('assert');
import helpers from '../../resources/helpers';
class overViewMenu_Page {
    
    get walletworkshopGetStartedBTN() { return $("//div/a/button[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined']");}
    get walletworkshopChatBTN() { return $("//div[@id='hubspot-messages-iframe-container']/iframe");}
    
    get walletworkshopSelectedCourseTitle() { return $("//div[1]/div[@class='classHeader']/div/h2");}

    get walletworkshopEnrolled() { return $("//div[@class='classHeader']/div/button[@class='MuiButtonBase-root MuiButton-root MuiButton-text']");}
    
    get walletworkshopOverview() { return $("//div[@class='MuiTabs-flexContainer MuiTabs-centered']/button[@id='full-width-tab-0']");}
    get walletworkshopCourseContent() { return $("//div[@class='MuiTabs-flexContainer MuiTabs-centered']/button[@id='full-width-tab-1']");}
    get walletworkshopExtensions() { return $("//div[@class='MuiTabs-flexContainer MuiTabs-centered']/button[@id='full-width-tab-2']");}
//#Course 
    get walletworkshopCourseWalletWorkshop() { return $("//img[@alt='logo' and @src='/media/images/courses/wallet_2.png']");}
    get walletworkshopCourseTransactions() { return $("//img[@alt='logo' and @src='/media/images/courses/server_red.png']");} 
    get walletworkshopCoursePaywithBitcoin() { return $("//img[@alt='logo' and @src='/media/images/courses/webShop.svg']");} 
    get walletworkshopCourseSmartContracts() { return $("//img[@alt='logo' and @src='/media/images/courses/calculator.png']");} 
    get walletworkshopCourseFilePay() { return $("//img[@alt='logo' and @src='/media/images/courses/treasure.png']");} 
    get walletworkshopCourseApplications() { return $("//img[@alt='logo' and @src='/media/images/courses/iot.png']");} 

    //# Side Menu 
    get walletworkshopSideMenuHome() { return $("//div[@id='root']/div[@class='jss1']/div[@class='jss5 jss3']");}
    get walletworkshopSideMenuTutors() { return $("//div[@id='root']/div[@class='jss1']/div[@class='jss5'][1]");}
    get walletworkshopSideMenuYourAchievements() { return $("//div[@id='root']/div[@class='jss1']/div[@class='jss5'][2]");}
     
    //#Tutors 
    get TutorTile() { return $("//div[@id='kt_content']//h1[.=' Tutors ']");}
    get Tutorfilter() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-md-12 MuiGrid-grid-lg-3']");}
    get TutorConnectBTN() { return $("//div/div[@class='jss253'][1]/div[@class='jss247 jss252']");}
    get TutorSearchTextBox() { return $("//input[@type='text' and @placeholder='Search']");}
    get TutorSearchBTN() { return $("//button[@aria-label='search']");}
    get TutorSearchResult() { return $("//div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]");}
    get TutorSearchSlider() { return $("div:nth-of-type(2) > .jss65 > .MuiSlider-colorSecondary.MuiSlider-root > span:nth-of-type(3)");}
    get TutorApplyFilterBTN() { return $("//button//span[text()='Apply Filter']");}
    
    
    
    
     
     

    //###YourAchievements
    get YourAchievementsTitle() { return $("//div[@id='kt_wrapper']/div[@id='kt_body']/div[@id='kt_content']/div/div/div[1]/h1");}
   
    get YourAchievementsRemaining1() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][1]");}
    get YourAchievementsRemaining2() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][2]");}
    get YourAchievementsRemaining3() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][3]");}
    get YourAchievementsRemaining4() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][4]");}
    get YourAchievementsRemaining5() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][5]");}
    get YourAchievementsRemaining6() { return $("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4'][6]");}

    async VerifyCourseContent (){
       try {
           
        await this.walletworkshopOverview.waitForDisplayed();
        await this.walletworkshopOverview.click();
        await this.walletworkshopCourseContent.waitForDisplayed();
        await this.walletworkshopCourseContent.click()
        await this.walletworkshopExtensions.waitForDisplayed();
        await this.walletworkshopExtensions.click();
         
       } catch (error) {
        console.log("Exception: " + error);
        assert.fail();
       }
        

    }

    async VerifySearchCourseTest (){
        await this.TutorSearchResult.waitForDisplayed();
        await this.TutorSearchTextBox.setValue("coder");
        await this.TutorSearchBTN.click();
      
       await this.TutorSearchResult.waitForDisplayed();
       await  expect(this.TutorSearchResult).toHaveTextContaining("testing12");
       await this.TutorSearchTextBox.click();
       await helpers.KeyPress("\uE003",10);
       await this.TutorSearchSlider.dragAndDrop({ x: 100, y: 200 });
       await this.TutorApplyFilterBTN.click();
       await browser.pause(5000);
       await expect(this.TutorSearchResult).toHaveTextContaining("test")
      
    }
   

}export default new overViewMenu_Page()