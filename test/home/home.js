import { homedir } from "os";
import Home_Page from "../../pageObjects/home/Home_Page";
//import helpers from "../../resources/helpers";
var assert = require('assert');

describe('Verify Home Page Links and Menu', () =>{

    before(function (){
    browser.url('/');
    //helpers.waitTillPageLoadComplete(browser);

  })
     it('Test1: Verify HomePage Links', async ()  => {
          try{

          console.log(Home_Page.sato.getText());
          Home_Page.sato.isDisplayed();
          await expect(Home_Page.sato).toHaveText("Sato");
          await expect(Home_Page.learn).toHaveText("learn");
          await expect(Home_Page.homeLink).toHaveText("Home");
          await expect(Home_Page.overViewLink).toHaveText("Overview");
          await Home_Page.flagIcon.isDisplayed();
          await Home_Page.flagIcon.click();
          await expect(Home_Page.flagEnglish).toHaveText("English");
          await expect(Home_Page.flagMandarin).toHaveText("Mandarin");
          await expect(Home_Page.flagSpanish).toHaveText("Spanish");
          await expect(Home_Page.loginLink).toHaveText("LOGIN");
          await expect(Home_Page.registerLink).toHaveText("REGISTER");
          await  browser.pause(1000);
         }
         catch(err) {
          console.log("Exception: " + err);
          assert.fail();
          }
          
        
     });

    });     
