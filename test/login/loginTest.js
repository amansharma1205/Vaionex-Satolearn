    import data from "../../resources/login/login_Resource.js";
	import helpers from "../../resources/helpers";
	import Home_Page from "../../pageObjects/home/Home_Page";
	var assert = require('assert');
	import Login_Page from '../../pageObjects/login/Login_Page'

	
	describe('Test Sign form with valid and invalid data', () =>{

		beforeEach (async function (){
	    browser.url('/')
		await helpers.waitforPageload();
	
	  })
		 it('Test1: User should not be able to login with invalid data',  async() => {
			await Home_Page.loginLink.click();
			Login_Page.submitSignInForm('abc@gmail.com', 'Pass12345');
			await browser.pause(1000);
			await Login_Page.clickSubmitButton();
			await Login_Page.unsuccessfulLogin.waitForDisplayed();
			try {
				await expect(await Login_Page.unsuccessfulLogin).toHaveText("There is no user record corresponding to this identifier. The user may have been deleted.");
			
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
				
		});

		
		it('Test2: user should  be able to login with valid data',  async() => {
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


		it('Test3: Verfy ForgotPassword Screen',async()=>{
			
			 await browser.url('/auth/login'); 
			 Login_Page.forgotPasswordVerification('aman12@yopmail.com');
			 
			try {
				await browser.pause(2000);
				await Login_Page.forgotPasswordSubmitButton.click()
				await expect(browser).toHaveUrl('https://satolearn.com/auth/login')
							
			} catch (err) {
				console.log("Exception: " + err);
				assert.fail();
			}

		});
	});