const {expect} = require('@playwright/test');
class LoginPage{
    constructor(page){
        this.loginPage = page.locator("div.modal-body");
        this.googleButton = page.locator("button.googlebtn");
        this.signUpLink = page.locator("div.modal-body form p:nth-child(4) button")
        this.resetPasswordLink = page.locator("div.modal-body form p:nth-child(5) button")
        this.emailLabel = page.locator("div.mb-3:nth-child(1) label");
        this.emailPH = page.locator("div.mb-3 input[name='email']"); //PH is Place Holder
        this.passwordLabel = page.locator("div.mb-3:nth-child(2) label")
        this.passwordPH = page.locator("div.mb-3 input[name='password']");
        this.lpLoginButton = page.locator("div.mb-2 button[type='submit']") //lp is login page
    }

    async validLogin(email, password){
        await expect(this.loginPage).toBeVisible();//Login Pop-up

        await expect(this.googleButton).toBeVisible();//Google button 
        await expect(this.signUpLink).toBeVisible();//SignUp Link 
        await expect(this.resetPasswordLink).toBeVisible();//reset password link 

        await expect(this.emailLabel).toBeVisible();//email Label 
        await expect(this.emailLabel).toHaveText("Email");
        await expect(this.emailPH).toBeEnabled();//email Placeholder
        await this.emailPH.fill(email);

        await expect(this.passwordLabel).toBeVisible();//password Label 
        await expect(this.passwordLabel).toHaveText("Password");
        await expect(this.passwordPH).toBeEnabled();//Password placeholder 
        await this.passwordPH.fill(password);

        await expect(this.lpLoginButton).toBeVisible();//Login Button
        await this.lpLoginButton.click();
    }
}
module.exports = {LoginPage};