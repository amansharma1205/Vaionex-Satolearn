	import register_Page from "../../pageObjects/register/register_Page.js"
  import Home_Page from "../../pageObjects/home/Home_Page.js"
  import Login_Page from "../../pageObjects/login/Login_Page.js"
  import helpers from "../../resources/helpers.js";
	var assert = require('assert');



describe('Verify user register sucessfully',()=>{
	
    beforeEach (async function (){
	    browser.url('/')
      await helpers.waitforPageload();
    
	  })

      it('Test 1:- Verify User register with valid data',async()=>{
        var email=helpers.randomEmailGenerator();
        await Home_Page.registerLink.click();  
        await register_Page.fillAddSignupForm(email,"Aman","123456","123456");
        await browser.pause(2000);
        await register_Page.submitButton.click();
        try{
        await expect (Login_Page.quickPanel).toBeDisplayed();
        console.log("Exception: ");   } 
        catch(err) {
				console.log("Exception: " + err);
        assert.fail();}
      
      })
});