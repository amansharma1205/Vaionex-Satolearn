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
	

    async fillAddSignupForm(email, displayName,password,confirmPassword) {
			
		await Home_Page.registerLink.click();
		if(email) {
			await this.email.setValue(email);}
		if(displayName) {
			await this.displayName.setValue(displayName);}
		if(password) {
		    await this.password.setValue(password);}
		if(confirmPassword) {
		   await this.confirmPassword.setValue(confirmPassword);}
		await this.acceptTerms.click();
		await this.submitButton.click();
	}
}
module.exports = new register_Page();