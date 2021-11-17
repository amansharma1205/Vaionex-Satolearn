var assert = require('assert');
import data from '../../resources/login/login_Resource.js';
import Home_Page from '../home/Home_Page.js';	
class Login_Page {

	///##Login
	    get loginAccountText() { return $("//div[@class='kt-login__title']/h3");}
	    get userName() { return $("[name='email']");} 
		get password() { return $("[name='password']");}
		get submitButton() { return $("//button[@id='kt_login_signin_submit']");}
		get successfulLogin() {return $("//span[@class='kt-header__topbar-username kt-hidden-mobile']");}
		get unsuccessfulLogin() {return $("//span[@id='client-snackbar']");}
		get quickPanel() {return $("//button[@class='MuiButtonBase-root MuiIconButton-root']");}
		get EmailReqField() {return $("//div[@class='form-group'][1]//p[@class='MuiFormHelperText-root Mui-error']")}
		get PasswordReqField() {return $("//div[@class='form-group'][2]//p[@class='MuiFormHelperText-root Mui-error']")}
		
    ///##Forgot Password 
		get forgotPasswordLink(){return $("//a[@class='kt-link kt-login__link-forgot']");}
		get forgotPasswordText(){return $("//div[@class='kt-login__title']/h3");}
		get forgotPasswordTextbox() { return $("[name='email']");} 
		get forgotPasswordBackButton(){return $("//button[@class='btn btn-secondary btn-elevate kt-login__btn-secondary']")}
		get forgotPasswordSubmitButton(){return $("//button[@class='btn btn-primary btn-elevate kt-login__btn-primary']")}
		
		async LoginToSato(){
		   
		   console.log("Inside Login Function ");	
		   await Home_Page.loginLink.click();
		   await this.setUserName(data.devServer_credencials.email);
		   await this.setPassword(data.devServer_credencials.password);
		   await this.clickSubmitButton()
		   await this.quickPanel.waitForDisplayed();
		 
		 }
     
		 async	setUserName(userName) {
			this.userName.waitForDisplayed(); 
			this.userName.clearValue();
			return this.userName.setValue(userName);
		}

		async setPassword(password) {
			this.password.waitForDisplayed();
			this.password.clearValue();
			return this.password.setValue(password);
		}

		async clickSubmitButton() {
			await expect(this.submitButton).toBeDisplayed();
			return this.submitButton.click();
		}

		 submitSignInForm(userName, password) 
		 {
			if(userName) {
				this.userName.setValue(userName);
				}
			if(password) {
				 this.password.setValue(password);
			}
		 }

    forgotPasswordVerification(email)
		{
		try {
		  console.log("inside ForgotPasword")
		  this.forgotPasswordLink.click();
		  this.forgotPasswordText.waitForExist(5000);
		  expect(this.forgotPasswordText).toHaveText('Forgotten Password?')
		  this.forgotPasswordBackButton.waitForExist(5000);
		  this.forgotPasswordTextbox.setValue(email);
		  
		}//
		catch(err) 
		   {
				console.log("Exception: " + err);
				assert.fail();
				
			}
		}

		waitforPageload()
		{
			browser.waitUntil(
				() => browser.execute(() => document.readyState === 'complete')),
				{
				  timeout: 60 * 1000, // 60 seconds
				  timeoutMsg: 'Message on failure'
				}
			  console.log("Executing WaitforPageLoad")
			  browser.pause(2000);
		}
		
	}

export default new Login_Page()