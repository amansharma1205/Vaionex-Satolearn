var assert = require('assert');
import { Console } from 'console';
import { stagingServer_credentials, devServer_credencials } from '../../resources/login/login_Resource.js';
	
class Login_Page {

	///##Login
	    get loginAccountText() { return $("//div[@class='kt-login__title']/h3");}
	    get userName() { return $("[name='email']");} 
		get password() { return $("[name='password']");}
		get submitButton() { return $("//button[@id='kt_login_signin_submit']");}
		get successfulLogin() {return $("//span[@class='kt-header__topbar-username kt-hidden-mobile']");}
		get unsuccessfulLogin() {return $("//span[@id='client-snackbar']");}
		get quickPanel() {return $("//button[@class='MuiButtonBase-root MuiIconButton-root']");}
		
    ///##Forgot Password 
		get forgotPasswordLink(){return $("//a[@class='kt-link kt-login__link-forgot']");}
		get forgotPasswordText(){return $("//div[@class='kt-login__title']/h3");}
		get forgotPasswordTextbox() { return $("[name='email']");} 
		get forgotPasswordBackButton(){return $("//button[@class='btn btn-secondary btn-elevate kt-login__btn-secondary']")}
		get forgotPasswordSubmitButton(){return $("//button[@class='btn btn-primary btn-elevate kt-login__btn-primary']")}
		
		setUserName(userName) {
			this.userName.clearValue();
			return this.userName.setValue(userName);
		}

		setPassword(password) {
			this.password.clearValue();
			return this.password.setValue(password);
		}

		clickSubmitButton() {
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
	}

export default new Login_Page()