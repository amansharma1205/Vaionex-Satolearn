    import data from "../../resources/login/login_Resource.js";
  	//const helpers = require("../../../resources/helpers.js");
	import Home_Page from "../../pageObjects/home/Home_Page";
	var assert = require('assert');
	import Login_Page from '../../pageObjects/login/Login_Page'

	
	describe('Test Sign form with valid and invalid data', async() =>{

		beforeEach (function (){
	    browser.url('/')
	
	  })
		 it('Test1: User should not be able to login with invalid data',  async() => {
			await Home_Page.loginLink.click();
			Login_Page.submitSignInForm('abc@gmail.com', 'Pass12345');
			await browser.pause(2000);
			await Login_Page.clickSubmitButton();
			await Login_Page.unsuccessfulLogin.waitForDisplayed(10000);
			try {
				expect(Login_Page.unsuccessfulLogin).toHaveText("There is no user record corresponding to this identifier. The user may have been deleted.");
				
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
				}
				console.log("First End")
		});

		
		it('Test2: user should  be able to login with valid data',  async() => {
			console.log("2nd Start"); 
			await Home_Page.loginLink.click();   
			await Login_Page.userName.clearValue();   
			await Login_Page.password.clearValue();              
			 if(process.env.SERVER=='prod'){
		       await Login_Page.setUserName(data.stagingServer_credentials.email);
	           await Login_Page.setPassword(data.stagingServer_credentials.password);	
		       }else {
				await Login_Page.setUserName(data.devServer_credencials.email);
				await Login_Page.setPassword(data.devServer_credencials.password);
			   }
			   await Login_Page.clickSubmitButton();
			try {
				await expect(Login_Page.successfulLogin).toBeDisplayed();
				
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
		});
	});