import Home_Page from "../home/Home_Page";

class register_Page {
	get email() { return $("[name='email']");}
	get displayName() { return $("[name='name']");}
	get password() { return $("[name='password']");}
	get confirmPassword() { return $("[name='confirmPassword']");}
	get acceptTerms() { return $("[name='acceptTerms']");}
	get forgotPasswordLink() { return $("//a[@class='kt-link kt-login__link-forgot']");}
	get backButton() { return $("//button[@class='btn btn-secondary btn-elevate kt-login__btn-secondary']");}
	get submitButton() { return $("//button[@class='btn btn-primary btn-elevate kt-login__btn-primary']");}
	

	fillAddSignupForm(email, displayName,password,confirmPassword) {
		console.log("1");
		//browser.waitUntil(()=>{
    	//  return Home_Page.registerLink.isDisplayed()===true
    //	 },10000,'Wait till registerLink displayed');
		 Home_Page.registerLink.click();
		console.log("11");
		if(email) {
			this.email.setValue(email);
			console.log("2");
		}
		if(displayName) {
			this.displayName.setValue(displayName);
			console.log("3");
		}
		if(password) {
			this.password.setValue(password);
			console.log("4");
		}
		if(confirmPassword) {
			this.confirmPassword.setValue(confirmPassword);
			console.log("5");
		}
		console.log("6");
		this.acceptTerms.click();
	  
    	 
	}

}


module.exports = new register_Page();