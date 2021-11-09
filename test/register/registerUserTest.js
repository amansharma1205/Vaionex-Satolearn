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
        await Home_Page.registerLink.click();  
        await register_Page.fillAddSignupForm(helpers.randomEmailGenerator(),"Aman","123456","123456");
       
        try{
        await expect (Login_Page.quickPanel).toBeDisplayed();
        } 
        catch(err) {
				console.log("Exception: " + err);
        assert.fail();}
      })
});