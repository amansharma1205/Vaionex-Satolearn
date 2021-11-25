import userProfile_Page from "../userProfile/userProfile_Page";
import helpers from "../../resources/helpers";
class CreateNewCourse_Page{
    
    
   
   get CourseTitleBTN() { return $("//div[2]/div[1]/div[1]/button[1]");}
   get CourseTitleTextArea() { return $("//textarea[@id='Task-Name-basic']");}
   get CourseTitleSaveBTN() { return $("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained']/span[@class='MuiButton-label']");}

   get CourseVideoPreviewBTN() { return $("//div[2]/div[2]/div[1]/button[1]");}
   get CourseVideoURL() { return $("//textarea[@id='Task-Name-basic']");}
   get CourseVideoURLSaveBTN() { return $("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained']/span[@class='MuiButton-label']");}
   
   get CourseDescriptionBTN() { return $("//div[2]/div[3]/div[1]/button[1]");}
   get CourseTakeAwaySkill() { return $("//div[4]/div[2]/div[1]/div[1]/input[1]");}

   get CourseTokensOnCompletion() { return $("//input[@name='checkedA']");}
   get CourseTokenQuantity() { return $("//input[@type='number']");}
   get CourseMemonic() { return $("//div[2]/div[1]/input[1]");}
   get CourseRevId() { return $("//div[2]/div[1]/div[3]/div[1]/input[1]");}
   get CourseSaveTokenDetail() { return $("//div[5]/div[2]/div[1]/button[1]");}
   
   get CourseExtends() { return $("//div[@id='type-simple-select' and text()='Wallet Workshop']");}
   get CourseDifficulty() { return $("//div[@id='type-simple-select' and text()='Intermediate']");}
   get CourseDuration() { return $("[class] .jss28:nth-of-type(3) [transform]");}
   get CoursePrice() { return $("div:nth-of-type(4) > div > .MuiButtonBase-root.MuiIconButton-root  .MuiSvgIcon-fontSizeSmall.MuiSvgIcon-root > path");}

   get CourseTimeToComplete() { return $("//textarea[@id='Task-Name-basic']");}
   get CourseTimeSaveBTN() { return $("//div[@class='MuiDialogActions-root MuiDialogActions-spacing']/button[2]/span[@class='MuiButton-label']");}

   get CourseLessionAddSectionBTN() { return $("//button[@type='button']/span[@class='MuiButton-label' and text()='Add Section']");}
   get CourseLessionSectionName() { return $("//input[@id='Title-Name-basic']");}
   get CourseLessionSectionDescription() { return $("//textarea[@id='Title-Desc-basic']");}

   get CourseLessionSectionSaveBTN() { return $("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary']/span[@class='MuiButton-label']");}

   
   
   

   


   
   
   
   
   
  
   

    async CreateNewCourse(){

        await userProfile_Page.userProfileIcon.waitForDisplayed();
        await userProfile_Page.userProfileIcon.click();
        await userProfile_Page.userProfileMyProfile.waitForDisplayed();
        await userProfile_Page.userProfileCreatorSpace.click();
        await userProfile_Page.creatorSpaceMyCourses.waitForDisplayed();
        // await userProfile_Page.creatorSpaceCourseTitleBar.waitForDisplayed();
         await userProfile_Page.creatorSpaceCreateNewCourseBTN.waitForDisplayed();
         await userProfile_Page.creatorSpaceCreateNewCourseBTN.click();
         await userProfile_Page.creatorSpaceAggreeBTN.waitForDisplayed();
         await userProfile_Page.creatorSpaceAggreeBTN.click();
         await userProfile_Page.creatorSpaceCourseDetailsPage.waitForDisplayed();

         await this.CourseTitleBTN.waitForDisplayed({ timeout: 20000 });
         await this.CourseTitleBTN.click();     
         await helpers.setValue(this.CourseTitleTextArea,"Test Course");
         await this.CourseTitleSaveBTN.click();

         await this.CourseVideoPreviewBTN.click();
         await helpers.setValue(this.CourseVideoURL,"https://www.youtube.com/watch?v=ONleEKweKL4");
         await this.CourseVideoURLSaveBTN.click();

         await this.CourseTakeAwaySkill.scrollIntoView();
         await this.CourseTakeAwaySkill.click();
         await this.CourseTakeAwaySkill.setValue("Coins and Crypto");
         await this.CourseTokensOnCompletion.click();
         await this.CourseTokenQuantity.setValue("5"); 
         await this.CourseMemonic.setValue("ABCD")
         await this.CourseRevId.setValue("Abcd1234")
         await this.CourseSaveTokenDetail.click();
         

         await userProfile_Page.creatorSpaceLessonsPageBTN.click();
         
         await userProfile_Page.creatorSpaceLessonsAddSectionBTN.waitForDisplayed();
         await userProfile_Page.creatorSpaceLessonsAddSectionBTN.click();
         await userProfile_Page.creatorSpaceLessonsAddSectionCancelBTN.waitForDisplayed()
         await userProfile_Page.creatorSpaceLessonsAddSectionCancelBTN.click();
         await userProfile_Page.creatorSpaceStatsPageBTN.click();
         await browser.pause(10000);

    }
    
}

export default new CreateNewCourse_Page()